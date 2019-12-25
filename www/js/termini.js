angular.module('starter.termini', [])

.factory('Vocaboli', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vocaboli = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    lastText2: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Beniamino Guidotti',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 6,
    name: 'Silvano Fausti',
    lastText: 'Amen',
    face: 'img/max.png'
  }, {
    id: 7,
    name: 'Giovanni Falcone',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 8,
    name: 'Andrea Serra',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 9,
    name: 'Gabriele Semino',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return vocaboli;
    },
    remove: function(vocabolo) {
      vocaboli.splice(vocaboli.indexOf(vocabolo), 1);
    },
    get: function(vocaboloId) {
      for (var i = 0; i < vocaboli.length; i++) {
        if (vocaboli[i].id === parseInt(vocaboloId)) {
          return vocaboli[i];
        }
      }
      return null;
    }
  };
});
