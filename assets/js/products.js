/* THE COLOUR ALCHEMY — PRODUCT CATALOGUE | Powered by Saheed Sons */

"use strict";

const PRODUCTS = [

  {"id":1,"brand":"Dulux","name":"Pentalite Hygiene Plus","category":"Interior Paint","subcategory":"Interior Wall Paint","description":"Dulux Pentalite is a premium quality acrylic paint for use on all interior walls where a subtle, durable, elegant mid sheen finish is required. New Dulux Pentalite Hygiene + comes with Anti Mold technology to helps keep your home healthy. It does this by preventing the growth of mold and fungi on your interior walls. The improved Pro Cover + technology gives a higher opacity and coverage too. The Colour Guard technology used in Dulux Pentalite Interior Emulsion paints helps keep your interior walls looking fresh for long effectively reducing your painting cycle.","image":"assets/img/products/dulux/pentalite-hygiene-plus.png","sizes":["1L","4L","10L","20L"],"finish":"Smooth","coverage":"Up to 11–12 m²/L","dryingTime":"","coats":"2 Coats","features":["Pro Cover+ Hygiene","Anti Mold Technology","Colour Guard Technology","Interior Use"],"featured":true,"availability":"Contact us for current price, shade and availability","fallbackImage":""},

  {"id":2,"brand":"Dulux","name":"EasyCare","category":"Interior Paint","subcategory":"Washable Interior Paint","description":"Dulux EasyCare is a premium quality matt paint that enables cleaning common household stains off your wall easily without worrying about damaging the paint. Formulated with Tough Mineral Technology, its tough resilient surface is washable. The Colourguard Technology locks in colours that prolong the aesthetic features of the wall.","image":"assets/img/products/dulux/easycare.png","sizes":["1L","4L","10L"],"finish":"Low Sheen","coverage":"13 m²/liter","dryingTime":"1 to 2 hours","coats":"2 Coats","features":["High Coverage","High Colour Durability","Comfortable Application","Water Based","Low Odour","Washable"],"featured":true,"availability":"Contact us for current price, shade and availability","fallbackImage":""},

  {"id":3,"brand":"Dulux","name":"Light & Space","category":"Interior Paint","subcategory":"Interior Emulsion","description":"Dulux Light & Space interior emulsion paint is a premium quality acrylic emulsion. The paint uses the revolutionary Lumitec technology which can reflect more light compared to conventional emulsions. This pioneering colour range can help create a brighter and more spacious visual appearance with a stylish velvet finish.","image":"assets/img/products/dulux/light-and-space.png","sizes":["1L","5L","20L"],"finish":"Matt","coverage":"15 m²/liter","dryingTime":"4 to 6 hours","coats":"2 Coats","features":["High Coverage","Lumitec Technology","High Colour Durability","Comfortable Application","Water Based","Low Odour"],"featured":false,"availability":"Contact us for current price, shade and availability","fallbackImage":""},

  {"id":4,"brand":"Dulux","name":"SuperKote Interior","category":"Interior Paint","subcategory":"Interior Emulsion","description":"Dulux SuperKote Interior with ChromaBrite Technology is an interior emulsion designed to provide bright colours, a smooth wall finish and practical everyday performance. It offers good coverage, easy application and low odour for living rooms, bedrooms, dining areas and other suitable interior spaces.","image":"assets/img/products/dulux/superkote-interior.png","sizes":["1L","4L","10L","20L"],"finish":"Smooth Finish","coverage":"Up to 225 sq ft","dryingTime":"1 to 4 hours recoat drying time","coats":"2 Coats","features":["ChromaBrite Technology","Washable","Good Coverage","Interior Use"],"featured":false,"availability":"Contact us for current price, shade and availability","fallbackImage":""},

  {"id":5,"brand":"Dulux","name":"SuperKote SmartChoice Interior","category":"Interior Paint","subcategory":"Interior Emulsion","description":"Dulux SuperKote SmartChoice Interior Emulsion is a water-based interior paint with a smooth low-sheen appearance. It provides practical coverage and is suitable for common interior spaces including living rooms, bedrooms and dining areas where a neat decorative finish is required.","image":"assets/img/products/dulux/superkote-smartchoice-interior.png","sizes":["1L","4L","10L","20L"],"finish":"Smooth Sheen","coverage":"80 to 100 square feet per liter","dryingTime":"3 to 4 hours","coats":"2 Coats","features":["Low VOC","Low Sheen Finish","Water Based","Good Coverage","Interior Use"],"featured":false,"availability":"Contact us for current price, shade and availability","fallbackImage":""},

  {"id":6,"brand":"Dulux","name":"Weathershield Extra","category":"Exterior Paint","subcategory":"Exterior Wall Paint","description":"Dulux Weathershield Extra is an exterior acrylic emulsion for suitable masonry and rendered surfaces. Its smooth formulation is designed for exterior protection while helping discourage dirt retention, fungal growth and algae on properly prepared surfaces.","image":"assets/img/products/dulux/weathershield-extra.png","sizes":["1L","4L","10L","20L"],"finish":"Low Sheen","coverage":"Up to 110 sq ft","dryingTime":"Touch dry: 1–2 hours / Recoat dry: 4 hours / Full cure: 8 hours","coats":"2 Coats","features":["Weatherproof","Resists Alkali Attacks","Exterior Masonry","All Acrylic Resin"],"featured":true,"availability":"Contact us for current price, shade and availability","fallbackImage":""},

  {"id":7,"brand":"Dulux","name":"Weathershield Powerflexx","category":"Exterior Paint","subcategory":"Premium Exterior Paint","description":"Dulux Weathershield Powerflexx is an advanced exterior emulsion developed for walls exposed to rain and humid conditions. Its flexible coating is designed to help bridge hairline cracks and reduce water ingress, while its exterior formulation provides protection against common algae and fungal growth.","image":"assets/img/products/dulux/weathershield-powerflexx.png","sizes":["1L","4L","10L","20L"],"finish":"Mid Sheen","coverage":"Up to 110 square feet per liter","dryingTime":"4 to 6 hours","coats":"2 Coats","features":["Weatherproof","Flexible Paint Film","Water Resistance Technology","UV Cross Linking Technology","Algae & Fungus Protection"],"featured":true,"availability":"Contact us for current price, shade and availability","fallbackImage":""},

  {"id":8,"brand":"Dulux","name":"AquaTech Flexible Waterproof Basecoat","category":"Waterproofing","subcategory":"Exterior Waterproof Basecoat","description":"Dulux AquaTech Flexible Waterproof Basecoat is an exterior waterproofing basecoat designed to provide an additional barrier against water damage. Its flexible formulation helps bridge small cracks and is intended for use as part of a compatible exterior coating system.","image":"assets/img/products/dulux/aquatech-flexible-waterproof-basecoat.png","sizes":["1L","4L","10L","20L"],"finish":"NA","coverage":"55 sqft/ltr","dryingTime":"4 to 6 hours","coats":"2 Coats","features":["Resists Alkali Attacks","Water Repellant","Algal Guard","Algal and Fungal Resistance","Hydroshield Technology","Crack Bridging"],"featured":false,"availability":"Contact us for current price and availability","fallbackImage":""},

  {"id":9,"brand":"Dulux","name":"WoodCare Diamond Tough Exterior Deck & Furniture Protector","category":"Wood Care","subcategory":"Exterior Deck & Furniture Protection","description":"Dulux WoodCare Diamond Tough Exterior Deck & Furniture Protector is designed for timber decks, outdoor furniture and other suitable exterior wood surfaces. Its water-based protective film helps improve resistance to weather exposure, abrasion and common fungal or algae growth while maintaining the appearance of the timber.","image":"assets/img/products/dulux/woodcare-diamond-tough.png","sizes":["0.5L","1L","4L"],"finish":"Semi Gloss","coverage":"Up to 240 sq.ft","dryingTime":"30 minutes per coat","coats":"3 Coats","features":["Protection From UV Rays","Water Based","Exterior Deck Protection","Furniture Protection","Abrasion Resistance"],"featured":false,"availability":"Contact us for current price and availability","fallbackImage":""},

  {"id":10,"brand":"Dulux","name":"SuperKote Wall Filler","category":"Wall Preparation","subcategory":"Interior Wall Filler","description":"Dulux SuperKote Wall Filler is designed for preparing interior walls and ceilings before decorative paint is applied. It helps reduce minor surface imperfections and provides a smooth, sandable base that improves the overall appearance of the finishing coat.","image":"assets/img/products/dulux/superkote-wall-filler.png","sizes":["1L","4L","10L","20L"],"finish":"Matt","coverage":"","dryingTime":"Full cure: approximately 16 hours","coats":"1 Coat","features":["High Coverage","Helps Hide Surface Imperfections","Easy Sanding","Smooth Base for Topcoat","Interior Walls & Ceilings","Brush or Roller Application"],"featured":false,"availability":"Contact us for current size and availability","fallbackImage":""},

  {"id":11,"brand":"Dulux","name":"AquaTech Fungicidal Wash","category":"Cleaner","subcategory":"Fungicidal Surface Treatment","description":"Dulux AquaTech Fungicidal Wash is a surface treatment used before painting on areas affected by fungal or algae growth. It helps prepare suitable wall surfaces so compatible coatings can be applied to a cleaner and properly treated substrate.","image":"assets/img/products/dulux/aquatech-fungicidal-wash.png","sizes":["1L","4L"],"finish":"NA","coverage":"Up to 50 sq.ft per litre","dryingTime":"12 hours","coats":"","features":["Low Odour","Stain Resistant","Bio-Degradable","Fungi Treatment","Algae Treatment","Surface Preparation"],"featured":false,"availability":"Contact us for current price and availability","fallbackImage":""},

  {"id":12,"brand":"Dulux","name":"Gloss Plus","category":"Enamel Paint","subcategory":"High Gloss Paint","description":"Dulux Gloss Plus is a decorative and protective gloss coating for suitable interior and exterior surfaces. It provides a smooth high-gloss appearance and can be applied using a brush or roller on appropriately prepared substrates.","image":"assets/img/products/dulux/gloss-plus.png","sizes":["0.2L","0.5L","1L","4L","5L"],"finish":"High Gloss","coverage":"Up to 180 sq.ft","dryingTime":"Touch dry: 4 to 6 hours / Recoat dry: 16 to 24 hours / Full cure: 24 hours","coats":"2 Coats","features":["Perfect Gloss","High Gloss Finish","Durable Finish","Interior & Exterior Use","Brush or Roller Application"],"featured":false,"availability":"Contact us for current price, colour and availability","fallbackImage":""},

  {"id":13,"brand":"Dulux","name":"Crack Bridging Wall Primer","category":"Primer & Sealer","subcategory":"Crack Bridging Wall Primer","description":"Dulux Crack Bridging Wall Primer is a waterborne primer for suitable interior and exterior walls where minor hairline cracking may occur. Its flexible, alkali-resistant coating helps prepare the surface and bridge small cracks before compatible finishing coats are applied.","image":"assets/img/products/dulux/crack-bridging-wall-primer.png","sizes":["1L","4L","10L","20L"],"finish":"Matt","coverage":"Up to 70 sq.ft","dryingTime":"Full cure: 16 hours","coats":"1 Coat","features":["Covers Hairline Cracks","Resists Alkali Attacks","Covers Imperfections","Flexible Paint Film","Fungal & Algae Resistance","Interior & Exterior Use"],"featured":false,"availability":"Contact us for current price and availability","fallbackImage":""},

  {"id":14,"brand":"Dulux","name":"SuperKote SmartChoice Exterior","category":"Exterior Paint","subcategory":"Exterior Emulsion","description":"Dulux SuperKote SmartChoice Exterior is a water-based exterior emulsion developed for everyday protection and decoration of masonry walls. It can be used on suitable new or previously painted exterior surfaces and provides practical coverage with a smooth decorative finish.","image":"assets/img/products/dulux/superkote-smartchoice-exterior.png","sizes":["1L","4L","10L","20L"],"finish":"Smooth Finish","coverage":"80–100 sq.ft per litre for 2 coats","dryingTime":"","coats":"2 Coats","features":["Water Based","Good Coverage","Good Opacity","Smooth Finish","Low Odour","Low VOC","Exterior Masonry Use","Brush or Roller Application"],"featured":false,"availability":"Contact us for current price and availability","fallbackImage":""},

  {"id":15,"brand":"Dulux","name":"SuperKote Exterior","category":"Exterior Paint","subcategory":"Exterior Emulsion","description":"Dulux SuperKote Exterior is an exterior wall emulsion designed for decorating and protecting suitable masonry surfaces. It provides practical coverage with a smooth exterior finish and is suitable for properly prepared walls around homes and other buildings.","image":"assets/img/products/dulux/superkote-exterior.png","sizes":["1L","4L","10L","20L"],"finish":"Exterior Emulsion","coverage":"Up to 110 sq.ft per litre","dryingTime":"Recoat after approximately 4 hours","coats":"2 Coats","features":["Exterior Wall Paint","Good Coverage","Smooth Finish","Suitable for Masonry","2 Coat Application"],"featured":false,"availability":"Contact us for current price, shade and availability","fallbackImage":""},


  /* =======================================================
     JAT
     ======================================================= */

  {"id":16,"brand":"JAT","name":"WHITE by JAT Interior Emulsion","category":"Interior Paint","subcategory":"Brilliant White Emulsion","description":"Premium brilliant-white interior emulsion for walls and ceilings with strong opacity and a low-sheen finish.","image":"","sizes":["1L","4L","10L","20L"],"featured":true,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":17,"brand":"JAT","name":"WHITE by JAT Exterior Weather Coat","category":"Exterior Paint","subcategory":"Brilliant White Weather Coat","description":"Exterior brilliant-white weather coat for masonry, designed for a smooth low-sheen finish and weather protection.","image":"","sizes":["1L","4L","10L","20L"],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":18,"brand":"JAT","name":"WHITE by JAT Acrylic Interior Wall Filler","category":"Wall Preparation","subcategory":"Interior Wall Filler","description":"Acrylic interior wall filler for preparing walls and ceilings by filling minor surface imperfections before painting.","image":"","sizes":["1L","4L","10L","20L"],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":19,"brand":"JAT","name":"WHITE by JAT Acrylic Exterior Wall Sealer","category":"Primer & Sealer","subcategory":"Exterior Wall Sealer","description":"Water-based acrylic exterior sealer used as an undercoat on fully dry masonry before exterior emulsion.","image":"","sizes":["1L","4L","10L","20L"],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":20,"brand":"JAT","name":"WALLZ Interior Emulsion","category":"Interior Paint","subcategory":"Brilliant White Emulsion","description":"Interior emulsion designed for practical coverage, smooth application and a clean brilliant-white finish.","image":"","sizes":["1L","4L","10L","20L"],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":21,"brand":"JAT","name":"WALLZ Exterior Weather Coat","category":"Exterior Paint","subcategory":"Exterior Weather Coat","description":"Exterior coating designed for reliable coverage and day-to-day protection on masonry surfaces.","image":"","sizes":["1L","4L","10L","20L"],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":22,"brand":"JAT","name":"WALLZ Interior Wall Filler","category":"Wall Preparation","subcategory":"Interior Wall Filler","description":"Interior wall filler for surface smoothing and improved paint preparation before topcoat application.","image":"","sizes":["1L","4L","10L","20L"],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":23,"brand":"JAT","name":"Kolorz Interior Emulsion","category":"Interior Paint","subcategory":"Low-Sheen Emulsion","description":"Premium interior emulsion with a refined low-sheen appearance and a broad colour palette.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":24,"brand":"JAT","name":"Kolorz Exterior Emulsion","category":"Exterior Paint","subcategory":"Exterior Emulsion","description":"Colour-focused exterior emulsion from the Kolorz range for decorative exterior wall finishes.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":25,"brand":"JAT","name":"Hydro+ Exterior Waterproofing Paint","category":"Waterproofing","subcategory":"Exterior Waterproofing Paint","description":"High-performance acrylic exterior waterproofing paint designed for tropical exposure and hairline crack bridging.","image":"","sizes":[],"featured":true,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":26,"brand":"JAT","name":"Brush Master Paint Brush","category":"Paint Tools","subcategory":"Wood-Coating Brush","description":"Synthetic-filament brush range designed for water-based wood finishes with controlled paint pickup and release.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},


  /* =======================================================
     ROBBIALAC — ONLY CURRENT PRODUCTS
     ======================================================= */

/* =======================================================
   ROBBIALAC
   ======================================================= */

{
  "id": 27,
  "brand": "Robbialac",
  "name": "7-1 Weather Seal",
  "category": "Interior & Exterior Paint",
  "subcategory": "Premium Interior & Exterior Emulsion",
  "description": "Robbialac 7-1 Weather Seal is a premium emulsion designed for both interior and exterior use. Its protective formulation is intended to provide a durable decorative finish while helping resist dirt, stains, water exposure, algae and fungal growth. It is also designed to help cover minor hairline cracks and is suitable for use on a range of properly prepared surfaces.",
  "image": "assets/img/products/robbialac/robbialac-weather-seal.png",
  "sizes": [
    "1L",
    "4L",
    "10L",
    "20L"
  ],
  "finish": "",
  "coverage": "",
  "dryingTime": "",
  "coats": "",
  "features": [
    "Premium Interior & Exterior Emulsion",
    "Dual Application",
    "Nano Coating Technology",
    "Dirt & Stain Resistant",
    "Helps Cover Hairline Cracks",
    "Waterproofing Protection",
    "Multi-Surface Use",
    "Algae & Fungal Resistant"
  ],
  "featured": true,
  "availability": "Contact us for current price, shade and availability.",
  "fallbackImage": ""
},

{
  "id": 28,
  "brand": "Robbialac",
  "name": "Premium Brilliant White Interior Emulsion",
  "category": "Interior Paint",
  "subcategory": "Premium Interior Emulsion",
  "description": "A premium white interior emulsion developed for walls and ceilings where a clean, bright and smooth matt appearance is required. It is suited to properly prepared interior surfaces in homes, offices and other indoor spaces.",
  "image": "assets/img/products/robbialac/robbialac-premium-brilliant-white.png",
  "sizes": [
    "1L",
    "4L",
    "10L",
    "20L"
  ],
  "featured": true,
  "availability": "Contact us for current price and availability.",
  "fallbackImage": ""
},

{
  "id": 29,
  "brand": "Robbialac",
  "name": "Wall Master Exterior Emulsion",
  "category": "Exterior Paint",
  "subcategory": "Value Range Exterior Emulsion",
  "description": "Robbialac Wall Master Exterior Emulsion is an economical exterior wall coating for prepared masonry and rendered surfaces. It provides a matt decorative finish with practical coverage and everyday protection for exterior walls.",
  "image": "assets/img/products/robbialac/robbialac-wallmaster-exterior-emulsion.png",
  "sizes": [
    "1L",
    "4L",
    "10L",
    "20L"
  ],
  "featured": false,
  "availability": "Contact us for current price, shade and availability.",
  "fallbackImage": ""
},

{
  "id": 30,
  "brand": "Robbialac",
  "name": "Wall Master Interior Emulsion",
  "category": "Interior Paint",
  "subcategory": "Value Range Interior Emulsion",
  "description": "Robbialac Wall Master Interior Emulsion is a practical interior wall paint for suitably prepared walls and ceilings. It is intended for everyday residential and commercial painting where a clean and uniform decorative finish is required.",
  "image": "assets/img/products/robbialac/robbialac-wallmaster-interior-emulsion.png",
  "sizes": [
    "1L",
    "4L",
    "10L"
  ],
  "featured": false,
  "availability": "Contact us for current price, shade and availability.",
  "fallbackImage": ""
},

{
  "id": 31,
  "brand": "Robbialac",
  "name": "Wall Master Wall Filler",
  "category": "Wall Preparation",
  "subcategory": "Wall Filler",
  "description": "Robbialac Wall Master Wall Filler is used during surface preparation to reduce small holes, shallow cracks and minor uneven areas before painting. It helps create a smoother base so compatible primers and finishing coats can be applied more evenly.",
  "image": "assets/img/products/robbialac/robbialac-wallmaster-wall-filler.png",
  "sizes": [
    "1L",
    "4L",
    "10L",
    "20L"
  ],
  "featured": false,
  "availability": "Contact us for current price and availability.",
  "fallbackImage": ""
},

{
  "id": 32,
  "brand": "Robbialac",
  "name": "EpiFix Composite Pack",
  "category": "Adhesive",
  "subcategory": "Two-Part Adhesive",
  "description": "EpiFix Composite Pack is a two-component bonding product consisting of resin and hardener. It is intended for strong repair and bonding work on suitable materials such as wood, metal and rubber when the surfaces are correctly prepared.",
  "image": "assets/img/products/robbialac/robbialac-epifix-composite.png",
  "sizes": [
    "230g",
    "500g",
    "1kg"
  ],
  "featured": false,
  "availability": "Contact us for current price and availability.",
  "fallbackImage": ""
},

{
  "id": 33,
  "brand": "Robbialac",
  "name": "Kemikote Epoxy Floor Paint",
  "category": "Floor Paint",
  "subcategory": "Epoxy Floor Coating",
  "description": "Kemikote Epoxy Floor Paint is a two-component coating for properly prepared indoor floor surfaces. It is suited to areas where a hard, glossy and durable finish is required, including selected concrete, cement, stone and metal surfaces.",
  "image": "assets/img/products/robbialac/robbialac-kemikote-epoxy-floor-paint.png",
  "sizes": [
    "1kg"
  ],
  "featured": false,
  "availability": "Contact us for current price, colour and availability.",
  "fallbackImage": ""
},

{
  "id": 34,
  "brand": "Robbialac",
  "name": "Premium Weathercoat Brilliant White",
  "category": "Exterior Paint",
  "subcategory": "Premium Exterior Emulsion",
  "description": "Robbialac Premium Weathercoat Brilliant White is an exterior white emulsion for properly prepared masonry and rendered walls. It is designed for customers who want a bright, clean exterior appearance together with a smooth matt decorative finish.",
  "image": "assets/img/products/robbialac/robbialac-premium-weathercoat-brilliant-white.png",
  "sizes": [
    "1L",
    "4L",
    "10L",
    "20L"
  ],
  "featured": true,
  "availability": "Contact us for current price and availability.",
  "fallbackImage": ""
},

{
  "id": 35,
  "brand": "Robbialac",
  "name": "Wood Preservative Clear",
  "category": "Wood Care",
  "subcategory": "Wood Preservative",
  "description": "Robbialac Wood Preservative Clear is a transparent treatment for suitable timber surfaces. It is used as part of wood preparation and maintenance to help protect timber from common biological deterioration while allowing the natural appearance of the wood to remain visible.",
  "image": "assets/img/products/robbialac/robbialac-wood-preservative-clear.png",
  "sizes": [
    "1L",
    "2L",
    "4L",
    "10L"
  ],
  "featured": false,
  "availability": "Contact us for current size and availability.",
  "fallbackImage": ""
},


  /* =======================================================
     CAUSEWAY
     IDs 34–41 are intentionally unused.
     ======================================================= */

  {"id":42,"brand":"Causeway","name":"Royale Shyne","category":"Interior Paint","subcategory":"Premium Interior Emulsion","description":"Premium interior emulsion positioned for a smooth sheen, stain resistance and a refined decorative finish.","image":"","sizes":[],"featured":true,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":43,"brand":"Causeway","name":"Royale Smart Clean","category":"Interior Paint","subcategory":"Washable Interior Emulsion","description":"Interior wall paint designed around water-beading, stain resistance and durable colour performance.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":44,"brand":"Causeway","name":"Classique Apcolite Interior Emulsion","category":"Interior Paint","subcategory":"Interior Emulsion","description":"Interior emulsion designed for excellent hiding, good coverage and easy touch-up on prepared walls.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":45,"brand":"Causeway","name":"Apex Ultima","category":"Exterior Paint","subcategory":"Premium Exterior Emulsion","description":"Premium exterior emulsion developed for sun, dirt and algae resistance in Sri Lankan conditions.","image":"","sizes":[],"featured":true,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":46,"brand":"Causeway","name":"Apex Shield","category":"Exterior Paint","subcategory":"Exterior Emulsion","description":"Advanced acrylic exterior emulsion developed for longer colour stay and resistance to UV, dirt and algae.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":47,"brand":"Causeway","name":"Kenlux Premium Gloss Enamel","category":"Enamel Paint","subcategory":"Gloss Enamel","description":"Gloss enamel for interior and exterior surfaces, offering a shiny, washable decorative finish.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":48,"brand":"Causeway","name":"Kenlux Egg Shell Paint","category":"Enamel Paint","subcategory":"Eggshell Finish","description":"Oil-based washable eggshell paint suitable for wood, walls, steel gates and selected metal surfaces.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":49,"brand":"Causeway","name":"Kenlux Quick Drying Floor Paint","category":"Floor Paint","subcategory":"Floor Coating","description":"Quick-drying floor paint for suitable cement, concrete, stone, brick, wood and tiled floors.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":50,"brand":"Causeway","name":"Kenlux Anticorrosive Paint","category":"Metal Protection","subcategory":"Anti-Corrosive Paint","description":"Alkyd-based anti-corrosive coating with good adhesion and a glossy finish for suitable metal surfaces.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":51,"brand":"Causeway","name":"Kenlux Hammer Finish","category":"Metal Protection","subcategory":"Hammer Finish","description":"Quick-drying decorative metal coating with a hammer-effect finish and resistance to scratches and abrasion.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":52,"brand":"Causeway","name":"Kenlux Epoxy Floor Paint","category":"Floor Paint","subcategory":"Two-Pack Floor Coating","description":"Durable two-pack epoxy floor paint for suitable cement, concrete, tiled and light-duty commercial floors.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":53,"brand":"Causeway","name":"SmartCare Crack Seal","category":"Waterproofing","subcategory":"Crack Filler","description":"Flexible crack-filling compound designed to help stop water ingress through small wall cracks.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":54,"brand":"Causeway","name":"SmartCare Damp Seal Exterior","category":"Waterproofing","subcategory":"Waterproofing Undercoat","description":"Waterproofing undercoat designed for vertical walls with crack-bridging and water-ingress protection.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":55,"brand":"Causeway","name":"APC Damp Block 2K","category":"Waterproofing","subcategory":"Two-Part Waterproofing","description":"Two-component waterproofing coating for wet areas, tanks and other prepared cementitious surfaces.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},

  {"id":56,"brand":"Causeway","name":"Damp Proof Fibre Tech","category":"Waterproofing","subcategory":"Terrace Waterproofing","description":"Glass-fibre-reinforced elastomeric waterproofing membrane for terraces and vertical surfaces.","image":"","sizes":[],"featured":false,"availability":"Contact us for current price, shade and availability.","fallbackImage":""},


  /* =======================================================
     SAHEED SONS
     ======================================================= */

  {"id":57,"brand":"Saheed Sons","name":"Handmade Sinks","category":"Sinks & Taps","subcategory":"Kitchen & Bathroom Sinks","description":"Handmade sink options for kitchen, pantry and bathroom requirements. Visit or contact us for available designs and sizes.","image":"","sizes":[],"featured":false,"availability":"Contact us for current designs, sizes and availability.","fallbackImage":""},

  {"id":58,"brand":"Saheed Sons","name":"Stainless-Steel Taps","category":"Sinks & Taps","subcategory":"Kitchen & Bathroom Taps","description":"Stainless-steel tap options for kitchen and bathroom fittings. Contact us for current styles and availability.","image":"","sizes":[],"featured":false,"availability":"Contact us for current designs, sizes and availability.","fallbackImage":""},


  /* =======================================================
     ADDITIONAL DULUX
     ======================================================= */

  {"id":59,"brand":"Dulux","name":"Stellar Water Based Floor Paint","category":"Floor Paint","subcategory":"Water Based Floor Coating","description":"Dulux Stellar Water Based Floor Paint is an acrylic water-based coating designed for prepared floor and paving surfaces. It can be used on suitable interlock paving blocks, cement and concrete areas, walkways and terraces. The coating provides good adhesion, abrasion resistance and a surface that is easier to maintain, making it a practical decorative finish for indoor and outdoor floor areas.","image":"assets/img/products/dulux/stellar-water-based-floor-paint.png","sizes":["0.5L","1L","4L","10L","20L"],"finish":"Mid Sheen","coverage":"Approximately 50–60 sq.ft per litre","dryingTime":"Quick drying","coats":"3 Coats","features":["Water Based","High Adhesion","Abrasion Resistant","Algae & Fungal Resistance","Easy to Clean","Interior & Exterior Floor Use"],"featured":false,"availability":"Contact us for current colour, size and availability","fallbackImage":""},

  {"id":60,"brand":"Dulux","name":"QD Floor Paint","category":"Floor Paint","subcategory":"Quick Drying Floor Paint","description":"Dulux QD Floor Paint is a quick-drying floor coating intended for properly prepared dry cement, timber and steel floor surfaces. It provides a practical protective and decorative finish and is suited to projects where faster drying between applications is useful.","image":"assets/img/products/dulux/qd-floor-paint.png","sizes":["0.2L","0.5L","1L","4L"],"finish":"","coverage":"Approximately 9–10 m² per litre","dryingTime":"Quick drying","coats":"2 Coats","features":["Quick Drying","Cement Floor Use","Wood Floor Use","Steel Floor Use","Protective Floor Finish"],"featured":false,"availability":"Contact us for current colour, size and availability","fallbackImage":""},

  {"id":61,"brand":"Dulux","name":"Stellar High Gloss","category":"Enamel Paint","subcategory":"High Gloss Metal & Wood Paint","description":"Dulux Stellar High Gloss is a solvent-based decorative coating for suitably prepared interior and exterior metal and wooden surfaces. It produces a smooth high-gloss appearance and provides a durable protective finish for compatible substrates.","image":"assets/img/products/dulux/stellar-high-gloss.png","sizes":["0.2L","0.5L","1L","4L"],"finish":"High Gloss","coverage":"Up to 180 sq.ft per litre","dryingTime":"Touch dry: 4–6 hours / Recoat: 16–24 hours / Full cure: approximately 24 hours","coats":"2 Coats","features":["High Gloss Finish","Good Gloss Retention","Durable Finish","Colour Retention","Fungus Resistance","Interior & Exterior","Metal & Wood Surfaces"],"featured":false,"availability":"Contact us for current colour, size and availability","fallbackImage":""},

  {"id":62,"brand":"Dulux","name":"Weathershield Roof","category":"Exterior Paint","subcategory":"Roof Paint","description":"Dulux Weathershield Roof is an acrylic-based decorative coating developed for suitable roofing surfaces. It provides a smooth mid-sheen appearance and an exterior finish designed for properly prepared roofs.","image":"assets/img/products/dulux/weathershield-roof.png","sizes":["1L","4L","10L","20L"],"finish":"Mid Sheen","coverage":"","dryingTime":"","coats":"","features":["100% Acrylic Based","Smooth Finish","Mid Sheen","Exterior Roof Use","Brush Application","Roller Application"],"featured":false,"availability":"Contact us for current colour, size and availability","fallbackImage":""},

  {"id":63,"brand":"Dulux","name":"Stellar Zinc Phosphate QD Metal Primer","category":"Metal Protection","subcategory":"Zinc Phosphate Metal Primer","description":"Dulux Stellar Zinc Phosphate QD Metal Primer is a solvent-based anti-corrosive primer for properly prepared metalwork. It is suitable for a range of ferrous and non-ferrous metal surfaces and provides a strong base for compatible finishing coats.","image":"assets/img/products/dulux/stellar-zinc-phosphate-qd-metal-primer.png","sizes":["0.2L","0.5L","1L","4L"],"finish":"Matt","coverage":"Approximately 8–9 m² per litre at 40 micron DFT","dryingTime":"Quick drying","coats":"1–2 Coats","features":["Anti-Corrosive Primer","Excellent Adhesion","Quick Drying","Easy Sanding","Ferrous Metal","Non-Ferrous Metal","Interior & Exterior"],"featured":false,"availability":"Contact us for current size and availability","fallbackImage":""},

  {"id":64,"brand":"Dulux","name":"Eggshell Finish","category":"Enamel Paint","subcategory":"Mid Sheen Enamel","description":"Dulux Eggshell Finish is an oil-modified alkyd coating designed for suitably prepared interior surfaces. It provides a durable mid-sheen appearance and can be used on compatible wood, steel and selected wall areas. It is available in black and white.","image":"assets/img/products/dulux/eggshell-finish.png","sizes":["0.5L","1L","4L"],"finish":"Mid Sheen","coverage":"","dryingTime":"","coats":"","features":["Mid Sheen Finish","Tough Finish","Durable","Interior Use","Wood Surfaces","Steel Surfaces","Brush, Roller or Spray"],"featured":false,"availability":"Contact us for current colour and availability","fallbackImage":""},

  {"id":65,"brand":"Dulux","name":"Duco Polyurethane Varnish","category":"Wood Coating","subcategory":"Polyurethane Varnish","description":"Duco Polyurethane Varnish is a wood-finishing varnish intended for interior furniture and other properly prepared timber surfaces. Enhances the appearance of the timber while providing a rich glossy decorative finish.","image":"assets/img/products/dulux/duco-polyurethane-varnish.png","sizes":["0.5L","1L","4L"],"finish":"High Gloss","coverage":"","dryingTime":"Quick drying","coats":"","features":["Interior Woodwork","High Gloss","Enhances Wood Grain","Quick Drying","Good Flexibility","Gloss Retention"],"colours":["Clear","Mahogany","Jackwood","Walnut / Rosewood","Teak"],"featured":false,"availability":"Contact us for current colour, size and availability","fallbackImage":""},

  {"id":66,"brand":"Dulux","name":"Duco NC Sanding Sealer","category":"Wood Coating","subcategory":"Sanding Sealer","description":"Duco NC Sanding Sealer is a high-build wood sealer used during surface preparation before compatible finishing coats. It helps fill and seal timber pores and creates a smoother base that can be sanded before the final wood finish is applied.","image":"assets/img/products/dulux/duco-sanding-sealer-colours.png","sizes":["0.5L","1L","4L"],"finish":"Mid Sheen Base","coverage":"","dryingTime":"Fast drying","coats":"","features":["High Build","Fast Drying","Easy to Sand","Seals Wood Pores","Smooth Base for Topcoat","Interior Wood Surfaces"],"colours":["Clear","Mahogany","Jackwood","Walnut / Rosewood","Teak"],"featured":false,"availability":"Contact us for current colour, size and availability","fallbackImage":""},

  {"id":67,"brand":"Dulux","name":"Epoxy Floor Paint","category":"Floor Paint","subcategory":"Epoxy Floor Coating","description":"Dulux Epoxy Floor Paint is a floor coating intended for properly prepared surfaces where additional durability and abrasion resistance are required. It is suitable for selected residential, office, commercial and industrial floor areas.","image":"assets/img/products/dulux/epoxy-floor-paint.png","sizes":["1L"],"finish":"Gloss","coverage":"","dryingTime":"","coats":"","features":["High Abrasion Resistance","Durable Floor Finish","Gloss Finish","Residential Floors","Office Floors","Commercial & Factory Floors"],"featured":false,"availability":"Contact us for current colour and availability","fallbackImage":""},

  {"id":68,"brand":"Dulux","name":"Duco Direct to Metal – Matt Black","category":"Metal Protection","subcategory":"Direct to Metal Coating","description":"Duco Direct to Metal is a quick-drying coating developed for properly prepared metal surfaces. It combines primer and finishing properties in one system and provides adhesion, corrosion protection and a matt decorative appearance.","image":"assets/img/products/dulux/duco-direct-to-metal-matt-black.png","sizes":["0.2L","0.5L","1L","4L"],"finish":"Matt","coverage":"Approximately 200 sq.ft per litre","dryingTime":"Quick drying","coats":"","features":["Direct to Metal","Primer & Topcoat Properties","Anti-Corrosive","Excellent Adhesion","Quick Drying","Matt Finish","Spray Application"],"featured":false,"availability":"Contact us for current size and availability","fallbackImage":""},

  {"id":69,"brand":"Dulux","name":"Duco Wood Stain","category":"Wood Coating","subcategory":"Wood Stain","description":"Duco Wood Stain is a decorative wood-colouring product for properly prepared timber surfaces. It is used to enrich or change the visible tone of the wood while allowing the natural grain and character of the timber to remain part of the finished appearance.","image":"assets/img/products/dulux/duco-wood-stain.png","sizes":["0.5L","1L","4L"],"finish":"Wood Stain","coverage":"","dryingTime":"","coats":"","features":["Decorative Wood Colour","Enhances Natural Wood Appearance","Suitable for Prepared Timber","Wood Finishing System"],"featured":false,"availability":"Contact us for current shade, size and availability","fallbackImage":""},

  {"id":70,"brand":"Dulux","name":"SuperKote Super Gloss Enamel","category":"Enamel Paint","subcategory":"High Gloss Wood & Metal Enamel","description":"Dulux SuperKote Super Gloss Enamel is a decorative and protective high-gloss coating for properly prepared wood and metal surfaces. It provides a smooth glossy appearance and is suitable for doors, furniture, cabinets, trims and general metalwork where a durable decorative finish is required.","image":"assets/img/products/dulux/superkote-super-gloss-enamel.png","sizes":["0.2L","0.5L","1L"],"colours":["Antique Brown","Black","Golden Yellow","Golden Brown","Brilliant White","Gulf Red"],"finish":"High Gloss","coverage":"","dryingTime":"","coats":"","features":["High Gloss Finish","Smooth Decorative Finish","Suitable for Wood","Suitable for Metal","Protective Enamel Coating","Gloss Retention"],"featured":false,"availability":"Contact us for current colour, size and availability","fallbackImage":""},

  {"id":71,"brand":"Dulux","name":"Duco High Gloss Thinner 851-1247","category":"Paint Accessories","subcategory":"NC & Acrylic Thinner","description":"Duco High Gloss Thinner 851-1247 is a finishing thinner intended for compatible NC and acrylic coating systems. It can be used to adjust coating viscosity and working consistency for smoother application. Follow the recommended mixing instructions for the coating being used.","image":"assets/img/products/dulux/duco-high-gloss-thinner.png","sizes":["1L","2L","4L"],"finish":"NA","coverage":"","dryingTime":"","coats":"","features":["Finishing Thinner","For NC Finishes","For Acrylic Finishes","Helps Adjust Application Viscosity","For Compatible Coating Systems"],"featured":false,"availability":"Contact us for current size and availability","fallbackImage":""},

  {"id":72,"brand":"Dulux","name":"Acrylic Wall Filler","category":"Wall Preparation","subcategory":"Interior Acrylic Wall Filler","description":"Dulux Acrylic Wall Filler is an acrylic-based filler used to prepare suitable interior masonry surfaces before decorative painting. It helps fill minor surface imperfections and creates a smoother, more even base for subsequent paint coats. It is suitable for properly prepared walls, ceilings, plaster, cement and other compatible interior surfaces.","image":"assets/img/products/dulux/acrylic-wall-filler.png","sizes":["1L","4L","10L","20L"],"finish":"Matt","coverage":"","dryingTime":"","coats":"","features":["Acrylic Wall Filler","Helps Fill Minor Surface Imperfections","Smooth Base for Topcoat","Interior Masonry Use","Suitable for Walls & Ceilings","Surface Preparation"],"featured":false,"availability":"Contact us for current size and availability","fallbackImage":""},

  {"id":73,"brand":"Dulux","name":"Pre Coat Wall Putty","category":"Wall Preparation","subcategory":"Wall Putty","description":"Dulux Pre Coat Wall Putty is a wall-preparation product used to help fill and smooth minor surface unevenness before decorative painting. It helps create a more uniform base for subsequent primer and topcoat application on suitable prepared wall surfaces.","image":"assets/img/products/dulux/pre-coat-wall-putty.png","sizes":["1Kg","7Kg","14Kg","28Kg"],"colours":["White"],"finish":"NA","coverage":"","dryingTime":"","coats":"","features":["Wall Preparation","Helps Smooth Minor Surface Unevenness","Creates a Uniform Base for Painting","Suitable Before Primer & Topcoat","White"],"featured":false,"availability":"Contact us for current size and availability","fallbackImage":""}

];

const PRODUCT_BRANDS = [
  ...new Set(
    PRODUCTS
      .map((product) => product.brand)
      .filter((brand) => brand !== "Saheed Sons")
  )
].sort();

const PRODUCT_CATEGORIES = [
  ...new Set(
    PRODUCTS.map((product) => product.category)
  )
].sort();