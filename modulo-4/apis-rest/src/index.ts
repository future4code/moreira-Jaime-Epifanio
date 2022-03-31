import express from "express";
import {users} from "./data"

const app = express();

app.use(express.json());

const port = 3333

const server = app.listen (port, () => {
  if (server) {
    
    console.log(`Server is running in http://localhost:${port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; 

//Exercício 1
//a. Qual método HTTP você deve utilizar para isso?*
//R: O método adequado é o Get.

//b. Como você indicaria a **entidade** que está sendo manipulada?*
//R: A entidade a se utilizar é o /users

app.get("/users", (req, res) => {
  try {
    if (!users) {
      throw new Error("Desculpe, não encontramos usuários.");
    }
    res.status(200).send(users);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

//Exercício 2

//Exercício 3

//Exercício 4
