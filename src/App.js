import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { getMessaging, getToken } from "firebase/messaging";



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
