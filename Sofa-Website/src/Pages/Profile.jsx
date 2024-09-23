import React, { useState, useEffect } from 'react';
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, updateProfile, updateEmail, updatePassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setDisplayName(currentUser.displayName || '');
                setEmail(currentUser.email || '');
            } else {
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleUpdateProfile = async () => {
        if (user) {
            try {
                await updateProfile(user, { displayName });
                if (newPassword) {
                    await updatePassword(user, newPassword);
                }
                if (email !== user.email) {
                    await updateEmail(user, email);
                }
                alert('Profile updated successfully!');
            } catch (error) {
                console.error('Error updating profile: ', error);
                alert('Failed to update profile.');
            }
        }
    };

    return (
        <div className='flex flex-col items-center p-4 bg-gradient-to-b from-[#203A43] w-[100%] to-[#0F2027] h-[100vh]'>
            <h1 className='text-2xl text-white font-bold mb-4 mt-20'>پروفایل کاربر</h1>
            {user ? (
                <div className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md'>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>نام کاربری</label>
                        <input
                            type='text'
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>ایمیل</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                    </div>
                  
                    <button
                        onClick={handleUpdateProfile}
                        className='w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                        Update Profile
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
