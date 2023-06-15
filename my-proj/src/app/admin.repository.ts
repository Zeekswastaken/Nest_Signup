import { EntityRepository, Repository } from 'typeorm';
import { User } from './app.entity';

@EntityRepository(User)
export class adminRepository extends Repository<User> {
  // Add custom methods if needed
}
