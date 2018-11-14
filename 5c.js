//c

var student = {
    courses : ["math", "english", "programming"] 
}
    function createStudent(in_name, in_surname, in_id){
    stud = Object.create(student);
    stud.name = in_name;
    stud.surname = in_surname;
    stud.id = in_id;
    return stud;
}

var test = createStudent("ab", "cb", 1);
console.log(test.courses);
