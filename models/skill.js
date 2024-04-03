const skills = [
    { id: 1, name: 'JavaScript', level: 'Intermediate' },
    { id: 2, name: 'HTML', level: 'Intermediate' },
    { id: 3, name: 'CSS', level: 'Intermediate' },
    { id: 4, name: 'Express', level: 'Intermediate' },
    { id: 5, name: 'Node', level: 'Intermediate' },
    { id: 6, name: 'React', level: 'Intermediate' }
  ];
  
  module.exports = {
    getAll,
    getById
  };
  
  function getAll() {
    return skills;
  }
  function getById(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }