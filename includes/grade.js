
class Grade {
    constructor(student, course){
        this.student = student;
        this.course = course;
        this.date = new Date();
        this.gradeNumber = this.gradeRoulette;
        this.studentLetterGrade = this.letterGrade(this.gradeNumber);
    }

    gradeRoulette() {
        let randomGrade = Math.floor(Math.random * 100);
        this.gradeNumber = randomGrade;
    }

    letterGrade( number ){
        if (number < 50) {
            return "I";
        } else if (number < 65) {
            return "F";
        } else if (number < 74) {
            return "D";
        } else if ( number < 83) {
            return "C";
        } else if ( number < 92) {
            return "B";
        } else if ( number < 100) {
            return "A";
        }
    }

    getData( student , course , date ){
         this.data = {
            student,
            course,
            date
        }

        return studentData; 
        }

    getData(this.student, this.course, this.date);

    editGradeUp( letterGrade ){
        if ( letterGrade === "I"){
            return "F";
        } else if ( letterGrade === "F"){
            return "D";
        } else if ( letterGrade === "D"){
            return "C";
        } else if ( letterGrade === "C"){
            return "B";
        } else if ( letterGrade === "B"){
            return "A";
        } else if ( letterGrade === "A"){
            return "A+";
        } else if ( letterGrade === "A+"){
            return "See HR";
        }
    }

    editGradeDown( letterGrade ){
        if ( letterGrade === "I"){
            return "I";
        } else if ( letterGrade === "F"){
            return "I";
        } else if ( letterGrade === "D"){
            return "F";
        } else if ( letterGrade === "C"){
            return "D";
        } else if ( letterGrade === "B"){
            return "C";
        } else if ( letterGrade === "A"){
            return "B";
        } else if ( letterGrade === "A+"){
            return "A";
        }
    }
}