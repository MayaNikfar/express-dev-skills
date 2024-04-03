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
