let restaurant = {
    name: "Pizzeria Mama",
    address: "Hauptstraße 123, 12345 Berlin",
    phone: "+49 30 123456789",
    openingHours: {
      monday: "11:00 - 22:00",
      tuesday: "11:00 - 22:00",
      wednesday: "11:00 - 22:00",
      thursday: "11:00 - 22:00",
      friday: "11:00 - 23:00",
      saturday: "12:00 - 23:00",
      sunday: "12:00 - 22:00"
    },
    menu: [
      {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        description: "Eine klassische italienische Pizza mit frischer Tomatensauce, cremiger Mozzarella und aromatischem Basilikum, perfekt gebacken und mit einem Hauch von Olivenöl verfeinert.",
        price: 8.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/margherita_pizza.jpg"
      },
      {
        id: 2,
        name: "BBQ Chicken Pizza",
        category: "Pizza",
        description: "Eine herzhafte Pizza mit würziger BBQ-Sauce, zartem Hähnchenfleisch, knackigen Zwiebeln und Paprika, garniert mit geschmolzenem Mozzarella.",
        price: 10.00,
        spicyLevel: 1,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/bbq_chicken_pizza.jpg"
      },
      {
        id: 3,
        name: "Caesar Salad",
        category: "Salat",
        description: "Frischer Römersalat mit zarten Hähnchenbruststreifen, knusprigen Croutons und reichlich Parmesan, abgerundet mit einem cremigen Caesar-Dressing.",
        price: 7.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.3,
        imageUrl: "/images/caesar_salad.jpg"
      },
      {
        id: 4,
        name: "Vegane Buddha Bowl",
        category: "Bowl",
        description: "Eine gesunde und nahrhafte Bowl mit Quinoa, Kichererbsen, Avocado, frischem Spinat und cremigem Hummus – perfekt für vegane Genießer.",
        price: 9.00,
        spicyLevel: 0,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/vegan_bowl.jpg"
      },
      {
        id: 5,
        name: "Spaghetti Bolognese",
        category: "Pasta",
        description: "Traditionelle italienische Spaghetti mit einer reichhaltigen Bolognese-Sauce aus Rinderhackfleisch und Tomaten, serviert mit frischem Parmesan.",
        price: 9.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/spaghetti_bolognese.jpg"
      },
      {
        id: 6,
        name: "Thai Curry mit Huhn",
        category: "Curry",
        description: "Ein würziges Thai-Curry mit zartem Hähnchenfleisch, frischem Gemüse und cremiger Kokosmilch, serviert mit duftendem Reis.",
        price: 11.00,
        spicyLevel: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.9,
        imageUrl: "/images/thai_curry.jpg"
      },
      {
        id: 7,
        name: "Falafel Wrap",
        category: "Wrap",
        description: "Ein würziger Falafel-Wrap mit frischem Salat, Hummus und einer Joghurt-Tahini-Sauce, alles in einem warmen Fladenbrot gewickelt.",
        price: 6.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: true,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.4,
        imageUrl: "/images/falafel_wrap.jpg"
      },
      {
        id: 8,
        name: "Sushi Mix Platte",
        category: "Sushi",
        description: "Eine Mischung aus frischen Sushi-Rollen, darunter Lachs, Thunfisch und Avocado Maki, perfekt serviert mit Sojasauce, Ingwer und Wasabi.",
        price: 15.00,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.9,
        imageUrl: "/images/sushi_mix.jpg"
      },
      {
        id: 9,
        name: "Chicken Tikka Masala",
        category: "Curry",
        description: "Würziges indisches Chicken Tikka Masala in einer cremigen Tomatensauce, serviert mit duftendem Basmati-Reis und Naan-Brot.",
        price: 12.00,
        spicyLevel: 3,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/chicken_tikka.jpg"
      },
      {
        id: 10,
        name: "Vegetarische Lasagne",
        category: "Pasta",
        description: "Hausgemachte Lasagne mit geschichteten Nudelplatten, einer Tomaten-Gemüsesauce und cremigem Béchamel, überbacken mit Käse.",
        price: 10.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/veg_lasagne.jpg"
      },
      {
        id: 11,
        name: "Ramen Nudelsuppe",
        category: "Suppe",
        description: "Eine reichhaltige Brühe mit Ramen-Nudeln, zartem Schweinebauch, Ei, frischen Frühlingszwiebeln und Nori-Algen.",
        price: 9.50,
        spicyLevel: 1,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/ramen.jpg"
      },
      {
        id: 12,
        name: "Penne Arrabbiata",
        category: "Pasta",
        description: "Würzige Penne in einer scharfen Tomatensauce mit Knoblauch, Chili und Olivenöl, garniert mit frischem Basilikum und Parmesan.",
        price: 8.00,
        spicyLevel: 2,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.3,
        imageUrl: "/images/penne_arrabbiata.jpg"
      },
      {
        id: 13,
        name: "Quinoa-Salat mit Avocado",
        category: "Salat",
        description: "Ein leichter und erfrischender Salat aus Quinoa, Avocado, Tomaten und frischen Kräutern, mit einem Zitronen-Dressing.",
        price: 7.00,
        spicyLevel: 0,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/quinoa_salat.jpg"
      },
      {
        id: 14,
        name: "Gegrilltes Lachsfilet",
        category: "Fisch",
        description: "Zartes Lachsfilet vom Grill, serviert mit einer Zitronen-Kräuter-Sauce, gedünstetem Gemüse und Kartoffelpüree.",
        price: 14.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.9,
        imageUrl: "/images/gegrillter_lachs.jpg"
      },
      {
        id: 15,
        name: "Pad Thai",
        category: "Nudelgericht",
        description: "Klassisches thailändisches Nudelgericht mit gebratenen Reisnudeln, Hähnchen, Erdnüssen, Ei und frischem Gemüse.",
        price: 10.00,
        spicyLevel: 1,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/pad_thai.jpg"
      },
      {
        id: 16,
        name: "Tom Yum Suppe",
        category: "Suppe",
        description: "Eine würzig-saure thailändische Suppe mit Garnelen, Zitronengras, Koriander und Chili in einer aromatischen Brühe.",
        price: 7.50,
        spicyLevel: 3,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/tom_yum.jpg"
      },
      {
        id: 17,
        name: "Cheeseburger Deluxe",
        category: "Burger",
        description: "Ein saftiger Rindfleischburger mit Cheddar, Salat, Tomaten, Zwiebeln und einer hausgemachten Burger-Sauce, serviert mit Pommes.",
        price: 9.00,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/cheeseburger.jpg"
      },
      {
        id: 18,
        name: "Scharfes Rindfleisch Stir-Fry",
        category: "Asiatisch",
        description: "Zarte Rindfleischstreifen, angebraten mit frischem Gemüse und einer scharfen Sojasauce, serviert mit Reis.",
        price: 11.00,
        spicyLevel: 3,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/stir_fry.jpg"
      },
      {
        id: 19,
        name: "Pasta Carbonara",
        category: "Pasta",
        description: "Cremige Spaghetti Carbonara mit Speck, Eiern und Parmesan, traditionell zubereitet ohne Sahne.",
        price: 9.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.4,
        imageUrl: "/images/carbonara.jpg"
      },
      {
        id: 20,
        name: "Veggie Burger",
        category: "Burger",
        description: "Ein herzhafter vegetarischer Burger mit einem Patty aus schwarzen Bohnen, frischem Salat, Tomaten und einer würzigen Mayo-Sauce.",
        price: 8.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/veggie_burger.jpg"
      },
      {
        id: 21,
        name: "Hähnchen Gyros",
        category: "Grill",
        description: "Griechisches Hähnchen-Gyros, mariniert in Kräutern, serviert mit Fladenbrot, Tzatziki und griechischem Salat.",
        price: 9.00,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/gyros.jpg"
      },
      {
        id: 22,
        name: "Vegetarisches Sushi",
        category: "Sushi",
        description: "Frische Sushi-Rollen gefüllt mit Avocado, Gurke, Karotten und Sesam, serviert mit Sojasauce und Wasabi.",
        price: 12.00,
        spicyLevel: 0,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/veg_sushi.jpg"
      },
      {
        id: 23,
        name: "Gnocchi mit Pesto",
        category: "Pasta",
        description: "Hausgemachte Gnocchi in einer cremigen Basilikum-Pesto-Sauce, garniert mit gerösteten Pinienkernen und Parmesan.",
        price: 8.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/gnocchi_pesto.jpg"
      },
      {
        id: 24,
        name: "Chili con Carne",
        category: "Eintopf",
        description: "Ein herzhafter Eintopf aus Rindfleisch, Bohnen, Mais und Tomaten mit einer würzigen Chili-Sauce, serviert mit Reis.",
        price: 10.00,
        spicyLevel: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/chili_con_carne.jpg"
      },
      {
        id: 25,
        name: "Fish & Chips",
        category: "Fisch",
        description: "Knusprig gebratener Kabeljau in Bierteig, serviert mit dicken Pommes und einer hausgemachten Remoulade.",
        price: 11.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/fish_and_chips.jpg"
      },
      {
        id: 26,
        name: "Griechischer Salat",
        category: "Salat",
        description: "Frischer Salat mit Tomaten, Gurken, Paprika, roten Zwiebeln, Kalamata-Oliven und Feta, abgerundet mit einem Olivenöl-Dressing.",
        price: 6.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.3,
        imageUrl: "/images/griechischer_salat.jpg"
      },
      {
        id: 27,
        name: "Margherita Pizza",
        category: "Pizza",
        description: "Eine klassische Margherita-Pizza mit hausgemachter Tomatensauce, frischem Basilikum und geschmolzenem Mozzarella.",
        price: 8.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/margherita_pizza.jpg"
      },
      {
        id: 28,
        name: "BBQ Bacon Burger",
        category: "Burger",
        description: "Saftiger Rindfleischburger mit knusprigem Bacon, Barbecue-Sauce, Salat und Tomaten, serviert mit knusprigen Pommes.",
        price: 11.00,
        spicyLevel: 1,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/bbq_bacon_burger.jpg"
      },
      {
        id: 29,
        name: "Tomaten-Mozzarella Bruschetta",
        category: "Vorspeise",
        description: "Knusprige Brotscheiben, belegt mit frischen Tomaten, Mozzarella und Basilikum, verfeinert mit Balsamico-Reduktion.",
        price: 5.00,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.4,
        imageUrl: "/images/bruschetta.jpg"
      },
      {
        id: 30,
        name: "Spaghetti Bolognese",
        category: "Pasta",
        description: "Hausgemachte Spaghetti mit einer herzhaften Bolognese-Sauce aus Rindfleisch, Tomaten und Kräutern.",
        price: 9.00,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/spaghetti_bolognese.jpg"
      },
      {
        id: 31,
        name: "Caesar Salad",
        category: "Salat",
        description: "Klassischer Caesar Salad mit Römersalat, knusprigen Croutons, Parmesanspänen und einem cremigen Caesar-Dressing.",
        price: 7.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/caesar_salad.jpg"
      },
      {
        id: 32,
        name: "Hähnchen Caesar Wrap",
        category: "Wrap",
        description: "Ein köstlicher Wrap gefüllt mit Hähnchenbrust, frischem Römersalat, Parmesan und einem cremigen Caesar-Dressing.",
        price: 6.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.4,
        imageUrl: "/images/chicken_caesar_wrap.jpg"
      },
      {
        id: 33,
        name: "Peking Ente",
        category: "Asiatisch",
        description: "Knusprig gebratene Ente, serviert mit gedämpften Pfannkuchen, Frühlingszwiebeln, Gurken und einer hoisin Sauce.",
        price: 17.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.9,
        imageUrl: "/images/peking_ente.jpg"
      },
      {
        id: 34,
        name: "Gebratene Garnelen",
        category: "Meeresfrüchte",
        description: "Saftige Garnelen, gebraten mit Knoblauch, Olivenöl und Chili, serviert mit frischem Brot.",
        price: 12.50,
        spicyLevel: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/gebratene_garnelen.jpg"
      },
      {
        id: 35,
        name: "Tacos al Pastor",
        category: "Mexikanisch",
        description: "Würzige Tacos gefüllt mit mariniertem Schweinefleisch, Ananas, Zwiebeln und Koriander, serviert mit Salsa.",
        price: 9.50,
        spicyLevel: 3,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/tacos_al_pastor.jpg"
      },
      {
        id: 36,
        name: "Pho Bo",
        category: "Suppe",
        description: "Vietnamesische Rindfleischsuppe mit Reisnudeln, duftenden Kräutern, Limette und Chili, serviert mit einer aromatischen Brühe.",
        price: 8.50,
        spicyLevel: 1,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.9,
        imageUrl: "/images/pho_bo.jpg"
      },
      {
        id: 37,
        name: "Ziegenkäse-Salat",
        category: "Salat",
        description: "Frischer Salat mit gegrilltem Ziegenkäse, Walnüssen, Rucola und einer Honig-Senf-Vinaigrette.",
        price: 7.00,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/ziegenkaese_salat.jpg"
      },
      {
        id: 38,
        name: "Vegetarisches Moussaka",
        category: "Griechisch",
        description: "Ein herzhafter vegetarischer Auflauf mit Auberginen, Zucchini, Kartoffeln und einer cremigen Béchamel-Sauce.",
        price: 9.00,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/vegetarisches_moussaka.jpg"
      },
      {
        id: 39,
        name: "Sashimi Platte",
        category: "Sushi",
        description: "Eine Auswahl an frischen, rohen Fischscheiben, darunter Lachs, Thunfisch und Gelbschwanzmakrele, serviert mit Sojasauce.",
        price: 18.00,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/sashimi_platte.jpg"
      },
      {
        id: 40,
        name: "Frittierte Calamari",
        category: "Meeresfrüchte",
        description: "Knusprig frittierte Calamari, serviert mit einer würzigen Aioli und frischer Zitrone.",
        price: 10.00,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/frittierte_calamari.jpg"
      },
      {
        id: 41,
        name: "Auberginen Parmigiana",
        category: "Italienisch",
        description: "Geschichtete Auberginen, Tomatensauce und Mozzarella, überbacken und serviert mit frischem Basilikum.",
        price: 9.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/auberginen_parmigiana.jpg"
      },
      {
        id: 42,
        name: "Hühnerspieße Satay",
        category: "Asiatisch",
        description: "Gegrillte Hühnerspieße, serviert mit einer würzigen Erdnuss-Sauce und frischem Gurkensalat.",
        price: 7.50,
        spicyLevel: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/huehnerspieße_satay.jpg"
      },
      {
        id: 43,
        name: "Pad Thai",
        category: "Asiatisch",
        description: "Gebratene Reisnudeln mit Hühnerfleisch, Tofu, Ei, Erdnüssen und frischen Kräutern, abgeschmeckt mit Tamarinde und Limette.",
        price: 9.00,
        spicyLevel: 1,
        vegetarian: true,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/pad_thai.jpg"
      },
      {
        id: 44,
        name: "Gratin Dauphinois",
        category: "Französisch",
        description: "Klassisches Kartoffelgratin mit Knoblauch, Sahne und Käse, überbacken bis zur goldenen Perfektion.",
        price: 6.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.5,
        imageUrl: "/images/gratin_dauphinois.jpg"
      },
      {
        id: 45,
        name: "Falafel Wrap",
        category: "Wrap",
        description: "Ein leckerer Wrap gefüllt mit knusprigen Falafeln, Hummus, Salat und einer Tahini-Sauce.",
        price: 6.00,
        spicyLevel: 0,
        vegetarian: true,
        vegan: true,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.4,
        imageUrl: "/images/falafel_wrap.jpg"
      },
      {
        id: 46,
        name: "Tom Kha Gai",
        category: "Suppe",
        description: "Thailändische Kokosmilchsuppe mit Huhn, Zitronengras, Galgant und Limettenblättern, abgeschmeckt mit Chili und Koriander.",
        price: 8.00,
        spicyLevel: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.8,
        imageUrl: "/images/tom_kha_gai.jpg"
      },
      {
        id: 47,
        name: "Ratatouille",
        category: "Französisch",
        description: "Ein traditioneller Gemüseeintopf mit Auberginen, Zucchini, Paprika und Tomaten, abgeschmeckt mit mediterranen Kräutern.",
        price: 7.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.7,
        imageUrl: "/images/ratatouille.jpg"
      },
      {
        id: 48,
        name: "Kichererbsen-Curry",
        category: "Vegetarisch",
        description: "Würziges Kichererbsen-Curry mit Kokosmilch, Tomaten und einer Mischung aus exotischen Gewürzen, serviert mit Reis.",
        price: 8.00,
        spicyLevel: 2,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.6,
        imageUrl: "/images/kichererbsen_curry.jpg"
      },
      {
        id: 49,
        name: "Lachsfilet mit Dill-Sauce",
        category: "Fisch",
        description: "Gegrilltes Lachsfilet, serviert mit einer cremigen Dill-Sauce, dazu Salzkartoffeln und frisches Gemüse.",
        price: 14.50,
        spicyLevel: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        inStock: true,
        cartCount: 0,
        rating: 4.9,
        imageUrl: "/images/lachsfilet_dill_sauce.jpg"
      },
      {
        id: 50,
        name: "Schokoladenfondant",
        category: "Dessert",
        description: "Ein reichhaltiges Schokoladendessert mit flüssigem Kern, serviert mit Vanilleeis.",
        price: 5.50,
        spicyLevel: 0,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        inStock: true,
        cartCount: 0,
        rating: 4.9,
        imageUrl: "/images/schokoladenfondant.jpg"
      }      
    ],
    cart: {
      items: [],
      totalPrice: 0.00
    },
    orderStatus: {
      pending: true,
      orderNumber: null,
      deliveryEstimate: null,
      orderDetails: []
    },
    categoryImages: {
    "Pizza": "./assets/img/pizza.jpg",
    "Salat": "./assets/img/salat.jpg",
    "Bowl": "./assets/img/bowl.jpeg",
    "Pasta": "./assets/img/pasta.jpeg",
    "Curry": "./assets/img/curry.jpeg",
    "Wrap": "./assets/img/wrap.jpeg",
    "Sushi": "./assets/img/sushi.jpeg",
    "Suppe": "./assets/img/suppe.jpeg",
    "Fisch": "./assets/img/fisch.jpeg",
    "Nudelgericht": "./assets/img/nudelgerichte_pic.jpeg",
    "Burger": "./assets/img/burger.jpeg",
    "Asiatisch": "./assets/img/asiatisch.jpeg",
    "Grill": "./assets/img/grill.jpeg",
    "Eintopf": "./assets/img/eintopf.jpeg",
    "Vorspeise": "./assets/img/vorspeise.jpeg",
    "Meeresfrüchte": "./assets/img/meeresfrüchte.jpeg",
    "Mexikanisch": "./assets/img/mexikanisch.jpeg",
    "Griechisch": "./assets/img/griechisch.jpeg",
    "Italienisch": "./assets/img/italienisch.jpeg",
    "Französisch": "./assets/img/französisch.jpeg",
    "Vegetarisch": "./assets/img/vegetarisch.jpeg",
    "Dessert": "./assets/img/dessert.jpeg",
  }
  };