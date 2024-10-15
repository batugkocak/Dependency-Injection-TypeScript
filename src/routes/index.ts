import { Router } from "express";
import notificationRoutes from "./notification-route";

const router = Router();

router.use(notificationRoutes);

export default router;
