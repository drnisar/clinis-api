const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const appointments = require("./routes/appointments");
const reg = require("./routes/reg");
const appt = require("./routes/appt");
const otList = require("./routes/otList");
const cpts = require("./routes/cpts");
const med = require("./routes/meds");
const surgNotes = require("./routes/surgNotes");
const drs = require("./routes/drs");
const discharge = require("./routes/discharge");

const uri =
  "mongodb+srv://drnisar:P%4077w673@cluster0.zudejlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const localhost = "mongodb://localhost:27017/appts";
mongoose
  .connect(uri)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  "http://localhost:3000",
  "https://clinis-client.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// Routes
app.use("/api/reg", reg);
app.use("/api/appt", appt);
app.use("/api/ot", otList);
app.use("/api/med", med);
app.use("/api/surgnotes", surgNotes);
app.use("/api/drs", drs);
app.use("/api/discharge", discharge);
app.use("/api/cpts", cpts);

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
