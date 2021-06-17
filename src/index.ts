import express from 'express'
import mongoose from 'mongoose'
import router from './Router.js'

import fileUpload from 'express-fileupload'
import cors from 'cors'

const PORT = 8888;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.uoaiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
app.use(cors())
app.options('*', cors());

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload());
app.use('/api', router);

app.get('/', (request, responce) => {
    responce.status(200).json('Сервер работает!');
});

async function startApp(){
    try{
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        // tslint:disable-next-line:no-console
        app.listen(PORT, () => console.log(`Server is open - http://localhost:${PORT}/`));
    }catch(e){
        // tslint:disable-next-line:no-console
        console.log(e);
    }
};

startApp();