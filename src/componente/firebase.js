// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCN_tDLLIst66JZe2YWpedczGqFNsep5d0',
    authDomain: 'fb-bdmy-app2.firebaseapp.com',
    projectId: 'fb-bdmy-app2',
    storageBucket: "fb-bdmy-app2.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
