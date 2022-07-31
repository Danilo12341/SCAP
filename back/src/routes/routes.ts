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
import documentoRoutes from "./documento.routes";


const routes = Router();

routes.use("/mandatos",ensureAuthenticated, mandatoRoutes);
routes.use("/pareceres",ensureAuthenticated, parecerRoute);
routes.use("/afastamentos", ensureAuthenticated,afastamentoRoutes);
routes.use("/parentescos", ensureAuthenticated,parentescoRoutes);
routes.use("/documentos",ensureAuthenticated, documentoRoutes);
routes.use("/users", pessoaRoute);
routes.use("/students",professorRoute);
routes.use("/sports", ensureAuthenticated,sportRoute);
routes.use("/events",ensureAuthenticated, eventRoute);
routes.use("/eventhasstudents",ensureAuthenticated, eventHasStudents);
routes.use("/rdf", rdfRoute);

export { routes };