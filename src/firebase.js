import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
	apiKey: "AIzaSyBBpy24koYwAkOsjnnR_02z8-6vfb255MA",
    authDomain: "react-bootcamp-project.firebaseapp.com",
    databaseURL: "https://react-bootcamp-project.firebaseio.com",
    projectId: "react-bootcamp-project",
    storageBucket: "react-bootcamp-project.appspot.com",
    messagingSenderId: "191850796439",
    appId: "1:191850796439:web:a836abf1d7e7caa89960d2"
}
firebase.initializeApp(config);

export default firebase;