const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

// app.use("/api/admin")
// app.use("/api/investor", investorRoutes);
// app.use("/api/inventor")
// app.use("/api/organization")
// app.use("/api/investment")
// app.use("/api/invention")

//-------------------Invention---------------------
app.use("/api/invention", require("./routes/invention.routes"));
app.use("/api/org", require("./routes/organization.routes"));
app.use("/api/investor", require("./routes/investor.routes"));
app.use("/api/investment", require("./routes/investments.routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
