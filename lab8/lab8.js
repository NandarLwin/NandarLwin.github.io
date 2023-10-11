window.onload = () => {
    /* 1 */ 
    let student = {
        firstName: String,
        lastName : String,
        grades : [],
        inputNewGrade: function (newGrade) {
            this.grades.push(newGrade);
        },
        computeAverageGrade: function(){
            let total = 0;
            let average = 0;
            for (let i of this.grades){
                total+=i;
            }
            console.log("total " + total);
            average = total/this.grades.length;
            console.log("average " + average);
            return average;
        }

    };
    let studentObj = Object.create(student);
    studentObj.firstName = "Winnie";
    studentObj.lastName = "Lwin";
    studentObj.grades =[];
    studentObj.inputNewGrade(5);
    studentObj.inputNewGrade(15);
    
    console.log(studentObj.computeAverageGrade());
    let studentObj1 = Object.create(student);
    studentObj1.firstName = "Pooh";
    studentObj1.lastName = "Lwin";
    studentObj1.grades =[];
    studentObj1.inputNewGrade(25);
    studentObj1.inputNewGrade(35);
    studentObj1.inputNewGrade(45);
   console.log(studentObj1.computeAverageGrade());

   /* 2 */
   function student2 (firstName, lastName, grades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades; 
        this.inputNewGrade = (newGrade) => {
            this.grades.push(newGrade);
        };
        this.computeAverageGrade = () => {
            let total = 0;
            let average = 0;
            for (let i of this.grades){
                total+=i;
            }
            console.log("constuctor function total " + total);
            average = total/this.grades.length;
            console.log("constuctor function average " + average);
            return average;
        }
   }
   let student1 = new student2("Sheryl","Low", [40,50,60]);
   student1.inputNewGrade(50);
   console.log("Constructor function " + student1.computeAverageGrade());


   /* 3 */
   console.log(Array.prototype);
   Array.prototype.sortCustom = function() {
     return this.sort((a, b) => a - b);
   }
   const arr = [22,3,1,48];
   arr.sortCustom();
   console.log(arr);

   /* 4 */ 

   function animal(name,speed){
    this.name = name;
    this.speed = speed;
    animal.run = function(speed){
        this.speed+= speed;
        console.log("Run " + this.speed);
    }

    animal.compareBySpeed =  function(a1,a2) {
        if (a1.speed > a2.speed) return 1;
        else if (a1.speed < a2.speed) return -1;
        else return 0;
      };
   }
   function rabbit(name,speed){
        animal.call(this,name,speed);
        this.hide = function (){
            this.speed = speed;
            console.log("hide " + this.speed);
        }
   }
   
   let rabbitVal = Object.create(animal);
   rabbitVal.name = "bunny3";
   rabbitVal.speed = 25;


   const rab1 = new rabbit("bunny1", 10);
   const rab2 = new rabbit("bunny2", 20);
   console.log("Compare " + rabbitVal.compareBySpeed(rab1,rab2));
   rabbitVal.run(10);
   rab1.hide();
}