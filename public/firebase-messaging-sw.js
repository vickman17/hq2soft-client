// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBWtlmXELswMiorT5_guBd-qDEQZezfmMA",
  authDomain: "hq2-soft.firebaseapp.com",
  projectId: "hq2-soft",
  messagingSenderId: "1017953702184",
  appId: "1:1017953702184:web:c7326c54d22b432db6801d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: '/assets/icons/icon-512.webp'
  });
});
