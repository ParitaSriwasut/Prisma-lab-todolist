const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();

const prisma = new PrismaClient();
app.use(express.json());

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

app.post("/register", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const result = await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: "Failed" });
  }
});

run();

app.listen(8888, () => console.log("Hello 8888"));
