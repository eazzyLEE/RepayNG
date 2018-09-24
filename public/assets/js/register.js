const statesAndLocalGov = [
  {
    state: "Abia",
    lgas: [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikawuno",
      "Ikwuano",
      "Isiala-Ngwa North",
      "Isiala-Ngwa South",
      "Isikwuato",
      "Isuikwuato",
      "Nneochi",
      "Obi Ngwa",
      "Obi Ngwa",
      "Obioma Ngwa",
      "Obioma-Ngwa",
      "Ohafia",
      "Ohaozara",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa West",
      "Ukwu East",
      "Umuahia",
      "Umuahia North",
      "Umuahia South",
      "Umuahia-North",
      "Umunneochi"
    ]
  },
  {
    state: "Adamawa",
    lgas: [
      "Demsa",
      "Fufore",
      "Ganye",
      "Girei",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Jimeta",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo-Belwa",
      "Michika",
      "Mubi-North",
      "Mubi-South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola"
    ]
  },
  {
    state: "Akwa Ibom",
    lgas: [
      "Abak",
      "Eastern-Obolo",
      "Eket",
      "Ekpe-Atani",
      "Esit Ekit",
      "Essien-Udim",
      "Etim-Ekpo",
      "Etinam",
      "Ibeno",
      "Ibesikpo-Asutan",
      "Ibiono-Ibom",
      "Ika",
      "Ikono",
      "Ikot-Abasi",
      "Ikot-Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat-Enin",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot-Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Udung-Uko",
      "Ukanefun",
      "Uquo Ibeno",
      "Uru Offong Oruko",
      "Uruan",
      "Uruk-Anam",
      "Uyo"
    ]
  },
  {
    state: "Anambra",
    lgas: [
      "Aguata",
      "Akwa North",
      "Anambra",
      "Anambra-West",
      "Anaocha",
      "Awka-North",
      "Awka-South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili",
      "Idemili-North",
      "Idemili-South",
      "Ihiala",
      "Imo",
      "Nibo",
      "Njikoka",
      "Nnewi",
      "Nnewi-North",
      "Nnewi-South",
      "Ogbaru",
      "Olumba",
      "Onitsha-North",
      "Onitsha-South",
      "Orumba-North",
      "Orumba-South",
      "Oti",
      "Otu-Ocha",
      "Ubuluizor Ihiala",
      "Uyi"
    ]
  },
  {
    state: "Bauchi",
    lgas: [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Giade",
      "Itas/Gadau",
      "Jama'Are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa-Balewa",
      "Toro",
      "Warji",
      "Zaki"
    ]
  },
  {
    state: "Benue",
    lgas: [
      "Ado",
      "Agatu",
      "Apa",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer-East",
      "Gwer-West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Ogbadibo",
      "Ohimini",
      "Oju",
      "Okpokwu",
      "Otukpo",
      "Oturkpa",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya"
    ]
  },
  {
    state: "Borno",
    lgas: [
      "Abadan",
      "Askira-Uba",
      "Bama",
      "Bayo",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Gubio",
      "Guzamala",
      "Gwoza",
      "Hawul",
      "Jere",
      "Kaga",
      "Kala/Balge",
      "Konduga",
      "Kukawa",
      "Kwaya-Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Marte",
      "Mobbar",
      "Mongunu",
      "Ngala",
      "Nganzai",
      "Shani"
    ]
  },
  {
    state: "Bayelsa",
    lgas: [
      "Adagbabiri",
      "Brass",
      "Ekeremor",
      "Kembe",
      "Kolokuma",
      "Kolokuma/Opkuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern-Ijaw",
      "Toru-Abubo",
      "Yenegoa"
    ]
  },
  {
    state: "Cross River",
    lgas: [
      "Abi",
      "Abuochichie",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwara",
      "Biasi",
      "Boki",
      "Calabar-Municipal",
      "Calabar-South",
      "Etunk",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Ugep-North",
      "Yakurr",
      "Yala"
    ]
  },
  {
    state: "Delta",
    lgas: [
      "Aniocha North",
      "Aniocha-North",
      "Aniocha-South",
      "Bomadi",
      "Burutu",
      "Effurun",
      "Ethiope-East",
      "Ethiope-West",
      "Idu",
      "Ika-Ne",
      "Ika-North-East",
      "Ika-South",
      "Ikpemili",
      "Isoko-North",
      "Isoko-South",
      "Ndokwa-East",
      "Ndokwa-North",
      "Ndokwa-South",
      "Ndokwa-West",
      "Okpe",
      "Okwuani",
      "Oleh",
      "Oshielli-North",
      "Oshimili",
      "Oshimili-North",
      "Oshimili-South",
      "Osimili",
      "Osimili-North",
      "Osimili-South",
      "Patani",
      "Sapele",
      "Udokwa",
      "Udu",
      "Ughelli-North",
      "Ughelli-South",
      "Ukwuani",
      "Uraun",
      "Urwie",
      "Uvie",
      "Uvwei",
      "Uvwie",
      "Uwvie",
      "Warri-Central",
      "Warri-North",
      "Warri-South"
    ]
  },
  {
    state: "Ebonyi",
    lgas: [
      "Abakaliki",
      "Afikpo-North",
      "Afikpo-South",
      "Bomadim",
      "Ebonyi",
      "Ezza-North",
      "Ezza-South",
      "Ikwo",
      "Ishielu",
      "Ivo",
      "Izzi",
      "Obaukwu",
      "Ohakwu",
      "Onicha",
      "Ukaba"
    ]
  },
  {
    state: "Edo",
    lgas: [
      "Afokpella",
      "Afuze",
      "Agbazilo",
      "Akoko Edo",
      "Akoko-Edo",
      "Egor",
      "Esan-Central",
      "Esan-North-East",
      "Esan-North-East",
      "Esan-South-East",
      "Esan-West",
      "Etsako-Central",
      "Etsako-East",
      "Etsako-West",
      "Igueben",
      "Iguobano North East",
      "Ikpoba-Okha",
      "Ohunmwode",
      "Ologbo",
      "Opoji Irrua",
      "Opoji Irrua",
      "Oredo",
      "Orhionmwon",
      "Ovia-North-East",
      "Ovia-South-West",
      "Owan East",
      "Owan-East",
      "Owan-West",
      "Uhunmwonde"
    ]
  },
  {
    state: "Ekiti",
    lgas: [
      "Ado-Ekiti",
      "Aiyekire",
      "Efon",
      "Ekiti-East",
      "Ekiti-South-West",
      "Ekiti-West",
      "Emure/Ise/Orun",
      "Gbonyin",
      "Ido-Osi",
      "Ijero",
      "Ikare",
      "Ikere",
      "Ikole",
      "Ilejemeje",
      "Irepodun/Ifelodun",
      "Ise-Orun",
      "Moba",
      "Oye"
    ]
  },
  {
    state: "Enugu",
    lgas: [
      "Aninri",
      "Awgu",
      "Enugu-East",
      "Enugu-North",
      "Enugu-South",
      "Ezeagu",
      "Igbo-Etiti",
      "Igbo-Eze-North",
      "Igbo-Eze-South",
      "Isi-Uzo",
      "Nkanu-East",
      "Nkanu-West",
      "Nsukka",
      "Nukanu East",
      "Oji-River",
      "Udenu",
      "Udi",
      "Uzo-Uwani"
    ]
  },
  {
    state: "Federal Capital Territory",
    lgas: ["Abaji", "Abuja Municipal", "Gwagwalada", "Kuje", "Bwari", "Kwali"]
  },
  {
    state: "Gombe",
    lgas: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Funakaye",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada/Bajoga",
      "Shomgom",
      "Yamaltu/Deba"
    ]
  },
  {
    state: "Imo",
    lgas: [
      "Aboh-Mbaise",
      "Ahiazu-Mbaise",
      "Dral-Esat",
      "Ehime-Mbano",
      "Ezeobodo",
      "Ezinihitte",
      "Ideato",
      "Ideato-North",
      "Ideato-South",
      "Ihitte/Uboma",
      "Ikeduru",
      "Isiala-Mbano",
      "Isu",
      "Mbaitoli",
      "Mbano",
      "Ngor-Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji-Egbema",
      "Okigwe",
      "Onuimo",
      "Orlu",
      "Oro-West",
      "Orsu",
      "Oru-East",
      "Oru-West",
      "Owerri-Municipal",
      "Owerri-North",
      "Owerri-West",
      "Ugiri-Ike Ikeduru",
      "Ugiri-Ikedikeduru",
      "Unbano",
      "Zinihitte"
    ]
  },
  {
    state: "Jigawa",
    lgas: [
      "Auyo",
      "Babura",
      "Biriniwa",
      "Birnin-Kudu",
      "Bosuwa",
      "Buji",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin-Hausa",
      "Kaugama",
      "Kazaure",
      "Kirkasamma",
      "Maigatari",
      "Malam-Maduri",
      "Miga",
      "Ringim",
      "Roni",
      "Sule-Tankarkar",
      "Taura",
      "Yankwashi"
    ]
  },
  {
    state: "Kebbi",
    lgas: [
      "Aleiro",
      "Arewa-Dandi",
      "Argungu",
      "Augie",
      "Bagudo",
      "Birnin-Kebbi",
      "Bumza",
      "Dandi",
      "Danko",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko-Besse",
      "Maiyama",
      "Ngaski",
      "Sakaba",
      "Shanga",
      "Suru",
      "Wasagu",
      "Yauri",
      "Zuru"
    ]
  },
  {
    state: "Kaduna",
    lgas: [
      "Birnin-Gwari",
      "Chikun",
      "Giwa",
      "Gwagwada",
      "Igabi",
      "Ikara",
      "Jaba",
      "Jema'A",
      "Kachia",
      "Kaduna-North",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Koka/Kawo",
      "Kubah",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon-Gari",
      "Sanga",
      "Soba",
      "Tudun-Wada/Makera",
      "Zango-Kataf",
      "Zaria"
    ]
  },
  {
    state: "Kano",
    lgas: [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin-Kudu",
      "Dawakin-Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garun-Mallam",
      "Gaya",
      "Gezawa",
      "Gwale",
      "Gwarzo",
      "Kano-Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "Kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin-Gado",
      "Rogo",
      "Shanono",
      "Sumaila",
      "Takai",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun-Wada",
      "Ungogo",
      "Warawa",
      "Wudil"
    ]
  },
  {
    state: "Kogi",
    lgas: [
      "Adavi",
      "Ajaokuta",
      "Ankpa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela",
      "Ijumu",
      "Ikoyi-Ijumu",
      "Kabba/Bunu",
      "Kogi",
      "Lokoja",
      "Mopa-Muro-Mopi",
      "Obaji",
      "Ofu",
      "Ogori/Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Oru",
      "Oyi",
      "Yagba-East",
      "Yagba-West"
    ]
  },
  {
    state: "Katsina",
    lgas: [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Dan-Musa",
      "Dandume",
      "Danji",
      "Daura",
      "Dutsi",
      "Dutsinma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai-Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango"
    ]
  },
  {
    state: "Kwara",
    lgas: [
      "Asa",
      "Baruten",
      "Edu",
      "Ekiti",
      "Ifelodun",
      "Ilorin south",
      "Ilorin west",
      "Ilorin east",
      "Irepodun",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke ero",
      "Oyun",
      "Pategi"
    ]
  },
  {
    state: "Lagos",
    lgas: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Epe",
      "Eti-Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaiye",
      "Ikeja",
      "Ikorodu",
      "Island",
      "Kosofe",
      "Lagos-Island",
      "Lagos-Mainland",
      "Mushin",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Somolu",
      "Suru-Lere",
      "Yewa-South"
    ]
  },
  {
    state: "Nassarawa",
    lgas: [
      "Akwanga",
      "Awe",
      "Doma",
      "Karu",
      "Keana",
      "Keffi",
      "Kokona",
      "Lafia",
      "Nassawara",
      "Nassawara Eggon",
      "Obi",
      "Wambu"
    ]
  },
  {
    state: "Niger",
    lgas: [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Bosso",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lapai",
      "Lavun",
      "Magama",
      "Mariga",
      "Mashegu",
      "Mokwa",
      "Muya",
      "Paikoro",
      "Rafi",
      "Rijau",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi"
    ]
  },
  {
    state: "Ogun",
    lgas: [
      "Abeokuta-North",
      "Abeokuta-South",
      "Abor Mbaise",
      "Ado-Odo/Ota",
      "Adoodo-Ota",
      "Ewekoro",
      "Idarapo",
      "Iffo-Otta",
      "Ifo",
      "Igbado-North",
      "Igbado-South",
      "Ijebu-East",
      "Ijebu-North",
      "Ijebu-North-East",
      "Ijebu-Ode",
      "Ikenne",
      "Ilishan Remo",
      "Ilugun-Alaro",
      "Imeko-Afon",
      "Ipokia",
      "Lgayekpe",
      "Obafemi-Owode",
      "Odedah",
      "Odogbolu",
      "Ogun-Waterside",
      "Remo-North",
      "Sagamu",
      "Shagamu",
      "Yewa"
    ]
  },
  {
    state: "Ondo",
    lgas: [
      "Akoko",
      "Akoko-North",
      "Akoko-North-West",
      "Akoko-South",
      "Akoko-South-East",
      "Akure",
      "Akure-North",
      "Akure-South",
      "Ese-Odo",
      "Idanre",
      "Ifedore",
      "Igbisin",
      "Ikale",
      "Ilaje",
      "Ilaje-West",
      "Ile-Oluji-Okeigbo",
      "Irele",
      "Odigbo",
      "Oka Ak0Ko",
      "Okiti Pupa Ijuodo",
      "Okiti-Pupa",
      "Ondo",
      "Ondo West",
      "Ondo-East",
      "Ose",
      "Owo"
    ]
  },
  {
    state: "Osun",
    lgas: [
      "Atakumosa",
      "Atakumosa East",
      "Ayeda-Ade",
      "Ayedire",
      "Boluwaduro",
      "Boripe",
      "Ede",
      "Ede North",
      "Egbedore",
      "Ejigbo",
      "Ife",
      "Ife North",
      "Ife South",
      "Ife-Central",
      "Ife-East",
      "Ifelodun",
      "Ila",
      "Ilesa-East",
      "Ilesa-West",
      "Ilesha",
      "Ilesha West",
      "Irepodun",
      "Irewole",
      "Isokan",
      "Iwo",
      "Obokun",
      "Odo-Otin",
      "Ola Oluwa",
      "Olorunda",
      "Ori-Ade",
      "Orolu",
      "Osogbo"
    ]
  },
  {
    state: "Oyo",
    lgas: [
      "Afijio",
      "Akinyele",
      "Atiba",
      "Atisbo",
      "Egbeda",
      "Ibadan-Central",
      "Ibadan-North-East",
      "Ibadan-North-West",
      "Ibadan-South-East",
      "Ibadan-South-West",
      "Ibarapa-Central",
      "Ibarapa-East",
      "Ibarapa-North",
      "Ido",
      "Irepo",
      "Iseyin",
      "Itseiwaju",
      "Iwajowa",
      "Kajola",
      "Lagelu",
      "Odo-Oluwa",
      "Ogbomosho-North",
      "Ogbomosho-South",
      "Olorunsogo",
      "Oluyole",
      "Ona-Ara",
      "Orelope",
      "Ori-Ire",
      "Oyo-East",
      "Oyo-West",
      "Saki-East",
      "Saki-West",
      "Surulere"
    ]
  },
  {
    state: "Plateau",
    lgas: [
      "Barkin-Ladi",
      "Bassa",
      "Bokkos",
      "Jos-East",
      "Jos-North",
      "Jos-South",
      "Kanam",
      "Kanke",
      "Langtang-North",
      "Langtang-South",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Quan'Anpan",
      "Riyom",
      "Shendam",
      "Wase"
    ]
  },
  {
    state: "Rivers",
    lgas: [
      "Aboa/Odual",
      "Ahoada-East",
      "Ahoada-West",
      "Akukutoru",
      "Andoni",
      "Asari-Toru",
      "Bonny",
      "Buguma",
      "Degema",
      "Eleme",
      "Elfane",
      "Emuoha",
      "Etche",
      "Gokana",
      "Ikwerre",
      "Khana",
      "Obia/Akpor",
      "Ogba-Egbema-Ndoni",
      "Ogba/Egbema/Ndoni",
      "Ogu/Bolo",
      "Okirika",
      "Omuma",
      "Opobo/Nkoro",
      "Oyigbo",
      "Port-Harcourt",
      "Tai"
    ]
  },
  {
    state: "Sokoto",
    lgas: [
      "Binji",
      "Bodinga",
      "Dange-Shuni",
      "Gada",
      "Goronyo",
      "Gudu",
      "Gwadabawa",
      "Illela",
      "Kebbe",
      "Kware",
      "Raba",
      "Sabo-Birni",
      "Shagari",
      "Silame",
      "Sokoto-North",
      "Sokoto-South",
      "Tambuwal",
      "Tangaza",
      "Tureta",
      "Wamakko",
      "Wurno",
      "Yabo"
    ]
  },
  {
    state: "Taraba",
    lgas: [
      "Ardo-Kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Gassol",
      "Ibi",
      "Jalingo",
      "Karim-Lamido",
      "Kurmi",
      "Lau",
      "Oilingo",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing"
    ]
  },
  {
    state: "Yobe",
    lgas: [
      "Bade",
      "Borsali",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gogaram",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmua",
      "Yunusari",
      "Yusufari"
    ]
  },
  {
    state: "Zamfara",
    lgas: [
      "Anka",
      "Bakura",
      "Bukkuyum",
      "Bungudu",
      "Gumi",
      "Gusau",
      "Isa",
      "Kaura-Namoda",
      "Kiyawa",
      "Maradun",
      "Maru",
      "Shinkafi",
      "Talata-Mafara",
      "Tsafe",
      "Zurmi"
    ]
  }
];

$(function() {
  function _lower(input) {
    return input.toLowerCase().trim();
  }

  const methods = {
    all: function() {
      return statesAndLocalGov;
    },
    states: function() {
      return statesAndLocalGov.map(function(nigeriaStates) {
        return nigeriaStates.state;
      });
    },
    lgas: function(state) {
      state = _lower(state);

      if (!state || state == "") {
        throw new Error("Invalid Nigeria State");
      }

      if (["fct", "f.c.t", "abuja", "f c t"].includes(state)) {
        state = "Federal Capital Territory";
      }

      return statesAndLocalGov.find(function(nigeriaStates) {
        return _lower(nigeriaStates.state) === _lower(state);
      });
    }
  };

  $("#wizardForm").simpleWizard({
    cssClassStepActive: "active",
    cssClassStepDone: "done",
    onFinish: function() {
      //alert("Wizard finished")
      let url = window.location.href;
      window.location =
        url
          .split("")
          .splice(10, 8, "dashboard")
          .join("");
    }
  });

  // load all states
  for (i of methods.all()) {
    $("#state").append(`<option value="${i.state}">${i.state}</option>`);
  }

  // load LGAs
  $("#state").change(function() {
    let lgas = methods.lgas(this.value).lgas;
    const option_lgas = lgas.map(
      lga => `<option value="${lga}"> ${lga} </option>`
    );
    $("#lga").html(option_lgas);
  });
});

var validator = $("#wizardForm").validate({
  errorClass: "help-block text-danger",
  rules: {
    email: {
      email: true
    },
    password2: {
      equalTo: "#password"
    },
    status: "required",
    title: "required",
    bank: "required"
  },
  messages: {
    first_name: "Please specify your first name",
    last_name: "Please specify your last name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    password: {
      required: "Please enter your password",
      password:
        "Password must contain at least a capital letter, a number and a symbol"
    },
    password2: {
      equalTo: "Password do not match"
    },
    bank: {
      required: "Please select a bank"
    }
  }
});

function registerUser(event) {
  $("#step_four_button").prop("disabled", true);
  axios
    .post("/user/register", {
      title: $("#title").val(),
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      day: $("#day").val(),
      month: $("#month").val(),
      year: $("#year").val(),
      status: $("#status").val(),
      gender: $("#gender").val(),
      address: $("#address").val(),
      lga: $("#lga").val(),
      state: $("#state").val(),
      phone: $("#phone").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      bank: $("input[name=bank]:checked").val(),
      account_number: $("#account_number").val(),
      bvn: $("#bvn").val(),
      card_number: $("#card_number").val(),
      ccv: $("#ccv").val(),
      pin: $("#pin").val(),
      date_of_birth: `${$("#year").val()}-${$("#month").val()}-${$(
        "#day"
      ).val()}`
    })
    .then(function(response) {
      if (response.data.status == "error") {
        alert(response.data.message);
        $("#step_four_button").prop("disabled", false);
        return false;
      } else {
        $("#step_four_button").addClass("wizard-next");
        $("#step_four_button").prop("disabled", false);
        var wizard = $("#wizardForm").bootstrapWizard();
        wizard.bootstrapWizard("next");
      }
    })
    .catch(function(error) {
      console.log(error);
      $("#step_four_button").prop("disabled", false);
    });
}

// Validate Step One
$("#step_one_button").click(function() {
  const step_one_fields = [
    "#title",
    "#first_name",
    "#last_name",
    "#day",
    "#month",
    "#year",
    "#status",
    "#gender",
    "#address",
    "#lga",
    "#state",
    "#phone"
  ];

  let isValid = false;

  $("#step_one_button").removeClass("wizard-next");

  for (id of step_one_fields) {
    isValid = validator.element(id);
    if (!isValid) {
      // when one input is not valid, no need to continue looping...
      break;
    }
  }

  if (isValid) {
    // if all fields are valid, move to another step..
    $("#step_one_button").addClass("wizard-next");
    $("this").click();
  }
});

// Validate step 2
$("#step_two_button").click(function() {
  let step_two_fields = ["#email", "#password", "#password2"];

  let isValid = false;

  for (id of step_two_fields) {
    isValid = validator.element(id);
    if (!isValid) {
      // when one input is not valid, no need to continue looping...
      break;
    }
  }

  $("#step_two_button").removeClass("wizard-next");
  if (isValid) {
    $("#step_two_button").addClass("wizard-next");
    $("this").click();
  }
});

// Validate step 3
$("#step_three_button").click(function() {
  $("#step_three_button").removeClass("wizard-next");
  if (validator.element("input[name='bank']")) {
    $("#step_three_button").addClass("wizard-next");
    $("this").click();
  }
});

// Validate step 4
$("#step_four_button").click(function(event) {
  let step_four_fields = [
    "#account_number",
    "#bvn",
    "#card_number",
    "#ccv",
    "#pin",
    "#pin2"
  ];

  let isValid = false;

  for (id of step_four_fields) {
    isValid = validator.element(id);
    if (!isValid) {
      // when one input is not valid, no need to continue looping...
      break;
    }
  }
  event.preventDefault();
  $("#step_four_button").removeClass("wizard-next");
  if (isValid) {
    registerUser(this);
  }
});
