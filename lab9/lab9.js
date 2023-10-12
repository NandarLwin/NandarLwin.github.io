
class Student {
    studentId= '' ;
    answers = [];
    constructor(studentId) {
        this.studentId = studentId;
    }
    
    addAnswer(question) {
            this.answers.push(question);
    }
}


class Question {
    qid = '';
    answer = '';
    constructor(id, answer){
        this.qid = id;
        this.answer = answer;
    }
    checkAnswer (answer) {
        return answer === this.answer;
    }
}

class Quiz {
    questionMap = new Map();
    students = [];
    
    constructor(questions, students){
        this.students = students;
        for (let question of questions) {
            this.questionMap.set(question.qid, question.answer);
          }
    }
    scoreStudentBySid(sid){
        const student = this.students.find((student) => student.studentId === sid);
        if (!student) {
          console.log(`Student with id ${sid} does not exist.`);
          return 0;
        }
    
        const stuAnswers = student.answers;
        let score = 0;
    
        for (let i = 0; i < stuAnswers.length; i++) {
          //const questionId = i + 1;
          //console.log(Array.from(this.questionMap.keys()));
          if (this.questionMap.get(stuAnswers[i].qid) === stuAnswers[i].answer) {
            score++;
          }
        }

        return score;
    }
    getAverageScore() {
        let totalScore = 0;
        let stuCount = this.students.length;
    
        this.students.forEach(student => {
          totalScore += this.scoreStudentBySid(student.studentId);
        });
    
        const averageScore = totalScore / stuCount;
        //console.log(`Average score : ${averageScore}`);
        return averageScore;
      }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log("Score for student Id 10 " + scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5 