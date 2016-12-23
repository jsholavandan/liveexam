namespace newstudent.Services {

  export class StudentService{

    public StudentResource;

    public listStudents(){
      return this.StudentResource.query();
    }

    public getStudent(id){
      return this.StudentResource.get({id:id});
    }

    public saveStudent(student){
      return this.StudentResource.save({id:student._id}, student).$promise;
    }

    public removeStudent(id){
      return this.StudentResource.remove({id:id}).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService){
      this.StudentResource = $resource('/api/students/:id');
    }
  }

  angular.module('newstudent').service('studentService', StudentService);


    }
