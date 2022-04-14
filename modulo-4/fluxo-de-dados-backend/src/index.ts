import express, {Request, Response} from 'express'; 
import { cursos } from './data';


const app = express();

app.use(express.json());

const port = 3333

const server = app.listen (port, () => {
  if (server) {
    
    console.log(`Servidor está rodando em http://localhost:${port}`);
  } else {
    console.error(`Módulo de falha do servidor.`);
  }
});;

// Exerxício 1
app.get("/test", (req: Request, res: Response) => {     
    return res.status(200).json({ message: "Deu Certo!!!" }) 
})

//Exercício 3
app.post("/novocurso", (req: Request, res: Response) => {
    const criaCurso = {
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price,
    }
    const novaListaCursos = [...cursos, criaCurso];
    return res.status(200).send(novaListaCursos); 
}) 

//Exercício 4
// app.get("/retornacurso", (req: Request, res: Response) => {
//     const newCourse = cursos        
//     const newList = newCourse.map((item)=> {
//         return item;
//     });
//     res.status(200).send({result: newList}); 
// }) 



