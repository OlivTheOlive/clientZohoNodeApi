const express = require("express");
const connectDB = require("./config/dbConfig");
const zohoRoutes = require("./routes/zohoRoutes");
const { syncData } = require("./controller/zohoController");
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
connectDB(); // Connect to MongoDB

app.use("/api/zoho", zohoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  syncData(); // Initial sync
  setInterval(syncData, 12 * 60 * 60 * 1000); // Sync every 12 hours
});
