const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const run = async () => {
  try {
    // const result = await prisma.user.createMany({
    //   data: [
    //     { username: "Non", password: "1234569999" },
    //     { username: "Palm", password: "2222222222" },
    //   ],
    // });
    // const result = await prisma.todo.create({
    //   data: {
    //     userId: 3,
    //     title: "Prisma Homework",
    //     date: new Date("2023-09-21"),
    //     completed: false,
    //   },
    // });
    // const result = await prisma.todo.delete({
    //   where: { id: 7 },
    // });
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};

run();
