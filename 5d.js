//d

function Student(id, name, surname, grades){
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.grades = grades,
    this.getAverage = function(){
        var temp = 0;
        for (var g in grades){
            temp = temp + parseInt(g);
        }
        
        return temp / grades.length 
    },
    this.getInfo = function(){
        return this.name + " " + this.surname;
    }
    Object.defineProperties(this , {
        "FullName": {
            get: function() {
                return this.name +" "+ this.surname;
            },
            set: function(input){
                var words = input.split(' ');
                this.name = words[0];
                this.surname = words[1];
            }
        }, 
        "GradeAverage": {
            get: function() {
                var temp = 0;
                for (var g in grades){
                    temp = temp + parseInt(g);
                }
                return temp / grades.length 
            }
        }
    });
}

    var grd = [5,3,2,1];
    var std = new Student(1,"Joe","Brown", grd);
    console.log(std.GradeAverage);
    console.log(std.FullName);
    std.FullName = "Alex Smith";
    console.log(std.FullName);



