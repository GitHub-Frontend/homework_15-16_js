//------------------------
console.log("---TASK-'HUMAN'----");
function Human() {
    this.name = 'Jack';
    this.age = 30;
    this.sex = 'man';
    this.height = 180;
    this.wight = 80;
};

function Worker() {
    this.job = 'Google';
    this.salary = 100000;
    this.work = function () {
        console.log('he works here 2 years');
    };
};

function Student() {
    this.study = 'University';
    this.grants = 1000;
    this.watchTV = function () {
        console.log('he likes serials');
    };
};
//---------------------------------------
Worker.prototype = new Human;
var newWorker = new Worker;
Student.prototype = new Human;
var newStudent = new Student;
//---------------------------------------

console.log('newWorker.name:', newWorker.name);
console.log('newWorker.age:', newWorker.age);
console.log('newWorker.sex:', newWorker.sex);
console.log('newWorker.height:', newWorker.height);
console.log('newWorker.wight:', newWorker.wight);
//----------------------------------------------
console.log('----------------------');
//----------------------------------------------
console.log('newStudent.name:', newStudent.name);
console.log('newStudent.age:', newStudent.age);
console.log('newStudent.sex:', newStudent.sex);
console.log('newStudent.height:', newStudent.height);
console.log('newStudent.wight:', newStudent.wight);
//----------------------------------------------
console.log('-------END---------');
