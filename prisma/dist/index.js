"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function insertUser(username, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
        },
    });
    console.log(res);
}
insertUser("nitesh@gmail.com", "secretpassword", "Nitesh", "Sah");
async function updateUser(email, { firstName, lastName }) {
    const res = await prisma.user.update({
        data: {
            firstName: firstName,
            lastName: lastName
        },
        where: {
            email: email
        }
    });
    console.log(res);
}
//updateUser("harkirat@gamil.com", {firstName: "Kirat", lastName: "Don"})
async function getUser() {
    const res = await prisma.user.findMany();
    console.log(res);
}
getUser();
