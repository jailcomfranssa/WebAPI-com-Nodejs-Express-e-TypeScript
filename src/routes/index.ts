import { Router } from 'express';
import { usuarioRoutes } from '../modules/usuario/usuario.routes';

const routes = Router();

routes.use('/usuarios', usuarioRoutes);

export default routes;
