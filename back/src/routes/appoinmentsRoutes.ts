import { Router, Request, Response, NextFunction } from "express";
import { cancelAppointmentController, getAppointmentsByIdController, getAppointmentsController, scheduleAppointmentController } from "../controllers/appointmentControllers";
import { AppointmentRegisterDto } from "../dto/AppointmentDto";
import { validateAppointmentRegistration } from "../middleswares";

const router: Router = Router();


router.get("/", (req: Request, res: Response) => getAppointmentsController (req, res))
router.get("/:id", (req: Request<{id:string}>, res: Response) => getAppointmentsByIdController (req, res))


router.post("/schedule", 
    (req: Request,res:Response,next: NextFunction)=> validateAppointmentRegistration(req,res,next),
    (req: Request <unknown, unknown, AppointmentRegisterDto>, res: Response) => scheduleAppointmentController(req,res))

router.put("/cancel/:id", cancelAppointmentController)

export default router;

