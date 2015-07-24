import Ember from 'ember';

export default Ember.Controller.extend({
    loginFailed: false,
    isProcessing: false,
    actions: {
        login: function() {
            this.setProperties({
                loginFailed: false,
                isProcessing: true
            });
            Ember.$.post("http://localhost:3001/sessions/create", {
                    username: this.get("username"),
                    password: this.get("password")
                })
                .then(function(data) {
                    this.set("isProcessing", false);
                    var jwt = data.id_token;
                    localStorage.setItem('jwt', jwt);
                    this.target.transitionTo('index');
                }.bind(this), function() {
                    this.set("isProcessing", false);
                }.bind(this));
        }
    }
});