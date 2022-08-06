import { Router } from "express";
import pessoaRoute from './pessoa.routes';
import professorRoute from './professor.routes';
import mandatoRoutes from "./mandato.routes";
import parentescoRoutes from "./parentesco.routes";
import afastamentoRoutes from "./afastamento.routes";
import  parecerRoute  from "./parecer.routes";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import documentoRoutes from "./documento.routes";


const routes = Router();

routes.use("/mandatos",ensureAuthenticated, mandatoRoutes);
routes.use("/pareceres",ensureAuthenticated, parecerRoute);
routes.use("/afastamentos",afastamentoRoutes);
routes.use("/parentescos", ensureAuthenticated,parentescoRoutes);
routes.use("/documentos",ensureAuthenticated, documentoRoutes);
routes.use("/users", pessoaRoute);
routes.use("/students",professorRoute);

export { routes };