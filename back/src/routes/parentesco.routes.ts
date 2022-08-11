import { Router } from 'express'
import { ParentescoController } from '../controllers/ParentescoController';



export class ParentescoRoute {

  public parentescoRouter: Router;
  public ParentescoController: ParentescoController;

  constructor() {
    this.parentescoRouter = Router();
    this.ParentescoController = new ParentescoController();
  }

  public routes() {

     this.parentescoRouter.post('/', this.ParentescoController.create);
     this.parentescoRouter.get('/', this.ParentescoController.GetAll);
     this.parentescoRouter.get('/:id',this.ParentescoController.getById);
  
    return this.parentescoRouter;
  }
}

export default new ParentescoRoute().routes();