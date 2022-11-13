const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const socket = require("socket.io");

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
//-------------------Organization---------------------
app.use("/api/org", require("./routes/organization.routes"));
app.use("/api/investor", require("./routes/investor.routes"));
app.use("/api/investment", require("./routes/investments.routes"));
app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/login", require("./routes/login.route"));
//-------------------Inventor---------------------
app.use("/api/inventor", require("./routes/inventor.routes"));

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("receive-msg", data.message);
    }
  });
});
