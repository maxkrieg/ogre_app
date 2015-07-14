angular.module("ogreApp").value('appSettings', {
  title: "Ogre Buddies Application",
  version: "1.0",
  railsURI: "http://localhost:3000",
  meetupURI: "https://api.meetup.com/find/groups?key=24234c5f7b46d447027576954f2f&sign=true&radius=20&page=10"
});


// https://api.meetup.com/find/groups?key=24234c5f7b46d447027576954f2f&sign=true&radius=20&page=10&zip=02170&text=hiking
