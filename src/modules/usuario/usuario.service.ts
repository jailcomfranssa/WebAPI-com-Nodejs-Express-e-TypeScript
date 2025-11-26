import bcrypt from 'bcryptjs';
import { ApiError } from '../../utils/ApiError';
import { UsuarioRepository } from './usuario.repository';

export class UsuarioService {
    private usuarioRepository = new UsuarioRepository();

    async create(data: {
        email: string;
        senha: string;
        papel: 'ADMIN' | 'FUNCIONARIO' | 'CLIENTE';
    }) {
        const usuarioExiste = await this.usuarioRepository.findByEmail(
            data.email,
        );

        if (usuarioExiste) {
            throw new ApiError('E-mail já cadastrado', 409);
        }

        const senha_hash = await bcrypt.hash(data.senha, 10);

        const usuario = await this.usuarioRepository.create({
            email: data.email,
            senha_hash,
            papel: data.papel,
        });

        return usuario;
    }
}
