const questionStore = require('./questionStore');

const generateQuestionPaper = (totalMarks, distribution) => {
  const questionPaper = [];
  const totalQuestions = questionStore.length;

  distribution.forEach(({ difficulty, percentage }) => {
    const count = Math.ceil((percentage / 100) * totalMarks);
    const filteredQuestions = questionStore.filter(q => q.difficulty === difficulty);

    if (filteredQuestions.length < count) {
      console.warn(`Question Level difficulty ${difficulty}.`);
      const adjustedPercentage = (filteredQuestions.length / totalQuestions) * 100;
      distribution.find(d => d.difficulty === difficulty).percentage = adjustedPercentage;
    }

    questionPaper.push(...filteredQuestions.slice(0, count));
  });

  return questionPaper;
};

module.exports = generateQuestionPaper;
