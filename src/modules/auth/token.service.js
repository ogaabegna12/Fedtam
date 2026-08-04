import {
    generateAccessToken,
    generateRefreshToken
} from "../../utils/jwt.js";

export function createTokens(user) {

    return {

        accessToken: generateAccessToken(user),

        refreshToken: generateRefreshToken(user)

    };

}
