var states = [
    {
        name: 'login',
        state: {
            url: '/login',
            templateUrl: '../views/login.html',
            data: {
                text: "login",
                visible: false
            }

        }
    },
    {
        name: 'signup',
        state: {
            url: '/signup',
            templateUrl: '',
            data: {
                text: "signup",
                visible: false
            }

        }
    }
];


angular.module('sample',[
    'ui.router'
])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        angular.forEach(states,function (state) {
            $stateProvider.state(state.name, state.state);
        })
    });