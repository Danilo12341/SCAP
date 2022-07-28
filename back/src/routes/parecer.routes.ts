import { Router } from 'express'
import { createParecerController } from '../controllers/ParecerControl';



export class parecerRoute {

  public parecerRouter: Router;
  public createParecerController: createParecerController;

  constructor() {
    this.parecerRouter = Router();
    this.createParecerController = new createParecerController();
  }

  public routes() {

     this.parecerRouter.post('/', this.createParecerController.create);
     this.parecerRouter.get('/', this.createParecerController.GetAll);
     this.parecerRouter.get('/:id',this.createParecerController.getById);
  
    return this.parecerRouter;
  }
}

export default new parecerRoute().routes();
