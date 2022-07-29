import { Router } from "express";
import pessoaRoute from './pessoa.routes';
import professorRoute from './professor.routes';
import sportRoute from './sport.routes';
import eventRoute from './event.routes';
import eventHasStudents from './eventHasStudents.routes';
import mandatoRoutes from "./mandato.routes";
import rdfRoute from './rdf.routes';
import parentescoRoutes from "./parentesco.routes";
import afastamentoRoutes from "./afastamento.routes";
import  parecerRoute  from "./parecer.routes";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const routes = Router();

routes.use("/mandatos",ensureAuthenticated, mandatoRoutes);
routes.use("/pareceres", parecerRoute);
routes.use("/afastamentos", afastamentoRoutes);
routes.use("/parentescos", parentescoRoutes);
routes.use("/users", pessoaRoute);
routes.use("/students",ensureAuthenticated, professorRoute);
routes.use("/sports", ensureAuthenticated, sportRoute);
routes.use("/events",ensureAuthenticated, eventRoute);
routes.use("/eventhasstudents",ensureAuthenticated, eventHasStudents);
routes.use("/rdf", rdfRoute);

export { routes };