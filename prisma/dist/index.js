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
//getUser()
async function getTodo(userId) {
    // const created = await prisma.todo.create({
    //   data: {
    //     title: "Go To Gym",
    //     description: "Go to gym from 5-6pm",
    //     user_id: userId
    //   }
    // })
    // console.log("Created User details: ", created)
    const response = await prisma.todo.findMany({
        where: {
            user_id: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    });
    console.log(response);
}
getTodo(2);
