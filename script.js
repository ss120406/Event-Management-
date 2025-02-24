import { messaging, getToken, onMessage } from "./firebase.js";

document.getElementById("subscribe").addEventListener("click", async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: "YOUR_VAPID_KEY",
            });
            console.log("FCM Token:", token);
            alert("FCM Token received! Check the console.");
        } else {
            alert("Notification permission denied!");
        }
    } catch (error) {
        console.error("Error subscribing to notifications:", error);
    }
});

// Listen for push notifications
onMessage(messaging, (payload) => {
    console.log("New Event Notification:", payload);
    new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon,
    });
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => console.log("Service Worker Registered:", registration))
        .catch((error) => console.error("Service Worker Registration Failed:", error));
}

