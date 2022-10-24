const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

connectDB();

app.get("/", (req,res) => res.send("Hello World!"));

// app.use("/api/admin")
// app.use("/api/investor")
// app.use("/api/inventor")
// app.use("/api/organization")
// app.use("/api/investment")
// app.use("/api/invention")

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));