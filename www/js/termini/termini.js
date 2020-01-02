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
{ key: '	he	', termine: '	ה	', senza: '	ה	', traslitterazione: '	h	', significato: '	he	', grammatica: '		', altro: '		', id: 	400	, lettera: '	ה	'},
{ key: '	ha	', termine: ' ּ הַ ', senza: '	ה 	', traslitterazione: '	ha	', significato: '	il, lo, la, i, gli, le	', grammatica: '	art. det.	', altro: '	oppure הַ ּ, הַ, הָ, הֶ	', id: 	401	, lettera: '	ה	'},
{ key: '	hayah	', termine: '	הָיָה	', senza: '	היה	', traslitterazione: '	hāyāh	', significato: '	essere, diventare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fu	', id: 	402	, lettera: '	ה	'},
{ key: '	har	', termine: '	הַר	', senza: '	הר	', traslitterazione: '	har	', significato: '	monte, montagna, collina, regione collinare	', grammatica: '	n. m.	', altro: '	con articolo הָהָר - cstr. הַר -  pl. ass. הָרִים - con articolo הֶהָרִים - cstr. הָרֵי	', id: 	403	, lettera: '	ה	'},
{ key: '	harah	', termine: '	הרה	', senza: '	הרה	', traslitterazione: '	hārāh	', significato: '	concepire, essere incinta	', grammatica: '	v.	', altro: '		', id: 	404	, lettera: '	ה	'},
{ key: '	harah	', termine: '	הָרָה	', senza: '	הרה	', traslitterazione: '	hārāh	', significato: '	incinta, gravida	', grammatica: '	agg. f. s.	', altro: '	cstr. הֲרַת - pl. cstr. הָרוֹת	', id: 	405	, lettera: '	ה	'},

/*Qui inizia Waw*/
{ key: '	waw	', termine: '	ו	', senza: '	ו	', traslitterazione: '	w	', significato: '	waw	', grammatica: '		', altro: '		', id: 	500	, lettera: '	ו	'},
{ key: '	we	', termine: '	וְ	', senza: '	ו	', traslitterazione: '	we	', significato: '	e [viene prefisso direttamente alla parola seguente]	', grammatica: '	cong.	', altro: '	può assumere la forma וּ û oppure וָ wā	', id: 	501	, lettera: '	ו	'},

/*Qui inizia Zain*/
{ key: '	zain	', termine: '	ז	', senza: '	ז	', traslitterazione: '	z	', significato: '	zain	', grammatica: '		', altro: '		', id: 	600	, lettera: '	ז	'},
{ key: '	zahab	', termine: '	זָהָב	', senza: '	זהב	', traslitterazione: '	zāhāḇ	', significato: '	oro	', grammatica: '	n. m.	', altro: '	cstr. זְהַב	', id: 	601	, lettera: '	ז	'},
{ key: '	zakar	', termine: '	זָכַר	', senza: '	זכר	', traslitterazione: '	zāḵar	', significato: '	ricordare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, ricordò, custodì, riportò alla mente, richiamò un’esperienza o un sogno;	', id: 	602	, lettera: '	ז	'},
{ key: '	zanah	', termine: '	זָנָה	', senza: '	זנה	', traslitterazione: '	zānāh	', significato: '	prostituirsi, fornicare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, si prostituì, fornicò;	', id: 	603	, lettera: '	ז	'},
{ key: '	zenunym	', termine: '	זְנוּנִים	', senza: '	זנונים	', traslitterazione: '	zenûnîm	', significato: '	(pl. astratto) fornicazione	', grammatica: '	n. m.	', altro: '	cstr. זְנוּנֵי	', id: 	604	, lettera: '	ז	'},
{ key: '	zaqen	', termine: '	זָקֵן	', senza: '	זקן	', traslitterazione: '	zāqēn	', significato: '	vecchio/a, anziano/a (di una città) 	', grammatica: '	agg. (usato come sost.)	', altro: '	cstr. זְקַן -  pl. m. זְקֵנִים - pl. f. זְקֵנוֹת - pl. m. cstr. זִקְנֵי	', id: 	605	, lettera: '	ז	'},
{ key: '	zera	', termine: '	זֶ֫רַע	', senza: '	זרע	', traslitterazione: '	zéra‛	', significato: '	semina, seme, prole, discendenza	', grammatica: '	n. m. 	', altro: '	cstr. זֶרַע - 	', id: 	606	, lettera: '	ז	'},

/*Qui inizia Heth*/
{ key: '	h	', termine: '	ח	', senza: '	ח	', traslitterazione: '	ḥ	', significato: '	ḥeth	', grammatica: '		', altro: '		', id: 	700	, lettera: '	ח	'},
{ key: '	hadal	', termine: '	חָדַל	', senza: '	חדל	', traslitterazione: '	ḥāḏal	', significato: '	astenersi, smettere, cessare	', grammatica: '	v. 	', altro: '	Qal, qatal, 3 ms, cessò	', id: 	701	, lettera: '	ח	'},
{ key: '	hozeh	', termine: '	חֹזֶה	', senza: '	חזה	', traslitterazione: '	ḥōzeh	', significato: '	veggente, visionario, profeta (sinonimo di נָבִיא)	', grammatica: '	n. m.	', altro: '	cstr. חֹזֵה - pl. ass. חֹזִים	', id: 	702	, lettera: '	ח	'},
{ key: '	hayil	', termine: '	חַ֫יִל	', senza: '	חיל	', traslitterazione: '	ḥayil	', significato: '	forza, ricchezza, esercito, efficienza	', grammatica: '	n. m.	', altro: '	cstr. חֵיל - pl. ass. חֲיָלִים	', id: 	703	, lettera: '	ח	'},
{ key: '	hocmah	', termine: '	חָכְמָה	', senza: '	חכמה	', traslitterazione: '	ḥocmāh	', significato: '	sapienza	', grammatica: '	n. f.	', altro: '	cstr. חָכְמַת - pl. ass. חָכְמוֹת	', id: 	704	, lettera: '	ח	'},
{ key: '	hemah	', termine: '	חֶמְאָה	', senza: '	חמאה	', traslitterazione: '	ḥem’āh	', significato: '	cagliata, panna, ricotta	', grammatica: '	n. f.	', altro: '	cstr. חֶמְאַת	', id: 	705	, lettera: '	ח	'},
{ key: '	hereb	', termine: '	חֶ֫רֶב	', senza: '	חרב	', traslitterazione: '	ḥéreḇ	', significato: '	spada	', grammatica: '	n. f.	', altro: '	cstr. חֶ֫רֶב - pl. ass. חֲרָבוֹת - cstr. חַרְבוֹת	', id: 	706	, lettera: '	ח	'},
{ key: '	hasah	', termine: '	חָשָׁה	', senza: '	חשׁה	', traslitterazione: '	ḥāšāh	', significato: '	essere silenzioso, inattivo, immobile	', grammatica: '	v.	', altro: '	Hifil, ptc. s. m. מַחְשֶׁה - pl. m. מַחְשִׁים	', id: 	707	, lettera: '	ח	'},
{ key: '	hag	', termine: '	חַג	', senza: '	חג	', traslitterazione: '	ḥag̱	', significato: '	festa, festa del pellegrinaggio	', grammatica: '	n. m.	', altro: '	con articolo הֶחָג - cstr. חַג - pl. חַגִּים	', id: 	708	, lettera: '	ח	'},

/*Qui inizia Teth*/
{ key: '	t	', termine: '	ט	', senza: '	ט	', traslitterazione: '	ṭ	', significato: '	ṭeth	', grammatica: '		', altro: '		', id: 	800	, lettera: '	ט	'},
{ key: '	tob	', termine: '	טוֹב	', senza: '	טוב	', traslitterazione: '	ṭôḇ	', significato: '	buono, bello, piacevole	', grammatica: '	agg.	', altro: '	s. f. טוֹבָה - cstr. טוֹבַת - pl. m. טוֹבִים - cstr. טוֹבֵי - pl. f. טוֹבוֹת	', id: 	801	, lettera: '	ט	'},

/*Qui inizia Yod*/
{ key: '	yod	', termine: '	י	', senza: '	י	', traslitterazione: '	y	', significato: '	yod	', grammatica: '		', altro: '		', id: 	900	, lettera: '	י	'},
{ key: '	yad	', termine: '	יָד	', senza: '	יד	', traslitterazione: '	yāḏ	', significato: '	mano	', grammatica: '	n. f.	', altro: '	cstr. יַד	', id: 	901	, lettera: '	י	'},
{ key: '	yehudah	', termine: '	יְהוּדָה	', senza: '	יהודה	', traslitterazione: '	yehûḏāh	', significato: '	Giuda	', grammatica: '	nome proprio	', altro: '	di persona, di territorio, di tribù, di nazione	', id: 	902	, lettera: '	י	'},
{ key: '	yehosappat	', termine: '	יְהוֹשָׁפָט	', senza: '	יהושפט	', traslitterazione: '	yehôšāp̱āṭ	', significato: '	Giòsafat	', grammatica: '	n. proprio di persona	', altro: '	Giòsafat, re di Giuda	', id: 	903	, lettera: '	י	'},
{ key: '	yom	', termine: '	יוֹם	', senza: '	יום	', traslitterazione: '	yôm	', significato: '	giorno	', grammatica: '	n. m.	', altro: '	cstr. יוֹם - pl. יָמִים - cstr. יְמֵי	', id: 	904	, lettera: '	י	'},
{ key: '	yakol	', termine: '	יָכֹל	', senza: '	יכל	', traslitterazione: '	yāḵōl	', significato: '	essere in grado	', grammatica: '	v.	', altro: '	oppure יָכוֹל - Qal, qatal, 3 ms, fu in grado, riuscì	', id: 	905	, lettera: '	י	'},
{ key: '	yalad	', termine: '	יָלַד	', senza: '	ילד	', traslitterazione: '	yālaḏ	', significato: '	generare, partorire	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, generò	', id: 	906	, lettera: '	י	'},
{ key: '	yam	', termine: '	יָם	', senza: '	ים	', traslitterazione: '	yām	', significato: '	mare, ovest	', grammatica: '	n. m.	', altro: '	cstr. יָם - pl. ass. יַמִּים	', id: 	907	, lettera: '	י	'},
{ key: '	yaar	', termine: '	יַ֫עַר	', senza: '	יער	', traslitterazione: '	yá‘ar	', significato: '	foresta, bosco	', grammatica: '	n. m.	', altro: '	cstr. יַ֫עַר - pl. יְעָרִים - anche  יְעָרוֹת	', id: 	908	, lettera: '	י	'},
{ key: '	yapeh	', termine: '	יָפֶה	', senza: '	יפה	', traslitterazione: '	yāp̱eh	', significato: '	bello, attraente	', grammatica: '	agg. m. s.	', altro: '	cstr. יְפֵה - f. s. יָפָה - cstr. יְפַת - pl. f. יָפוֹת - cstr. יְפוֹת	', id: 	909	, lettera: '	י	'},
{ key: '	yasa	', termine: '	יָצָא	', senza: '	יצא	', traslitterazione: '	yāṣā’	', significato: '	uscire, venir fuori	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, uscì	', id: 	910	, lettera: '	י	'},
{ key: '	yaqar	', termine: '	יָקָר	', senza: '	יקר	', traslitterazione: '	yāqār	', significato: '	prezioso, raro, splendido, pesante	', grammatica: '	agg. m. s.	', altro: '	cstr. יְקַר - s. f. יְקָרָה - cstr. יִקְרַת - pl. m. יְקָרִים - pl. f. יְקָרוֹת	', id: 	911	, lettera: '	י	'},
{ key: '	yarad	', termine: '	יָרַד	', senza: '	ירד	', traslitterazione: '	yāraḏ	', significato: '	scendere, discendere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, discese; ptc. att. יֹרֵד	', id: 	912	, lettera: '	י	'},
{ key: '	yes	', termine: '	יֵשׁ	', senza: '	ישׁ	', traslitterazione: '	yēš	', significato: '	c’è, ci sono, esiste	', grammatica: '	particella avverbiale	', altro: '		', id: 	913	, lettera: '	י	'},
{ key: '	yasar	', termine: '	יָשָׁר	', senza: '	ישר	', traslitterazione: '	yāšār	', significato: '	(in senso morale) integro, retto	', grammatica: '	agg.	', altro: '	cstr. יְשַׁר -  s. f. יְשָׁרָה - pl. m. יְשָׁרִים - pl. f. יְשָׁרוֹת	', id: 	914	, lettera: '	י	'},
{ key: '	yisrael	', termine: '	יִשְׂרָאֵל	', senza: '	ישראל	', traslitterazione: '	yiśrā’ēl	', significato: '	Israele	', grammatica: '	nome proprio	', altro: '	di persona o di popolo	', id: 	915	, lettera: '	י	'},

/*Qui inizia Kaf*/
{ key: '	kaf	', termine: '	כ	', senza: '	כ	', traslitterazione: '	ḵ	', significato: '	kaf	', grammatica: '		', altro: '		', id: 	1000	, lettera: '	כ	'},
{ key: '	kul	', termine: '	כּוּל	', senza: '	כול	', traslitterazione: '	kûl	', significato: '	comprendere, contenere	', grammatica: '	v.	', altro: '		', id: 	1001	, lettera: '	כ	'},
{ key: '	kol	', termine: '	כֹּל	', senza: '	כל	', traslitterazione: '	kōl	', significato: '	tutto, ogni, intero	', grammatica: '	n. m. 	', altro: '	oppure כּוֹל; cstr. כֹּל; con maqqef כָל־ 	', id: 	1002	, lettera: '	כ	'},
{ key: '	ken	', termine: '	כֵּן	', senza: '	כן	', traslitterazione: '	kēn	', significato: '	così	', grammatica: '	avv.	', altro: '		', id: 	1003	, lettera: '	כ	'},
{ key: '	kisse’	', termine: '	כִּסֵּא	', senza: '	כסא	', traslitterazione: '	kissē’	', significato: '	trono, posto d’onore	', grammatica: '	n. m.	', altro: '	cstr. כִּסֵּא	', id: 	1004	, lettera: '	כ	'},
{ key: '	kesep	', termine: '	כֶּ֫סֶף	', senza: '	כסף	', traslitterazione: '	késep̱	', significato: '	argento, denaro	', grammatica: '	n. m.	', altro: '		', id: 	1005	, lettera: '	כ	'},
{ key: '	kerem	', termine: '	כֶּ֫רֶם	', senza: '	כרם	', traslitterazione: '	kérem	', significato: '	vigna	', grammatica: '	n. m.	', altro: '	cstr. כֶּ֫רֶם - pl. ass. כְּרָמִים - cstr. כַּרְמֵי	', id: 	1006	, lettera: '	כ	'},
{ key: '	katab	', termine: '	כָּתַב	', senza: '	כתב	', traslitterazione: '	kāṯaḇ	', significato: '	scrivere	', grammatica: '	v. 	', altro: '	Qal, qatal, 3 ms, scrisse; ptc. att. כֹּתֵב	', id: 	1007	, lettera: '	כ	'},

/*Qui inizia Lamed*/
{ key: '	lamed	', termine: '	ל	', senza: '	ל	', traslitterazione: '	l	', significato: '	làmed	', grammatica: '		', altro: '		', id: 	1100	, lettera: '	ל	'},
{ key: '	labas	', termine: '	לָבַשׁ	', senza: '	לבשׁ	', traslitterazione: '	lāḇaš	', significato: '	indossare, vestire	', grammatica: '	v.	', altro: '	oppure לָבֵשׁ Qal, qatal, 3 ms, vestì, indossò	', id: 	1101	, lettera: '	ל	'},
{ key: '	lehem	', termine: '	לֶ֫חֶם	', senza: '	לחם	', traslitterazione: '	léḥem	', significato: '	pane, cibo	', grammatica: '	n. m.	', altro: '	(senza pl.) cstr. לֶחֶם	', id: 	1102	, lettera: '	ל	'},
{ key: '	laham	', termine: '	לָחַם	', senza: '	לחם	', traslitterazione: '	lāḥam	', significato: '	combattere, attaccare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, combatté, attaccò	', id: 	1103	, lettera: '	ל	'},
{ key: '	lahas	', termine: '	לָחַץ	', senza: '	לחץ	', traslitterazione: '	lāḥaṣ	', significato: '	premere, pressare, opprimere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, pressò, oppresse;	', id: 	1104	, lettera: '	ל	'},
{ key: '	lamad	', termine: '	לָמַד	', senza: '	למד	', traslitterazione: '	lāmaḏ	', significato: '	imparare, insegnare, esercitarsi in	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, imparò	', id: 	1105	, lettera: '	ל	'},
{ key: '	laqah	', termine: '	לָקַח	', senza: '	לקח	', traslitterazione: '	lāqaḥ	', significato: '	prendere, afferrare, conquistare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, prese	', id: 	1106	, lettera: '	ל	'},

/*Qui inizia Mem*/
{ key: '	m	', termine: '	מ	', senza: '	מ	', traslitterazione: '	m	', significato: '	mem	', grammatica: '		', altro: '		', id: 	1200	, lettera: '	מ	'},
{ key: '	maas	', termine: '	מָאַס	', senza: '	מאס	', traslitterazione: '	mā’as	', significato: '	rifiutare, rigettare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, rigettò	', id: 	1201	, lettera: '	מ	'},
{ key: '	mut	', termine: '	מוּת	', senza: '	מות	', traslitterazione: '	mûṯ	', significato: '		', grammatica: '	v.	', altro: '	מֵת: Qal, qatal, 3 ms, morì;	', id: 	1202	, lettera: '	מ	'},
{ key: '	mayim	', termine: '	מַ֫יִם	', senza: '	מים	', traslitterazione: '	máyim	', significato: '	acqua	', grammatica: '	n .m.	', altro: '	(solo plurale) - pl. cstr. מֵי o מֵימֵי	', id: 	1203	, lettera: '	מ	'},
{ key: '	malak	', termine: '	מַלְאָךְ	', senza: '	מלאך	', traslitterazione: '	mal’āḵ	', significato: '	messaggero, angelo	', grammatica: '	n. m.	', altro: '	cstr. מַלְאַךְ - pl. מַלְאָכִים	', id: 	1204	, lettera: '	מ	'},
{ key: '	milhamah	', termine: '	מִלְחָמָה	', senza: '	מלחמה	', traslitterazione: '	milḥāmāh	', significato: '	guerra, battaglia	', grammatica: '	n. f.	', altro: '	cstr. מִלְחֶ֫מֶת	', id: 	1205	, lettera: '	מ	'},
{ key: '	melek	', termine: '	מֶ֫לֶךְ	', senza: '	מלך	', traslitterazione: '	méleḵ	', significato: '	re, sovrano	', grammatica: '	n. m. 	', altro: '	pl. מְלָכִים - pl. cstr. מָלְכֵי	', id: 	1206	, lettera: '	מ	'},
{ key: '	miqdas	', termine: '	מִקְדָּשׁ	', senza: '	מקדש	', traslitterazione: '	miqdāš	', significato: '	santuario, luogo sacro	', grammatica: '	n. m.	', altro: '	cstr. מִקְדַּשׁ - pl. מִקְדָּשִׁים	', id: 	1207	, lettera: '	מ	'},
{ key: '	masah	', termine: '	מָשַׁח	', senza: '	משח	', traslitterazione: '	māšaḥ	', significato: '	ungere, spalmare, consacrare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, unse, spalmò, consacrò (ossia ungere con l’uso di olio versato sulla testa. È mettere solennemente a parte, scegliere una persona per un ufficio particolare); מָשׁ֫וּחַ Qal, part. pass. ass. m. s., essere unto	', id: 	1208	, lettera: '	מ	'},
{ key: '	masiyah	', termine: '	מַשִׁיחַ	', senza: '	משיח	', traslitterazione: '	mašîaḥ	', significato: '	unto, consacrato, messia	', grammatica: '	n. m.	', altro: '	cstr. מְשִׁיחַ	', id: 	1209	, lettera: '	מ	'},
{ key: '	mispat	', termine: '	מִשְׁפָּט	', senza: '	משפט	', traslitterazione: '	mišpāṭ	', significato: '	giudizio (l’atto di; un verdetto giudiziale), giustizia, rettitudine	', grammatica: '	n. m. 	', altro: '	cstr. מִשְׁפַּט - pl. מִשְׁפָּטִים	', id: 	1210	, lettera: '	מ	'},

/*Qui inizia Nun*/
{ key: '	n	', termine: '	נ	', senza: '	נ	', traslitterazione: '	n	', significato: '	nun	', grammatica: '		', altro: '		', id: 	1300	, lettera: '	נ	'},
{ key: '	naba’	', termine: '	נָבָא	', senza: '	נבא	', traslitterazione: '	nāḇā’	', significato: '	profetizzare	', grammatica: '	v.	', altro: '	יִתְנַבֵּא Hithpael, yiqtol, 3 ms, profetizzerà (nelle forme più antiche, estasi religiosa con o senza canto e musica; in seguito, istruzione essenzialmente religiosa, con previsione occasionale);	', id: 	1301	, lettera: '	נ	'},
{ key: '	nabi’	', termine: '	נָבִיא	', senza: '	נביא	', traslitterazione: '	nāḇî’	', significato: '	profeta, uomo ispirato, portavoce, relatore	', grammatica: '	n. m.	', altro: '	pl. נְבִיאִים oppure נְבִאִים	', id: 	1302	, lettera: '	נ	'},
{ key: '	nebiyah	', termine: '	נְבִיאָה	', senza: '	נביאה	', traslitterazione: '	neḇî’āh	', significato: '	profetessa	', grammatica: '	n. f.	', altro: '		', id: 	1303	, lettera: '	נ	'},
{ key: '	neged	', termine: '	נֶגֶד	', senza: '	נגד	', traslitterazione: '	neg̱eḏ	', significato: '	di fronte a	', grammatica: '	particella preposizionale	', altro: '		', id: 	1304	, lettera: '	נ	'},
{ key: '	nagad	', termine: '	נָגַד	', senza: '	נגד	', traslitterazione: '	nāg̱aḏ	', significato: '	dichiarare, dire	', grammatica: '	v.	', altro: '	Hiphil, qatal, 3 ms, annunciò	', id: 	1305	, lettera: '	נ	'},
{ key: '	nagah	', termine: '	נָגַהּ	', senza: '	נגה	', traslitterazione: '	nāg̱ah	', significato: '	splendere, brillare, rifulgere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, brillò, splendette	', id: 	1306	, lettera: '	נ	'},
{ key: '	nahar1	', termine: '	נָהַר	', senza: '	נהר	', traslitterazione: '	nāhar	', significato: '	scorrere, affluire	', grammatica: '	v.	', altro: '	נָהֲרוּ Qal, qatal 3plc, affluirono	', id: 	1307	, lettera: '	נ	'},
{ key: '	nahar	', termine: '	נָהָר	', senza: '	נהר	', traslitterazione: '	nāhār	', significato: '	fiume, ruscello, corso d’acqua	', grammatica: '	n. m.	', altro: '	cstr. נְהַר - pl. m. נְהָרִים  (ma anche נְהָר(וֹ)ת) - pl. cstr. נַהֲרֵי (ma anche  נַהֲרוֹת)	', id: 	1308	, lettera: '	נ	'},
{ key: '	nua‘	', termine: '	נוּעַ	', senza: '	נוע	', traslitterazione: '	nûa‘	', significato: '	tremare, agitare, vacillare,	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, tremò	', id: 	1309	, lettera: '	נ	'},
{ key: '	natas	', termine: '	נָטַשׁ	', senza: '	נטש	', traslitterazione: '	nāṭaš	', significato: '	abbandonare, rigettare, lasciare, permettere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, abbandonò, rigettò	', id: 	1310	, lettera: '	נ	'},
{ key: '	naar	', termine: '	נַ֫עַר	', senza: '	נער	', traslitterazione: '	ná‛ar	', significato: '	giovane, ragazzo, giovinetto; usato anche nel senso di domestico, servitore	', grammatica: '	n. m.	', altro: '	pl. ass. נְעָרִים - cstr. נַעֲרֵי	', id: 	1311	, lettera: '	נ	'},
{ key: '	naarah	', termine: '	נַעֲרָה	', senza: '	נערה	', traslitterazione: '	na‛arāh	', significato: '	giovane, ragazza, giovinetta,; usata anche nel senso di domestica, servitora	', grammatica: '	n. f. 	', altro: '	pl. ass. נְעָרוֹת - cstr. נַעֲרוֹת	', id: 	1312	, lettera: '	נ	'},
{ key: '	nasa’	', termine: '	נָשָׂא	', senza: '	נשא	', traslitterazione: '	nāśā’	', significato: '	sollevare, prendere, portare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, sollevò	', id: 	1313	, lettera: '	נ	'},

/*Qui inizia Samek*/
{ key: '	samek	', termine: '	ס	', senza: '	ס	', traslitterazione: '	s	', significato: '	samek	', grammatica: '		', altro: '		', id: 	1400	, lettera: '	ס	'},
{ key: '	sus	', termine: '	סוּס	', senza: '	סוס	', traslitterazione: '	sûs	', significato: '	cavallo	', grammatica: '	n. m.	', altro: '	cstr. סוּס - pl. ass. סוּסִים - pl. cstr. סוּסֵי	', id: 	1401	, lettera: '	ס	'},
{ key: '	susah	', termine: '	סוּסָה	', senza: '	סוסה	', traslitterazione: '	sûsāh	', significato: '	cavalla	', grammatica: '	n. f.	', altro: '	pl. ass. סוּסוֹת	', id: 	1402	, lettera: '	ס	'},
{ key: '	seper	', termine: '	סֵ֫פֶר	', senza: '	ספר	', traslitterazione: '	sḗp̱er	', significato: '	libro, documento, missiva, scrittura	', grammatica: '	n. m.	', altro: '	pl. סְפָרִים	', id: 	1403	, lettera: '	ס	'},
{ key: '	sariys	', termine: '	סָרִיס	', senza: '	סריס	', traslitterazione: '	sārîs	', significato: '	eunuco, capo, ufficiale	', grammatica: '	n. m.	', altro: '	cstr. סְרִיס - pl. ass. סָרִיסִים - pl. cstr.סְרִיסֵי	', id: 	1404	, lettera: '	ס	'},

/*Qui inizia Ain*/
{ key: '	ain	', termine: '	ע	', senza: '	ע	', traslitterazione: '	‛	', significato: '	‛ain	', grammatica: '		', altro: '		', id: 	1500	, lettera: '	ע	'},
{ key: '	‛ebed	', termine: '	עֶ֫בֶד	', senza: '	עבד	', traslitterazione: '	‛éḇeḏ	', significato: '	servo, schiavo	', grammatica: '	n. m.	', altro: '	cstr. עֶ֫בֶד - pl. ass. עֲבָדִים - cstr. עַבְדֵי	', id: 	1501	, lettera: '	ע	'},
{ key: '	‛abodah	', termine: '	עֲבוֹדָה	', senza: '	עבודה	', traslitterazione: '	‛aḇôḏāh	', significato: '	lavoro, servizio di servo, compito, schiavitù	', grammatica: '	n. f.	', altro: '	cstr. עֲבוֹדַת	', id: 	1502	, lettera: '	ע	'},
{ key: '	‛od	', termine: '	עוֹד	', senza: '	עוד	', traslitterazione: '	‛ôḏ	', significato: '	ancora, anche, un altro	', grammatica: '	avv.	', altro: '	oppure עֹד	', id: 	1503	, lettera: '	ע	'},
{ key: '	‛azab	', termine: '	עָזַב	', senza: '	עזב	', traslitterazione: '	‛āzaḇ	', significato: '	lasciare, abbandonare, perdere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, lascerà. (È il verbo utilizzato per indicare la deportazione in esilio)	', id: 	1504	, lettera: '	ע	'},
{ key: '	‛al	', termine: '	עַל	', senza: '	על	', traslitterazione: '	‛al	', significato: '	su, sopra	', grammatica: '	prep.	', altro: '	con maqqef עַל־; (locativo) su, (direzione) sopra, contro, (vicinanza) accanto, alla presenza di, riguardo a, a causa di; 	', id: 	1505	, lettera: '	ע	'},
{ key: '	‛alah	', termine: '	עָלָה	', senza: '	עלה	', traslitterazione: '	‛ālāh	', significato: '	salire, ascendere, scalare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, salì; impv. ms עֲלֵה	', id: 	1506	, lettera: '	ע	'},
{ key: '	‛almah	', termine: '	עַלְמָה	', senza: '	עלמה	', traslitterazione: '	‛almāh	', significato: '	giovane donna, vergine	', grammatica: '	n. f. 	', altro: '	giovane donna (matura sessualmente; domestica o appena sposata)	', id: 	1507	, lettera: '	ע	'},
{ key: '	‛im	', termine: '	עִם	', senza: '	עם	', traslitterazione: '	‛im	', significato: '	con, in compagnia di, insieme 	', grammatica: '	prep.	', altro: '		', id: 	1508	, lettera: '	ע	'},
{ key: '	‛am	', termine: '	עַם	', senza: '	עם	', traslitterazione: '	‛am	', significato: '	popolo, nazione	', grammatica: '	n. m.	', altro: '	oppure עָם; con art. הָעָם - cstr. עַם - pl. ass. עַמִּים - cstr. עַמֵּי 	', id: 	1509	, lettera: '	ע	'},
{ key: '	‛anah	', termine: '	עָנָה	', senza: '	ענה	', traslitterazione: '	‛ānāh	', significato: '	rispondere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, rispose;	', id: 	1510	, lettera: '	ע	'},
{ key: '	anan	', termine: '	עָנַן	', senza: '	ענן	', traslitterazione: '	‛ānan	', significato: '	essere indovino, praticare la stregoneria 	', grammatica: '	v.	', altro: '	עֹנְנִים Poel part. pl. m. ass. - (i divinatori interpretavano il ronzio degli insetti, il sussurro delle foglie, il movimento delle nuvole, ecc)	', id: 	1511	, lettera: '	ע	'},
{ key: '	‛es	', termine: '	עֵץ	', senza: '	עץ	', traslitterazione: '	‛ēṣ	', significato: '	albero, legno	', grammatica: '	n. m.	', altro: '	pl. ass. עֵצִים - cstr. עֲצֵי	', id: 	1512	, lettera: '	ע	'},
{ key: '	‛esah	', termine: '	עֵצָה	', senza: '	עצה	', traslitterazione: '	‛ēṣāh	', significato: '	consiglio, avvertimento, decisione, trama	', grammatica: '	n. f.	', altro: '	cstr. עֲצַת - pl. ass. עֵצוֹת	', id: 	1513	, lettera: '	ע	'},
{ key: '	‛asiyr	', termine: '	עָשִׁיר	', senza: '	עשיר	', traslitterazione: '	‛āšîr	', significato: '	ricco	', grammatica: '	agg. o n. m.	', altro: '	pl. ass. עֲשִׁירִים - pl. cstr. עֲשִׁירֵי	', id: 	1514	, lettera: '	ע	'},

/*Qui inizia Pe*/
{ key: '	pe	', termine: '	פ	', senza: '	פ	', traslitterazione: '	p̱	', significato: '	pe	', grammatica: '		', altro: '		', id: 	1600	, lettera: '	פ	'},
{ key: '	peh	', termine: '	פֶּה	', senza: '	פה	', traslitterazione: '	peh	', significato: '	bocca	', grammatica: '	n. m.	', altro: '	cstr. פִּי - pl. פִּיּוֹת	', id: 	1601	, lettera: '	פ	'},
{ key: '	poh	', termine: '	פֹּה	', senza: '	פה	', traslitterazione: '	pōh	', significato: '	qui	', grammatica: '	avv.	', altro: '	oppure פּוֹ, פֹּא	', id: 	1602	, lettera: '	פ	'},
{ key: '	paneh	', termine: '	פָּנֶה	', senza: '	פנה	', traslitterazione: '	pāneh	', significato: '	viso, faccia; davanti, di fronte	', grammatica: '	n. m. o f. o avv.	', altro: '	viso, faccia;  oppure come  avv. di fronte; pl. פָּנִים - cstr. פְּנֵי	', id: 	1603	, lettera: '	פ	'},

/*Qui inizia Tzade*/
{ key: '	s	', termine: '	צ	', senza: '	צ	', traslitterazione: '	ṣ	', significato: '	tzade	', grammatica: '		', altro: '		', id: 	1700	, lettera: '	צ	'},
{ key: '	son	', termine: '	צֹאן	', senza: '	צאן	', traslitterazione: '	ṣō’n	', significato: '	pecore, capre	', grammatica: '	n. coll. f. 	', altro: '	(senza pl.) termine collettivo per bestiame piccolo (pecore, capre)	', id: 	1701	, lettera: '	צ	'},
{ key: '	saddiq	', termine: '	צַדִּיק	', senza: '	צדיק	', traslitterazione: '	ṣadîq	', significato: '	giusto	', grammatica: '	agg.	', altro: '	pl. ass. צַדִּיקִים	', id: 	1702	, lettera: '	צ	'},
{ key: '	sedeq	', termine: '	צֶ֫דֶק	', senza: '	צדק	', traslitterazione: '	ṣéḏeq	', significato: '	il diritto, la giustizia, l’equità	', grammatica: '	n. m.	', altro: '	giustizia, giustezza: il diritto (naturale, morale o legale); anche (astrattamente) equità o (figurativamente) prosperità	', id: 	1703	, lettera: '	צ	'},
{ key: '	sedaqah	', termine: '	צְדָקָה	', senza: '	צדקה	', traslitterazione: '	ṣeḏāqāh	', significato: '	giustizia (oggettiva), rettitudine (soggettiva)	', grammatica: '	n. f.	', altro: '	cstr. צִדְקַת - pl. ass. צְדָקוֹת - pl. cstr. צִדְקוֹת	', id: 	1704	, lettera: '	צ	'},
{ key: '	same’	', termine: '	צָמֵא	', senza: '	צמא	', traslitterazione: '	ṣāmē’	', significato: '	assetato	', grammatica: '	agg.	', altro: '	s. f. צְמֵאָה - pl. m. צְמֵאִים - pl. f. צְמֵאוֹת	', id: 	1705	, lettera: '	צ	'},
{ key: '	saaq	', termine: '	צָעַק	', senza: '	צעק	', traslitterazione: '	ṣā‛aq	', significato: '	gridare, urlare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, gridò (nell’angoscia), chiamò ad alta voce; ptc. att. s. m. צׂעֵק - ptc. att. pl. m. צֹעֲקִים - 	', id: 	1706	, lettera: '	צ	'},
{ key: '	salmawet	', termine: '	צַלְמָ֫וֶת	', senza: '	צלמות	', traslitterazione: '	ṣalmāweṯ	', significato: '	ombra di morte, profonda tenebra, tenebra angosciante	', grammatica: '	n. m.	', altro: '		', id: 	1707	, lettera: '	צ	'},

/*Qui inizia Qof*/
{ key: '	qof	', termine: '	ק	', senza: '	ק	', traslitterazione: '	q	', significato: '	qof	', grammatica: '		', altro: '		', id: 	1800	, lettera: '	ק	'},
{ key: '	qabas	', termine: '	קָבַץ	', senza: '	קבץ	', traslitterazione: '	qāḇaṣ	', significato: '	radunare, convocare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, radunò	', id: 	1801	, lettera: '	ק	'},
{ key: '	qados	', termine: '	קָדוֹשׁ	', senza: '	קדוש	', traslitterazione: '	qāḏôš	', significato: '	sacro, santo	', grammatica: '	agg.	', altro: '	cstr. קְדוֹשׁ - s. f. קְדוֹשָׁה - pl. m. קְדוֹשִׁים - pl. f. קְדוֹשׁוֹת	', id: 	1802	, lettera: '	ק	'},
{ key: '	qol	', termine: '	קוֹל	', senza: '	קול	', traslitterazione: '	qôl	', significato: '	voce, suono	', grammatica: '	n. m.	', altro: '	cstr. קוֹל - pl. ass. קֹלוֹת	', id: 	1803	, lettera: '	ק	'},
{ key: '	qum	', termine: '	קוּם	', senza: '	קום	', traslitterazione: '	qûm	', significato: '	alzarsi, sorgere, levarsi, stare in piedi	', grammatica: '	v.	', altro: '	קָם Qal, qatal, 3 ms, si alzò 	', id: 	1804	, lettera: '	ק	'},
{ key: '	qus	', termine: '	קוּץ	', senza: '	קוץ	', traslitterazione: '	qûṣ	', significato: '	provare odio, orrore, disgusto	', grammatica: '	v.	', altro: '	קָץ Qal, participio, ms, che tu odii	', id: 	1805	, lettera: '	ק	'},
{ key: '	qaton	', termine: '	קָטֹן	', senza: '	קטן	', traslitterazione: '	qāṭōn	', significato: '	piccolo, giovane, poco importante, insignificante	', grammatica: '	agg. m. s.	', altro: '	s. f. קְטַנָּה - pl. m. קְטַנִּים - pl. f. קְטַנּוֹת	', id: 	1806	, lettera: '	ק	'},
{ key: '	qara’	', termine: '	קָרָא	', senza: '	קרא	', traslitterazione: '	qārā’	', significato: '	chiamare, proclamare, leggere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, chiamò, proclamò, lesse;	', id: 	1807	, lettera: '	ק	'},
{ key: '	qiryah	', termine: '	קִרְיָה	', senza: '	קריה	', traslitterazione: '	qiryāh	', significato: '	città, villaggio	', grammatica: '	n. f. 	', altro: '	cstr. קִרְיַת	', id: 	1808	, lettera: '	ק	'},
{ key: '	qaseh	', termine: '	קָשֶׁה	', senza: '	קשה	', traslitterazione: '	qāšeh	', significato: '	duro, difficile, severo	', grammatica: '	agg.	', altro: '	s. f. קָשָׁה - cstr. קְשַׁת - pl. m. קָשִׁים - cstr. קְשֵׁי - pl. f. קָשׁוֹת	', id: 	1809	, lettera: '	ק	'},
{ key: '	qasar	', termine: '	קָשַׁר	', senza: '	קשר	', traslitterazione: '	qāšar	', significato: '	legare, cospirare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, legò, cospirò;	', id: 	1810	, lettera: '	ק	'},
{ key: '	qasyr	', termine: '	קָצִיר	', senza: '	קציר	', traslitterazione: '	qāṣîr	', significato: '	mietitura, raccolto	', grammatica: '	n. m.	', altro: '	cstr. קְצִיר 	', id: 	1811	, lettera: '	ק	'},
{ key: '	qaneh	', termine: '	קָנֶה	', senza: '	קנה	', traslitterazione: '	qāneh	', significato: '	canna, stelo, gambo	', grammatica: '	n. m.	', altro: '	cstr. קְנֵה - pl. m. קָנִים - cstr. קְנֵי	', id: 	1812	, lettera: '	ק	'},

/*Qui inizia Resh*/
{ key: '	r	', termine: '	ר	', senza: '	ר	', traslitterazione: '	r	', significato: '	resh	', grammatica: '		', altro: '		', id: 	1900	, lettera: '	ר	'},
{ key: '	ros	', termine: '	רֹאשׁ	', senza: '	ראש	', traslitterazione: '	rō’š	', significato: '	testa, cima, capelli della testa; capo, capitale	', grammatica: '	n. m.	', altro: '	cstr. רֹאשׁ - pl. רָאשִׁים - cstr. רָאשֵׁי	', id: 	1901	, lettera: '	ר	'},
{ key: '	resiyt	', termine: '	רֵאשִׁית	', senza: '	ראשׁית	', traslitterazione: '	rē’šît	', significato: '	principio, primo, inizio	', grammatica: '	n. f.	', altro: '	cstr. רֵאשִׁית o רֵשִׁית	', id: 	1902	, lettera: '	ר	'},
{ key: '	rab	', termine: '	רַב	', senza: '	רב	', traslitterazione: '	raḇ	', significato: '	molto, molti, grandi	', grammatica: '	agg. m. s.	', altro: '	cstr. רַב - s. f. רַבָּה - cstr. רַבַּת - pl. m. רַבִּים - pl. f. רַבּוֹת	', id: 	1903	, lettera: '	ר	'},
{ key: '	rabah	', termine: '	רָבָה	', senza: '	רבה	', traslitterazione: '	rāḇāh	', significato: '	essere o diventare molto, moltiplicare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, moltiplicò, divenne numeroso	', id: 	1904	, lettera: '	ר	'},
{ key: '	rak	', termine: '	רַךְ	', senza: '	רך	', traslitterazione: '	raḵ	', significato: '	tenero, delicato, morbido, debole	', grammatica: '	agg. m.s.	', altro: '	cstr. רַךְ - f. s. רַכָּה - pl. m. רַכִּים- pl. f. רַכּוֹת	', id: 	1905	, lettera: '	ר	'},
{ key: '	ra‘	', termine: '	רַע	', senza: '	רע	', traslitterazione: '	ra‘	', significato: '	cattivo, malvagio, maligno, spiacevole	', grammatica: '	agg. m. s.	', altro: '	pl. ass. רָעִים - cstr. רָעֵי - s. f. רָעָה - pl. ass. רָעוֹת - 	', id: 	1906	, lettera: '	ר	'},
{ key: '	raah	', termine: '	רָעָה	', senza: '	רעה	', traslitterazione: '	rā‘āh	', significato: '	male, miseria, angoscia, ferite	', grammatica: '	n. f.	', altro: '	cstr. רָעַת - pl. ass.  רָעוֹת oppure רָעֹת 	', id: 	1907	, lettera: '	ר	'},
{ key: '	raq	', termine: '	רַק	', senza: '	רק	', traslitterazione: '	raq	', significato: '	solamente	', grammatica: '	avv.	', altro: '	con forza restrittiva: solamente, assolutamente, sicuramente	', id: 	1908	, lettera: '	ר	'},
{ key: '	rasas	', termine: '	רָצַץ	', senza: '	רצץ	', traslitterazione: '	rāṣaṣ	', significato: '	schiacciare, incrinare, opprimere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, schiacciò; רָצוּץ part. pass. m. s. ass.	', id: 	1909	, lettera: '	ר	'},

/*Qui inizia Śin*/
{ key: '	sin	', termine: '	שׂ	', senza: '	ש	', traslitterazione: '	ś	', significato: '	śin	', grammatica: '		', altro: '		', id: 	2000	, lettera: '	שׂ	'},
{ key: '	sadeh	', termine: '	שָׂדֶה	', senza: '	שדה	', traslitterazione: '	śāḏeh	', significato: '	campo, regione	', grammatica: '	n. m.	', altro: '	cstr. שְׂדֵה - pl. ass. שָׂדוֹת - cstr. שְׂדוֹת ,שְׂדֵי	', id: 	2001	, lettera: '	שׂ	'},
{ key: '	sane’	', termine: '	שָׂנֵא	', senza: '	שנא	', traslitterazione: '	śānē’	', significato: '	odiare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, odiò	', id: 	2002	, lettera: '	שׂ	'},

/*Qui inizia Shin*/
{ key: '	shin	', termine: '	שׁ	', senza: '	ש	', traslitterazione: '	š	', significato: '	šin	', grammatica: '		', altro: '		', id: 	2100	, lettera: '	שׁ	'},
{ key: '	sabar	', termine: '	שָׁבַר	', senza: '	שבר	', traslitterazione: '	šāḇar	', significato: '	spezzare, rompere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, spezzò	', id: 	2101	, lettera: '	שׁ	'},
{ key: '	sub	', termine: '	שׁוּב	', senza: '	שוב	', traslitterazione: '	šûḇ	', significato: '	tornare, ritornare	', grammatica: '	v.	', altro: '	שָׁב Qal, qatal, 3 ms, tornò, ritornò	', id: 	2102	, lettera: '	שׁ	'},
{ key: '	sir	', termine: '	שִׁיר	', senza: '	שיר	', traslitterazione: '	šîr	', significato: '	canto, canzone	', grammatica: '	n. m.	', altro: '	pl. ass. שִׁירִים	', id: 	2103	, lettera: '	שׁ	'},
{ key: '	salom	', termine: '	שָׁלוֹם	', senza: '	שלום	', traslitterazione: '	šālôm	', significato: '	pace, armonia, completezza, solidità, benessere	', grammatica: '	n. m.	', altro: '	cstr. שְׁלוֹם- pl. ass. שְׁלוֹמִים	', id: 	2104	, lettera: '	שׁ	'},
{ key: '	sulhan	', termine: '	שֻׁלְחָן	', senza: '	שלחן	', traslitterazione: '	šulḥān	', significato: '	tavolo	', grammatica: '	n. m.	', altro: '	cstr. שֻׁלְחַן - pl. שֻׁלְחָנוֹת	', id: 	2105	, lettera: '	שׁ	'},
{ key: '	selisi	', termine: '	שְׁלִישִׁי	', senza: '	שלישי	', traslitterazione: '	šelîšî	', significato: '	terzo	', grammatica: '	agg. numerale ordinario m.	', altro: '	f. שְׁלִישִׁית 	', id: 	2106	, lettera: '	שׁ	'},
{ key: '	salem	', termine: '	שָׁלֵם	', senza: '	שלם	', traslitterazione: '	šālēm	', significato: '	integro, sano	', grammatica: '	agg. m.s.	', altro: '	s. f. שְׁלֵמָה - pl. m. שְׁלֵמִים - pl. f. שְׁלֵמוֹת	', id: 	2107	, lettera: '	שׁ	'},
{ key: '	salem	', termine: '	שָׁלֵם	', senza: '	שלם	', traslitterazione: '	šālēm	', significato: '	essere completo, illeso, sano; fare pace; essere terminato, pagare, rimborsare	', grammatica: '	v.	', altro: '	שִׁלַּם Piel, qatal, 3 ms, è stato completato	', id: 	2108	, lettera: '	שׁ	'},
{ key: '	sam	', termine: '	שָׁם	', senza: '	שם	', traslitterazione: '	šām	', significato: '	lì, in quel posto, là	', grammatica: '	avv. di luogo	', altro: '		', id: 	2109	, lettera: '	שׁ	'},
{ key: '	semen	', termine: '	שֶׁ֫מֶן	', senza: '	שמן	', traslitterazione: '	šémen	', significato: '	grasso, olio	', grammatica: '	n. m. 	', altro: '	pl. שְׁמָנִים	', id: 	2110	, lettera: '	שׁ	'},
{ key: '	sama‘	', termine: '	שָׁמַע	', senza: '	שמע	', traslitterazione: '	šāma‘	', significato: '	ascoltare (con attenzione)	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, ascoltò	', id: 	2111	, lettera: '	שׁ	'},
{ key: '	samar	', termine: '	שָׁמַר	', senza: '	שמר	', traslitterazione: '	šāmar	', significato: '	vigilare, custodire, tenere, guardare, preservare	', grammatica: '	v. 	', altro: '	Qal, qatal, 3 ms, custodì	', id: 	2112	, lettera: '	שׁ	'},
{ key: '	semes	', termine: '	שֶׁ֫מֶשׁ	', senza: '	שמש	', traslitterazione: '	šémeš	', significato: '	sole	', grammatica: '	n. f. o m.	', altro: '		', id: 	2113	, lettera: '	שׁ	'},
{ key: '	sanah	', termine: '	שָׁנָה	', senza: '	שנה	', traslitterazione: '	šānāh	', significato: '	anno	', grammatica: '	n. f.	', altro: '	cstr. שְׁנַת - duale ass. שְׁנָתַיִם - pl. ass. שָׁנִים - cstr. שְׁנֵי	', id: 	2114	, lettera: '	שׁ	'},
{ key: '	sapat	', termine: '	שָׁפַט	', senza: '	שפט	', traslitterazione: '	šāp̱aṭ	', significato: '	giudicare, governare	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, giudicò; שֹׁפֵט part. ms	', id: 	2115	, lettera: '	שׁ	'},
{ key: '	sopet	', termine: '	שֹׁפֵט	', senza: '	שפט	', traslitterazione: '	šōp̱ēṭ	', significato: '	giudice	', grammatica: '	n. m. 	', altro: '	ptc. att. sostantivato di שָׁפַט - pl. שֹׁפְטִים	', id: 	2116	, lettera: '	שׁ	'},
{ key: '	sopar	', termine: '	שֹׁפָר	', senza: '	שפר	', traslitterazione: '	šōp̱ār	', significato: '	corno (per soffiare)	', grammatica: '	n. m.	', altro: '	oppure שׁוֹפָר; pl. ass. שׁוֹפָרוֹת - cstr. שׁוֹפְרוֹת	', id: 	2117	, lettera: '	שׁ	'},
{ key: '	saqat	', termine: '	שָׁקַט	', senza: '	שקט	', traslitterazione: '	šāqaṭ	', significato: '	essere quieto, tranquillo, calmo, indisturbato	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, fu calmo	', id: 	2118	, lettera: '	שׁ	'},
{ key: '	sem	', termine: '	שֵׁם	', senza: '	שם	', traslitterazione: '	šēm	', significato: '	nome	', grammatica: '	n. m.	', altro: '	cstr. שֵׁם - pl. שֵׁמוֹת - cstr. שֵׁמוֹת	', id: 	2119	, lettera: '	שׁ	'},
{ key: '	salal	', termine: '	שָׁלָל	', senza: '	שלל	', traslitterazione: '	šālāl	', significato: '	bottino, preda	', grammatica: '	n. m.	', altro: '	cstr. שְׁלַל	', id: 	2120	, lettera: '	שׁ	'},


/*Qui inizia Tau*/
{ key: '	tau	', termine: '	ת	', senza: '	ת	', traslitterazione: '	ṯ	', significato: '	tàu	', grammatica: '		', altro: '		', id: 	2200	, lettera: '	ת	'},
{ key: '	torah	', termine: '	תּוֹרָה	', senza: '	תורה	', traslitterazione: '	tôrāh	', significato: '	istruzione, direzione, legge, tôrāh	', grammatica: '	n. f.	', altro: '	cstr. תּוֹרַת - pl. ass. תּוֹרוֹת	', id: 	2201	, lettera: '	ת	'},
{ key: '	tamak	', termine: '	תָּמַךְ	', senza: '	תמך	', traslitterazione: '	tāmaḵ	', significato: '	afferrare, supportare, sostenere, raggiungere	', grammatica: '	v.	', altro: '	Qal, qatal, 3 ms, sostenne. A volte è seguito dalla preposizione   ב che regge il complemento oggetto o l’oggetto diretto 	', id: 	2202	, lettera: '	ת	'}


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
