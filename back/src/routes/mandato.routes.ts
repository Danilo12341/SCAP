import { Router } from 'express'
import {MandatoController}  from '../controllers/MandatoController';



export class MandatoRoute {

  public mandatoRouter: Router;
  public MandatoController: MandatoController;

  constructor() {
    this.mandatoRouter = Router();
    this.MandatoController = new MandatoController();
  }

  public routes() {

     this.mandatoRouter.post('/', this.MandatoController.create);
     this.mandatoRouter.get('/', this.MandatoController.GetAll);
     this.mandatoRouter.get('/:id', this.MandatoController.getById);
  
    return this.mandatoRouter;
  }
}

export default new MandatoRoute().routes();