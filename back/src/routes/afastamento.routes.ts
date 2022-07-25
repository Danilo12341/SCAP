import { Router } from 'express'
import { createAfastamentoController } from '../controllers/AfastamentoControl';



export class AfastamentoRoute {

  public afastamentoRouter: Router;
  public createAfastamentoController: createAfastamentoController;

  constructor() {
    this.afastamentoRouter = Router();
    this.createAfastamentoController = new createAfastamentoController();
  }

  public routes() {

     this.afastamentoRouter.post('/', this.createAfastamentoController.create);
     //this.afastamentoRouter.get('/', this.createAfastamentoController.GetAll);
     //this.afastamentoRouter.get('/:id',this.createAfastamentoController.getById);
  
    return this.afastamentoRouter;
  }
}

export default new AfastamentoRoute().routes();