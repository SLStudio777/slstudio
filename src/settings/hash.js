import bcrypt from "bcrypt";

const password = "";

async function hashPassword() {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
}

hashPassword();