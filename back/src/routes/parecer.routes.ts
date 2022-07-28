import { Router } from 'express'
import { ParecerController } from '../controllers/ParecerControl';



export class parecerRoute {

  public parecerRouter: Router;
  public ParecerController: ParecerController;

  constructor() {
    this.parecerRouter = Router();
    this.ParecerController = new ParecerController();
  }

  public routes() {

     this.parecerRouter.post('/', this.ParecerController.create);
     this.parecerRouter.get('/', this.ParecerController.GetAll);
     this.parecerRouter.get('/:id',this.ParecerController.getById);
  
    return this.parecerRouter;
  }
}

export default new parecerRoute().routes();
