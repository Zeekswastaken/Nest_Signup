import { Controller, Get, Post, Body,Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './app.entity';
import { adminRepository } from './admin.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(User)
    private readonly adminRepository: adminRepository,
  ) {}


  @Get()
  @Redirect('/login') // Redirect the root URL to /login
  getRoot(): void {} 
  
  @Get('signin')
  getSignin(@Res() res: Response) {
    // const filePath = join(__dirname, '..', 'pages', 'signin.html');
    res.sendFile("/app/pages/signin.html");
  }
  @Post('signin')
  async handleSignIn(@Body() formData: any, @Res() res: Response) {
    const { username, password } = formData;
    const credentialsMatch = await this.appService.compareCredentials(username, password);
  
    if (credentialsMatch) {
      res.sendFile("/app/pages/index.html");
    } else {
      console.log("YOU AIN'T GOING ANYWHERE DUMBASS");
      // Credentials are incorrect
      // Redirect or send error response
    }
  }
  

  @Get('signup')
  getSignup(@Res() res: Response) {
    // const filePath = join(__dirname, '..', 'pages', 'signin.html');
    res.sendFile("/app/pages/signup.html");
  }


  @Post('/signup')
  async handleSignUp(@Body() formData:any){
    const{username, password } = formData;
    const ad = new User();
    ad.username = username;
    ad.password = password;
    ad.id = 2000;
    await this.adminRepository.save(ad);
    console.log('Username: ', username);
    console.log('Password:', password);
  }
}