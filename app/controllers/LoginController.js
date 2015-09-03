/**
 * Created by apium on 22/08/2015.
 */
function LoginController($scope) {
    this.data = $scope.data = {};
    this.fn = $scope.fn = {};
    this.event = $scope.event = {};

    this.event.onLoad = this.onLoad.bind(this);

    return this;
}

LoginController.prototype.onLoad = function() {
    this.initData();
};

LoginController.prototype.initData = function() {
    
};

app.controller('LoginController', LoginController);