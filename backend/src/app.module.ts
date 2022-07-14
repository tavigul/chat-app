import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path';
import { UserService } from './service/users.service';
import { UserController } from './controllers/user.controller';
import { User, UserSchema } from './model/users.shema';

@Module({
    imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/nest'),
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  
       MulterModule.register({
         storage: diskStorage({
           destination: './public',
           filename: (req, file, cb) => {
             const ext = file.mimetype.split('/')[1];
             cb(null, `${uuidv4()}-${Date.now()}.${ext}`);
           },
         })
       }),
       JwtModule.register({
        secret,
        signOptions: { expiresIn: '2h' },
      }),
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'public'),
      }),
    ],
   
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
  })


export class AppModule {}
