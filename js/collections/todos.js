var app = app || {};

//The collection of todos is backed by local storage rather than a
//remote server

var TodoList = Backbone.Collection.extend({
    //Reference to this collection's model
    model: app.Todo,

    //Save all the todos under the "todos-backbone" namespace
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    //Filter the list to find only finished todo items
    completed: function() {
        return this.filter(function(todo) {
            return todo.get('completed');
        });
    },

    //Filter the list to find only unfinished todo items
    remaining: function() {
        return this.without.apply(this, this.completed());
    },

    //We keep the todos in sequential order, despite saving unordered
    //GUID in the database. This generates the next order number for
    //new items
    nextOrder: function() {
        if (!this.length) {
            return 1;
        }
        return this.last().get('order') + 1;
    },

    //Todos are sorted by their original insertion order
    comparator: function() {
        return todo.get('order');
    }
});

//Create a global collection of Todos
app.Todos = new TodoList();
