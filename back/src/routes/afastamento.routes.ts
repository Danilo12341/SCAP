import { Router } from 'express'
import { AfastamentoController as AfastamentoController } from '../controllers/AfastamentoControl';



export class AfastamentoRoute {

  public afastamentoRouter: Router;
  public AfastamentoController: AfastamentoController;

  constructor() {
    this.afastamentoRouter = Router();
    this.AfastamentoController = new AfastamentoController();
  }

  public routes() {

     this.afastamentoRouter.post('/', this.AfastamentoController.create);
     this.afastamentoRouter.get('/', this.AfastamentoController.GetAll);
     this.afastamentoRouter.get('/:id',this.AfastamentoController.getById);
  
    return this.afastamentoRouter;
  }
}

export default new AfastamentoRoute().routes();