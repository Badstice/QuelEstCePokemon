const datas = [
  {
    name: "Bulbizarre",
    syllabes: ["bul", "bi", "zarre"],
  },
  {
    name: "Herbizarre",
    syllabes: ["her", "bi", "zarre"],
  },
  {
    name: "Florizarre",
    syllabes: ["flo", "ri", "zarre"],
  },
  {
    name: "Salamèche",
    syllabes: ["sa", "la", "mèche"],
  },
  {
    name: "Reptincel",
    syllabes: ["re", "ptin", "cel"],
    phonems: [
      {
        syllabe: "re",
        phonem: "ré",
      },
    ],
  },
  {
    name: "Dracaufeu",
    syllabes: ["dra", "cau", "feu"],
  },
  {
    name: "Carapuce",
    syllabes: ["ca", "ra", "puce"],
    phonems: [
      {
        syllabe: "ca",
        phonem: "ka",
      },
    ],
  },
  {
    name: "Carabaffe",
    syllabes: ["ca", "ra", "baffe"],
    phonems: [
      {
        syllabe: "ca",
        phonem: "ka",
      },
    ],
  },
  {
    name: "Tortank",
    syllabes: ["tor", "tank"],
  },
  {
    name: "Chenipan",
    syllabes: ["che", "ni", "pan"],
  },
  {
    name: "Chrysacier",
    syllabes: ["chry", "sa", "cier"],
  },
  {
    name: "Papilusion",
    syllabes: ["pa", "pi", "lu", "sion"],
  },
  {
    name: "Aspicot",
    syllabes: ["a", "spi", "cot"],
  },
  {
    name: "Coconfort",
    syllabes: ["co", "con", "fort"],
    phonems: [
      {
        syllabe: "co",
        phonem: "quo",
      },
    ],
  },
  {
    name: "Dardargnan",
    syllabes: ["dar", "dar", "gnan"],
  },
  {
    name: "Roucool",
    syllabes: ["rou", "cool"],
  },
  {
    name: "Roucoups",
    syllabes: ["rou", "coups"],
  },
  {
    name: "Roucarnage",
    syllabes: ["rou", "car", "na", "ge"],
  },
  {
    name: "Rattata",
    syllabes: ["ra", "tta", "ta"],
    phonems: [
      {
        syllabe: "tta",
        phonem: "ta",
      },
    ],
  },
  {
    name: "Rattatac",
    syllabes: ["ra", "tta", "tac"],
  },
  {
    name: "Piafabec",
    syllabes: ["pia", "fa", "bec"],
  },
  {
    name: "Rapasdepic",
    syllabes: ["ra", "pas", "de", "pic"],
  },
  {
    name: "Abo",
    phonem: "abeau",
    syllabes: ["a", "bo"],
  },
  {
    name: "Arbok",
    syllabes: ["ar", "bok"],
  },
  {
    name: "Pikachu",
    syllabes: ["pi", "ka", "chu"],
  },
  {
    name: "Raichu",
    syllabes: ["rai", "chu"],
    phonems: [
      {
        syllabe: "chu",
        phonem: "tchou",
      },
    ],
    phonem: "raitchou",
  },
  {
    name: "Sabelette",
    syllabes: ["sa", "be", "lette"],
  },
  {
    name: "Sablaireau",
    syllabes: ["sa", "blai", "reau"],
  },
  {
    name: "Nidoran",
    syllabes: ["ni", "do", "ran"],
    phonems: [
      {
        syllabe: "ran",
        phonem: "rend",
      },
    ],
  },
  {
    name: "Nidorina",
    syllabes: ["ni", "do", "ri", "na"],
  },
  {
    name: "Nidoqueen",
    syllabes: ["ni", "do", "queen"],
  },
  {
    name: "Nidoran",
    syllabes: ["ni", "do", "ran"],
    phonems: [
      {
        syllabe: "ran",
        phonem: "rend",
      },
    ],
  },
  {
    name: "Nidorino",
    syllabes: ["ni", "do", "ri", "no"],
  },
  {
    name: "Nidoking",
    syllabes: ["ni", "do", "king"],
  },
  {
    name: "Mélofée",
    syllabes: ["mé", "lo", "fée"],
  },
  {
    name: "Mélodelfe",
    syllabes: ["mé", "lo", "delfe"],
  },
  {
    name: "Goupix",
    syllabes: ["gou", "pix"],
  },
  {
    name: "Feunard",
    syllabes: ["feu", "nard"],
  },
  {
    name: "Rondoudou",
    syllabes: ["ron", "dou", "dou"],
    phonems: [
      {
        syllabe: "ron",
        phonem: "rond",
      },
    ],
  },
  {
    name: "Grodoudou",
    syllabes: ["gro", "dou", "dou"],
  },
  {
    name: "Nosferapti",
    syllabes: ["nos", "fe", "ra", "pti"],
  },
  {
    name: "Nosferalto",
    syllabes: ["nos", "fe", "ral", "to"],
  },
  {
    name: "Mystherbe",
    syllabes: ["myst", "herbe"],
  },
  {
    name: "Ortide",
    syllabes: ["or", "ti", "de"],
  },
  {
    name: "Rafflesia",
    syllabes: ["ra", "ffle", "sia"],
  },
  {
    name: "Paras",
    syllabes: ["pa", "ras"],
  },
  {
    name: "Parasect",
    syllabes: ["pa", "ra", "sect"],
  },
  {
    name: "Mimitoss",
    syllabes: ["mi", "mi", "toss"],
  },
  {
    name: "Aéromite",
    syllabes: ["aé", "ro", "mite"],
  },
  {
    name: "Taupiqueur",
    syllabes: ["tau", "pi", "queur"],
  },
  {
    name: "Triopikeur",
    syllabes: ["tri", "o", "pi", "keur"],
  },
  {
    name: "Miaouss",
    syllabes: ["mi", "a", "ouss"],
    phonems: [
      {
        syllabe: "ouss",
        phonem: "ouce",
      },
    ],
  },
  {
    name: "Persian",
    syllabes: ["per", "sian"],
  },
  {
    name: "Psykokwak",
    syllabes: ["psy", "ko", "kwak"],
  },
  {
    name: "Akwakwak",
    syllabes: ["a", "kwa", "kwak"],
  },
  {
    name: "Férosinge",
    syllabes: ["fé", "ro", "sin", "ge"],
  },
  {
    name: "Colossinge",
    syllabes: ["co", "los", "sin", "ge"],
    phonems: [
      {
        syllabe: "co",
        phonem: "quo",
      },
    ],
  },
  {
    name: "Caninos",
    syllabes: ["ca", "ni", "nos"],
  },
  {
    name: "Arcanin",
    syllabes: ["ar", "ca", "nin"],
  },
  {
    name: "Ptitard",
    syllabes: ["pti", "tard"],
  },
  {
    name: "Têtarte",
    syllabes: ["tê", "tar", "te"],
  },
  {
    name: "Tartard",
    syllabes: ["tar", "tard"],
  },
  {
    name: "Abra",
    syllabes: ["a", "bra"],
  },
  {
    name: "Kadabra",
    syllabes: ["ka", "da", "bra"],
  },
  {
    name: "Alakazam",
    syllabes: ["a", "la", "ka", "zam"],
  },
  {
    name: "Machoc",
    syllabes: ["ma", "choc"],
  },
  {
    name: "Machopeur",
    syllabes: ["ma", "cho", "peur"],
  },
  {
    name: "Mackogneur",
    syllabes: ["ma", "cko", "gneur"],
  },
  {
    name: "Chétiflor",
    syllabes: ["ché", "ti", "flor"],
  },
  {
    name: "Boustiflor",
    syllabes: ["bou", "sti", "flor"],
  },
  {
    name: "Empiflor",
    syllabes: ["em", "pi", "flor"],
  },
  {
    name: "Tentacool",
    syllabes: ["ten", "ta", "cool"],
  },
  {
    name: "Tentacruel",
    syllabes: ["ten", "ta", "cru", "el"],
  },
  {
    name: "Racaillou",
    syllabes: ["ra", "caill", "ou"],
  },
  {
    name: "Gravalanch",
    syllabes: ["gra", "va", "lan", "ch"],
  },
  {
    name: "Grolem",
    syllabes: ["gro", "lem"],
  },
  {
    name: "Ponyta",
    syllabes: ["po", "ny", "ta"],
  },
  {
    name: "Galopa",
    syllabes: ["ga", "lo", "pa"],
  },
  {
    name: "Ramoloss",
    syllabes: ["ra", "mo", "loss"],
  },
  {
    name: "Flagadoss",
    syllabes: ["fla", "ga", "doss"],
  },
  {
    name: "Magnéti",
    syllabes: ["ma", "gné", "ti"],
  },
  {
    name: "Magnéton",
    syllabes: ["ma", "gné", "ton"],
  },
  {
    name: "Canarticho",
    syllabes: ["ca", "nar", "ti", "cho"],
  },
  {
    name: "Doduo",
    syllabes: ["do", "du", "o"],
  },
  {
    name: "Dodrio",
    syllabes: ["do", "dri", "o"],
  },
  {
    name: "Otaria",
    syllabes: ["o", "ta", "ria"],
  },
  {
    name: "Lamantine",
    syllabes: ["la", "man", "tine"],
  },
  {
    name: "Tadmorv",
    syllabes: ["ta", "dmorv"],
  },
  {
    name: "Grotadmorv",
    syllabes: ["gro", "ta", "dmorv"],
  },
  {
    name: "Kokiyas",
    syllabes: ["ko", "ki", "yas"],
  },
  {
    name: "Crustabri",
    syllabes: ["cru", "sta", "bri"],
  },
  {
    name: "Fantominus",
    syllabes: ["fan", "to", "mi", "nus"],
  },
  {
    name: "Spectrum",
    syllabes: ["spe", "ctrum"],
    phonems: [
      {
        syllabe: "spe",
        phonem: "spé",
      },
      {
        syllabe: "ctrum",
        phonem: "ctrome",
      },
    ],
  },
  {
    name: "Ectoplasma",
    syllabes: ["e", "cto", "pla", "sma"],
  },
  {
    name: "Onix",
    syllabes: ["o", "nix"],
  },
  {
    name: "Soporifik",
    syllabes: ["so", "po", "ri", "fik"],
  },
  {
    name: "Hypnomade",
    syllabes: ["hyp", "no", "ma", "de"],
  },
  {
    name: "Krabby",
    syllabes: ["kra", "bby"],
  },
  {
    name: "Krabboss",
    syllabes: ["kra", "bboss"],
  },
  {
    name: "Voltorbe",
    syllabes: ["vol", "tor", "be"],
  },
  {
    name: "Électrode",
    syllabes: ["é", "le", "ctro", "de"],
  },
  {
    name: "Noeunoeuf",
    syllabes: ["no", "eu", "no", "euf"],
  },
  {
    name: "Noadkoko",
    syllabes: ["no", "ad", "ko", "ko"],
  },
  {
    name: "Osselait",
    syllabes: ["o", "sse", "lait"],
  },
  {
    name: "Ossatueur",
    syllabes: ["o", "ssa", "tu", "eur"],
  },
  {
    name: "Kicklee",
    syllabes: ["ki", "cklee"],
  },
  {
    name: "Tygnon",
    syllabes: ["ty", "gnon"],
  },
  {
    name: "Excelangue",
    syllabes: ["ex", "ce", "lan", "gue"],
  },
  {
    name: "Smogo",
    syllabes: ["smo", "go"],
  },
  {
    name: "Smogogo",
    syllabes: ["smo", "go", "go"],
  },
  {
    name: "Rhinocorne",
    syllabes: ["rhi", "no", "cor", "ne"],
  },
  {
    name: "Rhinoféros",
    syllabes: ["rhi", "no", "fé", "ros"],
  },
  {
    name: "Leveinard",
    syllabes: ["le", "vei", "nard"],
  },
  {
    name: "Saquedeneu",
    syllabes: ["sa", "que", "de", "neu"],
  },
  {
    name: "Kangourex",
    syllabes: ["kan", "gou", "rex"],
  },
  {
    name: "Hypotrempe",
    syllabes: ["hy", "po", "trem", "pe"],
  },
  {
    name: "Hypocéan",
    syllabes: ["hy", "po", "cé", "an"],
  },
  {
    name: "Poissirène",
    syllabes: ["poi", "ssi", "rène"],
    phonems: [
      {
        syllabe: "ssi",
        phonem: "çi",
      },
    ],
  },
  {
    name: "Poissoroy",
    syllabes: ["poi", "sso", "roy"],
  },
  {
    name: "Stari",
    syllabes: ["sta", "ri"],
  },
  {
    name: "Staross",
    syllabes: ["sta", "ross"],
  },
  {
    name: "Monsieur Mime",
    syllabes: ["mon", "sieur ", "mi", "me"],
  },
  {
    name: "Insécateur",
    syllabes: ["in", "sé", "ca", "teur"],
  },
  {
    name: "Lippoutou",
    syllabes: ["lip", "pou", "tou"],
  },
  {
    name: "Élektek",
    syllabes: ["é", "lek", "tek"],
  },
  {
    name: "Magmar",
    syllabes: ["ma", "gmar"],
  },
  {
    name: "Scarabrute",
    syllabes: ["sca", "ra", "bru", "te"],
  },
  {
    name: "Tauros",
    syllabes: ["tau", "ros"],
  },
  {
    name: "Magicarpe",
    syllabes: ["ma", "gi", "car", "pe"],
  },
  {
    name: "Léviator",
    syllabes: ["lé", "via", "tor"],
  },
  {
    name: "Lokhlass",
    syllabes: ["lokh", "lass"],
  },
  {
    name: "Métamorph",
    syllabes: ["mé", "ta", "mor", "ph"],
  },
  {
    name: "Évoli",
    syllabes: ["é", "vo", "li"],
  },
  {
    name: "Aquali",
    syllabes: ["a", "qua", "li"],
  },
  {
    name: "Voltali",
    syllabes: ["vol", "ta", "li"],
  },
  {
    name: "Pyroli",
    syllabes: ["py", "ro", "li"],
    phonems: [
      {
        syllabe: "ro",
        phonem: "reau",
      },
    ],
  },
  {
    name: "Porygon",
    syllabes: ["po", "ry", "gon"],
  },
  {
    name: "Amonita",
    syllabes: ["a", "mo", "ni", "ta"],
  },
  {
    name: "Amonistar",
    syllabes: ["a", "mo", "ni", "star"],
  },
  {
    name: "Kabuto",
    syllabes: ["ka", "bu", "to"],
  },
  {
    name: "Kabutops",
    syllabes: ["ka", "bu", "tops"],
  },
  {
    name: "Ptéra",
    syllabes: ["pté", "ra"],
  },
  {
    name: "Ronflex",
    syllabes: ["ron", "flex"],
  },
  {
    name: "Artikodin",
    syllabes: ["ar", "ti", "ko", "din"],
  },
  {
    name: "Électhor",
    syllabes: ["é", "le", "cthor"],
  },
  {
    name: "Sulfura",
    syllabes: ["sul", "fu", "ra"],
  },
  {
    name: "Minidraco",
    syllabes: ["mi", "ni", "dra", "co"],
    phonems: [
      {
        syllabe: "dra",
        phonem: "drap",
      },
      {
        syllabe: "co",
        phonem: "quo",
      },
    ],
  },
  {
    name: "Draco",
    syllabes: ["dra", "co"],
    phonems: [
      {
        syllabe: "dra",
        phonem: "drap",
      },
      {
        syllabe: "co",
        phonem: "quo",
      },
    ],
  },
  {
    name: "Dracolosse",
    syllabes: ["dra", "co", "lo", "sse"],
    phonems: [
      {
        syllabe: "dra",
        phonem: "drap",
      },
      {
        syllabe: "co",
        phonem: "quo",
      },
    ],
  },
  {
    name: "Mewtwo",
    syllabes: ["mew", "two"],
  },
  {
    name: "Mew",
    syllabes: ["mew"],
  },
];
