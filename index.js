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



app.put('/:userId', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!user) throw new Error('User not found');
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


app.listen(5000, () => {
    console.log("Server Listening on Port 5000")
})