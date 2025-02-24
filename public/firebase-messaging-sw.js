importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBVA5dqrh0hOItkgQJQag80evZGBAU_Z6o",
  authDomain: "event-management-d5674.firebaseapp.com",
  projectId: "event-management-d5674",
  storageBucket: "event-management-d5674.firebasestorage.app",
  messagingSenderId: "43529838482",
  appId: "1:43529838482:web:90dd322f5b432e27606b4b",
  vapidKey: "BLEKtk3M0zLvMUpsb2-5KTjS1IZuqa0mFFCuz-76W319DMWGrV81d8IDfYeFVO2LBeASb5lbOj6bTP8E_yolRhY",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});
