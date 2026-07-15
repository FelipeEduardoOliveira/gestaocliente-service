import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ClientStatus } from '../enums/status.enum';

@Entity('clients') // table name database
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  cpf: string;

  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  instagram: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  facebook: string;

  @Column({
    type: 'enum',
    enum: ClientStatus,
    default: ClientStatus.REGISTERED,
  })
  status: ClientStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updateAt?: Date;

  @Column({ nullable: true })
  removeAt?: Date;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true, length: 2 })
  uf?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  methodAbord?: string;
}
