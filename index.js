const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const appointments = require("./routes/appointments");
const reg = require("./routes/reg");
const appt = require("./routes/appt");
const otList = require("./routes/otList");
// const cpt = require("./routes/cpt");
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
app.use(cors());

// Routes
app.use("/api/reg", reg);
app.use("/api/appt", appt);
app.use("/api/ot", otList);
app.use("/api/med", med);
app.use("/api/surgnotes", surgNotes);
app.use("/api/drs", drs);
app.use("/api/discharge", discharge);

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
