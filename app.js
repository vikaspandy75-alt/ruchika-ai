// ==========================
// RUCHIKA AI — APP.JS
// ==========================

// Service Worker Register
if ("serviceWorker" in navigator) {

window.addEventListener(
"load",
()=>{

navigator.serviceWorker
.register("/sw.js")

.then(()=>{

console.log(
"Service Worker Registered"
);

})

.catch((err)=>{

console.log(err);

});

}
);

}

// Vibrate Helper
function vibrate(){

if(navigator.vibrate){

navigator.vibrate(50);

}

}

// Add vibration to buttons
document.querySelectorAll(".btn")
.forEach((btn)=>{

btn.addEventListener(
"click",
vibrate
);

});

// Auto Theme Load
const savedColor =
localStorage.getItem(
"ruchika_color"
);

if(savedColor){

document.documentElement
.style.setProperty(
"--purple",
savedColor
);

}

// Pull To Refresh Effect
let touchStartY = 0;

document.addEventListener(
"touchstart",
e=>{

touchStartY =
e.touches[0].clientY;

}
);

document.addEventListener(
"touchmove",
e=>{

const touchY =
e.touches[0].clientY;

if(
touchY - touchStartY > 150
){

location.reload();

}

}
);

// Online / Offline Alerts
window.addEventListener(
"offline",
()=>{

alert(
"No Internet Connection"
);

}
);

window.addEventListener(
"online",
()=>{

alert(
"Back Online ✅"
);

}
);

// Daily Streak
let streak =
localStorage.getItem(
"ruchika_streak"
);

if(!streak){

localStorage.setItem(
"ruchika_streak",
1
);

}else{

localStorage.setItem(
"ruchika_streak",
parseInt(streak)+1
);

}

// Console Welcome
console.log(
"%cRuchika AI Activated",
"color:#00D4FF;
font-size:20px;
font-weight:bold;"
);
// ==========================
// FIREBASE GOOGLE LOGIN
// ==========================
{
  "project_info": {
    "project_number": "720016059839",
    "project_id": "ruchika-ai-cfea7",
    "storage_bucket": "ruchika-ai-cfea7.firebasestorage.app"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:720016059839:android:dddb8a7ab34346d142c50a",
        "android_client_info": {
          "package_name": "com.ruchika.ai"
        }
      },
      "oauth_client": [
        {
          "client_id": "720016059839-8akkp0q6t8kbrclu8u6l35093k362nud.apps.googleusercontent.com",
          "client_type": 3
        }
      ],
      "api_key": [
        {
          "current_key": "AIzaSyARh_xfcFSz9ZLOOswrlFhPxFxd3ssXKrA"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "720016059839-8akkp0q6t8kbrclu8u6l35093k362nud.apps.googleusercontent.com",
              "client_type": 3
            }
          ]
        }
      }
    }
  ],
  "configuration_version": "1"
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("SW Registered"))
      .catch(err => console.log(err));
  });
}
