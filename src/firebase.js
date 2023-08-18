import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //your firebase config if need be
};

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const database = getFirestore(app)

export default database