const questionStore = require('./questionStore');
const generateQuestionPaper = require('./questionPaperGenerator');

const totalMarks = 100;
const difficultyDistribution = [
  { difficulty: 'Easy', percentage: 20 },
  { difficulty: 'Medium', percentage: 50 },
  { difficulty: 'Hard', percentage: 30 },
];

const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution);

console.log('Generated Question Paper:');
console.log(questionPaper);
