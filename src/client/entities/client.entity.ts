import { ClientStatus } from '../enums/status.enum';

export class Client {
  id: number;
  companyName: string;
  email: string;
  cpf: string | null;
  cnpj: string | null;
  phone: string | null;
  instagram: string | null;
  website: string | null;
  facebook: string | null;
  status: ClientStatus;
  createdAt: Date;
  updateAt?: Date | null;
  removeAt?: Date | null;
}
