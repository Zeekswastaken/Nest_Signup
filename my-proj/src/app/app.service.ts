import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './app.entity';
import { Chat } from '../chat/chat.entity'
import { ChatService } from '../chat/chat.service';
import { UserService } from './user.service';
import { ChatGateway } from '../chat.gateway';


@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly adminRepository: Repository<User>,
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
    private readonly chatGateway: ChatGateway,
    private readonly chatService: ChatService,
    private readonly userService: UserService,
  ) {}
  async compareCredentials(username: string, password: string): Promise<boolean> {
    const user = await this.adminRepository.findOne({ where: { username } });
    if (user && user.password === password) {
      return true; // Credentials match
    }
    return false; // Credentials don't match or user not found
  }

  async createChat(text: string, userIds: number[]): Promise<Chat> {
    const users = await this.userService.getUsersByIds(userIds);
    return this.chatService.createChat(text, users);
  }

  

}
