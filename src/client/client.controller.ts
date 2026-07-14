import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ResponseMessage } from 'src/common/decorator/response-message.decorator';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ResponseMessage('Cliente criado com sucesso!')
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Patch(':id')
  @ResponseMessage('Cliente atualizado com sucesso!')
  update(@Param('id') id: number, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Get()
  @ResponseMessage('Clientes encontrados com sucesso!')
  getAll() {
    return this.clientService.getAll();
  }
}
