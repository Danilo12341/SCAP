import { Router } from 'express'
import {createMandatoController}  from '../controllers/MandatoController';



export class MandatoRoute {

  public mandatoRouter: Router;
  public createMandatoController: createMandatoController;

  constructor() {
    this.mandatoRouter = Router();
    this.createMandatoController = new createMandatoController();
  }

  public routes() {

     this.mandatoRouter.post('/', this.createMandatoController.create);
     this.mandatoRouter.get('/', this.createMandatoController.GetAll);
     this.mandatoRouter.get('/:id', this.createMandatoController.getById);
  
    return this.mandatoRouter;
  }
}

export default new MandatoRoute().routes();