import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAh7U8BBfZxudsxK-FWf_xpcFrzd33vsLE",
  authDomain: "kebab-case-1.firebaseapp.com",
  projectId: "kebab-case-1",
  storageBucket: "kebab-case-1.appspot.com",
  messagingSenderId: "878472475362",
  appId: "1:878472475362:web:deac9c0a0a8286f92024bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;