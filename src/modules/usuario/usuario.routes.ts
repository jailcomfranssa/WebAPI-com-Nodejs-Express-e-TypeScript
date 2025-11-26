import { Router } from 'express';
import { UsuarioController } from './usuario.controller';

const usuarioRoutes = Router();
const controller = new UsuarioController();

usuarioRoutes.post('/', controller.store);

export { usuarioRoutes };
