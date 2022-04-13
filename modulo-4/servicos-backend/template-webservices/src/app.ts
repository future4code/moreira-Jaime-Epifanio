import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, ()=>{
    console.log('Servidor rodando na porta 3003', process.env.PORT || 3003)
})

export default app