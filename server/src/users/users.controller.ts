import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { User } from "./schemas/users.shema";
import { UserService } from "./users.service";

@Controller('Users')
export class UserController {
    constructor(private readonly UserService: UserService){}

    @Post()
    async createUser(@Res() response, @Body() User: User) {
        const newUser = await this.UserService.create(User);
        return response.status(HttpStatus.CREATED).json({
            newUser
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const Users = await this.UserService.readAll();
        return response.status(HttpStatus.OK).json({
            Users
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const User = await this.UserService.readById(id);
        return response.status(HttpStatus.OK).json({
            User
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() User: User) {
        const updatedUser = await this.UserService.update(id, User);
        return response.status(HttpStatus.OK).json({
            updatedUser
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedUser = await this.UserService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedUser
        })
    }
}
