import { Router } from 'express'
import { createParentescoController } from '../controllers/ParentescoController';



export class ParentescoRoute {

  public parentescoRouter: Router;
  public createParentescoController: createParentescoController;

  constructor() {
    this.parentescoRouter = Router();
    this.createParentescoController = new createParentescoController();
  }

  public routes() {

     this.parentescoRouter.post('/', this.createParentescoController.create);
     //this.parentescoRouter.get('/', this.createParentescoController.GetAll);
     //this.parentescoRouter.get('/:id',this.createParentescoController.getById);
  
    return this.parentescoRouter;
  }
}

export default new ParentescoRoute().routes();