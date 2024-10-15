import { Router } from "express";
const router: Router = Router();
import EmailService from "../services/EmailService";
import SMSService from "../services/SMSService";
import NotificationController from "../controllers/notification-controller";

const emailService = new EmailService();
const smsService = new SMSService();

const emailNotificationController = new NotificationController(emailService);
const smsNotificationController = new NotificationController(smsService);

router.get("/email", emailNotificationController.sendNotification);
router.get("/sms", smsNotificationController.sendNotification);

export default router;
