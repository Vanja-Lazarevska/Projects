import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as dotenv from 'dotenv';

dotenv.config();

const secret = process.env.API_KEY

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret
        })
        console.log('IT IS HERE')


        console.log('WHAT DID HAPPEND')
    }

    async validate(payload: any) {
        // ako se povika validate jwt e validen bidejkji prvo se validira
        console.log('VALIDATE JWT')
        return {userId: payload.sub, username: payload.username}
    }
}