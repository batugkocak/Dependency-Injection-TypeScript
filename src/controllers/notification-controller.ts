import { injectable, inject } from "inversify";
import INotificationChannel from "../services/INotificationService";
import { Request, Response } from "express";
import { TYPES } from "../configs/types";

@injectable()
export default class NotificationController {
  // Inject the notification service via constructor
  constructor(
    @inject(TYPES.NotificationService)
    private notificationService: INotificationChannel
  ) {
    this.sendNotification = this.sendNotification.bind(this);
  }

  // Method to send notifications (HTTP POST request handler)
  async sendNotification(_: Request, res: Response) {
    try {
      console.log("NotificationController.sendNotification");

      await this.notificationService.send("Welcome to our app!", "batugkocak");

      res.status(200).send({ message: "Notification sent successfully" });
    } catch (error) {
      console.error("Error sending notification:", error);
      res.status(500).send({ error: "Failed to send notification" });
    }
  }
}
