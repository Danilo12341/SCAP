import { Router } from 'express'
import { ProfessorController } from '../controllers/ProfessorController';

export class professorRoute {

  public ProfessorRouter: Router;
  public professorController: ProfessorController;

  constructor() {
    this.ProfessorRouter = Router();
    this.professorController = new ProfessorController();
  }

  public routes() {
    this.ProfessorRouter.get('/', this.professorController.findAll);
    this.ProfessorRouter.delete('/:id', this.professorController.delete);

    return this.ProfessorRouter;
  }
}

export default new professorRoute().routes();