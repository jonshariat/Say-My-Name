import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

People = new Mongo.Collection('people');

Template.body.helpers({
  name: function() {
    return People.find();
  }
});

Template.body.events({
  'submit .new-people': function(event) {
    var name = event.target.name.value;

    People.insert({
      name: name,
      createdAt: new Date()
    });
    event.target.name.value = "";

    return false;
  }
});

Template.displayNames.events({
  'click .delete': function() {
    People.remove(this._id);
  }
});
