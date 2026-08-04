import generateOtp from "../../utils/generateOtp.js";

export async function register(data) {

    const otp = generateOtp();

    // TODO:
    // Check if phone already exists
    // Save OTP
    // Send SMS

    return {

        status: 201,

        success: true,

        message: "OTP generated",

        otp

    };

}

export async function verifyOtp(data) {

    return {

        status: 200,

        success: true,

        message: "OTP verified",

        accessToken: "ACCESS_TOKEN",

        refreshToken: "REFRESH_TOKEN"

    };

}

export async function login(data) {

    return {

        status: 200,

        success: true,

        message: "Login successful"

    };

}

export async function logout(user) {

    return {

        status: 200,

        success: true,

        message: "Logout successful"

    };

}

export async function me(user) {

    return {

        status: 200,

        success: true,

        user

    };

}
