import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
	apiKey: "AIzaSyDjcL6ak2FHXLghrDRasAGPkT4gct2Oamg",
    authDomain: "react-demo-project-56b52.firebaseapp.com",
    databaseURL: "https://react-demo-project-56b52.firebaseio.com",
    projectId: "react-demo-project-56b52",
    storageBucket: "react-demo-project-56b52.appspot.com",
    messagingSenderId: "714269912202",
    appId: "1:714269912202:web:6b83325659d7f67cc15173"
}
firebase.initializeApp(config);

export default firebase;