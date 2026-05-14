// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {

apiKey: "AIzaSyCfMyp0KD7KOTuBTx_EfBC_ChLt2quX9fI",

authDomain: "ruchika-ai-e28ec.firebaseapp.com",

projectId: "ruchika-ai-e28ec",

storageBucket: "ruchika-ai-e28ec.firebasestorage.app",

messagingSenderId: "270043910133",

appId: "1:270043910133:web:5cbe62272dfed0d01edabc"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Export
export {
auth,
provider
};