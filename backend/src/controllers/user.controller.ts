import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from "../model/users.shema";
import { UserService } from "../service/users.service";
import { JwtService } from '@nestjs/jwt';


@Controller('/api/auth/user')
export class UserController {
    constructor(private readonly userServerice: UserService,
        private jwtService: JwtService
    ) { }

    @Post('/register')
    async Register(@Res() response, @Body() user: User) {
        console.log(user)
        const newUSer = await this.userServerice.register(user);
        return response.status(HttpStatus.CREATED).json({
            newUSer
        })
    }

    @Post('/login')
    async Login(@Res() response, @Body() user: User) {
        const token = await this.userServerice.login(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token)
    }
}