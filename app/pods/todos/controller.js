import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  newTodoDescription: null,
  actions: {
    createTodo() {
      let description = this.get('newTodoDescription')

      // Only add to do if description is not empty
      if(description) {
        let todo = this.get('store').createRecord('todo', { description: description }) // Create to-do with description

        // Save to-do then clear description
        return todo.save().then((todo) => {
            console.log(`Saved todo with description ${todo.get('description')}`)
            this.set('newTodoDescription', null) // Clear input value after saved
          })
      }
    },
    completeTodo(todo) {
      todo.toggleProperty('isCompleted')
      return todo.save().then((todo) => {
        console.log(`Toggled '${todo.get('description')}'`)
      })
    },
    deleteTodo(todo) {
      return todo.destroyRecord()
    }
  }
});
