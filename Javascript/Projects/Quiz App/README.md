# Quiz Application

A simple yet interactive web-based quiz application built with HTML, CSS (Tailwind), and JavaScript. Test your knowledge on programming concepts with 10 multiple-choice questions.

## Features

- 🎯 10 programming-related questions
- ✅ Instant answer feedback (green for correct, red for wrong)
- 📊 Score tracking with localStorage
- 🔄 Restart quiz functionality
- 🎨 Clean UI with Tailwind CSS styling

## How to Use

1. **Start the Quiz**:

   - Click the "Start Quiz" button on the welcome page

2. **Answer Questions**:

   - Read each question carefully
   - Click on one of the four answer options
   - Immediate visual feedback will show if your answer was correct/incorrect

3. **View Results**:
   - After completing all questions, you'll see your final score
   - Option to restart the quiz

## File Structure

quiz-application/
├── index.html # Main quiz page
├── score.html # Results page
├── script.js # Main JavaScript logic
└── README.md # This documentation

## Technologies Used

- HTML5
- CSS (Tailwind CSS)
- JavaScript (ES6)
- Web Storage API (localStorage)

## Installation

No installation required! Simply open `index.html` in any modern web browser.

## Customization

To modify questions:

1. Edit the `quizQuestions` array in `script.js`
2. Follow this structure for each question:

```javascript
{
  title: "Your question here",
  option1: "Option 1",
  option2: "Option 2",
  option3: "Option 3",
  option4: "Option 4",
  correctAnswer: "optionX" // (1-4)
}
```
