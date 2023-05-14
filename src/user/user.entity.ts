/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// const dfSetting = { nullable: true };

@Entity()
export class DuUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true, type: 'json' })
  files: string;

  @Column({ nullable: true, type: 'json' })
  social: string;

  @Column({ nullable: true, type: 'json' })
  image_list: string;

  @Column({ nullable: true, type: 'json' })
  details: string;

  @Column({ nullable: true, type: 'json' })
  type: string;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  dateCreate: string;

  @Column({ nullable: true, type: 'datetime' })
  birthday: string;

  @Column({ type: 'tinyint', default: true })
  isActive: boolean;
}
