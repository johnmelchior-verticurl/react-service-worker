// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase


// const initializeFirebase = initializeApp(firebaseConfig);
// export default initializeFirebase;

// import * as firebase from 'firebase/app';
// import '@firebase/messaging';

// const firebaseConfig = {
// 	apiKey: "AIzaSyD8B6H5wP7WmrWo4V--Ym-Z75U0q8cTIN8",
// 	authDomain: "react-push-message-poc.firebaseapp.com",
// 	projectId: "react-push-message-poc",
// 	storageBucket: "react-push-message-poc.appspot.com",
// 	messagingSenderId: "418084875562",
// 	appId: "1:418084875562:web:c8f4200601e2e2788ec253"
// };

// firebase.initializeApp(firebaseConfig);
// export default firebase;

import * as firebase from 'firebase/app';


const firebaseConfig = {
	apiKey: "AIzaSyD8B6H5wP7WmrWo4V--Ym-Z75U0q8cTIN8",
	authDomain: "react-push-message-poc.firebaseapp.com",
	projectId: "react-push-message-poc",
	storageBucket: "react-push-message-poc.appspot.com",
	messagingSenderId: "418084875562",
	appId: "1:418084875562:web:c8f4200601e2e2788ec253"
};

firebase.initializeApp(firebaseConfig);

export default firebase;