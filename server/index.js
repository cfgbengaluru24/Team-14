import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Doctor from './models/doctormodel.js';
import Message from './models/Message.js'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;







mongoose.connect(process.env.MONGO_URL)
    .then(() => { 
        console.log("DB connected successfully"); 
    })
    .catch((error) => console.log(`${error} did not connect`))

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.get('/doctors', (req, res) => {
  Doctor.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/doctors', (req, res) => {
  const {name,location,available} = req.body;
  Doctor.create({name,location,available})
  
    .then(doctor => res.json(doctor))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.put('/doctors/:id', (req, res) => {
  Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(doctor => res.json(doctor))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/doctors/:id', (req, res) => {
  Doctor.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Doctor deleted' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/send', (req, res) => {
    const newMessage = new Message(req.body);
    newMessage.save()
      .then(message => res.json(message))
      .catch(err => res.status(500).json({ error: err.message }));
  });
  
 
app.get('/doctor-messages', (req, res) => {
    Message.find({ recipient: 'doctor' })
      .then(messages => res.json(messages))
      .catch(err => res.status(500).json({ error: err.message }));
  });



app.listen(PORT, () => {
    console.log(`Server started at port : ${PORT}`)
}) 
