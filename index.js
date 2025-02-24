import { messaging, getToken } from "./firebase";

const requestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BLEKtk3M0zLvMUpsb2-5KTjS1IZuqa0mFFCuz-76W319DMWGrV81d8IDfYeFVO2LBeASb5lbOj6bTP8E_yolRhY",
      });
      console.log("FCM Token:", token);
    } else {
      console.log("Notification permission denied.");
    }
  } catch (error) {
    console.error("Error getting permission:", error);
  }
};

requestPermission();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  }
  
