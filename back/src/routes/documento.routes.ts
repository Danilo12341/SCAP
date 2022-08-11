import { Router } from 'express'
import { DocumentoController } from '../controllers/DocumentoControl';



export class documentoRoute {

  public documentoRouter: Router;
  public DocumentoController: DocumentoController;

  constructor() {
    this.documentoRouter = Router();
    this.DocumentoController = new DocumentoController();
  }

  public routes() {

     this.documentoRouter.post('/', this.DocumentoController.create);
     this.documentoRouter.get('/', this.DocumentoController.GetAll);
     //this.parecerRouter.get('/:id',this.DocumentoController.getById);
  
    return this.documentoRouter;
  }
}

export default new documentoRoute().routes();
