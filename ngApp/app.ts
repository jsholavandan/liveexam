namespace newstudent {

    angular.module('newstudent', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: newstudent.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('addStudent', {
                url: '/addStudent',
                templateUrl: '/ngApp/views/addstudent.html',
                controller: newstudent.Controllers.AddStudentController,
                controllerAs: 'controller'
            })
            .state('editStudent', {
                url: '/editStudent/:id',
                templateUrl: '/ngApp/views/editStudent.html',
                controller: newstudent.Controllers.EditStudentController,
                controllerAs:'controller'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
