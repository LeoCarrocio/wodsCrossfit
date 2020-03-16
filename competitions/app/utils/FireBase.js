import firebase from "firebase/app";



const firebaseConfig = {
      apiKey: "AIzaSyCOCecM-TG96DWpBFXLddA6rw7WVyh1QI8",
      authDomain: "competitions-97507.firebaseapp.com",
      databaseURL: "https://competitions-97507.firebaseio.com",
      projectId: "competitions-97507",
      storageBucket: "competitions-97507.appspot.com",
      messagingSenderId: "239492635260",
      appId: "1:239492635260:web:a7234ee6e292121b0f87f9"
    };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
