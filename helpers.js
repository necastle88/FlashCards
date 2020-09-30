
import  AsyncStorage  from '@react-native-community/async-storage'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'


const NOTIFICATION_KEY = 'FlashCards:notifications'


export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function setLocalNotification() {
  clearLocalNotification();
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log(`####${data}####`);
      if (data === null) {
        Permissions.getAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            console.log(`####${status}####`);
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              const trigger = new Date(Date.now() + 1 * 60 * 1000);
              trigger.setMinutes(0);
              trigger.setSeconds(0);
              Notifications.scheduleNotificationAsync({
                  content: {
                    title: "Time's up!",
                    body: 'Change sides!',
                    sound: true,
                  },
                  trigger: {
                    seconds: 60 * 20,
                    repeats: true
                  },
                })
                .then(AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)))
              }
          })
      }
    })
}