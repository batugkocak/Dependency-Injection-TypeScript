import { injectable } from "inversify";
import INotificationChannel from "./INotificationService";

@injectable()
export default class EmailService implements INotificationChannel {
  send(message: string, email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        console.log(`Sending Email to ${email}: ${message}`);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
