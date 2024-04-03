const Skill = require('../models/skill');

exports.index = (req, res) => {
  const allSkills = Skill.getAll();
  res.render('skills/index', { skills: allSkills });
};

exports.show = (req, res) => {
  const skillId = parseInt(req.params.id);
  const skill = Skill.getById(skillId);
  if (!skill) {
    res.status(404).send('Skill not found');
  } else {
    res.render('skills/show', { skill });
  }
};

exports.edit = (req, res) => {
  const skillId = parseInt(req.params.id);
  const skill = Skill.getById(skillId);
  if (!skill) {
    res.status(404).send('Skill not found');
  } else {
    res.render('skills/edit', { skill });
  }
};

exports.update = (req, res) => {
  const { id } = req.params; 
  const { name, level } = req.body; 
  if (!id) {
    return res.status(400).send('ID parameter is missing');
  }
};
exports.delete = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send('Skill ID is missing in the request');
  }

  const index = skills.findIndex(skill => skill.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send('Skill not found');
  }

  skills.splice(index, 1);
  res.redirect('/skills');
};

exports.create = (req, res) => {
  const { name } = req.body;
 
};
