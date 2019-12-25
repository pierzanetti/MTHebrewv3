angular.module('starter.termini', [])

.factory('Vocaboli', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vocaboli = [{
    id: 0,
    termine: '	א	',
    senza: '	א	',
    traslitterazione: '	’	',
    key: '	a	',
    significato: '	’àlef	',
    grammatica: '		',
    altro: '		'
  }, {
    id: 1,
    termine: '	אָב	',
    senza: '	אב	',
    traslitterazione: '	’āḇ	',
    key: '	ab	',
    significato: '	padre	',
    grammatica: '	n. m.	',
    altro: '	cstr. אַב - pl. m. אָבוֹת - cstr. אֲבוֹת	',
  }, {
    id: 2,
    termine: '	אֲדָמָה	',
    senza: '	אדמה	',
    traslitterazione: '	’aḏāmāh	',
    key: '	adamah	',
    significato: '	suolo, terra (in contrasto con l’acqua), territorio, argilla	',
    grammatica: '	n. f.	',
    altro: '	cstr. אַדְמַת - pl. אֲדָמוֹת	'
  }, {
    id: 3,
    termine: '	אָב	',
    senza: '	אב	',
    traslitterazione: '	’āḇ	',
    key: '	ab	',
    significato: '	padre	',
    grammatica: '	n. m.	',
    altro: '	cstr. אַב - pl. m. אָבוֹת - cstr. אֲבוֹת	',
  }, {
    id: 4,
    termine: '	אֲדָמָה	',
    senza: '	אדמה	',
    traslitterazione: '	’aḏāmāh	',
    key: '	adamah	',
    significato: '	suolo, terra (in contrasto con l’acqua), territorio, argilla	',
    grammatica: '	n. f.	',
    altro: '	cstr. אַדְמַת - pl. אֲדָמוֹת	'
  }, {
    id: 5,
    termine: '	אָב	',
    senza: '	אב	',
    traslitterazione: '	’āḇ	',
    key: '	ab	',
    significato: '	padre	',
    grammatica: '	n. m.	',
    altro: '	cstr. אַב - pl. m. אָבוֹת - cstr. אֲבוֹת	',
  }, {
    id: 6,
    termine: '	אֲדָמָה	',
    senza: '	אדמה	',
    traslitterazione: '	’aḏāmāh	',
    key: '	adamah	',
    significato: '	suolo, terra (in contrasto con l’acqua), territorio, argilla	',
    grammatica: '	n. f.	',
    altro: '	cstr. אַדְמַת - pl. אֲדָמוֹת	'
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
