// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCazvFGuftPDzopEbFTN4Ryvr5SDCA2VcU',
  authDomain: 'my-investments-app.firebaseapp.com',
  projectId: 'my-investments-app',
  storageBucket: 'my-investments-app.appspot.com',
  messagingSenderId: '559043619791',
  appId: '1:559043619791:web:84a4d7407051099bb580ba',
  measurementId: 'G-RNHB6LL2VD',
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(initFirebase);
