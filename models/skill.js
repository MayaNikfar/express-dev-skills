const skills = [
  { id: 1, name: 'JavaScript', level: 'Intermediate' },
  { id: 2, name: 'HTML', level: 'Intermediate' },
  { id: 3, name: 'CSS', level: 'Intermediate' },
  { id: 4, name: 'Express', level: 'Intermediate' },
  { id: 5, name: 'Node', level: 'Intermediate' },
  { id: 6, name: 'React', level: 'Intermediate' }
];

// Get all skills
const getAll = () => {
  return skills;
};

// Get skill by ID
const getById = (id) => {
  return skills.find(skill => skill.id === id);
};

// Add a new skill
const addSkill = (name, level) => {
  const id = skills.length + 1;
  const newSkill = { id, name, level };
  skills.push(newSkill);
  return newSkill;
};

// Update a skill
const updateSkill = (id, name, level) => {
  const index = skills.findIndex(skill => skill.id === id);
  if (index !== -1) {
    skills[index].name = name;
    skills[index].level = level;
    return true; // Success
  }
  return false; // Skill not found
};

// Delete a skill
const deleteSkill = (id) => {
  const initialLength = skills.length;
  skills = skills.filter(skill => skill.id !== id);
  return skills.length !== initialLength; // Returns true if skill was deleted
};

module.exports = {
  getAll,
  getById,
  addSkill,
  updateSkill,
  deleteSkill
};