import {
auth,
provider
} from "./firebase.js";

import {
signInWithPopup,
signInWithRedirect,
getRedirectResult
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Google Login Button
const googleBtn =
document.getElementById("googleLogin");

// Guest Login Button
const guestBtn =
document.getElementById("guestLogin");

// Username Input
const usernameInput =
document.getElementById("username");

// Google Login
if(googleBtn){

googleBtn.addEventListener("click", async()=>{

try{

await signInWithRedirect(auth, provider);

}catch(error){

alert(error.message);

}

});

}

// Redirect Result
getRedirectResult(auth)

.then((result)=>{

if(result?.user){

localStorage.setItem(
"ruchika_username",
result.user.displayName
);

window.location.href =
"dashboard.html";

}

})

.catch((error)=>{

console.log(error);

});

// Guest Login
if(guestBtn){

guestBtn.addEventListener("click", ()=>{

const username =
usernameInput.value.trim();

if(!username){

alert("Enter your name");

return;

}

localStorage.setItem(
"ruchika_username",
username
);

window.location.href =
"dashboard.html";

});

}