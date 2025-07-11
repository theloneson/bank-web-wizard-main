
// Enhanced geography data that loads dynamically
export interface GeographyData {
  states: Array<{
    name: string;
    code: string;
    cities: string[];
  }>;
}

// Comprehensive state and city data by country
const geographyData: Record<string, GeographyData> = {
  "US": {
    states: [
      {
        name: "Alabama",
        code: "AL",
        cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison"]
      },
      {
        name: "Alaska",
        code: "AK",
        cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan", "Wasilla", "Kenai", "Kodiak", "Bethel", "Palmer"]
      },
      {
        name: "Arizona",
        code: "AZ",
        cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise"]
      },
      {
        name: "Arkansas",
        code: "AR",
        cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville"]
      },
      {
        name: "California",
        code: "CA",
        cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Irvine", "Chula Vista"]
      },
      {
        name: "Colorado",
        code: "CO",
        cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial"]
      },
      {
        name: "Connecticut",
        code: "CT",
        cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury", "Norwalk", "Danbury", "New Britain", "Bristol", "Meriden"]
      },
      {
        name: "Delaware",
        code: "DE",
        cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown", "Elsmere", "New Castle"]
      },
      {
        name: "Florida",
        code: "FL",
        cities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral", "Pembroke Pines", "Hollywood", "Miramar", "Gainesville", "Coral Springs"]
      },
      {
        name: "Georgia",
        code: "GA",
        cities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Athens", "Sandy Springs", "Roswell", "Johns Creek", "Albany"]
      }
    ]
  },
  "NG": {
    states: [
      {
        name: "Abia",
        code: "AB",
        cities: ["Umuahia", "Aba", "Arochukwu", "Ohafia", "Isuikwuato", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umu Nneochi"]
      },
      {
        name: "Adamawa",
        code: "AD",
        cities: ["Yola", "Mubi", "Numan", "Jimeta", "Gombe", "Hong", "Michika", "Madagali", "Ganye", "Fufore"]
      },
      {
        name: "Akwa Ibom",
        code: "AK",
        cities: ["Uyo", "Ikot Ekpene", "Eket", "Oron", "Abak", "Ikot Abasi", "Essien Udim", "Eastern Obolo", "Etim Ekpo", "Etinan"]
      },
      {
        name: "Anambra",
        code: "AN",
        cities: ["Awka", "Onitsha", "Nnewi", "Ekwulobia", "Aguleri", "Ihiala", "Nsugbe", "Ojoto", "Orumba North", "Orumba South"]
      },
      {
        name: "Bauchi",
        code: "BA",
        cities: ["Bauchi", "Azare", "Jama'are", "Misau", "Ningi", "Tafawa Balewa", "Dass", "Bogoro", "Darazo", "Ganjuwa"]
      },
      {
        name: "Bayelsa",
        code: "BY",
        cities: ["Yenagoa", "Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw"]
      },
      {
        name: "Benue",
        code: "BE",
        cities: ["Makurdi", "Gboko", "Katsina-Ala", "Vandeikya", "Adoka", "Aliade", "Buruku", "Gwer East", "Gwer West", "Guma"]
      },
      {
        name: "Borno",
        code: "BO",
        cities: ["Maiduguri", "Biu", "Bama", "Konduga", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere"]
      },
      {
        name: "Cross River",
        code: "CR",
        cities: ["Calabar", "Ikom", "Ogoja", "Obudu", "Ugep", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase"]
      },
      {
        name: "Delta",
        code: "DE",
        cities: ["Asaba", "Warri", "Sapele", "Ughelli", "Agbor", "Koko", "Oleh", "Ozoro", "Kwale", "Abraka"]
      },
      {
        name: "Ebonyi",
        code: "EB",
        cities: ["Abakaliki", "Afikpo", "Onueke", "Ezza", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu"]
      },
      {
        name: "Edo",
        code: "ED",
        cities: ["Benin City", "Auchi", "Ekpoma", "Uromi", "Ubiaja", "Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East"]
      },
      {
        name: "Ekiti",
        code: "EK",
        cities: ["Ado-Ekiti", "Ikere", "Oye", "Emure", "Ise/Orun", "Moba", "Gbonyin", "Efon", "Ekiti East", "Ekiti South-West"]
      },
      {
        name: "Enugu",
        code: "EN",
        cities: ["Enugu", "Nsukka", "Oji River", "Udenu", "Udi", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East"]
      },
      {
        name: "Gombe",
        code: "GO",
        cities: ["Gombe", "Billiri", "Kaltungo", "Kwami", "Nafada", "Shongom", "Akko", "Balanga", "Dukku", "Funakaye"]
      },
      {
        name: "Imo",
        code: "IM",
        cities: ["Owerri", "Orlu", "Okigwe", "Mbaitoli", "Ikeduru", "Isu", "Njaba", "Nkwerre", "Nwangele", "Obowo"]
      },
      {
        name: "Jigawa",
        code: "JI",
        cities: ["Dutse", "Hadejia", "Kazaure", "Gumel", "Ringim", "Birnin Kudu", "Garki", "Gwaram", "Guri", "Jahun"]
      },
      {
        name: "Kaduna",
        code: "KD",
        cities: ["Kaduna", "Zaria", "Kafanchan", "Sabon Gari", "Soba", "Giwa", "Ikara", "Jaba", "Jema'a", "Kachia"]
      },
      {
        name: "Kano",
        code: "KN",
        cities: ["Kano", "Wudil", "Gwarzo", "Kura", "Madobi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure"]
      },
      {
        name: "Katsina",
        code: "KT",
        cities: ["Katsina", "Daura", "Funtua", "Malumfashi", "Kankia", "Bindawa", "Charanchi", "Dan Musa", "Dandume", "Danja"]
      },
      {
        name: "Kebbi",
        code: "KE",
        cities: ["Birnin Kebbi", "Argungu", "Yauri", "Zuru", "Bagudo", "Aleiro", "Augie", "Bunza", "Dandi", "Fakai"]
      },
      {
        name: "Kogi",
        code: "KO",
        cities: ["Lokoja", "Okene", "Kabba", "Anyigba", "Idah", "Isanlu", "Ajaokuta", "Ankpa", "Bassa", "Dekina"]
      },
      {
        name: "Kwara",
        code: "KW",
        cities: ["Ilorin", "Offa", "Omu-Aran", "Lafiagi", "Share", "Asa", "Baruten", "Edu", "Ekiti", "Ifelodun"]
      },
      {
        name: "Lagos",
        code: "LA",
        cities: ["Lagos", "Ikeja", "Badagry", "Ikorodu", "Epe", "Lagos Island", "Lagos Mainland", "Surulere", "Alimosho", "Amuwo-Odofin"]
      },
      {
        name: "Nasarawa",
        code: "NA",
        cities: ["Lafia", "Keffi", "Akwanga", "Nasarawa Egon", "Wamba", "Awe", "Doma", "Karu", "Keana", "Kokona"]
      },
      {
        name: "Niger",
        code: "NI",
        cities: ["Minna", "Bida", "Kontagora", "Suleja", "New Bussa", "Agaie", "Bida", "Borgu", "Bosso", "Chanchaga"]
      },
      {
        name: "Ogun",
        code: "OG",
        cities: ["Abeokuta", "Ijebu Ode", "Sagamu", "Ota", "Ilaro", "Shagamu", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East"]
      },
      {
        name: "Ondo",
        code: "ON",
        cities: ["Akure", "Ondo", "Owo", "Ikare", "Okitipupa", "Ore", "Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West"]
      },
      {
        name: "Osun",
        code: "OS",
        cities: ["Osogbo", "Ile-Ife", "Ilesa", "Ede", "Iwo", "Ejigbo", "Modakeke", "Aiyedaade", "Aiyedire", "Atakumosa East"]
      },
      {
        name: "Oyo",
        code: "OY",
        cities: ["Ibadan", "Ogbomoso", "Oyo", "Iseyin", "Kishi", "Saki", "Shaki", "Afijio", "Akinyele", "Atiba"]
      },
      {
        name: "Plateau",
        code: "PL",
        cities: ["Jos", "Bukuru", "Shendam", "Pankshin", "Vom", "Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North"]
      },
      {
        name: "Rivers",
        code: "RI",
        cities: ["Port Harcourt", "Obio-Akpor", "Okrika", "Opobo/Nkoro", "Oyigbo", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru"]
      },
      {
        name: "Sokoto",
        code: "SO",
        cities: ["Sokoto", "Tambuwal", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari"]
      },
      {
        name: "Taraba",
        code: "TA",
        cities: ["Jalingo", "Wukari", "Bali", "Gembu", "Serti", "Ardo-Kola", "Donga", "Gashaka", "Gassol", "Ibi"]
      },
      {
        name: "Yobe",
        code: "YO",
        cities: ["Damaturu", "Potiskum", "Gashua", "Nguru", "Geidam", "Bade", "Bursari", "Fika", "Fune", "Gujba"]
      },
      {
        name: "Zamfara",
        code: "ZA",
        cities: ["Gusau", "Kaura Namoda", "Talata Mafara", "Zurmi", "Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gumi"]
      },
      {
        name: "FCT",
        code: "FC",
        cities: ["Abuja", "Gwagwalada", "Kuje", "Bwari", "Kwali", "Abaji"]
      }
    ]
  },
  "CA": {
    states: [
      {
        name: "Alberta",
        code: "AB",
        cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove", "Leduc", "Camrose"]
      },
      {
        name: "British Columbia",
        code: "BC",
        cities: ["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Saanich", "Delta"]
      },
      {
        name: "Manitoba",
        code: "MB",
        cities: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Winkler", "Selkirk", "Morden", "Dauphin", "The Pas"]
      },
      {
        name: "New Brunswick",
        code: "NB",
        cities: ["Saint John", "Moncton", "Fredericton", "Dieppe", "Riverview", "Edmundston", "Miramichi", "Bathurst", "Campbellton", "Caraquet"]
      },
      {
        name: "Newfoundland and Labrador",
        code: "NL",
        cities: ["St. John's", "Mount Pearl", "Corner Brook", "Conception Bay South", "Grand Falls-Windsor", "Paradise", "Happy Valley-Goose Bay", "Gander", "Carbonear", "Stephenville"]
      },
      {
        name: "Northwest Territories",
        code: "NT",
        cities: ["Yellowknife", "Hay River", "Inuvik", "Fort Smith", "Behchokò", "Iqaluit", "Norman Wells", "Rankin Inlet", "Arviat", "Baker Lake"]
      },
      {
        name: "Nova Scotia",
        code: "NS",
        cities: ["Halifax", "Cape Breton", "Dartmouth", "Sydney", "Truro", "New Glasgow", "Glace Bay", "Yarmouth", "Kentville", "Amherst"]
      },
      {
        name: "Nunavut",
        code: "NU",
        cities: ["Iqaluit", "Rankin Inlet", "Arviat", "Baker Lake", "Cambridge Bay", "Igloolik", "Pangnirtung", "Pond Inlet", "Kugluktuk", "Cape Dorset"]
      },
      {
        name: "Ontario",
        code: "ON",
        cities: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor", "Richmond Hill", "Oakville", "Burlington", "Oshawa", "Barrie"]
      },
      {
        name: "Prince Edward Island",
        code: "PE",
        cities: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague", "Kensington", "Souris", "Alberton", "Georgetown", "Tignish"]
      },
      {
        name: "Quebec",
        code: "QC",
        cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Lévis", "Trois-Rivières", "Terrebonne", "Saint-Jean-sur-Richelieu", "Repentigny", "Brossard", "Drummondville", "Saint-Jérôme"]
      },
      {
        name: "Saskatchewan",
        code: "SK",
        cities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current", "Yorkton", "North Battleford", "Estevan", "Weyburn", "Lloydminster"]
      },
      {
        name: "Yukon",
        code: "YT",
        cities: ["Whitehorse", "Dawson City", "Watson Lake", "Haines Junction", "Mayo", "Carmacks", "Faro", "Ross River", "Teslin", "Old Crow"]
      }
    ]
  }
};

export const getCountryData = async (countryCode: string): Promise<GeographyData | null> => {
  // Simulate async loading (in a real app, this might be an API call)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(geographyData[countryCode] || null);
    }, 100);
  });
};

export const getAllCountryCodes = (): string[] => {
  return Object.keys(geographyData);
};
