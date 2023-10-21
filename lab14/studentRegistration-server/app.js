const exp = require("constants");
const express = require("express");
const cors = require('cors');
const studentRouter = require("./router/studentRouter")
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something went wrong: " + err.message });
})

app.listen(port, () => console.log('Server is started on ' + port))