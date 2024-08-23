const {
  refreshAccessToken,
  fetchProjects,
  fetchTasks,
} = require("../services/zohoServices");
const Project = require("../model/projectsModel");

const syncData = async () => {
  await refreshAccessToken();
  const projects = await fetchProjects();
  for (const project of projects) {
    const tasks = await fetchTasks(project.id_string);
    const projectData = {
      projectId: project.id_string,
      name: project.name,
      tasks: tasks.map((task) => ({
        taskId: task.id_string,
        name: task.name,
        status: task.status?.name,
        startDate: task.start_date,
        endDate: task.end_date,
      })),
    };

    await Project.findOneAndUpdate(
      { projectId: projectData.projectId },
      projectData,
      { upsert: true, new: true }
    );
  }
};

const getRandomProject = async () => {
  const count = await Project.countDocuments();
  const random = Math.floor(Math.random() * count);
  const randomProject = await Project.findOne().skip(random);
  return randomProject.tasks;
};

module.exports = {
  syncData,
  refreshAccessToken,
  getRandomProject,
};
