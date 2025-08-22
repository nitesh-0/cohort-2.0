import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  });
  
  console.log(res)
}

insertUser("nitesh@gmail.com", "secretpassword", "Nitesh", "Sah")

interface updateParams {
    firstName: string,
    lastName: string
}

async function updateUser(email: string, {
    firstName,
    lastName
}: updateParams){
   const res =  await prisma.user.update({
        data: {
            firstName: firstName,
            lastName: lastName
        }, 
        where: {
            email: email
        }
    })
    console.log(res)
}

//updateUser("harkirat@gamil.com", {firstName: "Kirat", lastName: "Don"})

async function getUser(){
  const res = await prisma.user.findMany()
  console.log(res)
}
getUser()
