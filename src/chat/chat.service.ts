import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { User } from '../app/app.entity';
@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}
  async createChat(text: string, users: User[]): Promise<Chat> {
    const chat = new Chat();
    chat.text = text;
    chat.users = users;
    return this.chatRepository.save(chat);
  }
}
