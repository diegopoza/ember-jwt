import Ember from 'ember';
export default Ember.Controller.extend({
    gotQuote: false,
    quote: "",
    actions: {
        getQuote: function() {
            var that = this;
            Ember.$.ajax({
                type: 'GET',
                url: 'http://localhost:3001/api/protected/random-quote',
                beforeSend: function(xhr) {
                    // set header if JWT is set
                    var token = that.get('session.secure.token');
                    if (token) {
                        xhr.setRequestHeader("Authorization", "Bearer " + token);
                    }
                },
                success: function(response) {
                    that.setProperties({
                        quote: response,
                        gotQuote: true
                    });
                },
                error: function() {
                    alert("An error occurred while processing the response.");
                }
            });
        }
    }
});