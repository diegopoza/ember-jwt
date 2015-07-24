import Ember from 'ember';
export default Ember.Controller.extend({
    isLogged: localStorage.getItem('jwt') != null,
    actions: {
        logout: function() {
            localStorage.removeItem('jwt');
            this.target.transitionTo('index');
            location.reload();
        }
    }
});