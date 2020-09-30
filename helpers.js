
import  AsyncStorage  from '@react-native-community/async-storage'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'


const NOTIFICATION_KEY = 'FlashCards:notifications'

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.getAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              let tomorrow = new Date();
              tomorrow = tomorrow.getTime() + (1000 * 60 * 60 * 24);
              let notificationDate = new Date(tomorrow);
              Notifications.scheduleNotificationAsync({
                  content: {
                    title: "👋 Time to study",
                    body: 'Dont for get to take a quiz!',
                    sound: true,
                  },
                  trigger: notificationDate
                })
                .then(AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)))
              }
          })
      }
    })
}