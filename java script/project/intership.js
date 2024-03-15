// server.js (Express Server)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/job_board', { useNewUrlParser: true, useUnifiedTopology: true });

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  company: String,
});

const Job = mongoose.model('Job', jobSchema);

// API endpoints
app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.post('/api/jobs', async (req, res) => {
  const { title, description, company } = req.body;
  const job = new Job({ title, description, company });
  await job.save();
  res.json(job);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
