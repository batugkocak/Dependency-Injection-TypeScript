import INotificationChannel from "./INotificationService";

export default class SMSService implements INotificationChannel {
  send(message: string, phoneNumber: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
