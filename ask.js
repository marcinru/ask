const questions = require('./data/questions');
const collectAnswers = require('./lib/collectAnswers');
const fs = require('fs');

collectAnswers(questions, (answers) => {
  console.log('Thank you for your answers!');
  console.log(answers);
  let md = 'Your answers:\n\n';
  answers.forEach((answer) => {
    md += `* ${answer}\n`;
  });

  fs.writeFile('answers.md', md, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('answers file created');
    process.exit();
  });
});
