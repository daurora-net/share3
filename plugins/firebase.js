import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyBDBH_3j4wsLYKDP_V6AEIHVdW5bEmLeNo",
    authDomain: "share3-cb703.firebaseapp.com",
    projectId: "share3-cb703",
    storageBucket: "share3-cb703.appspot.com",
    messagingSenderId: "635244133680",
    appId: "1:635244133680:web:aa88e6a0a3f148fcd41cf5"
    }
  )
}

export default firebase