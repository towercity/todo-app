var app = app || {};

app.Todo = Backbone.Model.extend({
    //Default attributs to ensure each todo has keys for 'title' and 'completed'
    defaults: {
        title: '',
        completed: false
    },

    //Toggle the completed state of the todo item
    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }
});
