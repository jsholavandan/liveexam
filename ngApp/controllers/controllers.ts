namespace newstudent.Controllers {

    export class HomeController {
      public students;

      public addStudent(){
        this.$state.go('addStudent');
      }

      public deleteStudent(id, name){
        if(this.$window.confirm("do you want to delete " + name)){
          this.studentService.removeStudent(id).then((student) => {
            this.$window.alert("student removed");
            this.students = this.studentService.listStudents();
          }).catch((err) => {
              this.$window.alert("error");
          });
        }
      }

      constructor(private studentService:newstudent.Services.StudentService,
                  private $state:ng.ui.IStateService,
                private $window:ng.IWindowService){
        this.students = studentService.listStudents();
      }
    }


    export class AddStudentController {
        public student;

        public addStudent(){
          this.studentService.saveStudent(this.student).then((student) => {
            this.$window.alert("student added");
            this.$state.go('home');
          }).catch((err) => {
            this.$window.alert("error");
          })
        }

        constructor(private studentService:newstudent.Services.StudentService,
                    private $state:ng.ui.IStateService,
                    private $window:ng.IWindowService){

        }
    }

    export class EditStudentController{
      public student;

      public editStudent(){
        this.studentService.saveStudent(this.student).then((student) => {
          this.$window.alert("edited");
          this.$state.go('home');
        }).catch((err) => {
          this.$window.alert("error");
        })
      }



      constructor(private studentService:newstudent.Services.StudentService,
                  private $state:ng.ui.IStateService,
                  private $window:ng.IWindowService,
                  private $stateParams: ng.ui.IStateParamsService){
        this.student = this.studentService.getStudent(this.$stateParams["id"]);
      }
    }

}
