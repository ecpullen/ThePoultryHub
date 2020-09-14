import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyA8f6bYh1TOq9xoQQGGZ1TfMJ7zB1lrkTs",
    authDomain: "thepoultryh.firebaseapp.com",
    databaseURL: "https://thepoultryh.firebaseio.com",
    projectId: "thepoultryh",
    storageBucket: "thepoultryh.appspot.com",
    messagingSenderId: "353889582948",
    appId: "1:353889582948:web:96c8d4c24c0939022d0471",
    measurementId: "G-NKPLH86K0L"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
   
      this.auth = app.auth();
      this.db = app.database();
    }

     // *** Auth API ***
 
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => 
        this.auth.signOut();
    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);

    // *** User API ***
 
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
    
  }
   
  export default Firebase;