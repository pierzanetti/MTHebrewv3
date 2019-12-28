angular.module('starter.termini', [])

.factory('Vocaboli', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vocaboli_list = [{
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
    termine: '	אוֹר	',
    senza: '	אור	',
    traslitterazione: '	’ôr	',
    key: '	or	',
    significato: '	luce	',
    grammatica: '	n. f.	',
    altro: '	cstr. אוֹר - pl. ass. אוֹרִים	',
    id: '	4	'
  }, {
    id: 4,
    termine: '	אוֹת	',
    senza: '	אות	',
    traslitterazione: '	’ôṯ	',
    key: '	ot	',
    significato: '	segno	',
    grammatica: '	n. m.	',
    altro: '	pl. ass. אוֹתוֹת	'
  }, {
    id: 5,
    termine: '	אָח	',
    senza: '	אח	',
    traslitterazione: '	’āḥ	',
    key: '	ah	',
    significato: '	fratello	',
    grammatica: '	n. m.	',
    altro: '	cstr. אֲחִי - pl. m. אַחִים - cstr. אֲחֵי	'
  }, {
    id: 6,
    key: '	ehad	',
    termine: '	אֶחָד	',
    senza: '	אחד	',
    traslitterazione: '	’eḥāḏ	',
    significato: '	uno	',
    grammatica: '	agg. numerale	',
    altro: '	cstr. אַחַד	'
  }];

  return {
    all: function() {
      return vocaboli_list;
    },
    remove: function(vocabolo) {
      vocaboli_list.splice(vocaboli_list.indexOf(vocabolo), 1);
    },
    get: function(vocaboloId) {
      for (var i = 0; i < vocaboli_list.length; i++) {
        if (vocaboli_list[i].id === parseInt(vocaboloId)) {
          return vocaboli_list[i];
        }
      }
      return null;
    }
  };
});
