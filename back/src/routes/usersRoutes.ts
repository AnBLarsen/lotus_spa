import { Request,Response, NextFunction, Router, response } from "express";
import { registerController,getUsersController, getUserByIdController, loginController } from "../controllers/userController";
import { UserRegisterDto, UserLoginDto } from "../dto/UserDto";
import { validateUserRegistration } from "../middleswares";


const router: Router = Router();


router.get("/", (req: Request, res: Response)=> getUsersController (req, res))
router.get("/:id",(req: Request<{id:string}>, res: Response) => getUserByIdController(req, res))


router.post("/register",
    (req: Request,res:Response,next: NextFunction)=> validateUserRegistration(req,res,next), 
    (req: Request <{}, {}, UserRegisterDto>, res: Response) => registerController(req, res))


router.post("/login", (req: Request <{}, {}, UserLoginDto>, res: Response) => loginController(req, res))


export default router;