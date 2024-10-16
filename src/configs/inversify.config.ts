import { Container } from "inversify";
import { TYPES } from "./types";
import INotificationChannel from "../services/INotificationService";
// import EmailService from "../services/EmailService";
import NotificationController from "../controllers/notification-controller";
import SMSService from "../services/SMSService";

const container = new Container();

container.bind<INotificationChannel>(TYPES.NotificationService).to(SMSService);

container.bind<NotificationController>(NotificationController).toSelf();

export { container };
