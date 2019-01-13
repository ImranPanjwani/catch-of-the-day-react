import Rebase from "re-base";
import firebase from "firebase";

// copy these values from firebase console
const firebaseApp = firebase.initializeApp({
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL"
});

const base = Rebase.createClass(firebase.database());

// this is a name export
export { firebaseApp };

// this is a default export
export default base;
