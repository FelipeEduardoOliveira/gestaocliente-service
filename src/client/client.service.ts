import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './entities/client.entity';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  private clients: Client[] = [];

  create(createClientDto: CreateClientDto): Client {
    const novoCliente: Client = {
      id: Date.now(),
      companyName: createClientDto.companyName,
      email: createClientDto.email,
      cpf: createClientDto.cpf ?? null,
      cnpj: createClientDto.cnpj ?? null,
      phone: createClientDto.phone ?? null,
      facebook: createClientDto.facebook ?? null,
      instagram: createClientDto.instagram ?? null,
      website: createClientDto.website ?? null,
      status: createClientDto.status,
      createdAt: new Date(),
      updateAt: null,
      removeAt: null,
    };

    this.clients.push(novoCliente);

    return novoCliente;
  }

  getAll(): Client[] {
    return this.clients;
  }

  update(id: number, updateClientDto: UpdateClientDto): Client {
    const client = this.clients.find((c) => c.id === id);

    if (!client) {
      throw new NotFoundException('Cliente não encontrado');
    }
    const fieldsClear = Object.fromEntries(
      Object.entries(updateClientDto).filter(
        ([_, value]) => value !== undefined,
      ),
    );

    Object.assign(client, fieldsClear);

    client.updateAt = new Date();

    return client;
  }
}
