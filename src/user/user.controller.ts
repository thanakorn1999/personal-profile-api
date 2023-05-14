import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  // ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Get()
  findAll() {
    return this.userService.get();
  }
  @Get('/:userId')
  findOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getDetails(userId);
  }
  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
  }
  @Delete('/:userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
