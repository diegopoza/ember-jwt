import Ember from 'ember';
export default Ember.Component.extend({
    authenticator: 'authenticator:custom',
    actions: {
        authenticate: function() {
            var self = this;
            var credentials = this.getProperties('identification', 'password');
            this.get('session').authenticate('authenticator:custom', credentials).then(null, function(message) {
                self.set('errorMessage', message);
            });
        }
    }
});