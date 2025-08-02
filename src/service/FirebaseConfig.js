
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR7-l8wAxogfco63ipm7YyO34zopGANyI",
  authDomain: "tripgenius-d87b4.firebaseapp.com",
  projectId: "tripgenius-d87b4",
  storageBucket: "tripgenius-d87b4.firebasestorage.app",
  messagingSenderId: "534552329769",
  appId: "1:534552329769:web:5114bc78c12ecdac11a638",
  measurementId: "G-VY3V97CG87"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);





// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDHy3auHxO_aUHgQXZbGOHCuapKDEYRpOQ",
//   authDomain: "trip-planner2-65a43.firebaseapp.com",
//   projectId: "trip-planner2-65a43",
//   storageBucket: "trip-planner2-65a43.appspot.com",
//   messagingSenderId: "371421790498",
//   appId: "1:371421790498:web:c17eaf809e351f4e5ee57b"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
