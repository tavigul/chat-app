import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  username: {
    type: string;
    required: true;
    min: 3;
    max: 30;
    unique: true;
  };

  @Prop()
  email: {
    type: string;
    required: true;
    max: 30;
    unique: true;
  };

  @Prop()
  password: {
    type: string;
    required: true;
    min: 8;
  };

  @Prop()
  isAvatarImageSet: {
    type: boolean;
    default: false;
  };

  @Prop()
  avatarImage: {
    type: string;
    default: '';
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
