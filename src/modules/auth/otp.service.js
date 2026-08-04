import generateOtp from "../../utils/generateOtp.js";
import { hashValue } from "../../utils/hash.js";

export async function createOtp(phone) {

    const otp = generateOtp();

    const otpHash = await hashValue(otp);

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    return {

        phone,

        otp,

        otpHash,

        expiresAt

    };

}
