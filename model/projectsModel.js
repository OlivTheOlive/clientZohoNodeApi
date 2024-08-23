const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskId: String,
  name: String,
  status: String,
  startDate: String,
  endDate: String,
});

const projectSchema = new mongoose.Schema(
  {
    projectId: String,
    name: String,
    tasks: [taskSchema],
  },
  { collection: "zohoProjects" }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
