angular.module('starter.termini', [])

.factory('Vocaboli', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vocaboli_list = [

/*Qui inizia Alef*/
{ key: '	alef	', termine: '	א	', senza: '	א	', traslitterazione: '	’	', significato: '	’àleph	', grammatica: '		', altro: '		', id: 	0	, lettera: '	א	'},
{ key: '	ab	', termine: '	אָב	', senza: '	אב	', traslitterazione: '	’āḇ	', significato: '	padre	', grammatica: '	n. m.	', altro: '	cstr. אַב - pl. m. אָבוֹת - cstr. אֲבוֹת	', id: 	1	, lettera: '	א	'},
{ key: '	adamah	', termine: '	אֲדָמָה	', senza: '	אדמה	', traslitterazione: '	’aḏāmāh	', significato: '	suolo, terra (in contrasto con l’acqua), territorio, argilla	', grammatica: '	n. f.	', altro: '	cstr. אַדְמַת - pl. אֲדָמוֹת	', id: 	2	, lettera: '	א	'},
{ key: '	or	', termine: '	אוֹר	', senza: '	אור	', traslitterazione: '	’ôr	', significato: '	luce	', grammatica: '	n. f.	', altro: '	cstr. אוֹר - pl. ass. אוֹרִים	', id: 	3	, lettera: '	א	'},
{ key: '	ot	', termine: '	אוֹת	', senza: '	אות	', traslitterazione: '	’ôṯ	', significato: '	segno	', grammatica: '	n. m.	', altro: '	pl. ass. אוֹתוֹת	', id: 	4	, lettera: '	א	'},
{ key: '	ah	', termine: '	אָח	', senza: '	אח	', traslitterazione: '	’āḥ	', significato: '	fratello	', grammatica: '	n. m.	', altro: '	cstr. אֲחִי - pl. m. אַחִים - cstr. אֲחֵי	', id: 	5	, lettera: '	א	'},
{ key: '	ehad	', termine: '	אֶחָד	', senza: '	אחד	', traslitterazione: '	’eḥāḏ	', significato: '	uno	', grammatica: '	agg. numerale	', altro: '	cstr. אַחַד	', id: 	6	, lettera: '	א	'},
{ key: '	eykah	', termine: '	אֵיכָה	', senza: '	איכה	', traslitterazione: '	’êḵāh	', significato: '	come? come mai?	', grammatica: '	particella interrogativa	', altro: '		', id: 	7	, lettera: '	א	'},
{ key: '	eyn	', termine: '	אֵין	', senza: '	אין	', traslitterazione: '	’ên	', significato: '	non c’è, non ci sono, non esiste	', grammatica: '	particella avverbiale di negazione	', altro: '		', id: 	8	, lettera: '	א	'},
{ key: '	ays	', termine: '	אִישׁ	', senza: '	אישׁ	', traslitterazione: '	’îš	', significato: '	uomo, marito, maschio	', grammatica: '	n. m.	', altro: '	cstr. אִישׁ - pl. ass. אֲנָשִׁים - cstr. אַנְשֵׁי	', id: 	9	, lettera: '	א	'},
{ key: '	ak	', termine: '	אַךְ	', senza: '	אך	', traslitterazione: '	’aḵ	', significato: '	certamente, di certo, sicuramente	', grammatica: '	particella avverbiale di affermazione	', altro: '		', id: 	10	, lettera: '	א	'},
{ key: '	akal	', termine: '	אָכַל	', senza: '	אכל	', traslitterazione: '	’āḵal	', significato: '	mangiare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, mangiò; ptc. att. אֹכֵל;	', id: 	11	, lettera: '	א	'},
{ key: '	ael	', termine: '	אֶל	', senza: '	אל	', traslitterazione: '	’el	', significato: '	a, verso	', grammatica: '	prep. di moto al luogo, di direzione	', altro: '		', id: 	12	, lettera: '	א	'},
{ key: '	aim	', termine: '	אִם	', senza: '	אם	', traslitterazione: '	’im	', significato: '	se	', grammatica: '	cong.	', altro: '		', id: 	13	, lettera: '	א	'},
{ key: '	aem	', termine: '	אֵם	', senza: '	אם	', traslitterazione: '	’ēm	', significato: '	madre	', grammatica: '	n.f.	', altro: '		', id: 	14	, lettera: '	א	'},
{ key: '	amar	', termine: '	אָמַר	', senza: '	אמר	', traslitterazione: '	’āmar	', significato: '	dire, pronunciare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, disse;	', id: 	15	, lettera: '	א	'},
{ key: '	emet	', termine: '	אֱמֶת	', senza: '	אמת	', traslitterazione: '	’æmeṯ	', significato: '	verità, affidabilità, correttezza, fedeltà, costanza, fermezza	', grammatica: '	n. f.	', altro: '	cstr. אֱמֶת	', id: 	16	, lettera: '	א	'},
{ key: '	aesel	', termine: '	אֵ֫צֶל	', senza: '	אצל	', traslitterazione: '	’ḗṣel	', significato: '	vicino, accanto, presso, in prossimità di	', grammatica: '	prep.	', altro: '		', id: 	17	, lettera: '	א	'},
{ key: '	eres	', termine: '	אֶ֫רֶץ	', senza: '	ארץ	', traslitterazione: '	’ereṣ	', significato: '	terra, paese, suolo	', grammatica: '	n. f.	', altro: '	con articolo הָאָ֫רֶץ - pl. אֲרָצוֹת - cstr. אַרְצוֹת	', id: 	18	, lettera: '	א	'},
{ key: '	aissah	', termine: '	אִשָּׁה	', senza: '	אשה	', traslitterazione: '	’iššāh	', significato: '	donna, moglie, femmina	', grammatica: '	n. f.	', altro: '	cstr. אֵשֶׁת - pl. ass. נָשִׁים - cstr. נְשֵׁי	', id: 	19	, lettera: '	א	'},

/*Qui inizia Bet*/
{ key: '	beth	', termine: '	ב	', senza: '	ב	', traslitterazione: '	ḇ	', significato: '	beth	', grammatica: '		', altro: '		', id: 	100	, lettera: '	ב	'},
{ key: '	beged	', termine: '	בֶּ֫גֶד	', senza: '	בגד	', traslitterazione: '	beḡeḏ	', significato: '	indumento, mantello	', grammatica: '	n. m.	', altro: '	pl. בְּגָדִים - cstr. בִּגְדֵי	', id: 	101	, lettera: '	ב	'},
{ key: '	boa	', termine: '	בּוֹא	', senza: '	בוא	', traslitterazione: '	bô’	', significato: '	venire, entrare, andare	', grammatica: '	v.	', altro: '	בָּא Qal, qatal, 3 ms, entrò, venne, andò	', id: 	102	, lettera: '	ב	'},
{ key: '	bahar	', termine: '	בָּחַר	', senza: '	בחר	', traslitterazione: '	bāḥar	', significato: '	scegliere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, scelse, ha scelto	', id: 	103	, lettera: '	ב	'},
{ key: '	bayin	', termine: '	בַּ֫יִן	', senza: '	בין	', traslitterazione: '	báyin	', significato: '	distanza, spazio tra, intervallo, tra	', grammatica: '	sostantivo o prep.	', altro: '	cstr. בֵּין	', id: 	104	, lettera: '	ב	'},
{ key: '	bayit	', termine: '	בַּ֫יִת	', senza: '	בית	', traslitterazione: '	báyit	', significato: '	casa, abitazione	', grammatica: '	n. m.	', altro: '	cstr. בֵּית - pl. בָּֽתִּים - cstr. בָּתֵּי	', id: 	105	, lettera: '	ב	'},
{ key: '	ben	', termine: '	בֵּן	', senza: '	בן	', traslitterazione: '	bēn	', significato: '	figlio	', grammatica: '	n. m.	', altro: '	cstr. בֵּן - pl. בָּנִים - cstr. בְּנֵי	', id: 	106	, lettera: '	ב	'},
{ key: '	barah	', termine: '	בָּרַח	', senza: '	ברח	', traslitterazione: '	bāraḥ	', significato: '	fuggire, scappare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fuggì, scappò; 	', id: 	107	, lettera: '	ב	'},
{ key: '	betulah	', termine: '	בְּתוּלָה	', senza: '	בתולה	', traslitterazione: '	beṯûlāh	', significato: '	vergine	', grammatica: '	n. f.	', altro: '	cstr. בְּתוּלַת - pl. f. בְּתוּלוֹת	', id: 	108	, lettera: '	ב	'},

/*Qui inizia Ghimel*/
{ key: '	ghimel	', termine: '	ג	', senza: '	ג	', traslitterazione: '	g̱	', significato: '	ghìmel	', grammatica: '		', altro: '		', id: 	200	, lettera: '	ג	'},
{ key: '	gadol	', termine: '	גָּדוֹל	', senza: '	גדול	', traslitterazione: '	gāḏôl	', significato: '	grande, importante	', grammatica: '	agg.	', altro: '	cstr. גְּדוֹל - s. f. גְּדוֹלָה -  pl. m. גְּדוֹלִים - pl. f. גְּדוֹלוֹת	', id: 	201	, lettera: '	ג	'},
{ key: '	galah	', termine: '	גָּלָה	', senza: '	גלה	', traslitterazione: '	gālāh	', significato: '	scoprire, rimuovere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, scoprì, rimosse, dislocò, partì, andò in esilio;	', id: 	202	, lettera: '	ג	'},
{ key: '	gillayon	', termine: '	גִּלָּיוֹן	', senza: '	גליון	', traslitterazione: '	gillāyôn	', significato: '	tavolo, tavoletta	', grammatica: '	n. m.	', altro: '	pl. con articolo הַגִּלְיֹנִים	', id: 	203	, lettera: '	ג	'},
{ key: '	gamal	', termine: '	גָּמָל	', senza: '	גמל	', traslitterazione: '	gāmāl	', significato: '	cammello	', grammatica: '	n. m.	', altro: '	cstr. גְּמָל - pl. irreg. גְּמַלִּים - cstr. גְּמַלֵּי	', id: 	204	, lettera: '	ג	'},
{ key: '	gannab	', termine: '	גַּנָּב	', senza: '	גנב	', traslitterazione: '	gannāḇ	', significato: '	ladro	', grammatica: '	n. m.	', altro: '	pl. גַּנָּבִים	', id: 	205	, lettera: '	ג	'},

/*Qui inizia Daleth*/
{ key: '	daleth	', termine: '	ד	', senza: '	ד	', traslitterazione: '	ḏ	', significato: '	dalet	', grammatica: '		', altro: '		', id: 	300	, lettera: '	ד	'},
{ key: '	dabar	', termine: '	דָּבַר	', senza: '	דבר	', traslitterazione: '	dāḇar	', significato: '	parlare	', grammatica: '	v.	', altro: '	דַּבֵּר Piel, infinito, parlare	', id: 	301	, lettera: '	ד	'},
{ key: '	dabar	', termine: '	דָּבָר	', senza: '	דבר	', traslitterazione: '	dāḇār	', significato: '	parola, discorso, fatto	', grammatica: '	n. m. 	', altro: '	cstr. דְּבַר - pl. ass. דְּבָרִים - cstr. דִּבְרֵי	', id: 	302	, lettera: '	ד	'},
{ key: '	debas	', termine: '	דְּבַשׁ	', senza: '	דבשׁ	', traslitterazione: '	deḇaš	', significato: '	miele	', grammatica: '	n. m.	', altro: '		', id: 	303	, lettera: '	ד	'},
{ key: '	dal	', termine: '	דַּל	', senza: '	דל	', traslitterazione: '	dal	', significato: '	povero, basso, debole, magro	', grammatica: '	agg.	', altro: '	f. s. דַּלָּה - pl. m. דַּלִּים - pl. f. דַּלּוֹת	', id: 	304	, lettera: '	ד	'},
{ key: '	derek	', termine: '	דֶּ֫רֶךְ	', senza: '	דרך	', traslitterazione: '	dérek	', significato: '	strada, via, distanza, viaggio	', grammatica: '	n. m. (o f.)	', altro: '	cstr. דֶּ֫רֶךְ - du. דְּרָכַ֫יִם - pl. ass. דְּרָכִים - cstr. דַּרְכֵי	', id: 	305	, lettera: '	ד	'},
{ key: '	daras	', termine: '	דָּרַשׁ	', senza: '	דרשׁ	', traslitterazione: '	dāraš	', significato: '	consulta, informarsi, cercare, ricorre a	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, consultò; impv. ms דְּרָשׁ 	', id: 	306	, lettera: '	ד	'},

/*Qui inizia He*/
{ key: '	he	', termine: '	ה	', senza: '	ה	', traslitterazione: '	h	', significato: '		', grammatica: '		', altro: '		', id: 	400	, lettera: '	ה	'},
{ key: '	ha	', termine: ' ּ הַ ', senza: '	ה 	', traslitterazione: '	ha	', significato: '	il, lo, la, i, gli, le	', grammatica: '	art. det.	', altro: '	oppure הַ ּ, הַ, הָ, הֶ	', id: 	401	, lettera: '	ה	'},
{ key: '	hayah	', termine: '	הָיָה	', senza: '	היה	', traslitterazione: '	hāyāh	', significato: '	essere, diventare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fu	', id: 	402	, lettera: '	ה	'},
{ key: '	har	', termine: '	הַר	', senza: '	הר	', traslitterazione: '	har	', significato: '	monte, montagna, collina, regione collinare	', grammatica: '	n. m.	', altro: '	con articolo הָהָר - cstr. הַר -  pl. ass. הָרִים - con articolo הֶהָרִים - cstr. הָרֵי	', id: 	403	, lettera: '	ה	'},
{ key: '	harah	', termine: '	הרה	', senza: '	הרה	', traslitterazione: '	hārāh	', significato: '	concepire, essere incinta	', grammatica: '	v.	', altro: '		', id: 	404	, lettera: '	ה	'},
{ key: '	harah	', termine: '	הָרָה	', senza: '	הרה	', traslitterazione: '	hārāh	', significato: '	incinta, gravida	', grammatica: '	agg. f. s.	', altro: '	cstr. הֲרַת - pl. cstr. הָרוֹת	', id: 	405	, lettera: '	ה	'}


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
