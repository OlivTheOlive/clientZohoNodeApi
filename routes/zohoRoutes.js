const express = require("express");
const {
  syncData,
  refreshAccessToken,
  getRandomProject,
} = require("../controller/zohoController");

const router = express.Router();

// Route to manually sync data
router.get("/sync", async (req, res) => {
  try {
    await syncData();
    res.status(200).send("Data synchronization complete.");
  } catch (error) {
    res.status(500).send("Error during data synchronization.");
  }
});

// Route to manually refresh access token
router.get("/refresh-token", async (req, res) => {
  try {
    await refreshAccessToken();
    res.status(200).send("Access token refreshed.");
  } catch (error) {
    res.status(500).send("Error during token refresh.");
  }
});

// Route to get a random project
router.get("/random-project", async (req, res) => {
  try {
    const project = await getRandomProject();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).send("Error fetching random project.");
  }
});

module.exports = router;
