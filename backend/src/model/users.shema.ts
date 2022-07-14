import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, min: 3, max: 30, unique: true })
  username: string;

  @Prop({ required: true, max: 30, unique: true })
  email: string;

  @Prop({ required: true, min: 8 })
  password: string;

  @Prop({ default: false })
  isAvatarImageSet: boolean;

  @Prop({ default: '' })
  avatarImage: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
