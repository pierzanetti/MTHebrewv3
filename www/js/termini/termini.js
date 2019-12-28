angular.module('starter.termini', [])

.factory('Vocaboli', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vocaboli_list = [
    /*Qui inizia Alef*/
    {key: '	alef	', termine: '	א	', senza: '	א	', traslitterazione: '	’	', significato: '	’àlef	', grammatica: '		', altro: '		', id: 	1	},
{ key: '	ab	', termine: '	אָב	', senza: '	אב	', traslitterazione: '	’āḇ	', significato: '	padre	', grammatica: '	n. m.	', altro: '	cstr. אַב - pl. m. אָבוֹת - cstr. אֲבוֹת	', id: 	2	},
{ key: '	adamah	', termine: '	אֲדָמָה	', senza: '	אדמה	', traslitterazione: '	’aḏāmāh	', significato: '	suolo, terra (in contrasto con l’acqua), territorio, argilla	', grammatica: '	n. f.	', altro: '	cstr. אַדְמַת - pl. אֲדָמוֹת	', id: 	3	},
{ key: '	or	', termine: '	אוֹר	', senza: '	אור	', traslitterazione: '	’ôr	', significato: '	luce	', grammatica: '	n. f.	', altro: '	cstr. אוֹר - pl. ass. אוֹרִים	', id: 	4	},
{ key: '	ot	', termine: '	אוֹת	', senza: '	אות	', traslitterazione: '	’ôṯ	', significato: '	segno	', grammatica: '	n. m.	', altro: '	pl. ass. אוֹתוֹת	', id: 	5	},
{ key: '	ah	', termine: '	אָח	', senza: '	אח	', traslitterazione: '	’āḥ	', significato: '	fratello	', grammatica: '	n. m.	', altro: '	cstr. אֲחִי - pl. m. אַחִים - cstr. אֲחֵי	', id: 	6	},
{ key: '	ehad	', termine: '	אֶחָד	', senza: '	אחד	', traslitterazione: '	’eḥāḏ	', significato: '	uno	', grammatica: '	agg. numerale	', altro: '	cstr. אַחַד	', id: 	7	},
{ key: '	eykah	', termine: '	אֵיכָה	', senza: '	איכה	', traslitterazione: '	’êḵāh	', significato: '	come? come mai?	', grammatica: '	particella interrogativa	', altro: '		', id: 	8	},
{ key: '	eyn	', termine: '	אֵין	', senza: '	אין	', traslitterazione: '	’ên	', significato: '	non c’è, non ci sono, non esiste	', grammatica: '	particella avverbiale di negazione	', altro: '		', id: 	9	},
{ key: '	ays	', termine: '	אִישׁ	', senza: '	אישׁ	', traslitterazione: '	’îš	', significato: '	uomo, marito, maschio	', grammatica: '	n. m.	', altro: '	cstr. אִישׁ - pl. ass. אֲנָשִׁים - cstr. אַנְשֵׁי	', id: 	10	},
{ key: '	ak	', termine: '	אַךְ	', senza: '	אך	', traslitterazione: '	’aḵ	', significato: '	certamente, di certo, sicuramente	', grammatica: '	particella avverbiale di affermazione	', altro: '		', id: 	11	},
{ key: '	akal	', termine: '	אָכַל	', senza: '	אכל	', traslitterazione: '	’āḵal	', significato: '	mangiare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, mangiò; ptc. att. אֹכֵל;	', id: 	12	},
{ key: '	ael	', termine: '	אֶל	', senza: '	אל	', traslitterazione: '	’el	', significato: '	a, verso	', grammatica: '	prep. di moto al luogo, di direzione	', altro: '		', id: 	13	},
{ key: '	aim	', termine: '	אִם	', senza: '	אם	', traslitterazione: '	’im	', significato: '	se	', grammatica: '	cong.	', altro: '		', id: 	14	},
{ key: '	aem	', termine: '	אֵם	', senza: '	אם	', traslitterazione: '	’ēm	', significato: '	madre	', grammatica: '	n.f.	', altro: '		', id: 	15	},
{ key: '	amar	', termine: '	אָמַר	', senza: '	אמר	', traslitterazione: '	’āmar	', significato: '	dire, pronunciare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, disse;	', id: 	16	},
{ key: '	emet	', termine: '	אֱמֶת	', senza: '	אמת	', traslitterazione: '	’æmeṯ	', significato: '	verità, affidabilità, correttezza, fedeltà, costanza, fermezza	', grammatica: '	n. f.	', altro: '	cstr. אֱמֶת	', id: 	17	},
{ key: '	aesel	', termine: '	אֵ֫צֶל	', senza: '	אצל	', traslitterazione: '	’ḗṣel	', significato: '	vicino, accanto, presso, in prossimità di	', grammatica: '	prep.	', altro: '		', id: 	18	},
{ key: '	eres	', termine: '	אֶ֫רֶץ	', senza: '	ארץ	', traslitterazione: '	’ereṣ	', significato: '	terra, paese, suolo	', grammatica: '	n. f.	', altro: '	con articolo הָאָ֫רֶץ - pl. אֲרָצוֹת - cstr. אַרְצוֹת	', id: 	19	},
{ key: '	aissah	', termine: '	אִשָּׁה	', senza: '	אשה	', traslitterazione: '	’iššāh	', significato: '	donna, moglie, femmina	', grammatica: '	n. f.	', altro: '	cstr. אֵשֶׁת - pl. ass. נָשִׁים - cstr. נְשֵׁי	', id: 	20	},

/*Qui inizia Bet*/
{ key: '		', termine: '		', senza: '		', traslitterazione: '		', significato: '		', grammatica: '		', altro: '		', id: 	99	},
{ key: '	beth	', termine: '	ב	', senza: '	ב	', traslitterazione: '	ḇ	', significato: '	beth	', grammatica: '		', altro: '		', id: 	100	},
{ key: '	beged	', termine: '	בֶּ֫גֶד	', senza: '	בגד	', traslitterazione: '	beḡeḏ	', significato: '	indumento, mantello	', grammatica: '	n. m.	', altro: '	pl. בְּגָדִים - cstr. בִּגְדֵי	', id: 	101	},
{ key: '	boa	', termine: '	בּוֹא	', senza: '	בוא	', traslitterazione: '	bô’	', significato: '	venire, entrare, andare	', grammatica: '	v.	', altro: '	בָּא Qal, qatal, 3 ms, entrò, venne, andò	', id: 	102	},
{ key: '	bahar	', termine: '	בָּחַר	', senza: '	בחר	', traslitterazione: '	bāḥar	', significato: '	scegliere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, scelse, ha scelto	', id: 	103	},
{ key: '	bayin	', termine: '	בַּ֫יִן	', senza: '	בין	', traslitterazione: '	báyin	', significato: '	distanza, spazio tra, intervallo, tra	', grammatica: '	sostantivo o prep.	', altro: '	cstr. בֵּין	', id: 	104	},
{ key: '	bayit	', termine: '	בַּ֫יִת	', senza: '	בית	', traslitterazione: '	báyit	', significato: '	casa, abitazione	', grammatica: '	n. m.	', altro: '	cstr. בֵּית - pl. בָּֽתִּים - cstr. בָּתֵּי	', id: 	105	},
{ key: '	ben	', termine: '	בֵּן	', senza: '	בן	', traslitterazione: '	bēn	', significato: '	figlio	', grammatica: '	n. m.	', altro: '	cstr. בֵּן - pl. בָּנִים - cstr. בְּנֵי	', id: 	106	},
{ key: '	barah	', termine: '	בָּרַח	', senza: '	ברח	', traslitterazione: '	bāraḥ	', significato: '	fuggire, scappare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fuggì, scappò; 	', id: 	107	},
{ key: '	betulah	', termine: '	בְּתוּלָה	', senza: '	בתולה	', traslitterazione: '	beṯûlāh	', significato: '	vergine	', grammatica: '	n. f.	', altro: '	cstr. בְּתוּלַת - pl. f. בְּתוּלוֹת	', id: 	108	}


    /*id: 0,
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
  }*/
];

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
