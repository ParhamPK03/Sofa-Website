 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfr1n46xokUsRd2e6Vj3xsiEO1svgbj8M",
  authDomain: "online-moble-store.firebaseapp.com",
  projectId: "online-moble-store",
  storageBucket: "online-moble-store.appspot.com",
  messagingSenderId: "200965709938",
  appId: "1:200965709938:web:aafe9c57602649e6bee2eb",
  measurementId: "G-R0VQRJ533D"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
