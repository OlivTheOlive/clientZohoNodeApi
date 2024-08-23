const axios = require("axios");
const mongoose = require("mongoose");
const Project = require("../model/projectsModel");
require("dotenv").config();

const clientId = process.env.ZOHO_CLIENT_ID;
const clientSecret = process.env.ZOHO_CLIENT_SECRET;
const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
let accessToken = "yourIdWillBeGenerated";

const instance = axios.create({
  baseURL: "https://projectsapi.zoho.com/restapi",
  headers: {
    Authorization: `Zoho-oauthtoken ${accessToken}`,
  },
});

const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.zoho.com/oauth/v2/token",
      null,
      {
        params: {
          grant_type: "refresh_token",
          client_id: clientId,
          client_secret: clientSecret,
          refresh_token: refreshToken,
        },
      }
    );
    accessToken = response.data.access_token;
    instance.defaults.headers.Authorization = `Zoho-oauthtoken ${accessToken}`;
    console.log("New Access Token has been generated");
  } catch (error) {
    console.error(
      "Error refreshing access token:",
      error.response ? error.response.data : error.message
    );
  }
};

const fetchProjects = async () => {
  try {
    const response = await instance.get(`/portal/companyName/projects/`);
    return response.data.projects;
  } catch (error) {
    console.error(
      "Error fetching projects:",
      error.response ? error.response.data : error.message
    );
  }
};

const fetchTasks = async (projectId) => {
  try {
    const response = await instance.get(
      `/portal/companyName/projects/${projectId}/tasks/`
    );
    return response.data.tasks;
  } catch (error) {
    console.error(
      `Error fetching tasks for project ID ${projectId}:`,
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = {
  refreshAccessToken,
  fetchProjects,
  fetchTasks,
};
