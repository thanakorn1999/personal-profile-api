import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuUser } from './user/user.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './auth/auth.module';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'my_db0012',
      entities: [DuUser],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
  ],
  controllers: [AppController, ProfileController],
  providers: [AppService],
})
export class AppModule {}
