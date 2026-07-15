import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { ClientStatus } from '../enums/status.enum';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome da empresa é obrigatório' })
  companyName: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @IsString()
  @Length(11, 11, { message: 'CPF deev conter 11 dígitos' })
  @Matches(/^\d+$/, { message: 'CPF deve conter apenas números' })
  cpf?: string;

  @IsOptional()
  @IsString()
  @Length(14, 14, { message: 'CNPJ deev conter 14 dígitos' })
  @Matches(/^\d+$/, { message: 'CNPJ deve conter apenas números' })
  cnpj?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  instagram?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  facebook?: string;

  @IsString()
  @IsEnum(ClientStatus, {
    message:
      'O Status deve ser um dos listados ao lado: Cadastrado, Em contato, Recusado, Em teste, Finalizado',
  })
  @IsNotEmpty({ message: 'O Status da empresa é obrigatório' })
  status: ClientStatus;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  @Length(2, 2, { message: 'A UF deve conter apenas 2 caracteres' })
  uf?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  methodAbord?: string;
}
