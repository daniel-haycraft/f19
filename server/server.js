const express = require('express');
const cors = require('cors');
// const { application } = require('express');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

//middleware
app.use(express.static(path.join(__dirname, "../public")));
//serves entire folder ^^
// serves specific thing you are referencing, could be out side of public folder
// app.use("/styles", express.static(path.join(__dirname, "../public/index.css")));
//END POINTS

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public"));
// });

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
// app.get("/styles", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.css"));
// });

const port = process.env.PORT || 4005;

app.listen(port, ()=> {
    console.log(`Partying on port ${port} till we die`)
})