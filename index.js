import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/database.js';
import { createUser, deleteBlog ,UserInfo,getAllUsers,UpdateUsers} from './Controller/crud.js';
import { configDotenv } from 'dotenv';
configDotenv();

dbConnect();

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));




app.post('/create-user', createUser);



app.get('/Find-user/:id', UserInfo);


app.get('/users', getAllUsers);




app.delete('/api/resource/:id', deleteBlog);



app.put('/api/resource/:id',UpdateUsers);


app.listen(5000, () => {
    console.log("Server Listening on Port 5000")
})