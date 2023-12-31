import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './router/globalRouter';
import globalError from './error/Global_Error';
const app: Application = express()

app.use(express.json())
app.use(cors())


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to blog website',
  })
})

app.use('/api/v1',router)

app.use(globalError)

export default app

