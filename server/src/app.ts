import express, {Application, Request, Response} from 'express'
import config from 'config'
import {start} from "./models";
import authRouter from "./routes/authRouter";

const PORT = config.get('port')
const app: Application = express()

start().then(() => app.listen(PORT,
        (): void => console.log(`start on ${PORT}`)))


// @ts-ignore
app.use(express.json({extended: true}))
app.use('/auth',authRouter)
app.use((req: Request, res: Response) => {
    res.status(404).send("Not Found")
})