import { Router } from "express";
import { container } from "../configs/inversify.config";
import NotificationController from "../controllers/notification-controller";

const router: Router = Router();

const emailNotificationController = container.get<NotificationController>(
  NotificationController
);
const smsNotificationController = container.get<NotificationController>(
  NotificationController
);

router.get("/email", emailNotificationController.sendNotification);
router.get("/sms", smsNotificationController.sendNotification);

export default router;
