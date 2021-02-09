import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCj5Kihh1TiERRa41gviCXyaoQJDa_AWwA",
    authDomain: "netflix-build-clone-60c6f.firebaseapp.com",
    projectId: "netflix-build-clone-60c6f",
    storageBucket: "netflix-build-clone-60c6f.appspot.com",
    messagingSenderId: "436090598181",
    appId: "1:436090598181:web:310eb44f0269eb66baa0cc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { auth }
export default db