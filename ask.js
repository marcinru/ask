const questions = require('./data/questions');
const collectAnswers = require('./lib/collectAnswers');

const answerEvents = collectAnswers(questions, (answers) => {
  console.log('Thank you for your answers!');
  console.log(answers);
  process.exit();
});

answerEvents.on('answer', (answer) => {
  console.log(`The answer is ${answer}`);
});
