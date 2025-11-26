import { prisma } from '../../config/prisma';

export class UsuarioRepository {
    async findByEmail(email: string) {
        return prisma.usuario.findUnique({
            where: { email },
        });
    }

    async findByCpf(cpf: string) {
        return prisma.cliente.findUnique({
            where: { cpf },
            include: { usuario: true },
        });
    }

    async create(data: {
        email: string;
        senha_hash: string;
        papel: 'ADMIN' | 'FUNCIONARIO' | 'CLIENTE';
    }) {
        return prisma.usuario.create({
            data,
        });
    }
}
