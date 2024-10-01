const express = require("express");
const bodyPaser = require("body-parser");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require('cors');


const db = require("./config/db");
const router = require("./routes/userRoute")

const app = express();


dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(bodyPaser.json());

app.use("/api/users", router)
app.listen(PORT, async () => {
    console.log(`Server is Started at PORT ${PORT}`.bgBlue);
    await db()
});