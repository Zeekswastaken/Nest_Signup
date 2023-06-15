import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Chat } from '../chat/chat.entity'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Chat, chat => chat.users)
  @JoinTable()
  chats: Chat[];
}
