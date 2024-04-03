const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');
const skills = require('../models/skill'); 
// Index Route
router.get('/', skillsController.index);

// Show Route
router.get('/:id', skillsController.show);

// New Route
router.get('/new', (req, res) => {
  res.render('skills/new');
});

router.get('/:id/edit', skillsController.edit);

router.post('/', (req, res) => {
  const { name, level } = req.body;

  const newSkill = skillsController.create(name, level);
  res.redirect('/skills'); 
});
router.put('/:id', skillsController.update);
router.put('/:id', (req, res) => {
  const skillId = parseInt(req.params.id);
  const { name, level } = req.body;
  const success = skillsController.update(skillId, name, level);
  if (success) {
    res.redirect(`/skills/${skillId}`); 
  } else {
    res.status(404).send('Skill not found'); 
  }
});

// Delete Route
router.delete('/:id', skillsController.delete);
router.delete('/:id', (req, res) => {
  const skillId = parseInt(req.params.id);

  const success = skillsController.delete(skillId);
  if (success) {
    res.redirect('/skills'); 
  } else {
    res.status(404).send('Skill not found'); 
  }
});

module.exports = router;
