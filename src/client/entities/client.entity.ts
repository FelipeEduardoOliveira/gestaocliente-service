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

  @Column({ unique: true })
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
}
