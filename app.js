const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const UserRoutes = require('./routes/user');
const TodoRoutes = require('./routes/todo');

require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database connected...');
})


app.use(express.json());

app.use(cors());
app.use(express.static('public'));

app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/todo', TodoRoutes);


app.listen(PORT, () => {
  console.log(`Server working at port ${PORT}`);
});

