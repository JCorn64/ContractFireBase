import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeYbRKdB8GKhf2ECcSTSAPNL8XOcvQlPM",
    authDomain: "contracttest-eaee4.firebaseapp.com",
    databaseURL: "https://contracttest-eaee4.firebaseio.com",
    projectId: "contracttest-eaee4",
    storageBucket: "contracttest-eaee4.appspot.com",
    messagingSenderId: "673131303792",
    appId: "1:673131303792:web:2ec94d3c07e1fed5"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;