import bcrypt from "bcryptjs";

const SALT_ROUNDS = 12;

export async function hashValue(value) {
    return bcrypt.hash(value, SALT_ROUNDS);
}

export async function compareValue(value, hash) {
    return bcrypt.compare(value, hash);
}
