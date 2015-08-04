import Ember from 'ember';
export default Ember.Component.extend({
    gotQuote: false,
    quote: "",
    actions: {
        getQuote: function() {
            var that = this;
            Ember.$.ajax({
                type: 'GET',
                url: 'http://localhost:3001/api/protected/random-quote',
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