import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./schemas/users.shema";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}
    
    async create(User: User): Promise<User> {
        const newUser = new this.UserModel(User);
        return newUser.save();
    }

    async readAll(): Promise<User[]> {
        return await this.UserModel.find().exec();
    }

    async readById(id): Promise<User> {
        return await this.UserModel.findById(id).exec();
    }

    async update(id, User: User): Promise<User> {
        return await this.UserModel.findByIdAndUpdate(id, User, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.UserModel.findByIdAndRemove(id);
    }
}