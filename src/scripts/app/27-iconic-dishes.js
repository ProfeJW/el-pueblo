  /* ============== ICONIC DISHES ============== */
  // Each: { name, type (savory/dessert/drink/snack/breakfast), description (what it is),
  //   origin (specific region/city if relevant), country, where (regions where eaten) }
  const DISHES = [
    // ARGENTINA / URUGUAY
    { name: 'Asado', emoji: '🥩', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Argentinean_asado.jpg', type: 'savory · main', description: 'A Sunday-afternoon BBQ tradition. Grilled beef (and sausages, ribs, chorizo) cooked slowly over wood or charcoal. More than a meal — it\'s a social ritual that can last all afternoon.', recipe: 'Key cuts: tira de asado (short ribs), vacío (flank), chorizo, morcilla (blood sausage). Salt is the only seasoning — no marinade. The asador (grill master) starts the fire 1-2 hours early, lets wood burn down to embers, then cooks slowly on a parrilla (grill) about 30-50 cm above coals. Served with chimichurri, salad, bread, and Malbec.', country: 'AR', where: 'Argentina, Uruguay, Paraguay' },
    { name: 'Empanadas', emoji: '🥟', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Empanadas_4.jpg', type: 'savory · snack', description: 'Hand-held pastry pockets stuffed with seasoned meat, vegetables, or cheese. Every country has its own version — Argentine ones are baked and filled with beef, onion, and olives.', recipe: 'Argentine filling: ground beef, onion, hard-boiled egg, green olives, raisins, cumin, paprika, and a pinch of sugar. Dough is wheat flour with butter or beef fat. Filling is cooked first, then cooled before assembly. Each empanada is folded into a half-moon and sealed with a decorative rope edge (repulgue) — the shape tells you what filling is inside.', country: 'AR', where: 'All Latin America & Spain' },
    { name: 'Dulce de leche', emoji: '🍯', type: 'dessert · spread', description: 'Milk and sugar slowly caramelized into a thick, sweet, golden spread. Eaten on toast, in pastries, or by the spoonful. Argentina\'s national obsession.', recipe: 'Just two ingredients: whole milk and sugar (roughly 4:1). Simmered low and slow for 2-3 hours, stirring constantly, until it turns golden-brown and thick. A pinch of baking soda helps the browning. Cheap shortcut: boil an unopened can of sweetened condensed milk in water for 3 hours.', country: 'AR', where: 'Argentina, Uruguay, Latin America' },
    { name: 'Chivito', emoji: '🥪', type: 'savory · sandwich', description: 'Uruguay\'s national sandwich: thin steak, ham, bacon, cheese, lettuce, tomato, egg, and mayo on a soft roll. A meal in handheld form.', recipe: 'Build it on a soft white bun. Thin-cut sirloin or lomito (tenderloin), seared fast in butter. Layer: mayo, lettuce, tomato, mozzarella, ham, bacon, the steak, a fried egg on top. Sometimes olives, roasted red pepper, or pickles. The "chivito al plato" version skips the bread and adds French fries.', country: 'UY', where: 'Uruguay' },
    { name: 'Mate', emoji: '🧉', type: 'drink', description: 'A bitter, caffeinated tea drunk through a metal straw (bombilla) from a hollow gourd. Shared communally among friends — passing the mate around is a social bond.', recipe: 'Fill a hollowed gourd 3/4 full with yerba mate leaves. Tilt to one side, pour cool water down the empty side first to wet the leaves, then add hot (NOT boiling — about 70-80°C) water. Insert the bombilla and sip. Refill with hot water for each round. The cebador (server) drinks the first bitter cup, then passes to the group.', country: 'AR', where: 'Argentina, Uruguay, Paraguay' },

    // MEXICO
    { name: 'Tacos al pastor', emoji: '🌮', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tacos_al_pastor.jpg', type: 'savory · main', description: 'Marinated pork roasted vertically on a spit (a Lebanese technique brought to Mexico), shaved into small tortillas, topped with pineapple, onion, and cilantro. The king of Mexican street food.', recipe: 'Pork shoulder marinated overnight in dried chiles (guajillo, ancho), achiote paste, pineapple juice, vinegar, garlic, cumin, and oregano. Stacked on a vertical trompo spit with a whole pineapple on top, which drips juice down the meat as it roasts. Shaved thin onto small corn tortillas. Topped with chopped onion, cilantro, pineapple, and salsa verde.', country: 'MX', where: 'Mexico, especially CDMX' },
    { name: 'Mole', emoji: '🥘', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mole_poblano.jpg', type: 'savory · sauce', description: 'A complex, dark sauce made from 20+ ingredients — chiles, chocolate, spices, nuts, seeds — slowly cooked into a rich, savory-sweet glaze. Mole poblano is the most famous; takes days to make properly.', recipe: 'Mole poblano: dried chiles (ancho, mulato, pasilla, chipotle), Mexican chocolate, tomatoes, tomatillos, onions, garlic, almonds, peanuts, sesame seeds, raisins, cloves, cinnamon, anise, plantain, day-old bread. Each ingredient is toasted or fried separately, blended in batches, then simmered together for hours until smooth and silky. Served over turkey or chicken with rice.', country: 'MX', where: 'Mexico, especially Puebla & Oaxaca' },
    { name: 'Chiles en nogada', emoji: '🌶️', type: 'savory · main', description: 'The patriotic dish: poblano peppers stuffed with picadillo (meat, fruit, spices), topped with white walnut sauce and red pomegranate seeds — the colors of the Mexican flag.', recipe: 'Roast and peel poblano peppers, leaving them whole. Picadillo: ground pork and beef cooked with onion, garlic, tomato, raisins, almonds, candied citron, apple, pear, peach, and warm spices. Stuff peppers, top with nogada — a cold sauce of fresh walnuts blended with goat cheese, milk, and sherry. Garnish with bright-red pomegranate seeds and parsley. Green, white, red — la bandera.', country: 'MX', where: 'Mexico (especially around Independence Day)' },
    { name: 'Pozole', emoji: '🍲', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pozole.jpg', type: 'savory · soup', description: 'A hearty hominy soup with pork or chicken, topped at the table with shredded cabbage, radishes, oregano, and lime. Red, white, or green depending on the broth.', recipe: 'Hominy (large dried corn kernels treated with lime) simmered for hours with pork shoulder or chicken until both are tender. For pozole rojo: a sauce of guajillo and ancho chiles, garlic, and oregano. For verde: tomatillos, jalapeños, pumpkin seeds, cilantro. Served with toppings on the side: shredded cabbage or lettuce, sliced radish, diced onion, oregano, lime, tostadas.', country: 'MX', where: 'Mexico' },
    { name: 'Mole oaxaqueño', emoji: '🥘', type: 'savory · main', description: 'Oaxaca has SEVEN traditional moles, each with a different color and flavor profile (negro, rojo, coloradito, amarillo, verde, chichilo, manchamantel). A regional pride.', recipe: 'Mole negro is the darkest and most complex: chilhuacle negro chiles (charred until black), mulato and pasilla chiles, Mexican chocolate, tomatoes, tomatillos, garlic, onion, almonds, sesame, peanuts, plantain, raisins, day-old tortilla, cinnamon, cloves, allspice. Chiles are toasted to the point of slight bitterness, which gives mole negro its signature dark, smoky depth. Two days of cooking.', country: 'MX', where: 'Oaxaca, Mexico' },

    // SPAIN
    { name: 'Paella', emoji: '🥘', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/01_Paella_Valenciana_original.jpg', type: 'savory · main', description: 'Saffron-yellow rice cooked in a wide, shallow pan over an open fire. Traditional Valencian paella has rabbit, chicken, and snails — NOT seafood (despite what tourists think). Originally a midday farmworker\'s meal.', recipe: 'Bomba or Calasparra rice (short-grain, absorbs lots of liquid without going mushy). Sofrito of garlic, tomato, and paprika in olive oil. Add proteins (rabbit, chicken, green beans, lima beans, snails for the original Valenciana), then broth with saffron. The rice goes in and is NEVER stirred — that\'s key to forming the socarrat, the crispy bottom layer everyone fights over.', country: 'ES', where: 'Spain, especially Valencia' },
    { name: 'Tortilla española', emoji: '🍳', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spanish_omelette.JPG', type: 'savory · main', description: 'A thick, dense potato-and-egg omelet, served at room temperature in wedges. Nothing like a Mexican tortilla. The eternal Spanish debate: with onion (con cebolla) or without?', recipe: 'Thin-sliced potatoes (and onions, if you side with Team Cebolla) cooked slowly in olive oil until soft but not browned — almost confit. Drain and combine with beaten eggs, salt. Pour into a hot oiled pan, cook on low until the bottom sets, then flip onto a plate and slide back in to cook the other side. Center should be slightly jugoso (juicy).', country: 'ES', where: 'Spain' },
    { name: 'Jamón ibérico', emoji: '🥓', type: 'savory · cured meat', description: 'Spain\'s national pride. Dry-cured ham from black-footed Iberian pigs that eat acorns. Aged 2-4 years. Sliced paper-thin and served with bread or melon. Costs up to $200/lb for the best grade.', recipe: 'Not really a "recipe" — it\'s craftsmanship. Hind legs from Iberian pigs raised free-range, fattened on acorns (bellota) in the dehesa oak forests. Salted for 1-2 weeks, then air-cured in cool mountain cellars for 2-4 years. The fat marbles and oxidizes, developing nutty, complex flavors. Sliced paper-thin by hand with a long jamonero knife. Best served at room temperature.', country: 'ES', where: 'Spain' },
    { name: 'Tapas', emoji: '🍢', type: 'savory · small plates', description: 'Not a dish, but a way of eating: small plates shared with drinks. Started, legend says, when bartenders placed a slice of bread on top of glasses to keep flies out — "tapa" means "lid."', recipe: 'Classic tapas to make at home: patatas bravas (fried potato cubes with spicy tomato sauce and aioli), gambas al ajillo (shrimp sautéed in olive oil with garlic and chili), pan con tomate (toasted bread rubbed with garlic and fresh tomato), tortilla wedges, marinated olives, manchego with quince paste. The point is variety — order 5-6 small things to share.', country: 'ES', where: 'Spain' },
    { name: 'Gazpacho', emoji: '🥣', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gazpacho.jpg', type: 'savory · soup', description: 'A cold tomato-and-vegetable soup blended with bread, olive oil, garlic, and vinegar. Perfect for hot Andalusian summers. Refreshing, savory, and nothing like canned tomato soup.', recipe: 'Ripe tomatoes (key — must be in season), cucumber, green bell pepper, garlic, day-old bread soaked in water, sherry vinegar, good olive oil, salt. Blend until smooth, chill for at least 2 hours, then strain for a silky texture. Serve very cold in a glass or bowl. Garnish: diced cucumber, pepper, hard-boiled egg, drizzle of olive oil.', country: 'ES', where: 'Spain, especially Andalusia' },
    { name: 'Churros con chocolate', emoji: '🍩', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate_con_churros.jpg', type: 'dessert · breakfast', description: 'Long ridged sticks of fried dough, dipped into a cup of thick, drinkable chocolate. A classic Madrid breakfast — especially after a long night out.', recipe: 'Choux-style dough: water, flour, salt, sometimes a touch of sugar. Bring water to a boil, dump in flour all at once, beat into a stiff paste. Pipe through a star tip into hot oil (190°C), fry until golden. Roll in sugar. The chocolate: dark chocolate melted into whole milk with a touch of cornstarch, served thick enough that a churro stands up in it.', country: 'ES', where: 'Spain, Mexico, Latin America' },

    // PERU
    { name: 'Ceviche', emoji: '🐟', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ceviche_mixto_890.JPG', type: 'savory · seafood', description: 'Raw fish "cooked" by acid: marinated in lime juice with onion, chili, salt, and cilantro. The lime denatures the proteins, making the fish opaque and tender. Peru claims it as theirs (and it is).', recipe: 'Fresh white fish (corvina, sea bass, or flounder), cut into ½-inch cubes. Marinate just 5-15 minutes — not hours — in fresh-squeezed lime juice with thin-sliced red onion, sliced ají limo or rocoto chile, salt, and chopped cilantro. The leftover lime juice is "leche de tigre" — drunk as a hangover cure. Served immediately with boiled sweet potato and choclo (large-kernel corn).', country: 'PE', where: 'Peru, Mexico, Ecuador, Chile' },
    { name: 'Lomo saltado', emoji: '🥩', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lomo_saltado.jpg', type: 'savory · main', description: 'A stir-fry that proves Peruvian cuisine is a fusion masterpiece: strips of beef sautéed with onion, tomato, and soy sauce (Chinese influence) — served over French fries AND rice.', recipe: 'Beef tenderloin or sirloin sliced into strips, seared fast in a very hot wok with vegetable oil. Add red onion, tomato wedges, ají amarillo (or substitute jalapeño), garlic, soy sauce, red wine vinegar, and chopped cilantro. Cook just 2-3 minutes — meat should stay rare. Serve over a pile of crispy French fries with white rice on the side. The fries soak up the sauce.', country: 'PE', where: 'Peru' },
    { name: 'Ají de gallina', emoji: '🍗', type: 'savory · main', description: 'Shredded chicken in a creamy, mildly spicy sauce made from yellow Peruvian chiles, bread, milk, and walnuts. Served over potatoes with rice and an olive. Comfort food.', recipe: 'Poach chicken breasts in broth, then shred. Sauté ají amarillo paste (yellow Peruvian chile) with onion and garlic in olive oil. Add day-old white bread soaked in evaporated milk, ground walnuts, and parmesan. Blend smooth. Fold in shredded chicken. Serve over sliced boiled potato with rice, hard-boiled egg, and a black olive.', country: 'PE', where: 'Peru' },
    { name: 'Pisco sour', emoji: '🍹', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pisco_sour.jpg', type: 'drink · cocktail', description: 'Peru\'s national cocktail: pisco (grape brandy), lime juice, simple syrup, egg white, and a dash of bitters. Frothy, tangy, deceptively strong.', recipe: 'Per drink: 3 oz pisco, 1 oz fresh lime juice, 1 oz simple syrup, 1 egg white, ice. Shake hard without ice first (dry shake) for 15 seconds to build foam, then add ice and shake again. Strain into a chilled glass. Drop 3 dashes of Angostura bitters on the foam and swirl into a decorative pattern. Drink before the foam falls.', country: 'PE', where: 'Peru, Chile (disputed origin)' },

    // COLOMBIA
    { name: 'Bandeja paisa', emoji: '🍱', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeja_paisa.jpg', type: 'savory · platter', description: 'A massive plate from the Antioquia region: red beans, white rice, ground beef, chicharrón (fried pork belly), fried egg, sweet plantain, avocado, and arepa. A farmworker\'s feast.', recipe: 'Cook each component separately and pile on one giant plate: red beans simmered with pork hock and hogao (Colombian sofrito of tomato, onion, scallion); white rice; ground beef sautéed with onion and cumin; chicharrón (pork belly fried until skin crackles); fried sweet plantain (maduro); fried egg sunny-side up; ½ avocado; a small arepa. Eat slowly.', country: 'CO', where: 'Colombia, especially Medellín' },
    { name: 'Arepas', emoji: '🌽', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arepa.jpg', type: 'savory · bread', description: 'Round, flat corn cakes — Colombia\'s daily bread. Grilled, fried, or baked. Eaten plain, split open with fillings, or topped with butter and cheese. Different in every country.', recipe: 'Two ingredients: pre-cooked white or yellow corn flour (masarepa — brands like P.A.N. or Areparina) and warm water, plus salt. Mix until dough holds together, rest 5 minutes. Form into discs about 1cm thick. Cook on a hot dry griddle or pan 5 minutes per side until golden with crispy spots. Split open and stuff with cheese, butter, scrambled egg, or shredded meat.', country: 'CO', where: 'Colombia, Venezuela' },
    { name: 'Ajiaco', emoji: '🍲', type: 'savory · soup', description: 'A creamy chicken-and-potato soup from Bogotá, made with three types of native potatoes and the herb guascas. Topped with cream, capers, and avocado at the table.', recipe: 'Simmer chicken in broth with onion, garlic, scallion, and cilantro. Add THREE potato varieties: papa criolla (small yellow, which dissolves and thickens the soup), papa pastusa (waxy), and papa sabanera (starchy). Add fresh corn on the cob in chunks. Stir in guascas (an Andean herb — substitute with a little oregano if unavailable). Serve with shredded chicken, garnished at the table with capers, heavy cream, and avocado.', country: 'CO', where: 'Colombia, especially Bogotá' },

    // CUBA
    { name: 'Ropa vieja', emoji: '🥩', type: 'savory · main', description: '"Old clothes" — shredded beef simmered with peppers, onions, and tomatoes until it falls apart and looks like a pile of rags. Cuba\'s national dish, served with rice.', recipe: 'Boil flank or skirt steak with bay leaf and aromatics until very tender (2+ hours), then shred by hand. In another pan, sofrito: olive oil, onion, green bell pepper, garlic, cumin, oregano. Add tomato sauce, white wine, a splash of the cooking broth, olives, and pimientos. Stir in shredded beef and simmer until thick. Serve over white rice with fried sweet plantains.', country: 'CU', where: 'Cuba' },
    { name: 'Moros y cristianos', emoji: '🍚', type: 'savory · side', description: '"Moors and Christians" — black beans and white rice cooked together. The name references medieval Spain when Moors (North Africans) and Christians coexisted.', recipe: 'Soak black beans overnight, simmer with bay leaf and ham hock until tender. In a separate pan, sofrito of olive oil, onion, green pepper, garlic, cumin, oregano. Add white rice and toast briefly. Pour in the beans WITH their cooking liquid (about 2:1 liquid to rice). Cover and cook on low until rice absorbs everything. Finish with a splash of vinegar and chopped cilantro.', country: 'CU', where: 'Cuba' },

    // PUERTO RICO
    { name: 'Mofongo', emoji: '🍌', type: 'savory · main', description: 'Green plantains fried, then mashed with garlic, salt, and chicharrón (pork crackling) in a wooden mortar. Often served as a bowl-shaped vessel filled with stewed meat or shrimp.', recipe: 'Slice green (unripe) plantains into 1-inch rounds. Fry in oil until golden but not browned — about 7 minutes. In a wooden pilón (mortar), pound garlic and salt with olive oil. Add the hot plantain rounds and pieces of crispy chicharrón. Mash everything together until it forms a dense, garlicky ball. Press into a bowl shape, then fill with garlic shrimp, stewed chicken, or beef in broth.', country: 'PR', where: 'Puerto Rico, Dominican Republic' },
    { name: 'Arroz con gandules', emoji: '🍚', type: 'savory · side', description: 'Yellow rice cooked with pigeon peas, sofrito, olives, and pork. Puerto Rico\'s national rice dish, served at every celebration.', recipe: 'Start with sofrito (blended onion, peppers, garlic, cilantro, culantro). Brown diced pork or bacon, add sofrito, then sazón (annatto-based spice blend) and tomato sauce. Stir in medium-grain rice to coat. Add gandules (pigeon peas), green olives stuffed with pimento, capers, bay leaf, and water (about 2:1 to rice). Bring to a boil, then cover and cook low for 25 minutes. Don\'t peek.', country: 'PR', where: 'Puerto Rico' },

    // DOMINICAN REPUBLIC
    { name: 'La bandera', emoji: '🍱', type: 'savory · platter', description: '"The flag" — the everyday Dominican meal: white rice, red beans, and meat (usually stewed chicken). Named because the colors mirror the Dominican flag.', recipe: 'Three components on one plate. White rice cooked simply. Habichuelas guisadas: red beans simmered with sofrito (onion, garlic, peppers, cilantro), tomato sauce, oregano, and a piece of pumpkin (auyama) for sweetness. Pollo guisado: chicken pieces browned, then stewed with sofrito, tomato, olives, oregano. Often a small side salad of lettuce, tomato, and avocado.', country: 'DO', where: 'Dominican Republic' },
    { name: 'Mangú', emoji: '🍌', type: 'breakfast', description: 'Mashed boiled green plantains, drizzled with olive oil and topped with sautéed red onions. Eaten for breakfast with fried cheese, salami, and eggs — "los tres golpes" (the three hits).', recipe: 'Boil peeled green plantain chunks in salted water until very tender, about 20 minutes. Mash with butter and a splash of the cooking water until smooth — don\'t over-process or it gets gummy. Top with red onions sautéed quickly in oil with a tablespoon of apple-cider vinegar. Serve with fried Dominican salami, fried white cheese (queso frito), and fried eggs.', country: 'DO', where: 'Dominican Republic' },

    // VENEZUELA
    { name: 'Pabellón criollo', emoji: '🍱', type: 'savory · platter', description: 'Venezuela\'s national dish: shredded beef, black beans, white rice, and fried sweet plantains on one plate. The colors are said to represent Venezuela\'s ethnic heritage.', recipe: 'Carne mechada: flank steak boiled with aromatics until tender, then shredded and sautéed with sofrito, tomato, cumin, Worcestershire sauce. Black beans: simmered with sofrito, bell pepper, and a touch of sugar (Venezuelan style). White rice cooked simply. Sweet ripe plantains (yellow-black skin) sliced and pan-fried in butter until caramelized. Often topped with a fried egg ("a caballo").', country: 'VE', where: 'Venezuela' },
    { name: 'Hallacas', emoji: '🎄', type: 'savory · holiday', description: 'A Christmas tradition: corn dough stuffed with a mix of beef, pork, chicken, raisins, olives, and capers, wrapped in plantain leaves and steamed. Every family has their own recipe.', recipe: 'Filling (guiso) is made first — usually a day ahead: stewed beef, pork, and chicken with onion, peppers, garlic, raisins, olives, capers, and aji dulce. Dough: pre-cooked corn flour kneaded with broth, lard colored with annatto oil. Lay out softened plantain leaves, spread a thin layer of dough, mound filling in the center, add a strip of bell pepper and olive on top, fold into a rectangle, tie with string, steam for 1 hour. Make 50+ at a time — it\'s a family affair.', country: 'VE', where: 'Venezuela' },

    // GUATEMALA
    { name: 'Pepián', emoji: '🍲', type: 'savory · stew', description: 'A pre-Columbian Maya stew thickened with roasted seeds (pumpkin, sesame) and tomatoes. Served over chicken or beef. Declared part of Guatemala\'s national cultural heritage.', recipe: 'Toast pumpkin seeds (pepitas) and sesame seeds in a dry pan until fragrant. Char tomatoes, tomatillos, garlic, and dried chiles (guajillo and pasilla) on the same pan. Blend everything with a bit of broth into a thick paste. Strain through a sieve. Simmer with cooked chicken pieces, potato, chayote, and carrot for 30 minutes. Served with white rice and corn tortillas.', country: 'GT', where: 'Guatemala' },

    // EL SALVADOR
    { name: 'Pupusas', emoji: '🌮', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pupusas.jpg', type: 'savory · snack', description: 'Thick corn tortillas stuffed with cheese, refried beans, pork (chicharrón), or loroco flower buds. Served with curtido (pickled cabbage slaw) and tomato salsa. El Salvador\'s national dish.', recipe: 'Mix masa harina (pre-cooked corn flour) with water and a pinch of salt into a soft dough. Roll a ball, flatten into a disc, place filling in the center (shredded quesillo cheese alone or mixed with refried beans or chicharrón), pinch closed and reshape into a thicker disc. Cook on a hot dry griddle (comal) about 3-4 minutes per side until golden with brown spots. Serve with curtido (cabbage, carrot, onion, vinegar) and thin tomato salsa.', country: 'SV', where: 'El Salvador, Honduras' },

    // COSTA RICA / NICARAGUA / HONDURAS
    { name: 'Gallo pinto', emoji: '🍳', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gallo_pinto.jpg', type: 'breakfast', description: '"Spotted rooster" — rice and beans cooked together until the rice turns reddish-brown from the bean broth. The breakfast of Costa Rica and Nicaragua, served with eggs, cheese, and tortillas.', recipe: 'Cook black beans (Costa Rica) or red beans (Nicaragua) with garlic and bay leaf until tender — reserve the cooking liquid. Sauté finely chopped onion, bell pepper, and garlic in oil. Add cooked rice (preferably day-old) and stir to coat. Stir in beans with a few spoonfuls of their dark liquid until the rice turns brown-speckled. Costa Rican version finishes with Salsa Lizano (a tangy local sauce). Serve with eggs, fried plantain, sour cream, and corn tortillas.', country: 'CR', where: 'Costa Rica, Nicaragua' },
    { name: 'Baleadas', emoji: '🌯', type: 'savory · snack', description: 'A thick flour tortilla folded over refried beans, crumbled cheese, and crema. Add eggs, avocado, or meat for a "baleada con todo." Honduras\'s favorite quick meal.', recipe: 'Tortilla: flour, salt, baking powder, lard or oil, warm water. Knead until soft, rest 20 minutes, then divide and roll into thick discs about 8 inches across. Cook on a hot dry griddle until just barely brown — should still be soft and pliable. Spread half the tortilla with refried red beans, top with crumbled queso seco and a drizzle of crema (Honduran sour cream). Fold in half. Upgrade: add scrambled eggs, sliced avocado, or chorizo.', country: 'HN', where: 'Honduras' },

    // ECUADOR
    { name: 'Llapingachos', emoji: '🥔', type: 'savory · main', description: 'Cheesy potato patties fried until golden, served with chorizo, fried egg, avocado, peanut sauce, and beet salad. Ecuadorian highlands comfort food.', recipe: 'Boil and mash starchy potatoes (yellow or russet). Mix with sautéed onion bloomed in achiote oil, salt, and a generous amount of crumbled queso fresco. Form into patties, hiding a piece of cheese in the center. Pan-fry in oil until golden and crispy outside. Serve with peanut sauce (toasted peanuts blended with milk, onion, achiote), chorizo, fried egg, avocado slices, and a salad of pickled beets and lettuce.', country: 'EC', where: 'Ecuador' },

    // PARAGUAY
    { name: 'Sopa paraguaya', emoji: '🌽', type: 'savory · bread', description: 'The world\'s only solid soup. It\'s actually a thick, savory corn-and-cheese bread, served sliced. The name comes from a presidential cook who accidentally over-thickened a soup.', recipe: 'Cream butter and lard with finely chopped onion sautéed soft. Beat in eggs, then add cornmeal (or fresh ground corn), grated Paraguay cheese (or substitute with crumbled queso fresco and parmesan), milk, salt. Pour into a greased pan and bake at 180°C for 45 minutes until set and golden. Cool slightly before slicing into squares. Served as a side at asados.', country: 'PY', where: 'Paraguay' },
    { name: 'Chipá', emoji: '🥨', type: 'savory · snack', description: 'Cheesy bread rings made from manioc starch (yuca) and cheese. Crispy outside, chewy inside. Eaten for breakfast or as a snack throughout Paraguay.', recipe: 'Mix manioc starch (almidón de mandioca — NOT regular tapioca), grated hard cheese (Paraguay or aged parmesan), butter, eggs, milk, and salt. Knead briefly into a smooth dough. Roll into ropes, form into small donut rings or balls. Bake at 200°C for 15-20 minutes until puffed and golden. Eat warm — the texture goes rubbery as it cools.', country: 'PY', where: 'Paraguay, northeast Argentina' },

    // CHILE
    { name: 'Pastel de choclo', emoji: '🌽', type: 'savory · main', description: 'A casserole of seasoned ground beef, chicken, onions, hard-boiled eggs, and olives, topped with a layer of sweet ground corn and baked until golden. Chilean summer food.', recipe: 'Pino filling: ground beef cooked with diced onion, garlic, cumin, paprika, and oregano until juicy but not dry. Layer in an oven dish: pino, then pieces of cooked chicken, sliced hard-boiled egg, raisins, black olives. Top with choclo topping: fresh corn kernels blended with milk, basil, butter, and a touch of sugar, cooked briefly into a thick paste. Sprinkle with sugar, bake at 200°C until top is browned and crusted.', country: 'CL', where: 'Chile' },
    { name: 'Completo', emoji: '🌭', type: 'savory · snack', description: 'A Chilean hot dog taken to extremes: mashed avocado, diced tomato, sauerkraut, mayonnaise, and ají sauce piled on top. Eat with a fork.', recipe: 'A soft hot dog bun, a regular hot dog (or two), and then the toppings in order: a thick spread of mashed avocado, finely diced tomato (drained of excess juice), sauerkraut, ají verde (puréed green chile sauce), and a wide ribbon of mayonnaise on top. The "italiano" version skips the kraut and ají — just avocado, tomato, mayo (green, red, white — the colors of the Italian flag).', country: 'CL', where: 'Chile' },

    // BOLIVIA
    { name: 'Salteñas', emoji: '🥟', type: 'savory · snack', description: 'Bolivia\'s morning specialty: baked pastries with a slightly sweet crust, filled with a juicy stew of meat, potatoes, peas, and a hint of sugar. Eaten between 10am and noon — never for lunch.', recipe: 'Filling is made the day before and refrigerated until gelatinous: beef or chicken stewed with onion, peas, potato, ají amarillo, cumin, sugar, gelatin (or natural collagen from bones), broth. Dough: flour, lard, sugar, egg yolk, achiote-colored water for golden color. Roll thin, cut into circles, place a spoonful of cold filling in the middle, fold over and crimp the edge into a decorative repulgue along the top. Bake at 220°C for 15 minutes. Eat carefully — the filling is hot liquid inside.', country: 'BO', where: 'Bolivia' },

    // Added 2026-06 — every Spanish-speaking country now has 2+ dishes
    { name: 'Milanesa', emoji: '🥩', type: 'savory · main', description: 'A thin, breaded, fried cutlet — usually beef or chicken — eaten across the Río de la Plata. Originally Italian (cotoletta alla milanese), now wholly part of South American comfort food.', recipe: 'Pound a beef round or chicken breast thin (½ cm). Dip in beaten egg seasoned with garlic, parsley, salt. Press into breadcrumbs (some cooks add grated parmesan or oregano to the crumbs). Pan-fry in oil 2-3 minutes per side until golden. The "napolitana" version adds tomato sauce, ham, and melted cheese on top. Serve with fries, mashed potatoes, or a salad — and a wedge of lemon.', country: 'UY', where: 'Uruguay, Argentina' },
    { name: 'Cubano sandwich', emoji: '🥪', type: 'savory · sandwich', description: 'Cuban-bread sandwich pressed flat: roast pork, ham, Swiss cheese, pickles, and mustard. Born in Tampa and Miami factory cafeterias where Cuban exiles brought it together.', recipe: 'Slice a long loaf of Cuban bread (or a soft French roll) in half. Spread yellow mustard on the inside. Layer: thin-sliced roast pork (mojo-marinated overnight in citrus, garlic, oregano), ham, Swiss cheese, dill pickle slices. Close the sandwich and butter the outside. Press in a panini press (or weigh down with a heavy pan) until the bread is flat, golden, and crispy and the cheese is melted.', country: 'CU', where: 'Cuba, Miami, Tampa' },
    { name: 'Tostones', emoji: '🍌', type: 'savory · side', description: 'Twice-fried green plantain disks — crispy outside, soft inside. Eaten as a side or appetizer with garlic-citrus mojo sauce. A staple across the Caribbean.', recipe: 'Peel green (unripe) plantains and slice into 1-inch rounds. Fry in oil at medium heat about 3-4 minutes per side — they should be cooked through but not browned. Remove and smash each piece flat with the bottom of a glass or a tostonera (special wooden press) until ¼-inch thick. Fry a second time at higher heat until golden and crispy. Sprinkle with salt. Serve with mojo (garlic, lime, olive oil) or just lime wedges.', country: 'PR', where: 'Puerto Rico, Caribbean' },
    { name: 'Sancocho', emoji: '🍲', type: 'savory · stew', description: 'A hearty meat-and-root-vegetable stew — the Dominican Republic\'s celebration dish. The "siete carnes" version uses seven different meats and takes all day.', recipe: 'Brown pieces of chicken, beef, and pork (or up to 7 different meats for "sancocho de siete carnes") in oil. Add sofrito (onion, garlic, cilantro, peppers). Cover with water and simmer 30 minutes. Add yuca, plantain (both green and ripe), yautía (taro), name (a tuber), corn on the cob in chunks, and pumpkin. Simmer another hour until everything is tender and the broth has thickened from the starches. Serve over white rice with avocado.', country: 'DO', where: 'Dominican Republic, also Colombia, Panama' },
    { name: 'Cachapa', emoji: '🌽', type: 'savory · breakfast', description: 'A thick, sweet corn pancake folded over white cheese. Venezuelan roadside food — sold from kiosks alongside arepas.', recipe: 'Blend fresh corn kernels (about 4 ears worth) with a beaten egg, a little milk, a pinch of salt, and a touch of sugar. The batter should be thick but pourable, with visible corn pieces. Pour onto a hot griddle or pan (no oil — just lightly greased) and spread to about 8 inches across. Cook 3-4 minutes per side until edges curl up and the surface is golden with brown spots. Fold over a thick slice of soft white cheese (queso de mano or fresh mozzarella). Eat immediately while the cheese melts.', country: 'VE', where: 'Venezuela' },
    { name: 'Kak\'ik', emoji: '🦃', type: 'savory · soup', description: 'A Maya turkey soup from the Q\'eqchi\' people of Cobán, Guatemala. Declared part of Guatemala\'s national cultural heritage in 2007.', recipe: 'Toast achiote seeds, dried guajillo and pasilla chiles, garlic, onion, tomatoes, and tomatillos on a dry comal until charred. Blend with cilantro, mint, and a little broth into a deep-red sauce. Simmer turkey pieces (traditionally a whole bird, broken down) in water with the sauce for 2-3 hours until very tender. The broth turns brick-red. Serve with tamalitos blancos (small unfilled corn tamales), white rice, and a squeeze of lime.', country: 'GT', where: 'Guatemala, especially Alta Verapaz' },
    { name: 'Yuca frita con chicharrón', emoji: '🥔', type: 'savory · snack', description: 'Crispy fried yuca (cassava) served with fried pork rinds, curtido (pickled cabbage), and salsa. A Salvadoran street-food classic.', recipe: 'Peel and cut yuca into 3-inch sticks. Boil in salted water until just tender (15-20 minutes — should hold its shape). Drain well and let cool. Heat oil to 350°F (175°C) and fry yuca pieces until golden and crispy on the outside, soft and fluffy inside. Drain on paper towels and salt immediately. Serve hot, topped with chicharrón (crispy fried pork belly or pork rinds), a mound of curtido (cabbage-vinegar slaw), and tangy red salsa.', country: 'SV', where: 'El Salvador' },
    { name: 'Casado', emoji: '🍱', type: 'savory · platter', description: 'The everyday lunch in Costa Rica: rice, beans, meat, fried plantain, salad, and tortilla. The name means "married" — referring to the meal\'s components, "married together" on one plate.', recipe: 'Compose on one plate: white rice; black beans (cooked with sofrito and a pinch of cumin); a piece of meat (grilled chicken, beef in salsa, or fried pork chop) seasoned with Salsa Lizano (the Costa Rican Worcestershire); fried sweet plantains; a simple cabbage-tomato salad with lime dressing; a soft corn tortilla. Sometimes a fried egg on top or picadillo (sautéed minced vegetables) on the side. Cheap, filling, eaten at sodas (small family restaurants) all over the country.', country: 'CR', where: 'Costa Rica' },
    { name: 'Sopa de caracol', emoji: '🐚', type: 'savory · soup', description: 'A creamy coconut-conch soup from Honduras\'s Caribbean coast — Garifuna and Miskito coastal cuisine. Made famous worldwide by the 1991 punta song "Sopa de caracol."', recipe: 'Tenderize conch (caracol) by pounding it, then dice. Sauté onion, garlic, and bell pepper in oil. Add the conch, water, and let simmer 20 minutes. Add coconut milk (ideally fresh from grated coconut), yuca chunks, green plantain slices, and slices of malanga or potato. Season with culantro (or cilantro), achiote, and a piece of habanero for heat. Simmer until vegetables are tender and the broth is creamy-white. Serve hot with lime.', country: 'HN', where: 'Honduras, Belize, Caribbean coast' },
    { name: 'Encebollado', emoji: '🐟', type: 'savory · soup', description: 'A tangy tuna-and-yuca soup from coastal Ecuador. The country\'s favorite hangover cure — and a national breakfast dish.', recipe: 'Simmer fresh albacore tuna (or yellowfin) in water with onion, garlic, cumin, and a piece of tomato until tender. Remove the fish and shred. Add chunks of yuca to the broth and cook until soft. Return the shredded tuna to the pot with sliced red onions that have been "encebollado" — soaked in lime juice with cilantro and a little salt for 10 minutes. Serve hot with toppings: pickled red onion, popcorn or chifles (plantain chips), aji (chili sauce), lime, and avocado.', country: 'EC', where: 'Ecuador, especially Guayaquil' },
    { name: 'Pique macho', emoji: '🌶️', type: 'savory · main', description: 'A spicy mountain of beef, sausage, French fries, peppers, and onions topped with a fried egg. Born in 1970s Cochabamba — a dish meant to be shared and devoured.', recipe: 'Cut beef into strips and sauté hot and fast in oil until just done. Add sliced onion, sliced red and green bell peppers, and rounds of locoto (Bolivian hot chile) or jalapeño. Stir in pieces of cooked chorizo or salchipapa-style sausage. Pile over a generous bed of hot French fries. Top with hard-boiled or fried egg slices, tomato wedges, and a drizzle of ají (Bolivian hot sauce). Eat with toothpicks, family-style, from one shared plate.', country: 'BO', where: 'Bolivia, especially Cochabamba' },
    { name: 'Nacatamal', emoji: '🫔', type: 'savory · holiday', description: 'A massive Nicaraguan tamal — corn dough wrapped in plantain leaves, stuffed with pork, rice, potato, peppers, and mint. Traditional Sunday breakfast.', recipe: 'Marinate pork shoulder pieces overnight in sour orange juice, garlic, onion, salt. Mix masa harina with achiote-colored lard, salt, and a little water until smooth and slightly stiff. Lay out softened plantain leaves. Spread a thick layer of masa, then top with: a piece of marinated pork, slices of potato, slices of tomato, a few rings of bell pepper, a few sprigs of fresh mint or hierba buena, a few rice grains, sometimes raisins or an olive. Wrap into a thick rectangle, tie with string. Steam upright in a tall pot for 3-4 hours.', country: 'NI', where: 'Nicaragua' },
    { name: 'Vigorón', emoji: '🥬', type: 'savory · snack', description: 'A Granada (Nicaragua) street food: boiled yuca topped with crispy chicharrón and a tangy cabbage slaw, all piled on a plantain leaf. Created in 1914 by a vendor named Maria Luisa Cisneros Lacayo.', recipe: 'Boil chunks of yuca (cassava) in salted water until tender — about 30 minutes. Drain. Make curtido: shred green cabbage, mix with chopped tomato, sliced onion, and habanero or jalapeño. Dress with white vinegar, lime juice, oil, and salt; let sit 30 minutes to soften. Cook chicharrón (pork belly) until extra crispy and chop into bite-sized pieces. To serve: place a plantain leaf or paper on a plate. Pile on yuca, top with chicharrón, then a generous mound of curtido. Eat with hands.', country: 'NI', where: 'Nicaragua, especially Granada' },
    { name: 'Sancocho panameño', emoji: '🍲', type: 'savory · soup', description: 'Panama\'s national soup. A simpler, more rustic version of sancocho — chicken, yuca, ñame, and the distinctive herb culantro (not cilantro).', recipe: 'Brown bone-in chicken pieces (traditionally gallina, an older hen for better flavor) in oil. Add water, a generous amount of culantro (long-leaf cilantro — the key ingredient, not regular cilantro), onion, garlic, oregano, salt. Simmer 30 minutes. Add chunks of yuca and ñame (a tuber similar to taro). Simmer another 30 minutes until everything is tender and the broth has thickened from the starchy roots. Serve in deep bowls with white rice on the side and a wedge of lime.', country: 'PA', where: 'Panama' },
    { name: 'Carimañolas', emoji: '🥟', type: 'savory · snack', description: 'Football-shaped fried yuca fritters stuffed with seasoned ground beef or chicken. A Panamanian breakfast and afternoon snack staple.', recipe: 'Boil peeled yuca chunks in salted water until very tender. Drain well and mash to a smooth paste while still warm — should be thick enough to hold its shape. Cool. Meanwhile, brown ground beef with onion, garlic, bell pepper, tomato sauce, cumin, and a touch of vinegar. Take a small handful of yuca paste, flatten into a disc, place a spoonful of meat filling in the center, close into a football shape with pointed ends. Deep-fry in hot oil until golden and crispy. Eat hot with hot sauce.', country: 'PA', where: 'Panama, also Colombia' }
  ];

  // ============================================================================
  // ARTISTS — major painters and sculptors of the Spanish-speaking world.
  // Each artist has multiple works (paintings/murals/sculptures).
  // Image URLs use Wikimedia Special:FilePath — if a URL fails, the renderer
  // falls back to a styled placeholder showing the title + artist on the
  // ocre gradient (same pattern as dishes).
  // ============================================================================
  const ARTISTS = [
    // ----------------- SPAIN -----------------
    {
      name: 'Diego Velázquez',
      country: 'ES',
      years: '1599 – 1660',
      tradition: 'Spanish Golden Age',
      bio: 'Court painter to King Philip IV of Spain. Considered by many to be the greatest painter who ever lived. His revolutionary use of brushwork influenced Manet and the Impressionists 200 years later.',
      works: [
        { title: 'Las Meninas', year: '1656', location: 'Museo del Prado, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Las_Meninas,_by_Diego_Velázquez,_from_Prado_in_Google_Earth.jpg', trivia: 'Velázquez paints himself painting the king and queen — who appear only as a reflection in a mirror at the back. The viewer stands where the royals would be. Foucault opened his book The Order of Things with a famous analysis of this painting.' },
        { title: 'La rendición de Breda (Las lanzas)', year: '1635', location: 'Museo del Prado, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diego_Velázquez_-_The_Surrender_of_Breda_-_Google_Art_Project.jpg', trivia: 'Depicts a 1625 Spanish military victory — but Velázquez paints it without humiliation. The Spanish general embraces the Dutch one rather than triumphing over him. A radical idea of how to portray war.' },
        { title: 'Las hilanderas', year: '1657', location: 'Museo del Prado, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Las_Hilanderas,_by_Diego_Velázquez.jpg', trivia: 'Looks like a scene of working women spinning wool — but it actually depicts the myth of Arachne and Athena. Hidden mythology in apparent everyday life. Critics call it one of the first modern paintings.' }
      ]
    },
    {
      name: 'Francisco de Goya',
      country: 'ES',
      years: '1746 – 1828',
      tradition: 'Late Romanticism · early modernism',
      bio: 'Court painter who became the first modern artist. His late "Black Paintings," made on the walls of his own house when he was deaf and isolated, terrified everyone who saw them and changed what art could do.',
      works: [
        { title: 'El 3 de mayo de 1808', year: '1814', location: 'Museo del Prado, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg', trivia: 'Shows Spanish civilians being executed by Napoleon\'s troops. The central figure — arms raised in a Christ-like pose, white shirt glowing — became the visual template for every painting of state violence since. Picasso\'s Guernica is its direct descendant.' },
        { title: 'Saturno devorando a su hijo', year: '1820–1823', location: 'Museo del Prado, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Francisco_de_Goya,_Saturno_devorando_a_su_hijo_(1819-1823).jpg', trivia: 'One of the "Black Paintings" Goya painted on the walls of his own house, never meant to be seen. Saturn (Cronos) eats his own children to prevent them from overthrowing him. Goya was old, deaf, and bitter. The original wall painting was transferred to canvas after his death.' },
        { title: 'La maja desnuda', year: '1797–1800', location: 'Museo del Prado, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Goya_Maja_naked2.jpg', trivia: 'One of the earliest unapologetic nudes in Western art that wasn\'t mythological or religious. The Spanish Inquisition summoned Goya to defend it. Painted as a private commission — and paired with La maja vestida (the same woman, clothed) hung over it on a hinge.' }
      ]
    },
    {
      name: 'El Greco',
      country: 'ES',
      years: '1541 – 1614',
      tradition: 'Mannerism · pre-modern',
      bio: 'Born in Crete (his name means "the Greek"), trained in Italy, settled in Toledo. His elongated, otherworldly figures looked strange in his lifetime — and look modern now. Picasso called him an inspiration.',
      works: [
        { title: 'El entierro del Conde de Orgaz', year: '1586', location: 'Iglesia de Santo Tomé, Toledo', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/El_Greco_-_The_Burial_of_the_Count_of_Orgaz.JPG', trivia: 'Lives on the wall it was painted for — never moved to a museum. The lower half is earthly (the count\'s burial); the upper half is heaven (his soul being received). El Greco painted his own son in the foreground as the boy pointing.' },
        { title: 'Vista de Toledo', year: '1599–1600', location: 'Metropolitan Museum, New York', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/El_Greco_View_of_Toledo.jpg', trivia: 'One of the first pure landscape paintings in Western art. The dramatic green sky and stormy clouds make the city look apocalyptic. Considered an ancestor of Expressionism three centuries before that movement existed.' }
      ]
    },
    {
      name: 'Pablo Picasso',
      country: 'ES',
      years: '1881 – 1973',
      tradition: 'Cubism · everything after',
      bio: 'Co-invented Cubism with Braque in 1907. Spent most of his adult life in France but never gave up Spanish citizenship. The most influential artist of the 20th century — for better and (some say) for worse.',
      works: [
        { title: 'Guernica', year: '1937', location: 'Museo Reina Sofía, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/PicassoGuernica.jpg', trivia: 'Painted in a few weeks as a response to the Nazi bombing of the Basque town of Guernica during the Spanish Civil War. Black, white, and gray — no color. Picasso refused to let it return to Spain until democracy was restored. It came back in 1981, six years after Franco\'s death.' },
        { title: 'Las señoritas de Aviñón', year: '1907', location: 'MoMA, New York', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Les_Demoiselles_d\'Avignon.jpg', trivia: 'Five prostitutes from a Barcelona brothel, painted in a way no one had ever painted before. The faces on the right are based on African masks Picasso saw at the Trocadéro museum. Considered the moment Cubism was born.' },
        { title: 'Mujer llorando', year: '1937', location: 'Tate Modern, London', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pablo_Picasso,_Weeping_Woman,_1937,_oil_on_canvas,_Tate_Modern,_London,_England.jpg', trivia: 'A companion to Guernica. The model was Dora Maar, photographer and Picasso\'s lover at the time. He said: "Dora, for me, was always a weeping woman." She said of Picasso: "All his portraits of me are lies."' }
      ]
    },
    {
      name: 'Salvador Dalí',
      country: 'ES',
      years: '1904 – 1989',
      tradition: 'Surrealism',
      bio: 'The most famous Surrealist — partly because of the paintings, partly because of the mustache and the public stunts. Trained in Madrid alongside Lorca and Buñuel. Later supported Franco, which got him expelled from the Surrealist movement.',
      works: [
        { title: 'La persistencia de la memoria', year: '1931', location: 'MoMA, New York', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_Persistence_of_Memory.jpg', trivia: 'The melting clocks painting. Dalí said the soft watches were inspired by Camembert cheese melting on a hot day. It\'s small — only about 24 × 33 centimeters. People are always surprised by how tiny it is in person.' },
        { title: 'Cristo de San Juan de la Cruz', year: '1951', location: 'Kelvingrove Gallery, Glasgow', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Christ_of_Saint_John_of_the_Cross.jpg', trivia: 'Christ on the cross seen from above — an angle nobody had painted before. Inspired by a drawing by the 16th-century Spanish mystic San Juan de la Cruz. There is no blood, no nails visible. Voted Scotland\'s favorite painting.' }
      ]
    },
    {
      name: 'Joaquín Sorolla',
      country: 'ES',
      years: '1863 – 1923',
      tradition: 'Spanish Impressionism · luminism',
      bio: 'The painter of Spanish sunlight. From Valencia, Sorolla painted beaches, fishermen, and children playing in the surf with a freshness and speed that made him famous in his own lifetime — including in the United States.',
      works: [
        { title: 'Niños en la playa', year: '1909', location: 'Museo del Prado, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joaquín_Sorolla_y_Bastida_-_Children_on_the_Beach_-_Google_Art_Project.jpg', trivia: 'Three boys lie on the wet sand at the edge of the surf, sun on their backs. Sorolla painted outdoors at midday — the hardest light to handle. The wet sand reflects the sky in pale lavender. One of the great paintings of light in any tradition.' },
        { title: 'Paseo a orillas del mar', year: '1909', location: 'Museo Sorolla, Madrid', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joaquín_Sorolla_y_Bastida_-_A_Walk_on_the_Beach_-_Google_Art_Project.jpg', trivia: 'Sorolla\'s wife Clotilde and daughter María walk along the shore, white dresses billowing. The composition is unconventional — most of the canvas is empty sand and sky. Painted in Valencia where Sorolla grew up.' }
      ]
    },
    // ----------------- MEXICO -----------------
    {
      name: 'Frida Kahlo',
      country: 'MX',
      years: '1907 – 1954',
      tradition: 'Mexican modernism · self-portraiture',
      bio: 'Possibly the most globally recognized Latin American artist. Survived polio as a child and a near-fatal bus accident at age 18 that left her in lifelong pain. Married Diego Rivera. Painted herself again and again — her body became her subject.',
      works: [
        { title: 'Las dos Fridas', year: '1939', location: 'Museo de Arte Moderno, CDMX', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Las_Dos_Fridas.jpg', trivia: 'Painted during her divorce from Diego Rivera. Two Fridas hold hands — the European one in a Victorian dress (with her heart cut open) and the Mexican one in traditional Tehuana dress (with her heart intact). Both Fridas existed inside her.' },
        { title: 'La columna rota', year: '1944', location: 'Museo Dolores Olmedo, CDMX', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/La_Columna_Rota.jpg', trivia: 'Kahlo\'s spine as a shattered Ionic column. Nails pierce her body and face. She wears a surgical corset she had to wear for the rest of her life. Tears stream down. Painted after one of her many spinal surgeries.' },
        { title: 'Autorretrato con collar de espinas', year: '1940', location: 'Harry Ransom Center, Texas', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Frida_Kahlo_(self_portrait).jpg', trivia: 'A thorn necklace cuts into Kahlo\'s throat; a dead hummingbird hangs at the center. A black monkey (Diego, who had just left her) pulls at the necklace. A black cat lurks behind. Every animal carries a precise symbolic weight.' }
      ]
    },
    {
      name: 'Diego Rivera',
      country: 'MX',
      years: '1886 – 1957',
      tradition: 'Mexican muralism',
      bio: 'The father of Mexican muralism. After the Revolution, the Mexican government hired Rivera and others to paint vast public murals telling the people their own history. Frida Kahlo\'s husband — twice.',
      works: [
        { title: 'El hombre controlador del universo', year: '1934', location: 'Palacio de Bellas Artes, CDMX', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Man_at_the_Crossroads.jpg', trivia: 'Rivera\'s second attempt at this mural. The first was commissioned by Nelson Rockefeller for Rockefeller Center, New York — and destroyed by Rockefeller when Rivera refused to remove the face of Lenin. Rivera recreated it in Mexico City with Lenin AND added a portrait of Rockefeller drinking with a prostitute.' },
        { title: 'Sueño de una tarde dominical en la Alameda Central', year: '1947', location: 'Museo Mural Diego Rivera, CDMX', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sueño_de_una_tarde_dominical_en_la_Alameda_Central.jpg', trivia: 'A 15-meter-wide mural in which Rivera assembles 150 figures from 400 years of Mexican history. Frida Kahlo stands behind him in the center. He holds the hand of La Calavera Catrina — Posada\'s famous dressed skeleton. Originally in the Hotel del Prado, moved after the 1985 earthquake destroyed the building.' }
      ]
    },
    {
      name: 'José Clemente Orozco',
      country: 'MX',
      years: '1883 – 1949',
      tradition: 'Mexican muralism',
      bio: 'The darkest of the three great muralists (with Rivera and Siqueiros). Lost his left hand and most of his hearing in a childhood accident with explosives. His murals are angrier and more anguished than Rivera\'s — more about suffering than triumph.',
      works: [
        { title: 'Prometeo', year: '1930', location: 'Pomona College, California', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Prometheus_Orozco.jpg', trivia: 'Painted by Orozco in California after his work was rejected in Mexico. Prometheus reaches up to steal fire from the gods. Considered the first major modern mural in the United States. Jackson Pollock studied it and called it the greatest painting in North America.' },
        { title: 'Hidalgo y la abolición de la esclavitud', year: '1937', location: 'Palacio de Gobierno, Guadalajara', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/José_Clemente_Orozco_-_Hidalgo.jpg', trivia: 'A 12-meter-tall mural of Mexican independence leader Miguel Hidalgo wielding a torch over the heads of competing political forces. One of Orozco\'s most violent and politically pessimistic murals.' }
      ]
    },
    {
      name: 'Rufino Tamayo',
      country: 'MX',
      years: '1899 – 1991',
      tradition: 'Mexican modernism',
      bio: 'A Zapotec painter from Oaxaca who broke with the muralist generation. Tamayo wanted Mexican art to be universal rather than nationalist — to use Mexican color and form without the heavy political message. Rivera and Siqueiros saw him as a traitor; later generations saw him as a liberator.',
      works: [
        { title: 'Sandías', year: '1968', location: 'Various editions; major version Museo Tamayo, CDMX', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tamayo_Sandías.jpg', trivia: 'A vibrant red-and-green still life of watermelons. Tamayo returned to this motif over and over throughout his career. Watermelon is a Day of the Dead offering in Mexico, but Tamayo strips the political/folkloric reading away — these are just the colors and the shapes.' }
      ]
    },
    // ----------------- COLOMBIA -----------------
    {
      name: 'Fernando Botero',
      country: 'CO',
      years: '1932 – 2023',
      tradition: 'Boterismo · figurative',
      bio: 'Colombia\'s most recognized painter and sculptor worldwide. Famous for exaggerated, voluptuous proportions — fat bodies, fat fruit, fat dictators. He insisted he didn\'t paint "fat people" — he painted "volume."',
      works: [
        { title: 'Mona Lisa, Age Twelve', year: '1959', location: 'MoMA, New York', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Botero_Mona_Lisa_Age_Twelve.jpg', trivia: 'The painting that launched Botero\'s mature style. He reimagines da Vinci\'s Mona Lisa as a young girl with the same proportions he\'d use the rest of his career. MoMA bought it the next year — Botero was unknown.' },
        { title: 'La familia presidencial', year: '1967', location: 'MoMA, New York', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Botero_The_Presidential_Family.jpg', trivia: 'A satirical portrait of a Latin American military government as a stiff, posed family: dictator, bishop, general, first lady. The artist included himself sketching at the left edge — making explicit who is observing whom.' },
        { title: 'Pareja bailando', year: '1987', location: 'Various locations', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pareja_bailando_Botero.jpg', trivia: 'Two enormous figures dancing tango. Botero said his volumetric figures express sensuality — that thinness is associated with anxiety and his figures are happy. Critics often disagreed.' }
      ]
    },
    // ----------------- ECUADOR -----------------
    {
      name: 'Oswaldo Guayasamín',
      country: 'EC',
      years: '1919 – 1999',
      tradition: 'Latin American Expressionism · indigenismo',
      bio: 'Ecuador\'s most internationally recognized painter. Mestizo of Quechua and white descent, he painted Latin American suffering — the indigenous poor, the victims of dictatorship, the exhausted mothers — with anguished color and angular distortion.',
      works: [
        { title: 'El grito', year: '1983', location: 'Capilla del Hombre, Quito', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guayasamín_El_Grito.jpg', trivia: 'A face in agony, mouth wide open. Part of Guayasamín\'s series La edad de la ira (the Age of Wrath) — 250 paintings made in response to 20th-century violence in Latin America. He once said: "I cried because I could not paint."' },
        { title: 'Las manos de la protesta', year: '1968', location: 'Capilla del Hombre, Quito', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guayasamin_Las_Manos.jpg', trivia: 'Hands were Guayasamín\'s lifelong subject. He painted them as bone, as claws, as raised in protest, as folded in despair. He believed hands carry the whole soul of a person.' }
      ]
    },
    // ----------------- CUBA -----------------
    {
      name: 'Wifredo Lam',
      country: 'CU',
      years: '1902 – 1982',
      tradition: 'Afro-Cuban Surrealism',
      bio: 'Cuban painter of Chinese, African, and Spanish ancestry. Studied with Picasso in Paris, knew the Surrealists. When he returned to Cuba in 1941, he painted with a new vocabulary — fusing African and Afro-Cuban religious imagery with Cubist form.',
      works: [
        { title: 'La jungla', year: '1943', location: 'MoMA, New York', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wifredo_Lam_The_Jungle.jpg', trivia: 'A dense thicket of sugarcane stalks and half-human forms with masklike faces. The painting refuses Western viewers an easy reading — figures merge with foliage. Lam said it was meant to "shock the bourgeoisie" by confronting them with the African presence in Cuban culture they preferred to ignore.' }
      ]
    },
    // ----------------- CHILE -----------------
    {
      name: 'Roberto Matta',
      country: 'CL',
      years: '1911 – 2002',
      tradition: 'Surrealism · abstract',
      bio: 'Trained as an architect, became one of the most experimental Surrealists. His "psychological morphologies" — abstract paintings of inner mental landscapes — influenced the New York School (Pollock, Motherwell) when Matta lived in NYC during WWII.',
      works: [
        { title: 'Le poète', year: '1944', location: 'Tate Modern, London', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Roberto_Matta_-_The_Poet.jpg', trivia: 'An abstract internal space with floating geometric forms and lines of force. Matta wanted to paint the interior of consciousness rather than the visible world. The Abstract Expressionists studied his paintings carefully.' }
      ]
    },
    // ----------------- URUGUAY -----------------
    {
      name: 'Joaquín Torres-García',
      country: 'UY',
      years: '1874 – 1949',
      tradition: 'Constructive Universalism',
      bio: 'Uruguayan artist who lived in Spain, the United States, and France before returning home in his 60s. Developed his own movement — Universalismo Constructivo — combining pre-Columbian symbolism with the geometric grid of European modernism.',
      works: [
        { title: 'América Invertida', year: '1943', location: 'Museo Torres García, Montevideo', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/America_Invertida.jpg', trivia: 'A pen-and-ink drawing of South America with the south at the top. Torres-García wrote alongside it: "Nuestro norte es el sur" — "Our north is the south." A foundational image of Latin American cultural independence. It is on murals, posters, and t-shirts across the continent.' },
        { title: 'Constructivo con campana', year: '1932', location: 'Museo Torres García, Montevideo', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Torres_García_constructivo.jpg', trivia: 'A grid filled with symbols — fish, anchor, sun, ladder, hammer, bell. Torres-García invented his own pictographic vocabulary that combines pre-Columbian glyphs with European modernist abstraction.' }
      ]
    }
  ];

  function renderDishes() {
    const grid = document.getElementById('dishesGrid');
    const tabs = document.getElementById('dishesTabs');
    if (!grid) return;

    const availableCodes = Array.from(new Set(DISHES.map(d => d.country)));
    if (tabs) tabs.innerHTML = buildMundoCountryTabs(availableCodes);

    const dishesToShow = mundoCountryFilter === 'all'
      ? DISHES
      : DISHES.filter(d => d.country === mundoCountryFilter);

    if (dishesToShow.length === 0) {
      grid.innerHTML = `<div class="mundo-empty">No dishes from the selected country yet.</div>`;
      return;
    }

    // Cards now open a modal (reuses countryModal) instead of flipping —
    // the recipe content is too long for a flip card back, and a modal lets
    // students read the recipe at a comfortable size on phones.
    grid.innerHTML = dishesToShow.map((d, i) => {
      const country = COUNTRIES.find(c => c.code === d.country);
      const flag = FLAGS[d.country] || '';
      // Find the original index in DISHES (not the filtered list) so openDishModal can look it up
      const originalIdx = DISHES.indexOf(d);
      return `
        <div class="slang-card" onclick="openDishModal(${originalIdx})" style="cursor: pointer;">
          <div class="slang-card-inner" style="position: static; transform: none;">
            <div class="slang-card-face slang-card-front" style="position: static; transform: none;">
              <div class="country-flag-mini">${flag}</div>
              <div class="country-tag">${country ? country.code : ''}</div>
              <div class="phrase">${d.name}</div>
              <div class="literal">${d.type}</div>
              <div class="tap-hint">tap for recipe →</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Open a modal showing the full dish info — description, recipe, where.
  // Reuses the existing countryModal HTML (modalFlag + modalBody).
  function openDishModal(idx) {
    const d = DISHES[idx];
    if (!d) return;
    const country = COUNTRIES.find(c => c.code === d.country);
    const flag = FLAGS[d.country] || '';
    const emoji = d.emoji || '🍽️';

    // Header: try real photo, fall back to emoji on the ocre gradient.
    // The onerror handler is critical — Wikimedia URLs sometimes break, and we
    // don't want students seeing a broken-image icon. If the photo fails to load,
    // we silently swap in the emoji block.
    const fallbackHtml = `
      <div style="padding: 40px 24px; text-align: center; background: linear-gradient(180deg, #d4922c, #c98a25); color: #2d1f10;">
        <div style="font-size: 72px; line-height: 1; margin-bottom: 16px;">${emoji}</div>
        <div style="font-size: 42px; line-height: 1;">${flag}</div>
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.75; margin-top: 14px;">${d.type}</div>
        <div style="font-family: 'DM Serif Display', serif; font-size: 30px; line-height: 1.15; margin-top: 6px;">${d.name}</div>
        <div style="font-family: 'Fraunces', serif; font-style: italic; font-size: 14px; opacity: 0.85; margin-top: 4px;">${country ? country.name : ''}</div>
      </div>`;

    if (d.img) {
      // Encode the fallback HTML once so we can drop it back in via onerror without quote issues
      const escapedFallback = fallbackHtml.replace(/"/g, '&quot;');
      document.getElementById('modalFlag').innerHTML = `
        <div style="position: relative; background: var(--ink);">
          <img src="${d.img}" alt="${d.name}" loading="lazy"
            style="width: 100%; height: 280px; object-fit: cover; display: block;"
            onerror="this.parentElement.outerHTML='${escapedFallback.replace(/\n\s+/g, ' ').replace(/'/g, "&#39;")}'">
          <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 24px; background: linear-gradient(180deg, transparent, rgba(31,26,20,0.85)); color: var(--paper);">
            <div style="display: flex; align-items: baseline; gap: 10px;">
              <span style="font-size: 24px; line-height: 1;">${flag}</span>
              <div>
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.8;">${d.type}</div>
                <div style="font-family: 'DM Serif Display', serif; font-size: 24px; line-height: 1.15;">${d.name}</div>
              </div>
            </div>
          </div>
        </div>`;
    } else {
      document.getElementById('modalFlag').innerHTML = fallbackHtml;
    }

    // Modal body: description, recipe, where
    const recipeHtml = d.recipe ? `
      <div class="modal-section">
        <h5>🍳 How it's made</h5>
        <p style="line-height: 1.6;">${d.recipe}</p>
      </div>
    ` : '';

    document.getElementById('modalBody').innerHTML = `
      <h3>${d.name}</h3>
      <div class="modal-sub">${d.type} · ${country ? country.name : ''}</div>
      <div class="modal-section">
        <h5>What it is</h5>
        <p style="line-height: 1.6;">${d.description}</p>
      </div>
      ${recipeHtml}
      <div class="modal-section">
        <h5>Where it's eaten</h5>
        <p>${d.where}</p>
      </div>
      <div style="margin-top: 16px; padding: 12px 14px; background: var(--card-bg); border-left: 3px solid var(--ocre); font-family: 'Fraunces', serif; font-style: italic; font-size: 13px; color: var(--ink-soft); line-height: 1.5;">
        Recipe descriptions are simplified for cultural learning, not precise measurements. For a tested recipe, search the dish name with "receta auténtica" online.
      </div>
    `;
    document.getElementById('countryModal').classList.add('open');
  }

