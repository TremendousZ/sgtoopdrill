
class Grade {
    constructor(student, course){
        this.student = student;
        this.course = course;
        this.date = new Date();
    }




    getData( student , course , date ){
        let studentData = {
            student,
            course,
            date
        }

        return studentData; 
        }

    getData(this.student, this.course, this.date);

    editGrade( grade ){
    
        }

}