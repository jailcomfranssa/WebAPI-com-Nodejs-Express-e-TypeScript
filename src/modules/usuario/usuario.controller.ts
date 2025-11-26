import { Request, Response } from 'express';
import { UsuarioService } from './usuario.service';

export class UsuarioController {
    private usuarioService = new UsuarioService();

    store = async (req: Request, res: Response) => {
        const { email, senha, papel } = req.body;

        const usuario = await this.usuarioService.create({
            email,
            senha,
            papel,
        });

        return res.status(201).json(usuario);
    };
}
