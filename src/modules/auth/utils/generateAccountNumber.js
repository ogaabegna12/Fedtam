export default function generateAccountNumber() {

    const prefix = "30";

    const random = Math.floor(
        10000000 + Math.random() * 90000000
    );

    return prefix + random;

}
