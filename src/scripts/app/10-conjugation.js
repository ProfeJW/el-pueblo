  /* ============== CONJUGATION ============== */
  const verbs = [
    // Regular -AR (5)
    { inf: 'hablar', meaning: 'to speak · regular -ar', group: 'regular-ar', conj: { presente: ['hablo','hablas','habla','hablamos','habláis','hablan'], preterito:['hablé','hablaste','habló','hablamos','hablasteis','hablaron'], imperfecto:['hablaba','hablabas','hablaba','hablábamos','hablabais','hablaban'], futuro:['hablaré','hablarás','hablará','hablaremos','hablaréis','hablarán'], subjuntivo:['hable','hables','hable','hablemos','habléis','hablen'], condicional:['hablaría','hablarías','hablaría','hablaríamos','hablaríais','hablarían'], participio:'hablado' }},
    { inf: 'trabajar', meaning: 'to work · regular -ar', group: 'regular-ar', conj: { presente:['trabajo','trabajas','trabaja','trabajamos','trabajáis','trabajan'], preterito:['trabajé','trabajaste','trabajó','trabajamos','trabajasteis','trabajaron'], imperfecto:['trabajaba','trabajabas','trabajaba','trabajábamos','trabajabais','trabajaban'], futuro:['trabajaré','trabajarás','trabajará','trabajaremos','trabajaréis','trabajarán'], subjuntivo:['trabaje','trabajes','trabaje','trabajemos','trabajéis','trabajen'], condicional:['trabajaría','trabajarías','trabajaría','trabajaríamos','trabajaríais','trabajarían'], participio:'trabajado' }},
    { inf: 'estudiar', meaning: 'to study · regular -ar', group: 'regular-ar', conj: { presente:['estudio','estudias','estudia','estudiamos','estudiáis','estudian'], preterito:['estudié','estudiaste','estudió','estudiamos','estudiasteis','estudiaron'], imperfecto:['estudiaba','estudiabas','estudiaba','estudiábamos','estudiabais','estudiaban'], futuro:['estudiaré','estudiarás','estudiará','estudiaremos','estudiaréis','estudiarán'], subjuntivo:['estudie','estudies','estudie','estudiemos','estudiéis','estudien'], condicional:['estudiaría','estudiarías','estudiaría','estudiaríamos','estudiaríais','estudiarían'], participio:'estudiado' }},
    { inf: 'caminar', meaning: 'to walk · regular -ar', group: 'regular-ar', conj: { presente:['camino','caminas','camina','caminamos','camináis','caminan'], preterito:['caminé','caminaste','caminó','caminamos','caminasteis','caminaron'], imperfecto:['caminaba','caminabas','caminaba','caminábamos','caminabais','caminaban'], futuro:['caminaré','caminarás','caminará','caminaremos','caminaréis','caminarán'], subjuntivo:['camine','camines','camine','caminemos','caminéis','caminen'], condicional:['caminaría','caminarías','caminaría','caminaríamos','caminaríais','caminarían'], participio:'caminado' }},
    { inf: 'cantar', meaning: 'to sing · regular -ar', group: 'regular-ar', conj: { presente:['canto','cantas','canta','cantamos','cantáis','cantan'], preterito:['canté','cantaste','cantó','cantamos','cantasteis','cantaron'], imperfecto:['cantaba','cantabas','cantaba','cantábamos','cantabais','cantaban'], futuro:['cantaré','cantarás','cantará','cantaremos','cantaréis','cantarán'], subjuntivo:['cante','cantes','cante','cantemos','cantéis','canten'], condicional:['cantaría','cantarías','cantaría','cantaríamos','cantaríais','cantarían'], participio:'cantado' }},

    // Regular -ER (5)
    { inf: 'comer', meaning: 'to eat · regular -er', group: 'regular-er', conj: { presente:['como','comes','come','comemos','coméis','comen'], preterito:['comí','comiste','comió','comimos','comisteis','comieron'], imperfecto:['comía','comías','comía','comíamos','comíais','comían'], futuro:['comeré','comerás','comerá','comeremos','comeréis','comerán'], subjuntivo:['coma','comas','coma','comamos','comáis','coman'], condicional:['comería','comerías','comería','comeríamos','comeríais','comerían'], participio:'comido' }},
    { inf: 'aprender', meaning: 'to learn · regular -er', group: 'regular-er', conj: { presente:['aprendo','aprendes','aprende','aprendemos','aprendéis','aprenden'], preterito:['aprendí','aprendiste','aprendió','aprendimos','aprendisteis','aprendieron'], imperfecto:['aprendía','aprendías','aprendía','aprendíamos','aprendíais','aprendían'], futuro:['aprenderé','aprenderás','aprenderá','aprenderemos','aprenderéis','aprenderán'], subjuntivo:['aprenda','aprendas','aprenda','aprendamos','aprendáis','aprendan'], condicional:['aprendería','aprenderías','aprendería','aprenderíamos','aprenderíais','aprenderían'], participio:'aprendido' }},
    { inf: 'beber', meaning: 'to drink · regular -er', group: 'regular-er', conj: { presente:['bebo','bebes','bebe','bebemos','bebéis','beben'], preterito:['bebí','bebiste','bebió','bebimos','bebisteis','bebieron'], imperfecto:['bebía','bebías','bebía','bebíamos','bebíais','bebían'], futuro:['beberé','beberás','beberá','beberemos','beberéis','beberán'], subjuntivo:['beba','bebas','beba','bebamos','bebáis','beban'], condicional:['bebería','beberías','bebería','beberíamos','beberíais','beberían'], participio:'bebido' }},
    { inf: 'leer', meaning: 'to read · regular -er', group: 'regular-er', conj: { presente:['leo','lees','lee','leemos','leéis','leen'], preterito:['leí','leíste','leyó','leímos','leísteis','leyeron'], imperfecto:['leía','leías','leía','leíamos','leíais','leían'], futuro:['leeré','leerás','leerá','leeremos','leeréis','leerán'], subjuntivo:['lea','leas','lea','leamos','leáis','lean'], condicional:['leería','leerías','leería','leeríamos','leeríais','leerían'], participio:'leído' }},
    { inf: 'correr', meaning: 'to run · regular -er', group: 'regular-er', conj: { presente:['corro','corres','corre','corremos','corréis','corren'], preterito:['corrí','corriste','corrió','corrimos','corristeis','corrieron'], imperfecto:['corría','corrías','corría','corríamos','corríais','corrían'], futuro:['correré','correrás','correrá','correremos','correréis','correrán'], subjuntivo:['corra','corras','corra','corramos','corráis','corran'], condicional:['correría','correrías','correría','correríamos','correríais','correrían'], participio:'corrido' }},

    // Regular -IR (5)
    { inf: 'vivir', meaning: 'to live · regular -ir', group: 'regular-ir', conj: { presente:['vivo','vives','vive','vivimos','vivís','viven'], preterito:['viví','viviste','vivió','vivimos','vivisteis','vivieron'], imperfecto:['vivía','vivías','vivía','vivíamos','vivíais','vivían'], futuro:['viviré','vivirás','vivirá','viviremos','viviréis','vivirán'], subjuntivo:['viva','vivas','viva','vivamos','viváis','vivan'], condicional:['viviría','vivirías','viviría','viviríamos','viviríais','vivirían'], participio:'vivido' }},
    { inf: 'escribir', meaning: 'to write · regular -ir', group: 'regular-ir', conj: { presente:['escribo','escribes','escribe','escribimos','escribís','escriben'], preterito:['escribí','escribiste','escribió','escribimos','escribisteis','escribieron'], imperfecto:['escribía','escribías','escribía','escribíamos','escribíais','escribían'], futuro:['escribiré','escribirás','escribirá','escribiremos','escribiréis','escribirán'], subjuntivo:['escriba','escribas','escriba','escribamos','escribáis','escriban'], condicional:['escribiría','escribirías','escribiría','escribiríamos','escribiríais','escribirían'], participio:'escrito' }},
    { inf: 'recibir', meaning: 'to receive · regular -ir', group: 'regular-ir', conj: { presente:['recibo','recibes','recibe','recibimos','recibís','reciben'], preterito:['recibí','recibiste','recibió','recibimos','recibisteis','recibieron'], imperfecto:['recibía','recibías','recibía','recibíamos','recibíais','recibían'], futuro:['recibiré','recibirás','recibirá','recibiremos','recibiréis','recibirán'], subjuntivo:['reciba','recibas','reciba','recibamos','recibáis','reciban'], condicional:['recibiría','recibirías','recibiría','recibiríamos','recibiríais','recibirían'], participio:'recibido' }},
    { inf: 'abrir', meaning: 'to open · regular -ir', group: 'regular-ir', conj: { presente:['abro','abres','abre','abrimos','abrís','abren'], preterito:['abrí','abriste','abrió','abrimos','abristeis','abrieron'], imperfecto:['abría','abrías','abría','abríamos','abríais','abrían'], futuro:['abriré','abrirás','abrirá','abriremos','abriréis','abrirán'], subjuntivo:['abra','abras','abra','abramos','abráis','abran'], condicional:['abriría','abrirías','abriría','abriríamos','abriríais','abrirían'], participio:'abierto' }},
    { inf: 'subir', meaning: 'to go up · regular -ir', group: 'regular-ir', conj: { presente:['subo','subes','sube','subimos','subís','suben'], preterito:['subí','subiste','subió','subimos','subisteis','subieron'], imperfecto:['subía','subías','subía','subíamos','subíais','subían'], futuro:['subiré','subirás','subirá','subiremos','subiréis','subirán'], subjuntivo:['suba','subas','suba','subamos','subáis','suban'], condicional:['subiría','subirías','subiría','subiríamos','subiríais','subirían'], participio:'subido' }},

    // Stem-changers e→ie (4)
    { inf: 'pensar', meaning: 'to think · stem-changer e→ie', group: 'stem-eie', conj: { presente:['pienso','piensas','piensa','pensamos','pensáis','piensan'], preterito:['pensé','pensaste','pensó','pensamos','pensasteis','pensaron'], imperfecto:['pensaba','pensabas','pensaba','pensábamos','pensabais','pensaban'], futuro:['pensaré','pensarás','pensará','pensaremos','pensaréis','pensarán'], subjuntivo:['piense','pienses','piense','pensemos','penséis','piensen'], condicional:['pensaría','pensarías','pensaría','pensaríamos','pensaríais','pensarían'], participio:'pensado' }},
    { inf: 'querer', meaning: 'to want · stem-changer e→ie', group: 'stem-eie', conj: { presente:['quiero','quieres','quiere','queremos','queréis','quieren'], preterito:['quise','quisiste','quiso','quisimos','quisisteis','quisieron'], imperfecto:['quería','querías','quería','queríamos','queríais','querían'], futuro:['querré','querrás','querrá','querremos','querréis','querrán'], subjuntivo:['quiera','quieras','quiera','queramos','queráis','quieran'], condicional:['querría','querrías','querría','querríamos','querríais','querrían'], participio:'querido' }},
    { inf: 'cerrar', meaning: 'to close · stem-changer e→ie', group: 'stem-eie', conj: { presente:['cierro','cierras','cierra','cerramos','cerráis','cierran'], preterito:['cerré','cerraste','cerró','cerramos','cerrasteis','cerraron'], imperfecto:['cerraba','cerrabas','cerraba','cerrábamos','cerrabais','cerraban'], futuro:['cerraré','cerrarás','cerrará','cerraremos','cerraréis','cerrarán'], subjuntivo:['cierre','cierres','cierre','cerremos','cerréis','cierren'], condicional:['cerraría','cerrarías','cerraría','cerraríamos','cerraríais','cerrarían'], participio:'cerrado' }},
    { inf: 'empezar', meaning: 'to begin · stem-changer e→ie', group: 'stem-eie', conj: { presente:['empiezo','empiezas','empieza','empezamos','empezáis','empiezan'], preterito:['empecé','empezaste','empezó','empezamos','empezasteis','empezaron'], imperfecto:['empezaba','empezabas','empezaba','empezábamos','empezabais','empezaban'], futuro:['empezaré','empezarás','empezará','empezaremos','empezaréis','empezarán'], subjuntivo:['empiece','empieces','empiece','empecemos','empecéis','empiecen'], condicional:['empezaría','empezarías','empezaría','empezaríamos','empezaríais','empezarían'], participio:'empezado' }},

    // Stem-changers o→ue (4)
    { inf: 'poder', meaning: 'to be able to · stem-changer o→ue', group: 'stem-oue', conj: { presente:['puedo','puedes','puede','podemos','podéis','pueden'], preterito:['pude','pudiste','pudo','pudimos','pudisteis','pudieron'], imperfecto:['podía','podías','podía','podíamos','podíais','podían'], futuro:['podré','podrás','podrá','podremos','podréis','podrán'], subjuntivo:['pueda','puedas','pueda','podamos','podáis','puedan'], condicional:['podría','podrías','podría','podríamos','podríais','podrían'], participio:'podido' }},
    { inf: 'dormir', meaning: 'to sleep · stem-changer o→ue', group: 'stem-oue', conj: { presente:['duermo','duermes','duerme','dormimos','dormís','duermen'], preterito:['dormí','dormiste','durmió','dormimos','dormisteis','durmieron'], imperfecto:['dormía','dormías','dormía','dormíamos','dormíais','dormían'], futuro:['dormiré','dormirás','dormirá','dormiremos','dormiréis','dormirán'], subjuntivo:['duerma','duermas','duerma','durmamos','durmáis','duerman'], condicional:['dormiría','dormirías','dormiría','dormiríamos','dormiríais','dormirían'], participio:'dormido' }},
    { inf: 'volver', meaning: 'to return · stem-changer o→ue', group: 'stem-oue', conj: { presente:['vuelvo','vuelves','vuelve','volvemos','volvéis','vuelven'], preterito:['volví','volviste','volvió','volvimos','volvisteis','volvieron'], imperfecto:['volvía','volvías','volvía','volvíamos','volvíais','volvían'], futuro:['volveré','volverás','volverá','volveremos','volveréis','volverán'], subjuntivo:['vuelva','vuelvas','vuelva','volvamos','volváis','vuelvan'], condicional:['volvería','volverías','volvería','volveríamos','volveríais','volverían'], participio:'vuelto' }},
    { inf: 'encontrar', meaning: 'to find · stem-changer o→ue', group: 'stem-oue', conj: { presente:['encuentro','encuentras','encuentra','encontramos','encontráis','encuentran'], preterito:['encontré','encontraste','encontró','encontramos','encontrasteis','encontraron'], imperfecto:['encontraba','encontrabas','encontraba','encontrábamos','encontrabais','encontraban'], futuro:['encontraré','encontrarás','encontrará','encontraremos','encontraréis','encontrarán'], subjuntivo:['encuentre','encuentres','encuentre','encontremos','encontréis','encuentren'], condicional:['encontraría','encontrarías','encontraría','encontraríamos','encontraríais','encontrarían'], participio:'encontrado' }},

    // Stem-changers e→i (3)
    { inf: 'pedir', meaning: 'to ask for · stem-changer e→i', group: 'stem-ei', conj: { presente:['pido','pides','pide','pedimos','pedís','piden'], preterito:['pedí','pediste','pidió','pedimos','pedisteis','pidieron'], imperfecto:['pedía','pedías','pedía','pedíamos','pedíais','pedían'], futuro:['pediré','pedirás','pedirá','pediremos','pediréis','pedirán'], subjuntivo:['pida','pidas','pida','pidamos','pidáis','pidan'], condicional:['pediría','pedirías','pediría','pediríamos','pediríais','pedirían'], participio:'pedido' }},
    { inf: 'servir', meaning: 'to serve · stem-changer e→i', group: 'stem-ei', conj: { presente:['sirvo','sirves','sirve','servimos','servís','sirven'], preterito:['serví','serviste','sirvió','servimos','servisteis','sirvieron'], imperfecto:['servía','servías','servía','servíamos','servíais','servían'], futuro:['serviré','servirás','servirá','serviremos','serviréis','servirán'], subjuntivo:['sirva','sirvas','sirva','sirvamos','sirváis','sirvan'], condicional:['serviría','servirías','serviría','serviríamos','serviríais','servirían'], participio:'servido' }},
    { inf: 'repetir', meaning: 'to repeat · stem-changer e→i', group: 'stem-ei', conj: { presente:['repito','repites','repite','repetimos','repetís','repiten'], preterito:['repetí','repetiste','repitió','repetimos','repetisteis','repitieron'], imperfecto:['repetía','repetías','repetía','repetíamos','repetíais','repetían'], futuro:['repetiré','repetirás','repetirá','repetiremos','repetiréis','repetirán'], subjuntivo:['repita','repitas','repita','repitamos','repitáis','repitan'], condicional:['repetiría','repetirías','repetiría','repetiríamos','repetiríais','repetirían'], participio:'repetido' }},

    // Stem-changers u→ue (1 — jugar is the only common one)
    { inf: 'jugar', meaning: 'to play · stem-changer u→ue', group: 'stem-uue', conj: { presente:['juego','juegas','juega','jugamos','jugáis','juegan'], preterito:['jugué','jugaste','jugó','jugamos','jugasteis','jugaron'], imperfecto:['jugaba','jugabas','jugaba','jugábamos','jugabais','jugaban'], futuro:['jugaré','jugarás','jugará','jugaremos','jugaréis','jugarán'], subjuntivo:['juegue','juegues','juegue','juguemos','juguéis','jueguen'], condicional:['jugaría','jugarías','jugaría','jugaríamos','jugaríais','jugarían'], participio:'jugado' }},

    // Reflexive verbs (8) — answers include the reflexive pronoun
    { inf: 'llamarse', meaning: 'to be named · reflexive', group: 'reflexive', conj: { presente:['me llamo','te llamas','se llama','nos llamamos','os llamáis','se llaman'], preterito:['me llamé','te llamaste','se llamó','nos llamamos','os llamasteis','se llamaron'], imperfecto:['me llamaba','te llamabas','se llamaba','nos llamábamos','os llamabais','se llamaban'], futuro:['me llamaré','te llamarás','se llamará','nos llamaremos','os llamaréis','se llamarán'], subjuntivo:['me llame','te llames','se llame','nos llamemos','os llaméis','se llamen'], condicional:['me llamaría','te llamarías','se llamaría','nos llamaríamos','os llamaríais','se llamarían'], participio:'llamado' }},
    { inf: 'levantarse', meaning: 'to get up · reflexive', group: 'reflexive', conj: { presente:['me levanto','te levantas','se levanta','nos levantamos','os levantáis','se levantan'], preterito:['me levanté','te levantaste','se levantó','nos levantamos','os levantasteis','se levantaron'], imperfecto:['me levantaba','te levantabas','se levantaba','nos levantábamos','os levantabais','se levantaban'], futuro:['me levantaré','te levantarás','se levantará','nos levantaremos','os levantaréis','se levantarán'], subjuntivo:['me levante','te levantes','se levante','nos levantemos','os levantéis','se levanten'], condicional:['me levantaría','te levantarías','se levantaría','nos levantaríamos','os levantaríais','se levantarían'], participio:'levantado' }},
    { inf: 'ducharse', meaning: 'to shower · reflexive', group: 'reflexive', conj: { presente:['me ducho','te duchas','se ducha','nos duchamos','os ducháis','se duchan'], preterito:['me duché','te duchaste','se duchó','nos duchamos','os duchasteis','se ducharon'], imperfecto:['me duchaba','te duchabas','se duchaba','nos duchábamos','os duchabais','se duchaban'], futuro:['me ducharé','te ducharás','se duchará','nos ducharemos','os ducharéis','se ducharán'], subjuntivo:['me duche','te duches','se duche','nos duchemos','os duchéis','se duchen'], condicional:['me ducharía','te ducharías','se ducharía','nos ducharíamos','os ducharíais','se ducharían'], participio:'duchado' }},
    { inf: 'lavarse', meaning: 'to wash oneself · reflexive', group: 'reflexive', conj: { presente:['me lavo','te lavas','se lava','nos lavamos','os laváis','se lavan'], preterito:['me lavé','te lavaste','se lavó','nos lavamos','os lavasteis','se lavaron'], imperfecto:['me lavaba','te lavabas','se lavaba','nos lavábamos','os lavabais','se lavaban'], futuro:['me lavaré','te lavarás','se lavará','nos lavaremos','os lavaréis','se lavarán'], subjuntivo:['me lave','te laves','se lave','nos lavemos','os lavéis','se laven'], condicional:['me lavaría','te lavarías','se lavaría','nos lavaríamos','os lavaríais','se lavarían'], participio:'lavado' }},
    { inf: 'despertarse', meaning: 'to wake up · reflexive e→ie', group: 'reflexive', conj: { presente:['me despierto','te despiertas','se despierta','nos despertamos','os despertáis','se despiertan'], preterito:['me desperté','te despertaste','se despertó','nos despertamos','os despertasteis','se despertaron'], imperfecto:['me despertaba','te despertabas','se despertaba','nos despertábamos','os despertabais','se despertaban'], futuro:['me despertaré','te despertarás','se despertará','nos despertaremos','os despertaréis','se despertarán'], subjuntivo:['me despierte','te despiertes','se despierte','nos despertemos','os despertéis','se despierten'], condicional:['me despertaría','te despertarías','se despertaría','nos despertaríamos','os despertaríais','se despertarían'], participio:'despertado' }},
    { inf: 'acostarse', meaning: 'to go to bed · reflexive o→ue', group: 'reflexive', conj: { presente:['me acuesto','te acuestas','se acuesta','nos acostamos','os acostáis','se acuestan'], preterito:['me acosté','te acostaste','se acostó','nos acostamos','os acostasteis','se acostaron'], imperfecto:['me acostaba','te acostabas','se acostaba','nos acostábamos','os acostabais','se acostaban'], futuro:['me acostaré','te acostarás','se acostará','nos acostaremos','os acostaréis','se acostarán'], subjuntivo:['me acueste','te acuestes','se acueste','nos acostemos','os acostéis','se acuesten'], condicional:['me acostaría','te acostarías','se acostaría','nos acostaríamos','os acostaríais','se acostarían'], participio:'acostado' }},
    { inf: 'vestirse', meaning: 'to get dressed · reflexive e→i', group: 'reflexive', conj: { presente:['me visto','te vistes','se viste','nos vestimos','os vestís','se visten'], preterito:['me vestí','te vestiste','se vistió','nos vestimos','os vestisteis','se vistieron'], imperfecto:['me vestía','te vestías','se vestía','nos vestíamos','os vestíais','se vestían'], futuro:['me vestiré','te vestirás','se vestirá','nos vestiremos','os vestiréis','se vestirán'], subjuntivo:['me vista','te vistas','se vista','nos vistamos','os vistáis','se vistan'], condicional:['me vestiría','te vestirías','se vestiría','nos vestiríamos','os vestiríais','se vestirían'], participio:'vestido' }},
    { inf: 'sentirse', meaning: 'to feel · reflexive e→ie', group: 'reflexive', conj: { presente:['me siento','te sientes','se siente','nos sentimos','os sentís','se sienten'], preterito:['me sentí','te sentiste','se sintió','nos sentimos','os sentisteis','se sintieron'], imperfecto:['me sentía','te sentías','se sentía','nos sentíamos','os sentíais','se sentían'], futuro:['me sentiré','te sentirás','se sentirá','nos sentiremos','os sentiréis','se sentirán'], subjuntivo:['me sienta','te sientas','se sienta','nos sintamos','os sintáis','se sientan'], condicional:['me sentiría','te sentirías','se sentiría','nos sentiríamos','os sentiríais','se sentirían'], participio:'sentido' }},

    // Irregular (10)
    { inf: 'ser', meaning: 'to be · irregular', group: 'irregular', conj: { presente:['soy','eres','es','somos','sois','son'], preterito:['fui','fuiste','fue','fuimos','fuisteis','fueron'], imperfecto:['era','eras','era','éramos','erais','eran'], futuro:['seré','serás','será','seremos','seréis','serán'], subjuntivo:['sea','seas','sea','seamos','seáis','sean'], condicional:['sería','serías','sería','seríamos','seríais','serían'], participio:'sido' }},
    { inf: 'tener', meaning: 'to have · irregular', group: 'irregular', conj: { presente:['tengo','tienes','tiene','tenemos','tenéis','tienen'], preterito:['tuve','tuviste','tuvo','tuvimos','tuvisteis','tuvieron'], imperfecto:['tenía','tenías','tenía','teníamos','teníais','tenían'], futuro:['tendré','tendrás','tendrá','tendremos','tendréis','tendrán'], subjuntivo:['tenga','tengas','tenga','tengamos','tengáis','tengan'], condicional:['tendría','tendrías','tendría','tendríamos','tendríais','tendrían'], participio:'tenido' }},
    { inf: 'ir', meaning: 'to go · irregular', group: 'irregular', conj: { presente:['voy','vas','va','vamos','vais','van'], preterito:['fui','fuiste','fue','fuimos','fuisteis','fueron'], imperfecto:['iba','ibas','iba','íbamos','ibais','iban'], futuro:['iré','irás','irá','iremos','iréis','irán'], subjuntivo:['vaya','vayas','vaya','vayamos','vayáis','vayan'], condicional:['iría','irías','iría','iríamos','iríais','irían'], participio:'ido' }},
    { inf: 'hacer', meaning: 'to do/make · irregular', group: 'irregular', conj: { presente:['hago','haces','hace','hacemos','hacéis','hacen'], preterito:['hice','hiciste','hizo','hicimos','hicisteis','hicieron'], imperfecto:['hacía','hacías','hacía','hacíamos','hacíais','hacían'], futuro:['haré','harás','hará','haremos','haréis','harán'], subjuntivo:['haga','hagas','haga','hagamos','hagáis','hagan'], condicional:['haría','harías','haría','haríamos','haríais','harían'], participio:'hecho' }},
    { inf: 'estar', meaning: 'to be (state) · irregular', group: 'irregular', conj: { presente:['estoy','estás','está','estamos','estáis','están'], preterito:['estuve','estuviste','estuvo','estuvimos','estuvisteis','estuvieron'], imperfecto:['estaba','estabas','estaba','estábamos','estabais','estaban'], futuro:['estaré','estarás','estará','estaremos','estaréis','estarán'], subjuntivo:['esté','estés','esté','estemos','estéis','estén'], condicional:['estaría','estarías','estaría','estaríamos','estaríais','estarían'], participio:'estado' }},
    { inf: 'decir', meaning: 'to say/tell · irregular', group: 'irregular', conj: { presente:['digo','dices','dice','decimos','decís','dicen'], preterito:['dije','dijiste','dijo','dijimos','dijisteis','dijeron'], imperfecto:['decía','decías','decía','decíamos','decíais','decían'], futuro:['diré','dirás','dirá','diremos','diréis','dirán'], subjuntivo:['diga','digas','diga','digamos','digáis','digan'], condicional:['diría','dirías','diría','diríamos','diríais','dirían'], participio:'dicho' }},
    { inf: 'venir', meaning: 'to come · irregular', group: 'irregular', conj: { presente:['vengo','vienes','viene','venimos','venís','vienen'], preterito:['vine','viniste','vino','vinimos','vinisteis','vinieron'], imperfecto:['venía','venías','venía','veníamos','veníais','venían'], futuro:['vendré','vendrás','vendrá','vendremos','vendréis','vendrán'], subjuntivo:['venga','vengas','venga','vengamos','vengáis','vengan'], condicional:['vendría','vendrías','vendría','vendríamos','vendríais','vendrían'], participio:'venido' }},
    { inf: 'ver', meaning: 'to see · irregular', group: 'irregular', conj: { presente:['veo','ves','ve','vemos','veis','ven'], preterito:['vi','viste','vio','vimos','visteis','vieron'], imperfecto:['veía','veías','veía','veíamos','veíais','veían'], futuro:['veré','verás','verá','veremos','veréis','verán'], subjuntivo:['vea','veas','vea','veamos','veáis','vean'], condicional:['vería','verías','vería','veríamos','veríais','verían'], participio:'visto' }},
    { inf: 'saber', meaning: 'to know (facts) · irregular', group: 'irregular', conj: { presente:['sé','sabes','sabe','sabemos','sabéis','saben'], preterito:['supe','supiste','supo','supimos','supisteis','supieron'], imperfecto:['sabía','sabías','sabía','sabíamos','sabíais','sabían'], futuro:['sabré','sabrás','sabrá','sabremos','sabréis','sabrán'], subjuntivo:['sepa','sepas','sepa','sepamos','sepáis','sepan'], condicional:['sabría','sabrías','sabría','sabríamos','sabríais','sabrían'], participio:'sabido' }},
    { inf: 'dar', meaning: 'to give · irregular', group: 'irregular', conj: { presente:['doy','das','da','damos','dais','dan'], preterito:['di','diste','dio','dimos','disteis','dieron'], imperfecto:['daba','dabas','daba','dábamos','dabais','daban'], futuro:['daré','darás','dará','daremos','daréis','darán'], subjuntivo:['dé','des','dé','demos','deis','den'], condicional:['daría','darías','daría','daríamos','daríais','darían'], participio:'dado' }},

    // ===== Added for preterite lessons 35-39 =====

    // -car / -gar / -zar orthographic changers (preterite yo: -qué / -gué / -cé)
    { inf: 'buscar', meaning: 'to look for · -car (orthographic)', group: 'regular-ar', conj: { presente:['busco','buscas','busca','buscamos','buscáis','buscan'], preterito:['busqué','buscaste','buscó','buscamos','buscasteis','buscaron'], imperfecto:['buscaba','buscabas','buscaba','buscábamos','buscabais','buscaban'], futuro:['buscaré','buscarás','buscará','buscaremos','buscaréis','buscarán'], subjuntivo:['busque','busques','busque','busquemos','busquéis','busquen'], condicional:['buscaría','buscarías','buscaría','buscaríamos','buscaríais','buscarían'], participio:'buscado' }},
    { inf: 'sacar', meaning: 'to take out · -car (orthographic)', group: 'regular-ar', conj: { presente:['saco','sacas','saca','sacamos','sacáis','sacan'], preterito:['saqué','sacaste','sacó','sacamos','sacasteis','sacaron'], imperfecto:['sacaba','sacabas','sacaba','sacábamos','sacabais','sacaban'], futuro:['sacaré','sacarás','sacará','sacaremos','sacaréis','sacarán'], subjuntivo:['saque','saques','saque','saquemos','saquéis','saquen'], condicional:['sacaría','sacarías','sacaría','sacaríamos','sacaríais','sacarían'], participio:'sacado' }},
    { inf: 'tocar', meaning: 'to touch / play · -car (orthographic)', group: 'regular-ar', conj: { presente:['toco','tocas','toca','tocamos','tocáis','tocan'], preterito:['toqué','tocaste','tocó','tocamos','tocasteis','tocaron'], imperfecto:['tocaba','tocabas','tocaba','tocábamos','tocabais','tocaban'], futuro:['tocaré','tocarás','tocará','tocaremos','tocaréis','tocarán'], subjuntivo:['toque','toques','toque','toquemos','toquéis','toquen'], condicional:['tocaría','tocarías','tocaría','tocaríamos','tocaríais','tocarían'], participio:'tocado' }},
    { inf: 'pagar', meaning: 'to pay · -gar (orthographic)', group: 'regular-ar', conj: { presente:['pago','pagas','paga','pagamos','pagáis','pagan'], preterito:['pagué','pagaste','pagó','pagamos','pagasteis','pagaron'], imperfecto:['pagaba','pagabas','pagaba','pagábamos','pagabais','pagaban'], futuro:['pagaré','pagarás','pagará','pagaremos','pagaréis','pagarán'], subjuntivo:['pague','pagues','pague','paguemos','paguéis','paguen'], condicional:['pagaría','pagarías','pagaría','pagaríamos','pagaríais','pagarían'], participio:'pagado' }},
    { inf: 'llegar', meaning: 'to arrive · -gar (orthographic)', group: 'regular-ar', conj: { presente:['llego','llegas','llega','llegamos','llegáis','llegan'], preterito:['llegué','llegaste','llegó','llegamos','llegasteis','llegaron'], imperfecto:['llegaba','llegabas','llegaba','llegábamos','llegabais','llegaban'], futuro:['llegaré','llegarás','llegará','llegaremos','llegaréis','llegarán'], subjuntivo:['llegue','llegues','llegue','lleguemos','lleguéis','lleguen'], condicional:['llegaría','llegarías','llegaría','llegaríamos','llegaríais','llegarían'], participio:'llegado' }},
    { inf: 'almorzar', meaning: 'to have lunch · -zar + stem o→ue', group: 'stem-oue', conj: { presente:['almuerzo','almuerzas','almuerza','almorzamos','almorzáis','almuerzan'], preterito:['almorcé','almorzaste','almorzó','almorzamos','almorzasteis','almorzaron'], imperfecto:['almorzaba','almorzabas','almorzaba','almorzábamos','almorzabais','almorzaban'], futuro:['almorzaré','almorzarás','almorzará','almorzaremos','almorzaréis','almorzarán'], subjuntivo:['almuerce','almuerces','almuerce','almorcemos','almorcéis','almuercen'], condicional:['almorzaría','almorzarías','almorzaría','almorzaríamos','almorzaríais','almorzarían'], participio:'almorzado' }},

    // Leer-pattern verbs (preterite i→y in 3rd person, accents on í)
    { inf: 'creer', meaning: 'to believe · leer-pattern (i→y)', group: 'irregular', conj: { presente:['creo','crees','cree','creemos','creéis','creen'], preterito:['creí','creíste','creyó','creímos','creísteis','creyeron'], imperfecto:['creía','creías','creía','creíamos','creíais','creían'], futuro:['creeré','creerás','creerá','creeremos','creeréis','creerán'], subjuntivo:['crea','creas','crea','creamos','creáis','crean'], condicional:['creería','creerías','creería','creeríamos','creeríais','creerían'], participio:'creído' }},
    { inf: 'caer', meaning: 'to fall · leer-pattern (i→y)', group: 'irregular', conj: { presente:['caigo','caes','cae','caemos','caéis','caen'], preterito:['caí','caíste','cayó','caímos','caísteis','cayeron'], imperfecto:['caía','caías','caía','caíamos','caíais','caían'], futuro:['caeré','caerás','caerá','caeremos','caeréis','caerán'], subjuntivo:['caiga','caigas','caiga','caigamos','caigáis','caigan'], condicional:['caería','caerías','caería','caeríamos','caeríais','caerían'], participio:'caído' }},
    { inf: 'oír', meaning: 'to hear · leer-pattern (i→y)', group: 'irregular', conj: { presente:['oigo','oyes','oye','oímos','oís','oyen'], preterito:['oí','oíste','oyó','oímos','oísteis','oyeron'], imperfecto:['oía','oías','oía','oíamos','oíais','oían'], futuro:['oiré','oirás','oirá','oiremos','oiréis','oirán'], subjuntivo:['oiga','oigas','oiga','oigamos','oigáis','oigan'], condicional:['oíría','oírías','oíría','oíríamos','oíríais','oírían'], participio:'oído' }},
    { inf: 'huir', meaning: 'to flee · -uir verb (i→y, no accents)', group: 'irregular', conj: { presente:['huyo','huyes','huye','huimos','huis','huyen'], preterito:['hui','huiste','huyó','huimos','huisteis','huyeron'], imperfecto:['huía','huías','huía','huíamos','huíais','huían'], futuro:['huiré','huirás','huirá','huiremos','huiréis','huirán'], subjuntivo:['huya','huyas','huya','huyamos','huyáis','huyan'], condicional:['huiría','huirías','huiría','huiríamos','huiríais','huirían'], participio:'huido' }},
    { inf: 'construir', meaning: 'to build · -uir verb (i→y, no accents)', group: 'irregular', conj: { presente:['construyo','construyes','construye','construimos','construís','construyen'], preterito:['construí','construiste','construyó','construimos','construisteis','construyeron'], imperfecto:['construía','construías','construía','construíamos','construíais','construían'], futuro:['construiré','construirás','construirá','construiremos','construiréis','construirán'], subjuntivo:['construya','construyas','construya','construyamos','construyáis','construyan'], condicional:['construiría','construirías','construiría','construiríamos','construiríais','construirían'], participio:'construido' }},
    { inf: 'destruir', meaning: 'to destroy · -uir verb (i→y, no accents)', group: 'irregular', conj: { presente:['destruyo','destruyes','destruye','destruimos','destruís','destruyen'], preterito:['destruí','destruiste','destruyó','destruimos','destruisteis','destruyeron'], imperfecto:['destruía','destruías','destruía','destruíamos','destruíais','destruían'], futuro:['destruiré','destruirás','destruirá','destruiremos','destruiréis','destruirán'], subjuntivo:['destruya','destruyas','destruya','destruyamos','destruyáis','destruyan'], condicional:['destruiría','destruirías','destruiría','destruiríamos','destruiríais','destruirían'], participio:'destruido' }},

    // Stem-changing -IR additions
    { inf: 'morir', meaning: 'to die · stem o→ue / preterite o→u', group: 'stem-oue', conj: { presente:['muero','mueres','muere','morimos','morís','mueren'], preterito:['morí','moriste','murió','morimos','moristeis','murieron'], imperfecto:['moría','morías','moría','moríamos','moríais','morían'], futuro:['moriré','morirás','morirá','moriremos','moriréis','morirán'], subjuntivo:['muera','mueras','muera','muramos','muráis','mueran'], condicional:['moriría','morirías','moriría','moriríamos','moriríais','morirían'], participio:'muerto' }},
    { inf: 'divertirse', meaning: 'to have fun · reflexive stem e→ie/i', group: 'reflexive', conj: { presente:['me divierto','te diviertes','se divierte','nos divertimos','os divertís','se divierten'], preterito:['me divertí','te divertiste','se divirtió','nos divertimos','os divertisteis','se divirtieron'], imperfecto:['me divertía','te divertías','se divertía','nos divertíamos','os divertíais','se divertían'], futuro:['me divertiré','te divertirás','se divertirá','nos divertiremos','os divertiréis','se divertirán'], subjuntivo:['me divierta','te diviertas','se divierta','nos divirtamos','os divirtáis','se diviertan'], condicional:['me divertiría','te divertirías','se divertiría','nos divertiríamos','os divertiríais','se divertirían'], participio:'divertido' }},
    { inf: 'reír', meaning: 'to laugh · stem e→i, drops double i', group: 'irregular', conj: { presente:['río','ríes','ríe','reímos','reís','ríen'], preterito:['reí','reíste','rió','reímos','reísteis','rieron'], imperfecto:['reía','reías','reía','reíamos','reíais','reían'], futuro:['reiré','reirás','reirá','reiremos','reiréis','reirán'], subjuntivo:['ría','rías','ría','riamos','riáis','rían'], condicional:['reíría','reírías','reíría','reíríamos','reíríais','reírían'], participio:'reído' }},
    { inf: 'sonreír', meaning: 'to smile · stem e→i, drops double i', group: 'irregular', conj: { presente:['sonrío','sonríes','sonríe','sonreímos','sonreís','sonríen'], preterito:['sonreí','sonreíste','sonrió','sonreímos','sonreísteis','sonrieron'], imperfecto:['sonreía','sonreías','sonreía','sonreíamos','sonreíais','sonreían'], futuro:['sonreiré','sonreirás','sonreirá','sonreiremos','sonreiréis','sonreirán'], subjuntivo:['sonría','sonrías','sonría','sonriamos','sonriáis','sonrían'], condicional:['sonreíría','sonreírías','sonreíría','sonreíríamos','sonreíríais','sonreírían'], participio:'sonreído' }},

    // Pattern irregulars (U-stem, J-stem additions)
    { inf: 'andar', meaning: 'to walk · U-stem preterite', group: 'irregular', conj: { presente:['ando','andas','anda','andamos','andáis','andan'], preterito:['anduve','anduviste','anduvo','anduvimos','anduvisteis','anduvieron'], imperfecto:['andaba','andabas','andaba','andábamos','andabais','andaban'], futuro:['andaré','andarás','andará','andaremos','andaréis','andarán'], subjuntivo:['ande','andes','ande','andemos','andéis','anden'], condicional:['andaría','andarías','andaría','andaríamos','andaríais','andarían'], participio:'andado' }},
    { inf: 'poner', meaning: 'to put · U-stem preterite', group: 'irregular', conj: { presente:['pongo','pones','pone','ponemos','ponéis','ponen'], preterito:['puse','pusiste','puso','pusimos','pusisteis','pusieron'], imperfecto:['ponía','ponías','ponía','poníamos','poníais','ponían'], futuro:['pondré','pondrás','pondrá','pondremos','pondréis','pondrán'], subjuntivo:['ponga','pongas','ponga','pongamos','pongáis','pongan'], condicional:['pondría','pondrías','pondría','pondríamos','pondríais','pondrían'], participio:'puesto' }},
    { inf: 'traer', meaning: 'to bring · J-stem preterite (trajeron, not trajieron)', group: 'irregular', conj: { presente:['traigo','traes','trae','traemos','traéis','traen'], preterito:['traje','trajiste','trajo','trajimos','trajisteis','trajeron'], imperfecto:['traía','traías','traía','traíamos','traíais','traían'], futuro:['traeré','traerás','traerá','traeremos','traeréis','traerán'], subjuntivo:['traiga','traigas','traiga','traigamos','traigáis','traigan'], condicional:['traería','traerías','traería','traeríamos','traeríais','traerían'], participio:'traído' }},
    { inf: 'conducir', meaning: 'to drive · J-stem (condujeron, not conducieron)', group: 'irregular', conj: { presente:['conduzco','conduces','conduce','conducimos','conducís','conducen'], preterito:['conduje','condujiste','condujo','condujimos','condujisteis','condujeron'], imperfecto:['conducía','conducías','conducía','conducíamos','conducíais','conducían'], futuro:['conduciré','conducirás','conducirá','conduciremos','conduciréis','conducirán'], subjuntivo:['conduzca','conduzcas','conduzca','conduzcamos','conduzcáis','conduzcan'], condicional:['conduciría','conducirías','conduciría','conduciríamos','conduciríais','conducirían'], participio:'conducido' }},
    { inf: 'traducir', meaning: 'to translate · J-stem (tradujeron, not traducieron)', group: 'irregular', conj: { presente:['traduzco','traduces','traduce','traducimos','traducís','traducen'], preterito:['traduje','tradujiste','tradujo','tradujimos','tradujisteis','tradujeron'], imperfecto:['traducía','traducías','traducía','traducíamos','traducíais','traducían'], futuro:['traduciré','traducirás','traducirá','traduciremos','traduciréis','traducirán'], subjuntivo:['traduzca','traduzcas','traduzca','traduzcamos','traduzcáis','traduzcan'], condicional:['traduciría','traducirías','traduciría','traduciríamos','traduciríais','traducirían'], participio:'traducido' }}
  ];
  const pronouns = ['yo','tú','él/ella','nosotros','vosotros','ellos/ellas'];
  const tenseLabels = { presente: 'present', preterito: 'preterite', imperfecto: 'imperfect', futuro: 'future', condicional: 'conditional', subjuntivo: 'pres. subjunctive', perfecto: 'present perfect', pluperfectsubj: 'pluperfect subj.' };
  let drillTense = 'presente';
  let drillItems = []; // { verb, tense, pronounIdx, answer, userInput, isCorrect }
  let drillSubmitted = false;
  let includeVosotros = false; // default off — Latin American Spanish convention for US classrooms
  let drillGroup = 'all'; // 'all' | 'regular' | 'regular-ar' | 'regular-er' | 'regular-ir' | 'stem-eie' | 'stem-oue' | 'stem-ei' | 'stem-uue' | 'stem-all' | 'irregular'

  // Normalize for forgiving comparison \u2014 used by every typed-answer grader
  // (games engine, La Racha, vocab type-it, verb drills). A student answer is
  // never wrong for capitalization, accents, or punctuation: deck phrases like
  // "Son las dos." or "\u00bfQu\u00e9 hora es?" carry punctuation the student shouldn't
  // be expected to type. Internal symbols (the colon in "3:30") survive.
  function normalize(s) {
    return String(s == null ? '' : s).toLowerCase().trim()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/['\u2018\u2019"\u201c\u201d]/g, '')  // quotes/apostrophes: "it's" \u2248 "its"
      .replace(/^[\u00a1\u00bf.,;:!?\s]+/, '')
      .replace(/[\u00a1\u00bf.,;:!?\s]+$/, '')
      .replace(/[,;]/g, '')
      .replace(/\s+/g, ' ');
  }

  function buildDrill() {
    drillItems = [];
    drillSubmitted = false;

    if (drillTense === 'serestar') {
      buildSerEstarDrill();
      return;
    }

    if (drillTense === 'possessives') {
      buildPossessivesDrill();
      return;
    }

    if (drillTense === 'tu-usted') {
      buildTuUstedDrill();
      return;
    }

    if (drillTense === 'pronouns') {
      buildPronounsDrill();
      return;
    }

    if (drillTense === 'perfecto') {
      buildPerfectoDrill();
      return;
    }

    if (drillTense === 'pluperfectsubj') {
      buildPluperfectSubjDrill();
      return;
    }

    if (drillTense === 'tu-commands') {
      buildCommandsTuDrill();
      return;
    }

    if (drillTense === 'usted-commands') {
      buildCommandsUstedDrill();
      return;
    }

    if (drillTense === 'reflexive-commands') {
      buildCommandsReflexiveDrill();
      return;
    }

    if (drillTense === 'object-commands') {
      buildCommandsObjectDrill();
      return;
    }

    if (drillTense === 'double-commands') {
      buildCommandsDoubleDrill();
      return;
    }

    if (drillTense === 'confusable-verbs') {
      buildConfusableVerbsDrill();
      return;
    }

    if (drillTense === 'progressives-pronouns') {
      buildProgressivesDrill();
      return;
    }

    if (drillTense === 'possessive-pronouns') {
      buildPossessivePronounsDrill();
      return;
    }

    const tenses = drillTense === 'mixed'
      ? ['presente','preterito','imperfecto','futuro','subjuntivo']
      : [drillTense];
    // Pronoun indices: 0=yo, 1=tú, 2=él/ella, 3=nosotros, 4=vosotros, 5=ellos/ellas
    // Skip vosotros (index 4) when toggle is off
    const allowedPronouns = includeVosotros ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 5];

    // Filter verb pool by drillGroup
    let pool;
    if (drillGroup === 'all') pool = verbs;
    else if (drillGroup === 'regular') pool = verbs.filter(v => v.group === 'regular-ar' || v.group === 'regular-er' || v.group === 'regular-ir');
    else if (drillGroup === 'stem-all') pool = verbs.filter(v => v.group && v.group.startsWith('stem-'));
    else pool = verbs.filter(v => v.group === drillGroup);

    // Safety: if filter produces an empty pool somehow, fall back to all verbs
    if (pool.length === 0) pool = verbs;

    // Compound subject variants by pronoun index.
    // These are always-safe (work in both Latin Am. and Spain):
    //   idx 0 (yo): "Yo" — no variants needed
    //   idx 1 (tú): "Tú" — no variants needed
    //   idx 2 (él/ella): single person (works as-is)
    //   idx 3 (nosotros): "X y yo" — always nosotros form
    //   idx 4 (vosotros): "Tú y X" — only when vosotros toggle is ON
    //   idx 5 (ellos): two third-person subjects, OR "Tú y X" when vosotros is OFF (Lat. Am.)
    const COMPOUND_NOSOTROS = [
      'María y yo', 'Mi hermana y yo', 'Carlos y yo', 'Tú y yo', 'Mi familia y yo', 'Ana y yo'
    ];
    const COMPOUND_VOSOTROS_OR_ELLOS = [
      // These are "tú + 3rd person" — vosotros in Spain, ustedes (→ ellos form) in Lat. Am.
      'Tú y Carlos', 'Tú y María', 'Tú y mi hermano'
    ];
    const COMPOUND_ELLOS = [
      // Two third-person subjects — always ellos/ellas form
      'Julia y María', 'Pedro y Ana', 'Mis padres', 'Carmen y Luis', 'Los chicos', 'Ella y él'
    ];

    for (let i = 0; i < 20; i++) {
      const verb = pool[Math.floor(Math.random() * pool.length)];
      const tense = tenses[Math.floor(Math.random() * tenses.length)];
      let pronounIdx = allowedPronouns[Math.floor(Math.random() * allowedPronouns.length)];
      let subjectDisplay = null;

      // ~40% chance to swap in a compound subject
      if (Math.random() < 0.4) {
        // Pick which kind based on a roll
        const r = Math.random();
        if (r < 0.45) {
          // Compound that resolves to nosotros (idx 3)
          subjectDisplay = COMPOUND_NOSOTROS[Math.floor(Math.random() * COMPOUND_NOSOTROS.length)];
          pronounIdx = 3;
        } else if (r < 0.85) {
          // Compound that resolves to ellos (idx 5)
          subjectDisplay = COMPOUND_ELLOS[Math.floor(Math.random() * COMPOUND_ELLOS.length)];
          pronounIdx = 5;
        } else {
          // "Tú y X" — vosotros (idx 4) in Spain, ellos (idx 5) in Latin Am.
          subjectDisplay = COMPOUND_VOSOTROS_OR_ELLOS[Math.floor(Math.random() * COMPOUND_VOSOTROS_OR_ELLOS.length)];
          pronounIdx = includeVosotros ? 4 : 5;
        }
      }

      drillItems.push({
        verb, tense, pronounIdx,
        subjectDisplay, // null = use default pronoun label
        answer: verb.conj[tense][pronounIdx],
        userInput: '',
        isCorrect: null
      });
    }
  }

  // SER vs ESTAR drill — fill in the correctly conjugated form
  // Each prompt is { sentence (with ___), pronounIdx, correctVerb ('ser'|'estar'), reason }
  // Conjugations of ser/estar in present tense:
  const SER_PRESENT = ['soy', 'eres', 'es', 'somos', 'sois', 'son'];
  const ESTAR_PRESENT = ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'];

  const SER_ESTAR_PROMPTS = [
    // SER — identity, profession, origin, time, possession, material, characteristic
    { sentence: 'Yo ___ estudiante de español.', pidx: 0, verb: 'ser', reason: 'profession/identity → ser' },
    { sentence: 'Tú ___ mi mejor amigo.', pidx: 1, verb: 'ser', reason: 'identity/relationship → ser' },
    { sentence: 'Ella ___ de Colombia.', pidx: 2, verb: 'ser', reason: 'origin → ser' },
    { sentence: 'Nosotros ___ hermanos.', pidx: 3, verb: 'ser', reason: 'family relationship → ser' },
    { sentence: 'Mis padres ___ médicos.', pidx: 5, verb: 'ser', reason: 'profession → ser' },
    { sentence: '___ las tres de la tarde.', pidx: 5, verb: 'ser', reason: 'telling time → ser (always son las…)' },
    { sentence: 'Hoy ___ lunes.', pidx: 2, verb: 'ser', reason: 'days of the week → ser' },
    { sentence: 'El libro ___ de María.', pidx: 2, verb: 'ser', reason: 'possession → ser' },
    { sentence: 'La mesa ___ de madera.', pidx: 2, verb: 'ser', reason: 'material → ser' },
    { sentence: 'Mi hermana ___ alta y simpática.', pidx: 2, verb: 'ser', reason: 'permanent characteristic → ser' },
    { sentence: 'Tus zapatos ___ negros.', pidx: 5, verb: 'ser', reason: 'inherent color → ser' },
    { sentence: 'Yo ___ joven todavía.', pidx: 0, verb: 'ser', reason: 'characteristic / age description → ser' },
    { sentence: 'Mi madre ___ profesora.', pidx: 2, verb: 'ser', reason: 'profession → ser' },
    { sentence: 'Vosotros ___ muy amables.', pidx: 4, verb: 'ser', reason: 'characteristic → ser' },

    // ESTAR — feeling, location, condition, ongoing action
    { sentence: 'Yo ___ cansado hoy.', pidx: 0, verb: 'estar', reason: 'temporary feeling → estar' },
    { sentence: '¿Cómo ___ tú?', pidx: 1, verb: 'estar', reason: 'how someone feels → estar' },
    { sentence: 'Madrid ___ en España.', pidx: 2, verb: 'estar', reason: 'location → estar' },
    { sentence: 'La sopa ___ caliente.', pidx: 2, verb: 'estar', reason: 'temporary condition → estar' },
    { sentence: 'Nosotros ___ en la biblioteca.', pidx: 3, verb: 'estar', reason: 'location → estar' },
    { sentence: 'Los niños ___ contentos.', pidx: 5, verb: 'estar', reason: 'temporary mood → estar' },
    { sentence: 'Mi café ___ frío.', pidx: 2, verb: 'estar', reason: 'temporary condition → estar' },
    { sentence: 'Tú ___ enfermo hoy.', pidx: 1, verb: 'estar', reason: 'temporary state → estar' },
    { sentence: 'El baño ___ al fondo del pasillo.', pidx: 2, verb: 'estar', reason: 'location → estar' },
    { sentence: 'Yo ___ aburrido en clase.', pidx: 0, verb: 'estar', reason: 'temporary feeling → estar (estar aburrido = bored)' },
    { sentence: 'La clase ___ aburrida.', pidx: 2, verb: 'ser', reason: 'characteristic → ser (ser aburrido = boring)' },
    { sentence: 'Las ventanas ___ abiertas.', pidx: 5, verb: 'estar', reason: 'condition / past participle → estar' },
    { sentence: 'Vosotros ___ en el parque.', pidx: 4, verb: 'estar', reason: 'location → estar' },
    { sentence: 'Mi abuela ___ enferma esta semana.', pidx: 2, verb: 'estar', reason: 'temporary illness → estar' },
    { sentence: 'Ellos ___ nerviosos antes del examen.', pidx: 5, verb: 'estar', reason: 'temporary emotion → estar' },
    { sentence: 'La tarea ___ lista.', pidx: 2, verb: 'estar', reason: 'state of completion → estar' }
  ];

  function buildSerEstarDrill() {
    // Filter out vosotros prompts if toggle off
    const allowed = includeVosotros
      ? SER_ESTAR_PROMPTS
      : SER_ESTAR_PROMPTS.filter(p => p.pidx !== 4);
    // Shuffle and take 20
    const shuffled = [...allowed].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 20);
    picked.forEach(p => {
      const conjArray = p.verb === 'ser' ? SER_PRESENT : ESTAR_PRESENT;
      drillItems.push({
        verb: { inf: p.verb, conj: { presente: conjArray } },
        tense: 'presente',
        pronounIdx: p.pidx,
        answer: conjArray[p.pidx],
        sentence: p.sentence,
        reason: p.reason,
        userInput: '',
        isCorrect: null,
        isSerEstar: true
      });
    });
  }

  // POSSESSIVES DRILL
  // Each prompt: an English possessive cue + a Spanish noun. Student types the
  // correct Spanish possessive that agrees with the noun in gender/number.
  // Format: { cue: 'my', noun: 'libro', gender: 'm', number: 'sing', answer: 'mi' }
  // Possessive forms by (English, gender, number):
  //   my:      mi   / mis    (no gender)
  //   your:    tu   / tus    (no gender) — informal, "tú"
  //   his/her/their/your-formal: su / sus  (no gender)
  //   our:     nuestro / nuestra / nuestros / nuestras  (gender + number)
  //   your-all (Spain): vuestro / vuestra / vuestros / vuestras
  const POSSESSIVE_PROMPTS = [
    // my (mi/mis)
    { cue: 'my', noun: 'libro', gender: 'm', number: 'sing', answer: 'mi' },
    { cue: 'my', noun: 'casa', gender: 'f', number: 'sing', answer: 'mi' },
    { cue: 'my', noun: 'hermanos', gender: 'm', number: 'plur', answer: 'mis' },
    { cue: 'my', noun: 'amigas', gender: 'f', number: 'plur', answer: 'mis' },
    { cue: 'my', noun: 'padre', gender: 'm', number: 'sing', answer: 'mi' },
    { cue: 'my', noun: 'clases', gender: 'f', number: 'plur', answer: 'mis' },

    // your (tu/tus) — informal
    { cue: 'your (informal)', noun: 'perro', gender: 'm', number: 'sing', answer: 'tu' },
    { cue: 'your (informal)', noun: 'mochila', gender: 'f', number: 'sing', answer: 'tu' },
    { cue: 'your (informal)', noun: 'libros', gender: 'm', number: 'plur', answer: 'tus' },
    { cue: 'your (informal)', noun: 'hermanas', gender: 'f', number: 'plur', answer: 'tus' },
    { cue: 'your (informal)', noun: 'profesor', gender: 'm', number: 'sing', answer: 'tu' },

    // his / her / their (su/sus)
    { cue: 'his', noun: 'coche', gender: 'm', number: 'sing', answer: 'su' },
    { cue: 'her', noun: 'casa', gender: 'f', number: 'sing', answer: 'su' },
    { cue: 'their', noun: 'hijos', gender: 'm', number: 'plur', answer: 'sus' },
    { cue: 'his', noun: 'amigos', gender: 'm', number: 'plur', answer: 'sus' },
    { cue: 'her', noun: 'zapatos', gender: 'm', number: 'plur', answer: 'sus' },
    { cue: 'their', noun: 'profesora', gender: 'f', number: 'sing', answer: 'su' },
    { cue: 'your (formal)', noun: 'pasaporte', gender: 'm', number: 'sing', answer: 'su' },

    // our (nuestro/a/os/as) — agrees in gender AND number
    { cue: 'our', noun: 'libro', gender: 'm', number: 'sing', answer: 'nuestro' },
    { cue: 'our', noun: 'casa', gender: 'f', number: 'sing', answer: 'nuestra' },
    { cue: 'our', noun: 'amigos', gender: 'm', number: 'plur', answer: 'nuestros' },
    { cue: 'our', noun: 'amigas', gender: 'f', number: 'plur', answer: 'nuestras' },
    { cue: 'our', noun: 'profesor', gender: 'm', number: 'sing', answer: 'nuestro' },
    { cue: 'our', noun: 'escuela', gender: 'f', number: 'sing', answer: 'nuestra' },
    { cue: 'our', noun: 'padres', gender: 'm', number: 'plur', answer: 'nuestros' },
    { cue: 'our', noun: 'hijas', gender: 'f', number: 'plur', answer: 'nuestras' },

    // your-all, Spain (vuestro/a/os/as) — flagged for vosotros filter
    { cue: 'your-all (Spain)', noun: 'libro', gender: 'm', number: 'sing', answer: 'vuestro', vosotros: true },
    { cue: 'your-all (Spain)', noun: 'casa', gender: 'f', number: 'sing', answer: 'vuestra', vosotros: true },
    { cue: 'your-all (Spain)', noun: 'hijos', gender: 'm', number: 'plur', answer: 'vuestros', vosotros: true },
    { cue: 'your-all (Spain)', noun: 'amigas', gender: 'f', number: 'plur', answer: 'vuestras', vosotros: true }
  ];

  function buildPossessivesDrill() {
    // Filter out vosotros prompts if toggle off
    const allowed = includeVosotros
      ? POSSESSIVE_PROMPTS
      : POSSESSIVE_PROMPTS.filter(p => !p.vosotros);
    const shuffled = [...allowed].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 20);
    picked.forEach(p => {
      drillItems.push({
        cue: p.cue,
        noun: p.noun,
        gender: p.gender,
        number: p.number,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isPossessive: true
      });
    });
  }

  // TÚ vs. USTED DRILL
  // Each prompt is a social scenario. Student types "tú" or "usted".
  // reason field shown after wrong answers for context.
  const TU_USTED_PROMPTS = [
    // TÚ (informal) — friends, family, peers, kids
    { scenario: 'You\'re talking to your best friend.', answer: 'tú', reason: 'Friends → tú (informal)' },
    { scenario: 'You\'re asking your little brother a question.', answer: 'tú', reason: 'Family / younger person → tú' },
    { scenario: 'You\'re chatting with a classmate your age.', answer: 'tú', reason: 'Peers → tú' },
    { scenario: 'You\'re talking to a 7-year-old child.', answer: 'tú', reason: 'Children → tú' },
    { scenario: 'You\'re texting your cousin.', answer: 'tú', reason: 'Family member, casual context → tú' },
    { scenario: 'You\'re asking your dog where the ball went.', answer: 'tú', reason: 'Pets → tú' },
    { scenario: 'You\'re hanging out with your girlfriend/boyfriend.', answer: 'tú', reason: 'Romantic partner → tú' },
    { scenario: 'You meet a kid at the park and ask their name.', answer: 'tú', reason: 'Child → tú' },
    { scenario: 'You\'re joking around with your roommate.', answer: 'tú', reason: 'Close peer → tú' },
    { scenario: 'You\'re catching up with an old high school friend.', answer: 'tú', reason: 'Friend → tú' },
    { scenario: 'You\'re praying to God in Spanish.', answer: 'tú', reason: 'Religious prayer → tú (intimate)' },
    { scenario: 'A 16-year-old asks for directions and you respond.', answer: 'tú', reason: 'Teen peer → tú' },

    // USTED (formal) — teachers, elders, strangers, authority
    { scenario: 'You\'re speaking with your Spanish teacher.', answer: 'usted', reason: 'Teacher → usted (respect)' },
    { scenario: 'You\'re ordering at a restaurant from an older waiter.', answer: 'usted', reason: 'Service / older stranger → usted' },
    { scenario: 'You\'re talking to your grandmother\'s friend at church.', answer: 'usted', reason: 'Elder, unfamiliar → usted' },
    { scenario: 'You\'re asking the doctor about your symptoms.', answer: 'usted', reason: 'Doctor / professional → usted' },
    { scenario: 'You\'re interviewing for a job.', answer: 'usted', reason: 'Authority / professional setting → usted' },
    { scenario: 'You\'re speaking to a police officer.', answer: 'usted', reason: 'Authority figure → usted' },
    { scenario: 'You meet your best friend\'s grandfather for the first time.', answer: 'usted', reason: 'Elder you don\'t know well → usted' },
    { scenario: 'You\'re asking the principal a question.', answer: 'usted', reason: 'Authority → usted' },
    { scenario: 'You\'re emailing a professor at a university.', answer: 'usted', reason: 'Academic professional → usted' },
    { scenario: 'You\'re renting an apartment from a 60-year-old landlord.', answer: 'usted', reason: 'Older professional contact → usted' },
    { scenario: 'You\'re at a doctor\'s office and the receptionist asks your name.', answer: 'usted', reason: 'Professional setting → usted' },
    { scenario: 'You\'re asking a stranger on the bus for the time.', answer: 'usted', reason: 'Stranger, polite → usted (default with adults)' },
    { scenario: 'You\'re thanking your mother\'s 65-year-old coworker.', answer: 'usted', reason: 'Older, unfamiliar → usted' },
    { scenario: 'You\'re welcoming a customer to your family\'s store.', answer: 'usted', reason: 'Customer / professional → usted' }
  ];

  function buildTuUstedDrill() {
    const shuffled = [...TU_USTED_PROMPTS].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 20);
    picked.forEach(p => {
      drillItems.push({
        scenario: p.scenario,
        reason: p.reason,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isTuUsted: true
      });
    });
  }

  // OBJECT PRONOUN REWRITE DRILL
  // Each prompt: a full sentence + the correct rewrite with the pronoun(s) replacing the noun(s).
  // Mix of: direct-object only, indirect-object only, and double-object sentences.
  // The grader is forgiving — normalizes capitalization, punctuation, spaces, and trailing periods.
  const PRONOUN_REWRITE_PROMPTS = [
    // DIRECT OBJECT ONLY (12) — replace one noun with lo/la/los/las
    { kind: 'DO', original: 'Compro el libro.', answer: 'Lo compro.', english: 'I buy the book → I buy it.' },
    { kind: 'DO', original: 'Vemos la película.', answer: 'La vemos.', english: 'We see the movie → We see it.' },
    { kind: 'DO', original: 'Como las manzanas.', answer: 'Las como.', english: 'I eat the apples → I eat them.' },
    { kind: 'DO', original: 'Tengo los libros.', answer: 'Los tengo.', english: 'I have the books → I have them.' },
    { kind: 'DO', original: 'Visito a mi abuela.', answer: 'La visito.', english: 'I visit my grandmother → I visit her. ("a" disappears!)' },
    { kind: 'DO', original: 'Conozco a Carlos.', answer: 'Lo conozco.', english: 'I know Carlos → I know him.' },
    { kind: 'DO', original: 'Llamamos a nuestros padres.', answer: 'Los llamamos.', english: 'We call our parents → We call them.' },
    { kind: 'DO', original: 'Pierde las llaves.', answer: 'Las pierde.', english: 'He loses the keys → He loses them.' },
    { kind: 'DO', original: 'Leo el periódico.', answer: 'Lo leo.', english: 'I read the newspaper → I read it.' },
    { kind: 'DO', original: 'Ella escribe la carta.', answer: 'Ella la escribe.', english: 'She writes the letter → She writes it.' },
    { kind: 'DO', original: 'Vendemos la casa.', answer: 'La vendemos.', english: 'We sell the house → We sell it.' },
    { kind: 'DO', original: 'Veo a las chicas.', answer: 'Las veo.', english: 'I see the girls → I see them.' },

    // INDIRECT OBJECT ONLY (10) — replace "a + person" with le/les
    { kind: 'IO', original: 'Hablo a María todos los días.', answer: 'Le hablo todos los días.', english: 'I talk to María every day → I talk to her every day.' },
    { kind: 'IO', original: 'Escribimos a nuestros abuelos.', answer: 'Les escribimos.', english: 'We write to our grandparents → We write to them.' },
    { kind: 'IO', original: 'Pregunto a la profesora.', answer: 'Le pregunto.', english: 'I ask the teacher → I ask her.' },
    { kind: 'IO', original: 'Mandamos un mensaje a Pedro.', answer: 'Le mandamos un mensaje.', english: 'We send a message to Pedro → We send him a message.' },
    { kind: 'IO', original: 'Doy un regalo a mis padres.', answer: 'Les doy un regalo.', english: 'I give a gift to my parents → I give them a gift.' },
    { kind: 'IO', original: 'Compra flores a su madre.', answer: 'Le compra flores.', english: 'He buys flowers for his mother → He buys her flowers.' },
    { kind: 'IO', original: 'Explico la lección a los estudiantes.', answer: 'Les explico la lección.', english: 'I explain the lesson to the students → I explain the lesson to them.' },
    { kind: 'IO', original: 'Lee un cuento a sus hijos.', answer: 'Les lee un cuento.', english: 'She reads a story to her children → She reads them a story.' },
    { kind: 'IO', original: 'Enseñamos español a usted.', answer: 'Le enseñamos español.', english: 'We teach Spanish to you (formal) → We teach you Spanish.' },
    { kind: 'IO', original: 'Pago la cuenta a la camarera.', answer: 'Le pago la cuenta.', english: 'I pay the bill to the waitress → I pay her the bill.' },

    // DOUBLE OBJECT (10) — replace BOTH; remember le+lo → se lo
    { kind: 'DOUBLE', original: 'Doy el libro a María.', answer: 'Se lo doy.', english: 'I give the book to María → I give it to her. (le+lo → se lo)' },
    { kind: 'DOUBLE', original: 'Mando las cartas a mis padres.', answer: 'Se las mando.', english: 'I send the letters to my parents → I send them to them. (les+las → se las)' },
    { kind: 'DOUBLE', original: 'Compra los zapatos a su hijo.', answer: 'Se los compra.', english: 'He buys the shoes for his son → He buys them for him.' },
    { kind: 'DOUBLE', original: 'Explico la lección a los estudiantes.', answer: 'Se la explico.', english: 'I explain the lesson to the students → I explain it to them.' },
    { kind: 'DOUBLE', original: 'Da el regalo a su novia.', answer: 'Se lo da.', english: 'He gives the gift to his girlfriend → He gives it to her.' },
    { kind: 'DOUBLE', original: 'Mi madre me lee el cuento.', answer: 'Mi madre me lo lee.', english: 'My mother reads me the story → My mother reads it to me. (me stays)' },
    { kind: 'DOUBLE', original: 'Te compro la camisa.', answer: 'Te la compro.', english: 'I buy you the shirt → I buy it for you.' },
    { kind: 'DOUBLE', original: 'Nos enseña las palabras.', answer: 'Nos las enseña.', english: 'She teaches us the words → She teaches them to us.' },
    { kind: 'DOUBLE', original: 'Escribe las cartas a su abuelo.', answer: 'Se las escribe.', english: 'She writes the letters to her grandfather → She writes them to him.' },
    { kind: 'DOUBLE', original: 'Pregunto el precio a la vendedora.', answer: 'Se lo pregunto.', english: 'I ask the price of the saleswoman → I ask her it.' }
  ];

  function buildPronounsDrill() {
    const shuffled = [...PRONOUN_REWRITE_PROMPTS].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 20);
    picked.forEach(p => {
      drillItems.push({
        original: p.original,
        kind: p.kind,
        english: p.english,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isPronounRewrite: true
      });
    });
  }

  // PRESENT PERFECT drill — student types "he comido" / "has visto" etc.
  // Built from haber (present) + each verb's past participle.
  // For reflexive verbs, includes the reflexive pronoun in the answer (e.g. "me he duchado").
  function buildPerfectoDrill() {
    const HABER_PRESENT = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
    const REFL_PRONOUNS = ['me', 'te', 'se', 'nos', 'os', 'se'];
    const allowedPronouns = includeVosotros ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 5];

    // Filter verb pool by drillGroup (keep behavior consistent with main drill)
    let pool;
    if (drillGroup === 'all') pool = verbs.filter(v => v.conj && v.conj.participio);
    else if (drillGroup === 'regular') pool = verbs.filter(v => v.conj && v.conj.participio && (v.group === 'regular-ar' || v.group === 'regular-er' || v.group === 'regular-ir'));
    else if (drillGroup === 'stem-all') pool = verbs.filter(v => v.conj && v.conj.participio && v.group && v.group.startsWith('stem-'));
    else if (drillGroup === 'irregular') pool = verbs.filter(v => v.conj && v.conj.participio && (v.group === 'irregular' || (v.conj.participio && !v.conj.participio.endsWith('ado') && !v.conj.participio.endsWith('ido') && !v.conj.participio.endsWith('ído'))));
    else pool = verbs.filter(v => v.conj && v.conj.participio && v.group === drillGroup);
    if (pool.length === 0) pool = verbs.filter(v => v.conj && v.conj.participio);

    for (let i = 0; i < 20; i++) {
      const verb = pool[Math.floor(Math.random() * pool.length)];
      const pronounIdx = allowedPronouns[Math.floor(Math.random() * allowedPronouns.length)];
      const haber = HABER_PRESENT[pronounIdx];
      const participle = verb.conj.participio;
      const isReflexive = verb.inf.endsWith('se');
      const refPro = isReflexive ? REFL_PRONOUNS[pronounIdx] + ' ' : '';
      const answer = refPro + haber + ' ' + participle;

      drillItems.push({
        verb, tense: 'perfecto', pronounIdx,
        subjectDisplay: null,
        answer,
        userInput: '',
        isCorrect: null,
        isPerfecto: true
      });
    }
  }

  // PLUPERFECT SUBJUNCTIVE drill — student types "hubiera comido" / "hubieras visto" etc.
  // Built from haber (past subjunctive) + each verb's past participle.
  // Both -ra and -se forms are accepted by the grader via answerAlt.
  function buildPluperfectSubjDrill() {
    const HABER_RA = ['hubiera', 'hubieras', 'hubiera', 'hubiéramos', 'hubierais', 'hubieran'];
    const HABER_SE = ['hubiese', 'hubieses', 'hubiese', 'hubiésemos', 'hubieseis', 'hubiesen'];
    const REFL_PRONOUNS = ['me', 'te', 'se', 'nos', 'os', 'se'];
    const allowedPronouns = includeVosotros ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 5];

    let pool;
    if (drillGroup === 'all') pool = verbs.filter(v => v.conj && v.conj.participio);
    else if (drillGroup === 'regular') pool = verbs.filter(v => v.conj && v.conj.participio && (v.group === 'regular-ar' || v.group === 'regular-er' || v.group === 'regular-ir'));
    else if (drillGroup === 'stem-all') pool = verbs.filter(v => v.conj && v.conj.participio && v.group && v.group.startsWith('stem-'));
    else if (drillGroup === 'irregular') pool = verbs.filter(v => v.conj && v.conj.participio && (v.group === 'irregular' || (!v.conj.participio.endsWith('ado') && !v.conj.participio.endsWith('ido') && !v.conj.participio.endsWith('ído'))));
    else pool = verbs.filter(v => v.conj && v.conj.participio && v.group === drillGroup);
    if (pool.length === 0) pool = verbs.filter(v => v.conj && v.conj.participio);

    for (let i = 0; i < 20; i++) {
      const verb = pool[Math.floor(Math.random() * pool.length)];
      const pronounIdx = allowedPronouns[Math.floor(Math.random() * allowedPronouns.length)];
      const participle = verb.conj.participio;
      const isReflexive = verb.inf.endsWith('se');
      const refPro = isReflexive ? REFL_PRONOUNS[pronounIdx] + ' ' : '';
      const answer = refPro + HABER_RA[pronounIdx] + ' ' + participle;
      const answerAlt = [refPro + HABER_SE[pronounIdx] + ' ' + participle];

      drillItems.push({
        verb, tense: 'pluperfectsubj', pronounIdx,
        subjectDisplay: null,
        answer,
        answerAlt,
        userInput: '',
        isCorrect: null,
        isPluperfectSubj: true
      });
    }
  }

  // TÚ COMMANDS drill
  // Six sub-groups: positive-regular, positive-irregular, negative-regular,
  // negative-irregular, reflexive (positive+negative mixed), all-mixed
  // Each prompt: English instruction + infinitive + correct command answer.
  // The grader is forgiving on accents and capitalization.
  const COMMANDS_TU_DATA = {
    // POSITIVE REGULAR (12 verbs) — drop the -s from él/ella form
    'positive-regular': [
      { inf: 'hablar', en: 'Tell your friend to speak.', answer: 'habla' },
      { inf: 'comer', en: 'Tell your friend to eat.', answer: 'come' },
      { inf: 'escribir', en: 'Tell your friend to write.', answer: 'escribe' },
      { inf: 'estudiar', en: 'Tell your friend to study.', answer: 'estudia' },
      { inf: 'leer', en: 'Tell your friend to read.', answer: 'lee' },
      { inf: 'abrir', en: 'Tell your friend to open it.', answer: 'abre' },
      { inf: 'mirar', en: 'Tell your friend to look.', answer: 'mira' },
      { inf: 'escuchar', en: 'Tell your friend to listen.', answer: 'escucha' },
      { inf: 'trabajar', en: 'Tell your friend to work.', answer: 'trabaja' },
      { inf: 'beber', en: 'Tell your friend to drink.', answer: 'bebe' },
      { inf: 'vivir', en: 'Tell your friend to live.', answer: 'vive' },
      { inf: 'aprender', en: 'Tell your friend to learn.', answer: 'aprende' }
    ],
    // POSITIVE IRREGULAR (8 verbs) — the classic shortened forms
    'positive-irregular': [
      { inf: 'venir', en: 'Tell your friend to come here.', answer: 'ven' },
      { inf: 'decir', en: 'Tell your friend to say it / tell you.', answer: 'di' },
      { inf: 'salir', en: 'Tell your friend to leave.', answer: 'sal' },
      { inf: 'hacer', en: 'Tell your friend to do/make it.', answer: 'haz' },
      { inf: 'tener', en: 'Tell your friend to have / hold it.', answer: 'ten' },
      { inf: 'ir', en: 'Tell your friend to go.', answer: 've' },
      { inf: 'poner', en: 'Tell your friend to put it.', answer: 'pon' },
      { inf: 'ser', en: 'Tell your friend to be (something).', answer: 'sé' }
    ],
    // NEGATIVE REGULAR (12 verbs) — uses subjunctive tú form
    'negative-regular': [
      { inf: 'hablar', en: 'Tell your friend NOT to speak.', answer: 'no hables' },
      { inf: 'comer', en: 'Tell your friend NOT to eat.', answer: 'no comas' },
      { inf: 'escribir', en: 'Tell your friend NOT to write.', answer: 'no escribas' },
      { inf: 'estudiar', en: 'Tell your friend NOT to study.', answer: 'no estudies' },
      { inf: 'leer', en: 'Tell your friend NOT to read.', answer: 'no leas' },
      { inf: 'abrir', en: 'Tell your friend NOT to open it.', answer: 'no abras' },
      { inf: 'mirar', en: 'Tell your friend NOT to look.', answer: 'no mires' },
      { inf: 'escuchar', en: 'Tell your friend NOT to listen.', answer: 'no escuches' },
      { inf: 'trabajar', en: 'Tell your friend NOT to work.', answer: 'no trabajes' },
      { inf: 'beber', en: 'Tell your friend NOT to drink that.', answer: 'no bebas' },
      { inf: 'vivir', en: 'Tell your friend NOT to live there.', answer: 'no vivas' },
      { inf: 'aprender', en: 'Tell your friend NOT to learn it.', answer: 'no aprendas' }
    ],
    // NEGATIVE IRREGULAR (8 verbs) — built from yo-go stem (or truly irregular)
    'negative-irregular': [
      { inf: 'venir', en: 'Tell your friend NOT to come.', answer: 'no vengas' },
      { inf: 'decir', en: 'Tell your friend NOT to say it.', answer: 'no digas' },
      { inf: 'salir', en: 'Tell your friend NOT to leave.', answer: 'no salgas' },
      { inf: 'hacer', en: 'Tell your friend NOT to do it.', answer: 'no hagas' },
      { inf: 'tener', en: 'Tell your friend NOT to have it.', answer: 'no tengas' },
      { inf: 'ir', en: 'Tell your friend NOT to go.', answer: 'no vayas' },
      { inf: 'poner', en: 'Tell your friend NOT to put it.', answer: 'no pongas' },
      { inf: 'ser', en: 'Tell your friend NOT to be (something).', answer: 'no seas' }
    ],
    // REFLEXIVE (8 verbs × 2 modes = 16 prompts)
    // Affirmative: pronoun attaches with accent (¡levántate!)
    // Negative: pronoun separates (¡no te levantes!)
    'reflexive': [
      { inf: 'levantarse', en: 'Tell your friend to get up.', answer: 'levántate' },
      { inf: 'sentarse', en: 'Tell your friend to sit down.', answer: 'siéntate' },
      { inf: 'callarse', en: 'Tell your friend to be quiet.', answer: 'cállate' },
      { inf: 'vestirse', en: 'Tell your friend to get dressed.', answer: 'vístete' },
      { inf: 'despertarse', en: 'Tell your friend to wake up.', answer: 'despiértate' },
      { inf: 'ducharse', en: 'Tell your friend to take a shower.', answer: 'dúchate' },
      { inf: 'cepillarse', en: 'Tell your friend to brush (teeth/hair).', answer: 'cepíllate' },
      { inf: 'irse', en: 'Tell your friend to go away / leave.', answer: 'vete' },
      { inf: 'levantarse', en: 'Tell your friend NOT to get up.', answer: 'no te levantes' },
      { inf: 'sentarse', en: 'Tell your friend NOT to sit down.', answer: 'no te sientes' },
      { inf: 'callarse', en: 'Tell your friend NOT to be quiet.', answer: 'no te calles' },
      { inf: 'vestirse', en: 'Tell your friend NOT to get dressed.', answer: 'no te vistas' },
      { inf: 'despertarse', en: 'Tell your friend NOT to wake up.', answer: 'no te despiertes' },
      { inf: 'ducharse', en: 'Tell your friend NOT to shower.', answer: 'no te duches' },
      { inf: 'cepillarse', en: 'Tell your friend NOT to brush.', answer: 'no te cepilles' },
      { inf: 'irse', en: 'Tell your friend NOT to leave.', answer: 'no te vayas' }
    ]
  };

  // USTED/USTEDES COMMANDS drill
  // Six sub-groups: positive-regular, positive-irregular, negative-regular,
  // negative-irregular, ustedes-mixed (any plural commands), all-mixed
  // For usted (singular formal) and ustedes (plural — formal in Spain, ALL groups in Lat. Am.)
  // Same form does affirmative and negative — just add "no" for negative.
  const COMMANDS_USTED_DATA = {
    // POSITIVE REGULAR (12 verbs) — yo form drop -o + opposite ending
    'positive-regular': [
      { inf: 'hablar', en: 'Tell the shopkeeper (formally) to speak more slowly.', answer: 'hable más despacio' },
      { inf: 'comer', en: 'Tell your boss (formally) to eat.', answer: 'coma' },
      { inf: 'escribir', en: 'Tell the official (formally) to write here.', answer: 'escriba aquí' },
      { inf: 'estudiar', en: 'Tell your teacher (formally) to study with you.', answer: 'estudie' },
      { inf: 'leer', en: 'Tell the waiter (formally) to read the menu.', answer: 'lea el menú' },
      { inf: 'abrir', en: 'Tell the clerk (formally) to open the door.', answer: 'abra la puerta' },
      { inf: 'cerrar', en: 'Tell the waiter (formally) to close the window.', answer: 'cierre la ventana' },
      { inf: 'pedir', en: 'Tell the official (formally) to ask for permission.', answer: 'pida permiso' },
      { inf: 'volver', en: 'Tell the doctor (formally) to come back later.', answer: 'vuelva más tarde' },
      { inf: 'dormir', en: 'Tell your colleague (formally) to sleep.', answer: 'duerma' },
      { inf: 'trabajar', en: 'Tell the employee (formally) to work harder.', answer: 'trabaje más' },
      { inf: 'mirar', en: 'Tell the clerk (formally) to look here.', answer: 'mire aquí' }
    ],
    // POSITIVE IRREGULAR (5 verbs) — the truly irregular ones
    'positive-irregular': [
      { inf: 'dar', en: 'Tell the cashier (formally) to give you a coffee.', answer: 'déme un café' },
      { inf: 'ir', en: 'Tell the taxi driver (formally) to go to the airport.', answer: 'vaya al aeropuerto' },
      { inf: 'ser', en: 'Tell the customer (formally) to be patient.', answer: 'sea paciente' },
      { inf: 'estar', en: 'Tell the patient (formally) to stay calm.', answer: 'esté tranquilo' },
      { inf: 'saber', en: 'Tell the visitor (formally) to know we are here to help.', answer: 'sepa que estamos para ayudar' }
    ],
    // NEGATIVE REGULAR (12 verbs) — same form, just add "no"
    'negative-regular': [
      { inf: 'hablar', en: 'Tell the customer (formally) NOT to speak so loudly.', answer: 'no hable tan alto' },
      { inf: 'comer', en: 'Tell the patient (formally) NOT to eat that.', answer: 'no coma eso' },
      { inf: 'escribir', en: 'Tell the clerk (formally) NOT to write with that pen.', answer: 'no escriba con ese bolígrafo' },
      { inf: 'salir', en: 'Tell the worker (formally) NOT to leave yet.', answer: 'no salga todavía' },
      { inf: 'venir', en: 'Tell the client (formally) NOT to come tomorrow.', answer: 'no venga mañana' },
      { inf: 'hacer', en: 'Tell the technician (formally) NOT to do that.', answer: 'no haga eso' },
      { inf: 'leer', en: 'Tell the visitor (formally) NOT to read that document.', answer: 'no lea ese documento' },
      { inf: 'tener', en: 'Tell the visitor (formally) NOT to worry.', answer: 'no tenga miedo' },
      { inf: 'poner', en: 'Tell the waiter (formally) NOT to put salt on it.', answer: 'no ponga sal' },
      { inf: 'cerrar', en: 'Tell the clerk (formally) NOT to close yet.', answer: 'no cierre todavía' },
      { inf: 'mirar', en: 'Tell the witness (formally) NOT to look directly.', answer: 'no mire directamente' },
      { inf: 'beber', en: 'Tell the patient (formally) NOT to drink that.', answer: 'no beba eso' }
    ],
    // NEGATIVE IRREGULAR (5 verbs)
    'negative-irregular': [
      { inf: 'dar', en: 'Tell the cashier (formally) NOT to give back change.', answer: 'no dé el cambio' },
      { inf: 'ir', en: 'Tell the visitor (formally) NOT to go alone.', answer: 'no vaya solo' },
      { inf: 'ser', en: 'Tell the customer (formally) NOT to be impatient.', answer: 'no sea impaciente' },
      { inf: 'estar', en: 'Tell the patient (formally) NOT to be nervous.', answer: 'no esté nervioso' },
      { inf: 'saber', en: 'Tell the visitor (formally) not to know about the surprise.', answer: 'no sepa nada de la sorpresa' }
    ],
    // USTEDES (plural) — mix of affirmative and negative for groups
    'ustedes-mixed': [
      { inf: 'hablar', en: 'Tell the group to speak louder.', answer: 'hablen más alto' },
      { inf: 'sentarse', en: 'Tell the group to sit down.', answer: 'siéntense' },
      { inf: 'venir', en: 'Tell the group to come with you.', answer: 'vengan conmigo' },
      { inf: 'tomar', en: 'Tell the group to take a seat.', answer: 'tomen asiento' },
      { inf: 'escuchar', en: 'Tell the group NOT to listen to that.', answer: 'no escuchen eso' },
      { inf: 'salir', en: 'Tell the group NOT to leave yet.', answer: 'no salgan todavía' },
      { inf: 'hacer', en: 'Tell the group to make a line.', answer: 'hagan una fila' },
      { inf: 'ir', en: 'Tell the group to go to the room.', answer: 'vayan a la sala' },
      { inf: 'ser', en: 'Tell the group NOT to be shy.', answer: 'no sean tímidos' },
      { inf: 'esperar', en: 'Tell the group to wait one moment.', answer: 'esperen un momento' },
      { inf: 'dar', en: 'Tell the group NOT to give up.', answer: 'no se den por vencidos' },
      { inf: 'preocuparse', en: 'Tell the group NOT to worry.', answer: 'no se preocupen' }
    ]
  };

  function buildCommandsUstedDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: positive-regular, positive-irregular, negative-regular,
    //               negative-irregular, ustedes-mixed, all
    let pool;
    if (drillGroup === 'all' || !COMMANDS_USTED_DATA[drillGroup]) {
      pool = [].concat(
        COMMANDS_USTED_DATA['positive-regular'],
        COMMANDS_USTED_DATA['positive-irregular'],
        COMMANDS_USTED_DATA['negative-regular'],
        COMMANDS_USTED_DATA['negative-irregular'],
        COMMANDS_USTED_DATA['ustedes-mixed']
      );
    } else {
      pool = COMMANDS_USTED_DATA[drillGroup];
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        inf: p.inf,
        instruction: p.en,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isCommandTu: true  // re-use same rendering branch — same prompt format
      });
    });
  }

  // REFLEXIVE COMMANDS drill
  // Six sub-groups covering tú/usted/ustedes affirmative + negative
  // Builds on COMMANDS_TU_DATA's reflexive set (tú reflexives) and extends with formal forms.
  const COMMANDS_REFLEXIVE_DATA = {
    // AFFIRMATIVE TÚ (8 verbs) — same as in tu-commands reflexive set
    'aff-tu': [
      { inf: 'levantarse', en: 'Tell your friend to get up.', answer: 'levántate' },
      { inf: 'sentarse', en: 'Tell your friend to sit down.', answer: 'siéntate' },
      { inf: 'callarse', en: 'Tell your friend to be quiet.', answer: 'cállate' },
      { inf: 'vestirse', en: 'Tell your friend to get dressed.', answer: 'vístete' },
      { inf: 'despertarse', en: 'Tell your friend to wake up.', answer: 'despiértate' },
      { inf: 'ducharse', en: 'Tell your friend to take a shower.', answer: 'dúchate' },
      { inf: 'cepillarse', en: 'Tell your friend to brush (teeth/hair).', answer: 'cepíllate' },
      { inf: 'irse', en: 'Tell your friend to leave / go away.', answer: 'vete' },
      { inf: 'apurarse', en: 'Tell your friend to hurry up.', answer: 'apúrate' },
      { inf: 'tranquilizarse', en: 'Tell your friend to calm down.', answer: 'tranquilízate' },
      { inf: 'cuidarse', en: 'Tell your friend to take care.', answer: 'cuídate' },
      { inf: 'lavarse', en: 'Tell your friend to wash up.', answer: 'lávate' }
    ],
    // NEGATIVE TÚ (8 verbs)
    'neg-tu': [
      { inf: 'levantarse', en: 'Tell your friend NOT to get up.', answer: 'no te levantes' },
      { inf: 'sentarse', en: 'Tell your friend NOT to sit down.', answer: 'no te sientes' },
      { inf: 'callarse', en: 'Tell your friend NOT to be quiet.', answer: 'no te calles' },
      { inf: 'vestirse', en: 'Tell your friend NOT to get dressed.', answer: 'no te vistas' },
      { inf: 'despertarse', en: 'Tell your friend NOT to wake up.', answer: 'no te despiertes' },
      { inf: 'ducharse', en: 'Tell your friend NOT to shower.', answer: 'no te duches' },
      { inf: 'preocuparse', en: 'Tell your friend NOT to worry.', answer: 'no te preocupes' },
      { inf: 'irse', en: 'Tell your friend NOT to leave.', answer: 'no te vayas' },
      { inf: 'olvidarse', en: 'Tell your friend NOT to forget.', answer: 'no te olvides' },
      { inf: 'apurarse', en: 'Tell your friend NOT to hurry.', answer: 'no te apures' }
    ],
    // AFFIRMATIVE USTED (8 verbs)
    'aff-usted': [
      { inf: 'levantarse', en: 'Tell the patient (formally) to get up.', answer: 'levántese' },
      { inf: 'sentarse', en: 'Tell the customer (formally) to sit down.', answer: 'siéntese' },
      { inf: 'callarse', en: 'Tell the witness (formally) to be quiet.', answer: 'cállese' },
      { inf: 'vestirse', en: 'Tell the patient (formally) to get dressed.', answer: 'vístase' },
      { inf: 'tranquilizarse', en: 'Tell the customer (formally) to calm down.', answer: 'tranquilícese' },
      { inf: 'irse', en: 'Tell the visitor (formally) to leave.', answer: 'váyase' },
      { inf: 'cuidarse', en: 'Tell the patient (formally) to take care.', answer: 'cuídese' },
      { inf: 'acercarse', en: 'Tell the visitor (formally) to come closer.', answer: 'acérquese' }
    ],
    // NEGATIVE USTED (8 verbs)
    'neg-usted': [
      { inf: 'preocuparse', en: 'Tell the customer (formally) NOT to worry.', answer: 'no se preocupe' },
      { inf: 'levantarse', en: 'Tell the patient (formally) NOT to get up.', answer: 'no se levante' },
      { inf: 'irse', en: 'Tell the visitor (formally) NOT to leave yet.', answer: 'no se vaya todavía' },
      { inf: 'sentarse', en: 'Tell the official (formally) NOT to sit there.', answer: 'no se siente ahí' },
      { inf: 'olvidarse', en: 'Tell the client (formally) NOT to forget.', answer: 'no se olvide' },
      { inf: 'acercarse', en: 'Tell the visitor (formally) NOT to get too close.', answer: 'no se acerque' },
      { inf: 'apurarse', en: 'Tell the patient (formally) NOT to rush.', answer: 'no se apure' },
      { inf: 'dormirse', en: 'Tell the student (formally) NOT to fall asleep.', answer: 'no se duerma' }
    ],
    // USTEDES (group, mixed aff/neg)
    'ustedes': [
      { inf: 'sentarse', en: 'Tell the group to sit down.', answer: 'siéntense' },
      { inf: 'callarse', en: 'Tell the kids to be quiet.', answer: 'cállense' },
      { inf: 'preocuparse', en: 'Tell the group NOT to worry.', answer: 'no se preocupen' },
      { inf: 'vestirse', en: 'Tell the kids to get dressed quickly.', answer: 'vístanse rápido' },
      { inf: 'levantarse', en: 'Tell the group to get up.', answer: 'levántense' },
      { inf: 'irse', en: 'Tell the group NOT to leave yet.', answer: 'no se vayan todavía' },
      { inf: 'dormirse', en: 'Tell the students NOT to fall asleep in class.', answer: 'no se duerman en clase' },
      { inf: 'acercarse', en: 'Tell the group to come closer.', answer: 'acérquense' },
      { inf: 'apurarse', en: 'Tell the group to hurry up.', answer: 'apúrense' },
      { inf: 'olvidarse', en: 'Tell the group NOT to forget the homework.', answer: 'no se olviden de la tarea' }
    ]
  };

  function buildCommandsReflexiveDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: aff-tu, neg-tu, aff-usted, neg-usted, ustedes, all
    let pool;
    if (drillGroup === 'all' || !COMMANDS_REFLEXIVE_DATA[drillGroup]) {
      pool = [].concat(
        COMMANDS_REFLEXIVE_DATA['aff-tu'],
        COMMANDS_REFLEXIVE_DATA['neg-tu'],
        COMMANDS_REFLEXIVE_DATA['aff-usted'],
        COMMANDS_REFLEXIVE_DATA['neg-usted'],
        COMMANDS_REFLEXIVE_DATA['ustedes']
      );
    } else {
      pool = COMMANDS_REFLEXIVE_DATA[drillGroup];
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        inf: p.inf,
        instruction: p.en,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isCommandTu: true  // re-use same rendering branch — same prompt format
      });
    });
  }

  // SINGLE OBJECT PRONOUN COMMANDS drill
  // Six sub-groups covering tú/usted with direct and indirect object pronouns
  // Pattern reinforces: AFFIRMATIVE attaches with accent, NEGATIVE separates
  const COMMANDS_OBJECT_DATA = {
    // AFFIRMATIVE TÚ + DIRECT OBJECT (lo, la, los, las)
    'aff-tu-direct': [
      { inf: 'comprar', en: 'Buy it! (the book — el libro)', answer: 'cómpralo' },
      { inf: 'comer', en: 'Eat it! (the pizza — la pizza)', answer: 'cómela' },
      { inf: 'llamar', en: 'Call her! (María)', answer: 'llámala' },
      { inf: 'mirar', en: 'Look at it! (the painting — el cuadro)', answer: 'míralo' },
      { inf: 'leer', en: 'Read them! (the books — los libros)', answer: 'léelos' },
      { inf: 'escuchar', en: 'Listen to it! (the song — la canción)', answer: 'escúchala' },
      { inf: 'beber', en: 'Drink it! (the water — el agua)', answer: 'bébela' },
      { inf: 'cerrar', en: 'Close it! (the door — la puerta)', answer: 'ciérrala' },
      { inf: 'abrir', en: 'Open them! (the windows — las ventanas)', answer: 'ábrelas' },
      { inf: 'hacer', en: 'Do it! (the homework — la tarea)', answer: 'hazla' },
      { inf: 'poner', en: 'Put it there! (the cup — la taza)', answer: 'ponla ahí' },
      { inf: 'olvidar', en: 'Forget it! (the problem — el problema)', answer: 'olvídalo' }
    ],
    // NEGATIVE TÚ + DIRECT OBJECT
    'neg-tu-direct': [
      { inf: 'comprar', en: 'Don\'t buy it! (the car — el carro)', answer: 'no lo compres' },
      { inf: 'comer', en: 'Don\'t eat it! (the candy — el dulce)', answer: 'no lo comas' },
      { inf: 'llamar', en: 'Don\'t call him! (Juan)', answer: 'no lo llames' },
      { inf: 'mirar', en: 'Don\'t look at her! (the stranger)', answer: 'no la mires' },
      { inf: 'leer', en: 'Don\'t read it! (the message — el mensaje)', answer: 'no lo leas' },
      { inf: 'tocar', en: 'Don\'t touch it! (the vase — el florero)', answer: 'no lo toques' },
      { inf: 'beber', en: 'Don\'t drink it! (the milk — la leche)', answer: 'no la bebas' },
      { inf: 'abrir', en: 'Don\'t open it! (the gift — el regalo)', answer: 'no lo abras' },
      { inf: 'cerrar', en: 'Don\'t close them! (the windows)', answer: 'no las cierres' },
      { inf: 'hacer', en: 'Don\'t do it!', answer: 'no lo hagas' }
    ],
    // AFFIRMATIVE TÚ + INDIRECT OBJECT (me, te, le, nos, les)
    'aff-tu-indirect': [
      { inf: 'decir', en: 'Tell me! (the truth)', answer: 'dime la verdad' },
      { inf: 'dar', en: 'Give me a hug!', answer: 'dame un abrazo' },
      { inf: 'escribir', en: 'Write to her! (your grandma)', answer: 'escríbele' },
      { inf: 'hablar', en: 'Talk to them! (your parents)', answer: 'háblales' },
      { inf: 'llamar', en: 'Call me tonight!', answer: 'llámame esta noche' },
      { inf: 'esperar', en: 'Wait for me!', answer: 'espérame' },
      { inf: 'mostrar', en: 'Show me your homework!', answer: 'muéstrame la tarea' },
      { inf: 'mirar', en: 'Look at me!', answer: 'mírame' },
      { inf: 'escuchar', en: 'Listen to me!', answer: 'escúchame' },
      { inf: 'preguntar', en: 'Ask them! (your friends)', answer: 'pregúntales' }
    ],
    // NEGATIVE TÚ + INDIRECT OBJECT
    'neg-tu-indirect': [
      { inf: 'decir', en: 'Don\'t tell me anything!', answer: 'no me digas nada' },
      { inf: 'dar', en: 'Don\'t give him money!', answer: 'no le des dinero' },
      { inf: 'escribir', en: 'Don\'t write to her!', answer: 'no le escribas' },
      { inf: 'hablar', en: 'Don\'t talk to them!', answer: 'no les hables' },
      { inf: 'llamar', en: 'Don\'t call me tomorrow!', answer: 'no me llames mañana' },
      { inf: 'molestar', en: 'Don\'t bother me!', answer: 'no me molestes' },
      { inf: 'dejar', en: 'Don\'t leave me alone!', answer: 'no me dejes solo' },
      { inf: 'mentir', en: 'Don\'t lie to me!', answer: 'no me mientas' },
      { inf: 'pedir', en: 'Don\'t ask him for money!', answer: 'no le pidas dinero' },
      { inf: 'gritar', en: 'Don\'t yell at me!', answer: 'no me grites' }
    ],
    // USTED commands with object pronouns (mixed affirm/neg, both direct/indirect)
    'usted-mixed': [
      { inf: 'traer', en: 'Bring it to me! (the bill — la cuenta) (formal)', answer: 'tráigamela' },  // double - preview
      { inf: 'llamar', en: 'Call him! (the doctor) (formal)', answer: 'llámelo' },
      { inf: 'esperar', en: 'Wait for me, please! (formal)', answer: 'espéreme por favor' },
      { inf: 'decir', en: 'Don\'t tell him! (formal)', answer: 'no le diga' },
      { inf: 'mirar', en: 'Look at it! (the painting) (formal)', answer: 'mírelo' },
      { inf: 'dejar', en: 'Leave it here! (your bag) (formal)', answer: 'déjela aquí' },
      { inf: 'olvidar', en: 'Don\'t forget it! (your passport) (formal)', answer: 'no lo olvide' },
      { inf: 'escribir', en: 'Write to her! (your mom) (formal)', answer: 'escríbale' },
      { inf: 'tocar', en: 'Don\'t touch it! (the artifact) (formal)', answer: 'no lo toque' },
      { inf: 'pasar', en: 'Pass me the salt, please! (formal)', answer: 'páseme la sal por favor' }
    ]
  };

  function buildCommandsObjectDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: aff-tu-direct, neg-tu-direct, aff-tu-indirect, neg-tu-indirect,
    //               usted-mixed, all
    let pool;
    if (drillGroup === 'all' || !COMMANDS_OBJECT_DATA[drillGroup]) {
      pool = [].concat(
        COMMANDS_OBJECT_DATA['aff-tu-direct'],
        COMMANDS_OBJECT_DATA['neg-tu-direct'],
        COMMANDS_OBJECT_DATA['aff-tu-indirect'],
        COMMANDS_OBJECT_DATA['neg-tu-indirect'],
        COMMANDS_OBJECT_DATA['usted-mixed']
      );
    } else {
      pool = COMMANDS_OBJECT_DATA[drillGroup];
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        inf: p.inf,
        instruction: p.en,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isCommandTu: true
      });
    });
  }

  // DOUBLE OBJECT PRONOUN COMMANDS drill
  // Six sub-groups testing the indirect-then-direct order, the le→se rule,
  // and the attach/separate pattern that students learned in L34.4.
  // CAREFUL: every affirmative double-pronoun answer needs an accent.
  const COMMANDS_DOUBLE_DATA = {
    // AFFIRMATIVE TÚ, easy: me/te/nos + lo/la (no le→se rule)
    'aff-tu-easy': [
      { inf: 'dar', en: 'Give it to me! (el libro)', answer: 'dámelo' },
      { inf: 'dar', en: 'Give them to me! (las llaves)', answer: 'dámelas' },
      { inf: 'comprar', en: 'Buy it for me! (la camisa)', answer: 'cómpramela' },
      { inf: 'traer', en: 'Bring them to me! (los regalos)', answer: 'tráemelos' },
      { inf: 'decir', en: 'Tell it to me! (la verdad)', answer: 'dímela' },
      { inf: 'mandar', en: 'Send it to me! (el mensaje)', answer: 'mándamelo' },
      { inf: 'mostrar', en: 'Show it to me! (la foto)', answer: 'muéstramela' },
      { inf: 'leer', en: 'Read it to us! (el cuento)', answer: 'léenoslo' },
      { inf: 'cantar', en: 'Sing it to us! (la canción)', answer: 'cántanosla' },
      { inf: 'explicar', en: 'Explain it to me! (la tarea)', answer: 'explícamela' }
    ],
    // NEGATIVE TÚ, easy: me/te/nos + lo/la
    'neg-tu-easy': [
      { inf: 'dar', en: 'Don\'t give it to me! (el problema)', answer: 'no me lo des' },
      { inf: 'comprar', en: 'Don\'t buy it for me! (el regalo)', answer: 'no me lo compres' },
      { inf: 'traer', en: 'Don\'t bring them to me! (las flores)', answer: 'no me las traigas' },
      { inf: 'decir', en: 'Don\'t tell it to me! (la mentira)', answer: 'no me la digas' },
      { inf: 'mandar', en: 'Don\'t send it to me! (el correo)', answer: 'no me lo mandes' },
      { inf: 'mostrar', en: 'Don\'t show them to me! (las fotos)', answer: 'no me las muestres' },
      { inf: 'pedir', en: 'Don\'t ask us for it! (la respuesta)', answer: 'no nos la pidas' },
      { inf: 'leer', en: 'Don\'t read it to us! (el libro)', answer: 'no nos lo leas' },
      { inf: 'cantar', en: 'Don\'t sing it to us! (la canción)', answer: 'no nos la cantes' },
      { inf: 'explicar', en: 'Don\'t explain it to me again! (la lección)', answer: 'no me la expliques' }
    ],
    // AFFIRMATIVE TÚ + LE→SE rule
    'aff-tu-se': [
      { inf: 'dar', en: 'Give it to him! (el libro a Juan)', answer: 'dáselo' },
      { inf: 'dar', en: 'Give them to her! (las llaves a María)', answer: 'dáselas' },
      { inf: 'comprar', en: 'Buy it for him! (la camisa a tu hermano)', answer: 'cómprasela' },
      { inf: 'mandar', en: 'Send them to them! (los documentos a ellos)', answer: 'mándaselos' },
      { inf: 'decir', en: 'Tell it to her! (la verdad a tu mamá)', answer: 'dísela' },
      { inf: 'pedir', en: 'Ask him for it! (el favor a tu papá)', answer: 'pídeselo' },
      { inf: 'mostrar', en: 'Show it to them! (la foto a tus amigos)', answer: 'muéstrasela' },
      { inf: 'enviar', en: 'Send it to her! (el mensaje a tu hermana)', answer: 'envíaselo' },
      { inf: 'explicar', en: 'Explain it to him! (la tarea al maestro)', answer: 'explícasela' },
      { inf: 'leer', en: 'Read it to them! (el cuento a los niños)', answer: 'léeselo' }
    ],
    // NEGATIVE TÚ + LE→SE rule
    'neg-tu-se': [
      { inf: 'dar', en: 'Don\'t give it to him! (el dinero)', answer: 'no se lo des' },
      { inf: 'decir', en: 'Don\'t tell it to her! (el secreto)', answer: 'no se lo digas' },
      { inf: 'comprar', en: 'Don\'t buy it for them! (la consola)', answer: 'no se la compres' },
      { inf: 'mandar', en: 'Don\'t send them to him! (los correos)', answer: 'no se los mandes' },
      { inf: 'pedir', en: 'Don\'t ask her for it! (el favor)', answer: 'no se lo pidas' },
      { inf: 'mostrar', en: 'Don\'t show it to them! (la respuesta)', answer: 'no se la muestres' },
      { inf: 'enviar', en: 'Don\'t send it to her! (el regalo)', answer: 'no se lo envíes' },
      { inf: 'explicar', en: 'Don\'t explain them to her! (las reglas)', answer: 'no se las expliques' },
      { inf: 'contar', en: 'Don\'t tell it to him! (la historia)', answer: 'no se la cuentes' },
      { inf: 'dar', en: 'Don\'t give them to them! (los exámenes)', answer: 'no se los des' }
    ],
    // USTED commands + double pronouns (mixed affirmative and negative)
    'usted-double': [
      { inf: 'traer', en: 'Bring it to me, please! (la cuenta) (formal)', answer: 'tráigamela por favor' },
      { inf: 'dar', en: 'Don\'t give it to him! (el dinero) (formal)', answer: 'no se lo dé' },
      { inf: 'mostrar', en: 'Show it to me! (la foto) (formal)', answer: 'muéstremela' },
      { inf: 'mandar', en: 'Don\'t send it to me! (el correo) (formal)', answer: 'no me lo mande' },
      { inf: 'comprar', en: 'Buy it for her, please! (el regalo) (formal)', answer: 'cómpresela por favor' },
      { inf: 'decir', en: 'Don\'t tell it to him! (la noticia) (formal)', answer: 'no se la diga' },
      { inf: 'pasar', en: 'Pass it to me! (la sal) (formal)', answer: 'pásemela' },
      { inf: 'explicar', en: 'Explain it to us! (la situación) (formal)', answer: 'explíquenosla' },
      { inf: 'enviar', en: 'Don\'t send them to her! (los paquetes) (formal)', answer: 'no se los envíe' },
      { inf: 'leer', en: 'Read it to them! (el documento) (formal)', answer: 'léaselo' }
    ]
  };

  function buildCommandsDoubleDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: aff-tu-easy, neg-tu-easy, aff-tu-se, neg-tu-se, usted-double, all
    let pool;
    if (drillGroup === 'all' || !COMMANDS_DOUBLE_DATA[drillGroup]) {
      pool = [].concat(
        COMMANDS_DOUBLE_DATA['aff-tu-easy'],
        COMMANDS_DOUBLE_DATA['neg-tu-easy'],
        COMMANDS_DOUBLE_DATA['aff-tu-se'],
        COMMANDS_DOUBLE_DATA['neg-tu-se'],
        COMMANDS_DOUBLE_DATA['usted-double']
      );
    } else {
      pool = COMMANDS_DOUBLE_DATA[drillGroup];
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        inf: p.inf,
        instruction: p.en,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isCommandTu: true
      });
    });
  }


  // SABER/CONOCER + PEDIR/PREGUNTAR drill
  // Scenario-based: student sees Spanish sentence with blank + English translation,
  // types the conjugated verb that fills the blank.
  // Five sub-groups: saber-conocer-present, pedir-preguntar-present, all-present,
  //                  past-meaning-shifts, all-mixed
  const CONFUSABLE_VERBS_DATA = {
    // SABER vs CONOCER — present tense
    'saber-conocer-present': [
      { es: 'Yo ___ a María desde hace años.', en: 'I have known María for years. (person → conocer)', answer: 'conozco' },
      { es: 'Yo ___ que ella es de Lima.', en: 'I know that she is from Lima. (fact → saber)', answer: 'sé' },
      { es: '¿Tú ___ nadar?', en: 'Do you know how to swim? (skill → saber)', answer: 'sabes' },
      { es: '¿Tú ___ esa canción?', en: 'Do you know that song? (thing → conocer)', answer: 'conoces' },
      { es: 'Nosotros ___ un buen restaurante cerca.', en: 'We know a good restaurant nearby. (thing → conocer)', answer: 'conocemos' },
      { es: 'Nosotros no ___ qué hora es.', en: 'We don\'t know what time it is. (fact → saber)', answer: 'sabemos' },
      { es: 'Ella ___ tres idiomas.', en: 'She knows three languages. (info/skills → saber)', answer: 'sabe' },
      { es: 'Ella ___ a mi hermano.', en: 'She knows my brother. (person → conocer)', answer: 'conoce' },
      { es: 'Ellos ___ tocar el piano muy bien.', en: 'They know how to play piano well. (skill → saber)', answer: 'saben' },
      { es: 'Ellos no ___ esta ciudad.', en: 'They don\'t know this city. (place → conocer)', answer: 'conocen' },
      { es: '¿Usted ___ dónde está la biblioteca?', en: 'Do you (formal) know where the library is? (fact → saber)', answer: 'sabe' },
      { es: 'Yo ___ a tu mamá del trabajo.', en: 'I know your mom from work. (person → conocer)', answer: 'conozco' }
    ],
    // PEDIR vs PREGUNTAR — present tense
    'pedir-preguntar-present': [
      { es: 'Yo ___ un café con leche, por favor.', en: 'I\'ll have / order a coffee with milk, please. (request → pedir)', answer: 'pido' },
      { es: 'Yo ___ qué hora es.', en: 'I ask what time it is. (question → preguntar)', answer: 'pregunto' },
      { es: 'Mi hermano me ___ ayuda con la tarea.', en: 'My brother asks me for help with homework. (request → pedir)', answer: 'pide' },
      { es: 'Mi hermano me ___ si quiero ir al cine.', en: 'My brother asks me if I want to go to the movies. (question → preguntar)', answer: 'pregunta' },
      { es: '¿Tú ___ favores muy seguido?', en: 'Do you ask for favors very often? (request → pedir)', answer: 'pides' },
      { es: '¿Tú ___ muchas cosas en clase?', en: 'Do you ask many questions in class? (question → preguntar)', answer: 'preguntas' },
      { es: 'Siempre ___ agua en el restaurante.', en: 'I always order water at the restaurant. (request → pedir)', answer: 'pido' },
      { es: 'Ellos siempre ___ de dónde soy.', en: 'They always ask where I\'m from. (question → preguntar)', answer: 'preguntan' },
      { es: 'Mi mamá ___ por ti.', en: 'My mom asks about you. (preguntar POR = inquire about)', answer: 'pregunta' },
      { es: 'Nosotros ___ permiso antes de salir.', en: 'We ask for permission before leaving. (request → pedir)', answer: 'pedimos' },
      { es: '¿Por qué ___ tantas cosas? ¡Cállate!', en: 'Why do you ask so many things? Be quiet! (questions → preguntar)', answer: 'preguntas' },
      { es: 'Voy a ___ la cuenta.', en: 'I\'m going to ask for the bill. (request → pedir, infinitive form)', answer: 'pedir' }
    ],
    // MIXED — all four verbs, present tense
    'all-present': [
      { es: '¿___ a mi prima Sofía?', en: 'Do you know my cousin Sofía? (person → conocer, tú form)', answer: 'conoces' },
      { es: 'Yo ___ un té, por favor.', en: 'I\'ll have a tea, please. (request → pedir)', answer: 'pido' },
      { es: 'Le voy a ___ al profesor sobre el examen.', en: 'I\'m going to ask the teacher about the exam. (question → preguntar, infinitive)', answer: 'preguntar' },
      { es: 'No ___ qué hacer en esta situación.', en: 'I don\'t know what to do in this situation. (fact → saber)', answer: 'sé' },
      { es: 'Ellos siempre me ___ dinero.', en: 'They always ask me for money. (request → pedir)', answer: 'piden' },
      { es: 'Mi abuela ___ cocinar muy bien.', en: 'My grandmother knows how to cook very well. (skill → saber)', answer: 'sabe' },
      { es: 'Ella ___ la ciudad porque vivió allí.', en: 'She knows the city because she lived there. (place → conocer)', answer: 'conoce' },
      { es: 'Cuando no entiendo algo, ___.', en: 'When I don\'t understand something, I ask (a question). (question → preguntar)', answer: 'pregunto' },
      { es: '¿Me ___ un favor?', en: 'Can I ask you a favor? (request → pedir, tú form)', answer: 'pides' },
      { es: 'Mi hermana ___ muchísimo de historia.', en: 'My sister knows a lot about history. (knowledge → saber)', answer: 'sabe' }
    ],
    // PAST TENSE MEANING SHIFTS — preterite vs imperfect of saber/conocer
    'past-meaning-shifts': [
      { es: '___ a María en la fiesta anoche.', en: 'I MET María at the party last night. (one-time meeting → preterite of conocer)', answer: 'conocí' },
      { es: 'Yo ___ a María desde la escuela primaria.', en: 'I had known María since elementary school. (ongoing → imperfect of conocer)', answer: 'conocía' },
      { es: '___ la verdad ayer.', en: 'I FOUND OUT the truth yesterday. (the moment of learning → preterite of saber)', answer: 'supe' },
      { es: 'Yo ___ la verdad desde hace mucho tiempo.', en: 'I had known the truth for a long time. (ongoing → imperfect of saber)', answer: 'sabía' },
      { es: 'Mi mamá ___ a tu papá en la universidad.', en: 'My mom met your dad in college. (one-time → preterite of conocer)', answer: 'conoció' },
      { es: 'Cuando era niño, no ___ que mi tío vivía en España.', en: 'When I was a kid, I didn\'t know my uncle lived in Spain. (ongoing → imperfect of saber)', answer: 'sabía' },
      { es: '¿Cuándo ___ que estabas embarazada?', en: 'When did you FIND OUT you were pregnant? (the moment → preterite of saber)', answer: 'supiste' },
      { es: 'Ellos ___ a sus mejores amigos en el campamento.', en: 'They met their best friends at camp. (one-time → preterite of conocer)', answer: 'conocieron' },
      { es: 'Nosotros no ___ que era tu cumpleaños.', en: 'We didn\'t know it was your birthday. (ongoing/no info → imperfect of saber)', answer: 'sabíamos' },
      { es: 'Ella ya ___ la ciudad antes de mudarse.', en: 'She already knew the city before moving. (ongoing → imperfect of conocer)', answer: 'conocía' }
    ]
  };

  function buildConfusableVerbsDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: saber-conocer-present, pedir-preguntar-present, all-present,
    //               past-meaning-shifts, all
    let pool;
    if (drillGroup === 'all' || !CONFUSABLE_VERBS_DATA[drillGroup]) {
      pool = [].concat(
        CONFUSABLE_VERBS_DATA['saber-conocer-present'],
        CONFUSABLE_VERBS_DATA['pedir-preguntar-present'],
        CONFUSABLE_VERBS_DATA['all-present'],
        CONFUSABLE_VERBS_DATA['past-meaning-shifts']
      );
    } else {
      pool = CONFUSABLE_VERBS_DATA[drillGroup];
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        instruction: p.en,
        sentenceWithBlank: p.es,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isConfusable: true
      });
    });
  }


  // OBJECT PRONOUNS + PROGRESSIVES drill
  // Student sees English + which form to produce (BEFORE or ATTACHED), types it.
  // Each prompt has BOTH valid forms; we accept either one via answerAlt.
  // 4 sub-groups: direct-objects, indirect-objects, reflexives, double-pronouns
  const PROGRESSIVES_DATA = {
    // SINGLE DIRECT OBJECT + progressive
    'direct-objects': [
      { en: 'I am reading it. (the book)', answer: 'lo estoy leyendo', answerAlt: ['estoy leyéndolo'] },
      { en: 'She is calling him.', answer: 'lo está llamando', answerAlt: ['está llamándolo'] },
      { en: 'We are buying them. (the gifts)', answer: 'los estamos comprando', answerAlt: ['estamos comprándolos'] },
      { en: 'They are watching the movie.', answer: 'la están viendo', answerAlt: ['están viéndola'] },
      { en: 'I am writing it. (the letter)', answer: 'la estoy escribiendo', answerAlt: ['estoy escribiéndola'] },
      { en: 'He is making them. (the cookies)', answer: 'las está haciendo', answerAlt: ['está haciéndolas'] },
      { en: 'You are studying it. (Spanish)', answer: 'lo estás estudiando', answerAlt: ['estás estudiándolo'] },
      { en: 'We are eating them. (the apples)', answer: 'las estamos comiendo', answerAlt: ['estamos comiéndolas'] },
      { en: 'I am not doing it.', answer: 'no lo estoy haciendo', answerAlt: ['no estoy haciéndolo'] },
      { en: 'She is hearing it. (the song)', answer: 'la está escuchando', answerAlt: ['está escuchándola'] }
    ],
    // SINGLE INDIRECT OBJECT + progressive
    'indirect-objects': [
      { en: 'I am telling you the truth.', answer: 'te estoy diciendo la verdad', answerAlt: ['estoy diciéndote la verdad'] },
      { en: 'She is talking to me.', answer: 'me está hablando', answerAlt: ['está hablándome'] },
      { en: 'They are sending us a message.', answer: 'nos están mandando un mensaje', answerAlt: ['están mandándonos un mensaje'] },
      { en: 'We are writing to him.', answer: 'le estamos escribiendo', answerAlt: ['estamos escribiéndole'] },
      { en: 'He is buying her flowers.', answer: 'le está comprando flores', answerAlt: ['está comprándole flores'] },
      { en: 'I am explaining to them.', answer: 'les estoy explicando', answerAlt: ['estoy explicándoles'] },
      { en: 'You are reading to us.', answer: 'nos estás leyendo', answerAlt: ['estás leyéndonos'] },
      { en: 'She is asking me a question.', answer: 'me está preguntando algo', answerAlt: ['está preguntándome algo'] }
    ],
    // REFLEXIVE + progressive
    'reflexives': [
      { en: 'I am taking a shower.', answer: 'me estoy duchando', answerAlt: ['estoy duchándome'] },
      { en: 'You are getting dressed.', answer: 'te estás vistiendo', answerAlt: ['estás vistiéndote'] },
      { en: 'He is brushing his teeth.', answer: 'se está cepillando los dientes', answerAlt: ['está cepillándose los dientes'] },
      { en: 'We are having fun.', answer: 'nos estamos divirtiendo', answerAlt: ['estamos divirtiéndonos'] },
      { en: 'They are getting ready.', answer: 'se están preparando', answerAlt: ['están preparándose'] },
      { en: 'I am washing my hands.', answer: 'me estoy lavando las manos', answerAlt: ['estoy lavándome las manos'] },
      { en: 'She is sitting down.', answer: 'se está sentando', answerAlt: ['está sentándose'] },
      { en: 'You are falling asleep.', answer: 'te estás durmiendo', answerAlt: ['estás durmiéndote'] }
    ],
    // DOUBLE PRONOUN + progressive (including le→se)
    'double-pronouns': [
      { en: 'I am telling it to you. (the secret)', answer: 'te lo estoy diciendo', answerAlt: ['estoy diciéndotelo'] },
      { en: 'She is buying it for me. (the dress)', answer: 'me la está comprando', answerAlt: ['está comprándomela'] },
      { en: 'They are sending it to her. (the package — le→se)', answer: 'se lo están mandando', answerAlt: ['están mandándoselo'] },
      { en: 'We are showing them to him. (the photos — le→se)', answer: 'se las estamos mostrando', answerAlt: ['estamos mostrándoselas'] },
      { en: 'He is explaining it to us. (the lesson)', answer: 'nos lo está explicando', answerAlt: ['está explicándonoslo'] },
      { en: 'I am reading it to them. (the story — le→se)', answer: 'se lo estoy leyendo', answerAlt: ['estoy leyéndoselo'] },
      { en: 'You are giving it to me.', answer: 'me lo estás dando', answerAlt: ['estás dándomelo'] },
      { en: 'She is asking it of you. (the favor)', answer: 'te lo está pidiendo', answerAlt: ['está pidiéndotelo'] }
    ]
  };

  function buildProgressivesDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: direct-objects, indirect-objects, reflexives, double-pronouns, all
    let pool;
    if (drillGroup === 'all' || !PROGRESSIVES_DATA[drillGroup]) {
      pool = [].concat(
        PROGRESSIVES_DATA['direct-objects'],
        PROGRESSIVES_DATA['indirect-objects'],
        PROGRESSIVES_DATA['reflexives'],
        PROGRESSIVES_DATA['double-pronouns']
      );
    } else {
      pool = PROGRESSIVES_DATA[drillGroup];
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        instruction: p.en,
        answer: p.answer,
        answerAlt: p.answerAlt,
        userInput: '',
        isCorrect: null,
        isProgressive: true
      });
    });
  }


  // POSSESSIVE PRONOUNS drill
  // Spanish sentence with blank for the possessive pronoun; English hint cues
  // which owner is intended. Accepts EITHER article form OR bare form when both work.
  // Five sub-groups: mine/yours, his-hers-theirs, ours, after-ser, all-mixed
  const POSSESSIVE_PRONOUNS_DATA = {
    // MINE & YOURS (mío/tuyo) — primary forms
    'mine-yours': [
      { es: 'Este libro es ___.', en: 'This book is mine. (after ser → mío)', answer: 'mío' },
      { es: 'Esa casa es ___.', en: 'That house is mine. (after ser → mía)', answer: 'mía' },
      { es: 'Estos zapatos son ___.', en: 'These shoes are mine. (after ser → míos)', answer: 'míos' },
      { es: 'Esas llaves son ___.', en: 'Those keys are mine. (after ser → mías)', answer: 'mías' },
      { es: 'El coche es ___.', en: 'The car is yours (tú). (after ser → tuyo)', answer: 'tuyo' },
      { es: 'La mochila es ___.', en: 'The backpack is yours (tú). (after ser → tuya)', answer: 'tuya' },
      { es: 'Mi libro es viejo. ___ es nuevo.', en: 'My book is old. Yours (tú) is new. (need article + tuyo)', answer: 'el tuyo' },
      { es: 'Tu casa es grande. ___ es pequeña.', en: 'Your house is big. Mine is small. (need article + mía)', answer: 'la mía' },
      { es: 'Mis ideas son interesantes. ___ son aburridas.', en: 'My ideas are interesting. Yours (tú) are boring. (article + tuyas)', answer: 'las tuyas' },
      { es: 'Tus zapatos son nuevos. ___ son viejos.', en: 'Your shoes are new. Mine are old. (article + míos)', answer: 'los míos' }
    ],
    // HIS / HERS / THEIRS / YOUR-FORMAL (suyo) — all the same word
    'his-hers-theirs': [
      { es: 'Mi perro es grande. ___ es pequeño.', en: 'My dog is big. His/hers/theirs is small. (article + suyo)', answer: 'el suyo' },
      { es: 'Nuestra casa es vieja. ___ es nueva.', en: 'Our house is old. His/hers/theirs is new. (article + suya)', answer: 'la suya' },
      { es: 'Tus zapatos están limpios. ___ están sucios.', en: 'Your shoes are clean. His/hers/theirs are dirty. (article + suyos)', answer: 'los suyos' },
      { es: 'Mis hijas son pequeñas. ___ ya son grandes.', en: 'My daughters are little. His/hers/theirs are already grown. (article + suyas)', answer: 'las suyas' },
      { es: 'Este libro no es mío. Es ___.', en: 'This book isn\'t mine. It\'s his/hers/theirs. (after ser → suyo)', answer: 'suyo' },
      { es: 'Esa idea no fue tuya. Fue ___.', en: 'That idea wasn\'t yours. It was his/hers. (after ser → suya)', answer: 'suya' },
      { es: 'Los problemas no son nuestros. Son ___.', en: 'The problems aren\'t ours. They\'re theirs. (after ser → suyos)', answer: 'suyos' },
      { es: 'Las decisiones no son mías. Son ___.', en: 'The decisions aren\'t mine. They\'re his/hers/theirs. (after ser → suyas)', answer: 'suyas' }
    ],
    // OURS (nuestro/a/os/as) — all four forms
    'ours': [
      { es: 'Su coche es japonés. ___ es alemán.', en: 'Their car is Japanese. Ours is German. (article + nuestro)', answer: 'el nuestro' },
      { es: 'Tu casa está cerca. ___ está lejos.', en: 'Your house is close. Ours is far. (article + nuestra)', answer: 'la nuestra' },
      { es: 'Sus hijos son traviesos. ___ son tranquilos.', en: 'Their kids are mischievous. Ours are calm. (article + nuestros)', answer: 'los nuestros' },
      { es: 'Mis ideas son simples. ___ son complejas.', en: 'My ideas are simple. Ours are complex. (article + nuestras)', answer: 'las nuestras' },
      { es: 'El triunfo es ___.', en: 'The victory is ours. (after ser → nuestro)', answer: 'nuestro' },
      { es: 'La culpa no es ___.', en: 'The blame isn\'t ours. (after ser → nuestra)', answer: 'nuestra' },
      { es: 'Los problemas son ___.', en: 'The problems are ours. (after ser → nuestros)', answer: 'nuestros' },
      { es: 'Las soluciones son ___.', en: 'The solutions are ours. (after ser → nuestras)', answer: 'nuestras' }
    ],
    // AFTER SER (bare form, no article) — drilling the post-ser construction
    'after-ser': [
      { es: 'Estas plumas son ___.', en: 'These pens are mine. (after ser → mías)', answer: 'mías' },
      { es: '¿Es ___ ese coche?', en: 'Is that car yours (tú)? (after ser → tuyo)', answer: 'tuyo' },
      { es: 'Esa canción es ___.', en: 'That song is his. (after ser → suya — la canción)', answer: 'suya' },
      { es: 'El éxito es ___.', en: 'The success is ours. (after ser → nuestro)', answer: 'nuestro' },
      { es: 'No, las llaves no son ___.', en: 'No, the keys aren\'t mine. (after ser → mías)', answer: 'mías' },
      { es: 'La idea original era ___.', en: 'The original idea was his. (after ser → suya — la idea)', answer: 'suya' },
      { es: 'Estos libros viejos son ___.', en: 'These old books are ours. (after ser → nuestros)', answer: 'nuestros' },
      { es: '¿Son ___ esas gafas?', en: 'Are those glasses yours (tú)? (after ser → tuyas)', answer: 'tuyas' }
    ]
  };

  function buildPossessivePronounsDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: mine-yours, his-hers-theirs, ours, after-ser, all
    let pool;
    if (drillGroup === 'all' || !POSSESSIVE_PRONOUNS_DATA[drillGroup]) {
      pool = [].concat(
        POSSESSIVE_PRONOUNS_DATA['mine-yours'],
        POSSESSIVE_PRONOUNS_DATA['his-hers-theirs'],
        POSSESSIVE_PRONOUNS_DATA['ours'],
        POSSESSIVE_PRONOUNS_DATA['after-ser']
      );
    } else {
      pool = POSSESSIVE_PRONOUNS_DATA[drillGroup];
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        instruction: p.en,
        sentenceWithBlank: p.es,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isConfusable: true  // re-use the render branch — same prompt format
      });
    });
  }


  function buildCommandsTuDrill() {
    // drillGroup selects which sub-group to drill.
    // Valid values: positive-regular, positive-irregular, negative-regular,
    //               negative-irregular, reflexive, all
    let pool;
    if (drillGroup === 'all' || !COMMANDS_TU_DATA[drillGroup]) {
      // Mix everything
      pool = [].concat(
        COMMANDS_TU_DATA['positive-regular'],
        COMMANDS_TU_DATA['positive-irregular'],
        COMMANDS_TU_DATA['negative-regular'],
        COMMANDS_TU_DATA['negative-irregular'],
        COMMANDS_TU_DATA['reflexive']
      );
    } else {
      pool = COMMANDS_TU_DATA[drillGroup];
    }
    // Shuffle and pick 20 prompts (or all if fewer than 20 in pool)
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.min(20, shuffled.length));
    // If pool is smaller than 20, cycle through to fill the drill
    while (picked.length < 20) {
      picked.push(shuffled[picked.length % shuffled.length]);
    }
    picked.forEach(p => {
      drillItems.push({
        inf: p.inf,
        instruction: p.en,
        answer: p.answer,
        userInput: '',
        isCorrect: null,
        isCommandTu: true
      });
    });
  }

  // Normalize a sentence answer for comparison: lowercase, strip accents,
  // strip trailing period, collapse whitespace
  function normalizeSentence(s) {
    return s.trim().toLowerCase()
      .replace(/^[¡¿]+/g, '')             // leading Spanish opening punctuation
      .replace(/[.!?¡¿]+$/g, '')          // trailing punctuation (any kind)
      .replace(/[,;:]/g, '')              // strip internal soft punctuation
      .replace(/\s+/g, ' ')               // collapse whitespace
      .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // strip accents
  }

  function renderDrill() {
    const board = document.getElementById('drill-board');
    board.innerHTML = drillItems.map((item, idx) => {
      if (item.isPronounRewrite) {
        // Rewrite prompt: show original sentence, wide input for full rewrite
        const kindLabel = item.kind === 'DO' ? 'Direct object' : item.kind === 'IO' ? 'Indirect object' : 'Both objects';
        return `
          <div class="drill-row drill-row-wide">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 3;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ocre); display: block; margin-bottom: 4px;">Rewrite with pronoun · ${kindLabel}</span>
              <span style="font-family: 'Fraunces', serif; font-size: 16px; line-height: 1.4; color: var(--ink);">${item.original}</span>
            </div>
            <div style="grid-column: 2 / span 3; margin-top: 8px;">
              <input type="text" class="drill-input drill-input-wide" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="Type the rewritten sentence…">
            </div>
          </div>
        `;
      }
      if (item.isTuUsted) {
        // Social scenario prompt: student types "tú" or "usted"
        return `
          <div class="drill-row">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2; padding-right: 12px;">
              <span style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.45; font-style: italic; color: var(--ink);">${item.scenario}</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="tú or usted?">
            </div>
          </div>
        `;
      }
      if (item.isCommandTu) {
        // Tú command prompt: show English instruction + infinitive in parens
        return `
          <div class="drill-row">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2; padding-right: 12px;">
              <span style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.45; color: var(--ink);">${item.instruction}</span>
              <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-soft); margin-top: 4px; letter-spacing: 0.05em;">(${item.inf})</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="¡command!">
            </div>
          </div>
        `;
      }
      if (item.isConfusable) {
        // Confusable verb prompt: Spanish sentence with blank + English hint
        // Highlight the blank in red so it's visible
        const highlightedEs = item.sentenceWithBlank.replace(/___/g, '<span style="color: var(--rojo); font-weight: 600;">___</span>');
        return `
          <div class="drill-row">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2; padding-right: 12px;">
              <span style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.45; color: var(--ink);">${highlightedEs}</span>
              <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-soft); margin-top: 4px; font-style: italic;">${item.instruction}</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="verbo">
            </div>
          </div>
        `;
      }
      if (item.isProgressive) {
        // Progressive prompt: English sentence; either pronoun position is accepted
        return `
          <div class="drill-row">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2; padding-right: 12px;">
              <span style="font-family: 'Fraunces', serif; font-size: 15px; line-height: 1.45; color: var(--ink);">${item.instruction}</span>
              <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--ink-soft); margin-top: 4px; font-style: italic;">either pronoun position is accepted</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="lo estoy... / estoy ...lo">
            </div>
          </div>
        `;
      }
      if (item.isPossessive) {
        // Possessive prompt: "___ libro (my)" — show noun phrase + English cue
        const genderTag = item.gender === 'm' ? 'masc.' : 'fem.';
        const numberTag = item.number === 'sing' ? 'sing.' : 'plur.';
        return `
          <div class="drill-row">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2; padding-right: 12px;">
              <span style="font-family: 'Fraunces', serif; font-size: 16px; line-height: 1.5;"><span style="color: var(--rojo); font-weight: 600;">___</span> ${item.noun}</span>
              <span style="display: block; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--ink-soft); margin-top: 2px;">"${item.cue}" · ${genderTag} ${numberTag}</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="mi / tu / su / nuestro…">
            </div>
          </div>
        `;
      }
      if (item.isSerEstar) {
        // Show sentence with blank highlighted
        const parts = item.sentence.split('___');
        return `
          <div class="drill-row">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2; padding-right: 12px;">
              <span style="font-family: 'Fraunces', serif; font-size: 16px; line-height: 1.5;">${parts[0]}<span style="color: var(--rojo); font-weight: 600;">___</span>${parts[1] || ''}</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="ser or estar?">
            </div>
          </div>
        `;
      }
      if (item.isPerfecto) {
        const isReflexive = item.verb.inf.endsWith('se');
        const refHint = isReflexive ? ' (reflexive: include me/te/se…)' : '';
        return `
          <div class="drill-row drill-row-wide">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2;">
              <span class="pn">${pronouns[item.pronounIdx]}</span>
              <span class="vb">${item.verb.inf} · present perfect${refHint}</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input drill-input-wide" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="he comido / has visto…">
            </div>
          </div>
        `;
      }
      if (item.isPluperfectSubj) {
        const isReflexive = item.verb.inf.endsWith('se');
        const refHint = isReflexive ? ' (reflexive: include me/te/se…)' : '';
        return `
          <div class="drill-row drill-row-wide">
            <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
            <div class="drill-prompt-text" style="grid-column: 2 / span 2;">
              <span class="pn">${pronouns[item.pronounIdx]}</span>
              <span class="vb">${item.verb.inf} · pluperfect subj.${refHint}</span>
            </div>
            <div style="grid-column: 4;">
              <input type="text" class="drill-input drill-input-wide" data-idx="${idx}" autocomplete="off" spellcheck="false"
                     oninput="updateDrillInput(${idx}, this.value)"
                     onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                     placeholder="hubiera comido / hubieras visto…">
            </div>
          </div>
        `;
      }
      return `
        <div class="drill-row">
          <div class="drill-num">${String(idx + 1).padStart(2, '0')}</div>
          <div class="drill-prompt-text">
            <span class="pn">${item.subjectDisplay || pronouns[item.pronounIdx]}</span>
            <span class="vb">${item.verb.inf}${drillTense === 'mixed' ? ' · ' + tenseLabels[item.tense] : ''}</span>
          </div>
          <div>
            <input type="text" class="drill-input" data-idx="${idx}" autocomplete="off" spellcheck="false"
                   oninput="updateDrillInput(${idx}, this.value)"
                   onkeydown="if(event.key==='Enter'){event.preventDefault();focusNextDrillInput(${idx});}"
                   placeholder="…">
          </div>
        </div>
      `;
    }).join('');
    document.getElementById('drill-filled').textContent = '0';
    document.getElementById('drill-submit').disabled = false;
    document.getElementById('drill-submit').textContent = 'Submit drill';
    document.getElementById('drill-results').classList.remove('open');
    document.getElementById('drill-results').innerHTML = '';
    // Show best score for current tense
    const bestKey = 'drillBest_' + drillTense;
    const best = STATE[bestKey];
    document.getElementById('drill-best').textContent = best != null ? `Best (${tenseLabels[drillTense] || 'mixed'}): ${best}/20` : 'Best score: —';
  }

  function updateDrillInput(idx, value) {
    drillItems[idx].userInput = value;
    const filled = drillItems.filter(it => it.userInput.trim()).length;
    document.getElementById('drill-filled').textContent = filled;
  }

  // Accent helper: remember the drill input the student is typing in, so the
  // á/é/í/ó/ú/ñ/ü/¿/¡ buttons can insert at the cursor without losing focus.
  let _lastDrillInput = null;
  document.addEventListener('focusin', function (e) {
    const t = e.target;
    if (t && t.classList && t.classList.contains('drill-input')) _lastDrillInput = t;
  });
  function insertDrillChar(ch) {
    let el = _lastDrillInput;
    // Fall back to the first empty, enabled input if nothing is focused yet.
    if (!el || el.disabled || !document.body.contains(el)) {
      el = document.querySelector('.drill-input:not([disabled])');
    }
    if (!el || el.disabled) return;
    const start = el.selectionStart != null ? el.selectionStart : el.value.length;
    const end = el.selectionEnd != null ? el.selectionEnd : el.value.length;
    el.value = el.value.slice(0, start) + ch + el.value.slice(end);
    const pos = start + ch.length;
    el.focus();
    try { el.setSelectionRange(pos, pos); } catch (_) {}
    _lastDrillInput = el;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function focusNextDrillInput(idx) {
    const next = document.querySelector('.drill-input[data-idx="' + (idx + 1) + '"]');
    if (next) next.focus();
    else document.getElementById('drill-submit').focus();
  }

  function submitDrill() {
    if (drillSubmitted) return;
    drillSubmitted = true;
    let score = 0;
    drillItems.forEach((item, idx) => {
      const input = document.querySelector('.drill-input[data-idx="' + idx + '"]');
      if (!input) return;
      // Pronoun-rewrite and command items need sentence-aware normalization
      let userAns, correctAns;
      if (item.isPronounRewrite || item.isCommandTu || item.isProgressive) {
        userAns = normalizeSentence(item.userInput);
        correctAns = normalizeSentence(item.answer);
      } else {
        userAns = normalize(item.userInput);
        correctAns = normalize(item.answer);
      }
      // Accept either the primary answer OR any of the alternates
      let matched = userAns && userAns === correctAns;
      if (!matched && item.answerAlt && Array.isArray(item.answerAlt)) {
        for (const alt of item.answerAlt) {
          const altNorm = (item.isPronounRewrite || item.isCommandTu || item.isProgressive)
            ? normalizeSentence(alt) : normalize(alt);
          if (userAns === altNorm) { matched = true; break; }
        }
      }
      item.isCorrect = matched;
      if (item.isCorrect) {
        score++;
        input.classList.add('correct');
      } else {
        input.classList.add('wrong');
        // Show the correct answer below (and any alternates for "either form acceptable" items)
        const row = input.closest('.drill-row');
        if (row && !row.querySelector('.drill-correction')) {
          const correction = document.createElement('div');
          correction.className = 'drill-correction';
          correction.style.gridColumn = item.isPronounRewrite ? '2 / span 3' : '3';
          let correctionText = '→ ' + item.answer;
          if (item.answerAlt && item.answerAlt.length > 0) {
            correctionText += ' (or: ' + item.answerAlt.join(', ') + ')';
          }
          correction.textContent = correctionText;
          row.appendChild(correction);
        }
      }
      input.disabled = true;
    });

    // Lucas reward — TIERED, hard to earn:
    let reward = 0;
    let verdict = '';
    if (score >= 20) { reward = 25; verdict = 'Perfect — flawless drill'; }
    else if (score >= 18) { reward = 15; verdict = 'Excellent work'; }
    else if (score >= 15) { reward = 8;  verdict = 'Solid effort'; }
    else if (score >= 10) { reward = 3;  verdict = 'Keep practicing'; }
    else { reward = 0; verdict = 'Try the drill again'; }

    // Track stats
    STATE.verbsAttempted += 20;
    STATE.verbsCorrect += score;
    STATE.drillsCompleted = (STATE.drillsCompleted || 0) + 1;
    if (score >= 20) STATE.perfectDrills = (STATE.perfectDrills || 0) + 1;
    const bestKey = 'drillBest_' + drillTense;
    if (score > (STATE[bestKey] || 0)) STATE[bestKey] = score;

    if (reward > 0) awardCoins(reward, verdict + ' (' + score + '/20)');
    else { saveState(); checkAchievements(); }

    // Build results panel
    const wrongCount = 20 - score;
    const accuracy = Math.round((score / 20) * 100);
    const results = document.getElementById('drill-results');
    results.innerHTML = `
      <h3>${score >= 18 ? '¡<em>Bien hecho</em>!' : score >= 10 ? 'Drill <em>complete</em>' : 'Keep <em>going</em>'}</h3>
      <div class="verdict">${verdict}</div>
      <div class="score-row">
        <div class="score-stat">
          <div class="label">Score</div>
          <div class="value">${score}/20</div>
        </div>
        <div class="score-stat">
          <div class="label">Accuracy</div>
          <div class="value">${accuracy}%</div>
        </div>
        <div class="score-stat">
          <div class="label">Mistakes</div>
          <div class="value">${wrongCount}</div>
        </div>
      </div>
      ${reward > 0
        ? `<div class="reward-bar"><span class="coin-icon medium"></span><div><strong style="color: var(--ocre);">+${reward} Lucas earned</strong><div style="font-size: 13px; opacity: 0.7;">Review your mistakes above, then try a new drill</div></div></div>`
        : `<div class="reward-bar" style="border-color: rgba(196, 61, 42, 0.4);"><span style="font-size: 24px;">🎯</span><div><strong style="color: var(--paper);">No Lucas this time — you need at least 10/20 to earn</strong><div style="font-size: 13px; opacity: 0.7;">Review the correct answers above and try again</div></div></div>`
      }
    `;
    results.classList.add('open');
    document.getElementById('drill-submit').disabled = true;
    document.getElementById('drill-submit').textContent = 'Drill submitted';
    saveState();
    // Scroll to results
    setTimeout(() => results.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
  }

  function newDrill() {
    buildDrill();
    renderDrill();
  }

  function setDrillTense(t, btn) {
    drillTense = t;
    document.querySelectorAll('#drill-tense-picker .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    // For tu-commands mode, swap in command-specific sub-groups in the group picker
    rebuildGroupPickerForMode();
    // Reset group to "all" by default for commands so first session works without clicking
    if (drillTense === 'tu-commands' && !COMMANDS_TU_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    if (drillTense === 'usted-commands' && !COMMANDS_USTED_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    if (drillTense === 'reflexive-commands' && !COMMANDS_REFLEXIVE_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    if (drillTense === 'object-commands' && !COMMANDS_OBJECT_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    if (drillTense === 'double-commands' && !COMMANDS_DOUBLE_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    if (drillTense === 'confusable-verbs' && !CONFUSABLE_VERBS_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    if (drillTense === 'progressives-pronouns' && !PROGRESSIVES_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    if (drillTense === 'possessive-pronouns' && !POSSESSIVE_PRONOUNS_DATA[drillGroup]) {
      drillGroup = 'all';
    }
    newDrill();
  }

  // When switching to/from tu-commands mode, swap the verb-group buttons
  // for the command-specific ones (positive-regular, etc.).
  function rebuildGroupPickerForMode() {
    const picker = document.getElementById('drill-group-picker');
    if (!picker) return;
    const STANDARD_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All verbs</button>
      <button class="pill ${drillGroup === 'regular' ? 'active' : ''}" onclick="setDrillGroup('regular', this)">Regular only</button>
      <button class="pill ${drillGroup === 'regular-ar' ? 'active' : ''}" onclick="setDrillGroup('regular-ar', this)">-AR regular</button>
      <button class="pill ${drillGroup === 'regular-er' ? 'active' : ''}" onclick="setDrillGroup('regular-er', this)">-ER regular</button>
      <button class="pill ${drillGroup === 'regular-ir' ? 'active' : ''}" onclick="setDrillGroup('regular-ir', this)">-IR regular</button>
      <button class="pill ${drillGroup === 'stem-eie' ? 'active' : ''}" onclick="setDrillGroup('stem-eie', this)">Stem e→ie</button>
      <button class="pill ${drillGroup === 'stem-oue' ? 'active' : ''}" onclick="setDrillGroup('stem-oue', this)">Stem o→ue</button>
      <button class="pill ${drillGroup === 'stem-ei' ? 'active' : ''}" onclick="setDrillGroup('stem-ei', this)">Stem e→i</button>
      <button class="pill ${drillGroup === 'stem-uue' ? 'active' : ''}" onclick="setDrillGroup('stem-uue', this)">Stem u→ue</button>
      <button class="pill ${drillGroup === 'stem-all' ? 'active' : ''}" onclick="setDrillGroup('stem-all', this)">All stem-changers</button>
      <button class="pill ${drillGroup === 'irregular' ? 'active' : ''}" onclick="setDrillGroup('irregular', this)">Irregular only</button>
      <button class="pill ${drillGroup === 'reflexive' ? 'active' : ''}" onclick="setDrillGroup('reflexive', this)">Reflexive verbs</button>
    `;
    const COMMAND_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'positive-regular' ? 'active' : ''}" onclick="setDrillGroup('positive-regular', this)">Affirmative · regular</button>
      <button class="pill ${drillGroup === 'positive-irregular' ? 'active' : ''}" onclick="setDrillGroup('positive-irregular', this)">Affirmative · irregular (8)</button>
      <button class="pill ${drillGroup === 'negative-regular' ? 'active' : ''}" onclick="setDrillGroup('negative-regular', this)">Negative · regular</button>
      <button class="pill ${drillGroup === 'negative-irregular' ? 'active' : ''}" onclick="setDrillGroup('negative-irregular', this)">Negative · irregular</button>
      <button class="pill ${drillGroup === 'reflexive' ? 'active' : ''}" onclick="setDrillGroup('reflexive', this)">Reflexive (afirm + neg)</button>
    `;
    const USTED_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'positive-regular' ? 'active' : ''}" onclick="setDrillGroup('positive-regular', this)">Affirmative · regular</button>
      <button class="pill ${drillGroup === 'positive-irregular' ? 'active' : ''}" onclick="setDrillGroup('positive-irregular', this)">Affirmative · irregular (5)</button>
      <button class="pill ${drillGroup === 'negative-regular' ? 'active' : ''}" onclick="setDrillGroup('negative-regular', this)">Negative · regular</button>
      <button class="pill ${drillGroup === 'negative-irregular' ? 'active' : ''}" onclick="setDrillGroup('negative-irregular', this)">Negative · irregular</button>
      <button class="pill ${drillGroup === 'ustedes-mixed' ? 'active' : ''}" onclick="setDrillGroup('ustedes-mixed', this)">Ustedes (plural · mixed)</button>
    `;
    const REFLEXIVE_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'aff-tu' ? 'active' : ''}" onclick="setDrillGroup('aff-tu', this)">Affirmative · tú</button>
      <button class="pill ${drillGroup === 'neg-tu' ? 'active' : ''}" onclick="setDrillGroup('neg-tu', this)">Negative · tú</button>
      <button class="pill ${drillGroup === 'aff-usted' ? 'active' : ''}" onclick="setDrillGroup('aff-usted', this)">Affirmative · usted</button>
      <button class="pill ${drillGroup === 'neg-usted' ? 'active' : ''}" onclick="setDrillGroup('neg-usted', this)">Negative · usted</button>
      <button class="pill ${drillGroup === 'ustedes' ? 'active' : ''}" onclick="setDrillGroup('ustedes', this)">Ustedes (plural · mixed)</button>
    `;
    const OBJECT_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'aff-tu-direct' ? 'active' : ''}" onclick="setDrillGroup('aff-tu-direct', this)">Affirmative tú + lo/la/los/las</button>
      <button class="pill ${drillGroup === 'neg-tu-direct' ? 'active' : ''}" onclick="setDrillGroup('neg-tu-direct', this)">Negative tú + lo/la/los/las</button>
      <button class="pill ${drillGroup === 'aff-tu-indirect' ? 'active' : ''}" onclick="setDrillGroup('aff-tu-indirect', this)">Affirmative tú + me/te/le/nos/les</button>
      <button class="pill ${drillGroup === 'neg-tu-indirect' ? 'active' : ''}" onclick="setDrillGroup('neg-tu-indirect', this)">Negative tú + me/te/le/nos/les</button>
      <button class="pill ${drillGroup === 'usted-mixed' ? 'active' : ''}" onclick="setDrillGroup('usted-mixed', this)">Usted + pronouns (mixed)</button>
    `;
    const DOUBLE_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'aff-tu-easy' ? 'active' : ''}" onclick="setDrillGroup('aff-tu-easy', this)">Affirmative tú · me/te/nos + lo/la</button>
      <button class="pill ${drillGroup === 'neg-tu-easy' ? 'active' : ''}" onclick="setDrillGroup('neg-tu-easy', this)">Negative tú · me/te/nos + lo/la</button>
      <button class="pill ${drillGroup === 'aff-tu-se' ? 'active' : ''}" onclick="setDrillGroup('aff-tu-se', this)">Affirmative tú · le→se + lo/la</button>
      <button class="pill ${drillGroup === 'neg-tu-se' ? 'active' : ''}" onclick="setDrillGroup('neg-tu-se', this)">Negative tú · le→se + lo/la</button>
      <button class="pill ${drillGroup === 'usted-double' ? 'active' : ''}" onclick="setDrillGroup('usted-double', this)">Usted + 2 pronouns (mixed)</button>
    `;
    const CONFUSABLE_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'saber-conocer-present' ? 'active' : ''}" onclick="setDrillGroup('saber-conocer-present', this)">Saber vs. Conocer (present)</button>
      <button class="pill ${drillGroup === 'pedir-preguntar-present' ? 'active' : ''}" onclick="setDrillGroup('pedir-preguntar-present', this)">Pedir vs. Preguntar (present)</button>
      <button class="pill ${drillGroup === 'all-present' ? 'active' : ''}" onclick="setDrillGroup('all-present', this)">All 4 verbs · present</button>
      <button class="pill ${drillGroup === 'past-meaning-shifts' ? 'active' : ''}" onclick="setDrillGroup('past-meaning-shifts', this)">Past meaning shifts (conocí/supe)</button>
    `;
    const PROGRESSIVES_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'direct-objects' ? 'active' : ''}" onclick="setDrillGroup('direct-objects', this)">Direct object + progressive</button>
      <button class="pill ${drillGroup === 'indirect-objects' ? 'active' : ''}" onclick="setDrillGroup('indirect-objects', this)">Indirect object + progressive</button>
      <button class="pill ${drillGroup === 'reflexives' ? 'active' : ''}" onclick="setDrillGroup('reflexives', this)">Reflexive + progressive</button>
      <button class="pill ${drillGroup === 'double-pronouns' ? 'active' : ''}" onclick="setDrillGroup('double-pronouns', this)">Double pronoun + progressive</button>
    `;
    const POSSESSIVE_GROUPS = `
      <button class="pill ${drillGroup === 'all' ? 'active' : ''}" onclick="setDrillGroup('all', this)">All mixed (challenge)</button>
      <button class="pill ${drillGroup === 'mine-yours' ? 'active' : ''}" onclick="setDrillGroup('mine-yours', this)">Mine / yours (mío, tuyo)</button>
      <button class="pill ${drillGroup === 'his-hers-theirs' ? 'active' : ''}" onclick="setDrillGroup('his-hers-theirs', this)">His / hers / theirs (suyo)</button>
      <button class="pill ${drillGroup === 'ours' ? 'active' : ''}" onclick="setDrillGroup('ours', this)">Ours (nuestro)</button>
      <button class="pill ${drillGroup === 'after-ser' ? 'active' : ''}" onclick="setDrillGroup('after-ser', this)">After ser (bare form)</button>
    `;
    if (drillTense === 'tu-commands') {
      picker.innerHTML = COMMAND_GROUPS;
    } else if (drillTense === 'usted-commands') {
      picker.innerHTML = USTED_GROUPS;
    } else if (drillTense === 'reflexive-commands') {
      picker.innerHTML = REFLEXIVE_GROUPS;
    } else if (drillTense === 'object-commands') {
      picker.innerHTML = OBJECT_GROUPS;
    } else if (drillTense === 'double-commands') {
      picker.innerHTML = DOUBLE_GROUPS;
    } else if (drillTense === 'confusable-verbs') {
      picker.innerHTML = CONFUSABLE_GROUPS;
    } else if (drillTense === 'progressives-pronouns') {
      picker.innerHTML = PROGRESSIVES_GROUPS;
    } else if (drillTense === 'possessive-pronouns') {
      picker.innerHTML = POSSESSIVE_GROUPS;
    } else {
      picker.innerHTML = STANDARD_GROUPS;
    }
  }

  function setDrillGroup(g, btn) {
    drillGroup = g;
    document.querySelectorAll('#drill-group-picker .pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    // Ser/Estar, Possessives, Tú/Usted, and Pronouns modes don't use verb groups — switch back to "presente"
    // But tu-commands DOES use the group picker (for sub-mode selection), so leave that alone.
    if (drillTense === 'serestar' || drillTense === 'possessives' || drillTense === 'tu-usted' || drillTense === 'pronouns') {
      drillTense = 'presente';
      document.querySelectorAll('#drill-tense-picker .pill').forEach((p, i) => {
        p.classList.toggle('active', i === 0); // first pill is "Present"
      });
      // Swap back to standard groups (we may have been on commands)
      rebuildGroupPickerForMode();
    }
    newDrill();
  }

  function setVosotros(on, btn) {
    includeVosotros = on;
    localStorage.setItem('tertulia_vosotros', on ? '1' : '0');
    document.getElementById('vosotros-on').classList.toggle('active', on);
    document.getElementById('vosotros-off').classList.toggle('active', !on);
    newDrill();
  }

  function applyVosotrosPreference() {
    // Load saved preference, default to off
    const saved = localStorage.getItem('tertulia_vosotros');
    includeVosotros = saved === '1';
    document.getElementById('vosotros-on').classList.toggle('active', includeVosotros);
    document.getElementById('vosotros-off').classList.toggle('active', !includeVosotros);
  }

