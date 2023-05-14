import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log(`validateUser`);

    const user = await this.userService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(user: any) {
    // const user = await this.userService.findByEmail(email);
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    const payload = { email: user.email, sub: user.id, type: user.type };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
