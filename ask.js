const questions = require('./data/questions');
const collectAnswers = require('./lib/collectAnswers');

collectAnswers(questions, (answers) => {
  console.log('Thank you for your answers!');
  console.log(answers);
  process.exit();
});
