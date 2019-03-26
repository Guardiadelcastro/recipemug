# Notifications
The notifications module handles the notification state of the application. Additionally we use the Notification.vue component and the notification model.
### Structure
+ state: **notification**: It is an empty array.
+ getters: **getNotification**: to get the notifications. We make use of it in the Notification.vue component.
+ mutations: **SET_NOTIFICATION** and **CLEAR_NOTIFICATION**: The first pushes an object to the array and the second shifts the notification from the array.
+ actions: **addNotification**: This action commits the SET_NOTIFICATION mutation and waits 10s to commit the CLEAR_NOTIFICATION mutation

### Component

In the notification component we iterate with an v-for the array of notifications in the store and show all notifications available. The background is selected from the notification.color property and the button deletes the notification if the user wants to before it is deleted automatically.

### Adding a notification

To add a notification we import the notification model and mapActions from vuex.
in mapactions we define the addNotification action and use it in any notification that we want to add:
```javascript
import Notification from '../models/NotificationModel';
import { mapActions } from 'vuex';

methods: {
    ...mapActions('notifications', {
      addNotification: 'addNotification'
    }),
    async myfunction() {
      await this.promiseFunction();
      const newMessage = new Notification('My message','color');
      this.addNotification(newMessage);      
    } 
  }
```