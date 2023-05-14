import {
  // Body,
  Controller,
  // Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
// import { SignInDto } from './dto/auth-signin.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  signIn(@Request() req) {
    console.log(`post signIn`);
    return this.authService.signIn(req.user);
  }
}
