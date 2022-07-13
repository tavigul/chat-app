import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/schemas/users.shema';
import { UserService } from './users/users.service';
import { UserController } from './users/users.controller';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
            MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})


export class AppModule {}
