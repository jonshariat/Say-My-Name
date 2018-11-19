import { Meteor } from 'meteor/meteor';

People = new Mongo.Collection('people');

Meteor.startup(() => {
  // code to run on server at startup
});
