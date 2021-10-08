import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { getMessaging, getToken } from "firebase/messaging";
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD8B6H5wP7WmrWo4V--Ym-Z75U0q8cTIN8",
  authDomain: "react-push-message-poc.firebaseapp.com",
  projectId: "react-push-message-poc",
  storageBucket: "react-push-message-poc.appspot.com",
  messagingSenderId: "418084875562",
  appId: "1:418084875562:web:c8f4200601e2e2788ec253"
};

firebase.initializeApp(firebaseConfig)
console.log("Firebase", firebase);

const App = () => {

  useEffect(() => {

    const messaging = getMessaging();
    console.log("Messaging", messaging);
    getToken(messaging, { vapidKey: 'BNy7VCGMwE4dtFeT1Evmsyl540ol8QecUHYvmaGWZL2V_kS_3dQkBJTHOb-kzRP9HdRhh0YxIkrbi3XzYfINqP0' }).then((currentToken) => {
      console.log("Current token", currentToken);
    })
  }, [])
  return (
    <React.Fragment>
      <NavBar />
      <Footer />
    </React.Fragment>
  );
}

export default App;
