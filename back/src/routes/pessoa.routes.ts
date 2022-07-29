import { Router } from 'express'
import { PessoaController} from '../controllers/PessoaController';

export class pessoaRoute {

  public userRouter: Router;
  public pessoaController: PessoaController;

  constructor() {
    this.userRouter = Router();
    this.pessoaController = new PessoaController();
  }

  public routes() {
    this.userRouter.post('/create', this.pessoaController.create);
    this.userRouter.post('/login', this.pessoaController.login);

    return this.userRouter;
  }
}

export default new pessoaRoute().routes();