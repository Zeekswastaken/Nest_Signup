import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { User } from '../app/app.entity';
import { adminRepository } from '../app/admin.repository'; // Import the UserRepository

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
    private readonly userRepository: adminRepository // Inject the UserRepository
  ) {}

  async createChat(text: string, userIds: number[]): Promise<Chat> {
    const users = await this.userRepository.findByIds(userIds); // Fetch the User entities by their IDs
    const chat = new Chat();
    chat.text = text;
    chat.users = users;
    return this.chatRepository.save(chat);
  }
}
