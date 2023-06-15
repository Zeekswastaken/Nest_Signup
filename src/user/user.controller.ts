import { Controller, Post } from '@nestjs/common';
import { UserService } from 'src/app/user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    )
    {}

    @Post()
    

}
