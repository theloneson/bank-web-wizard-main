
export interface Country {
  name: string;
  code: string;
  states: State[];
}

export interface State {
  name: string;
  code: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    name: "Afghanistan",
    code: "AF",
    states: [
      { name: "Kabul", code: "KBL", cities: ["Kabul", "Char Asiab"] },
      { name: "Herat", code: "HER", cities: ["Herat", "Guzara"] },
      { name: "Kandahar", code: "KDH", cities: ["Kandahar", "Spin Boldak"] }
    ]
  },
  {
    name: "Albania",
    code: "AL",
    states: [
      { name: "Tirana", code: "TR", cities: ["Tirana", "Durrës"] },
      { name: "Vlorë", code: "VL", cities: ["Vlorë", "Sarandë"] }
    ]
  },
  {
    name: "Algeria",
    code: "DZ",
    states: [
      { name: "Algiers", code: "16", cities: ["Algiers", "Boumerdès"] },
      { name: "Oran", code: "31", cities: ["Oran", "Sidi Bel Abbès"] }
    ]
  },
  {
    name: "Argentina",
    code: "AR",
    states: [
      { name: "Buenos Aires", code: "BA", cities: ["Buenos Aires", "La Plata", "Mar del Plata"] },
      { name: "Córdoba", code: "CB", cities: ["Córdoba", "Villa María"] },
      { name: "Santa Fe", code: "SF", cities: ["Santa Fe", "Rosario"] }
    ]
  },
  {
    name: "Australia",
    code: "AU",
    states: [
      { name: "New South Wales", code: "NSW", cities: ["Sydney", "Newcastle", "Wollongong"] },
      { name: "Victoria", code: "VIC", cities: ["Melbourne", "Geelong", "Ballarat"] },
      { name: "Queensland", code: "QLD", cities: ["Brisbane", "Gold Coast", "Cairns"] },
      { name: "Western Australia", code: "WA", cities: ["Perth", "Fremantle", "Bunbury"] }
    ]
  },
  {
    name: "Austria",
    code: "AT",
    states: [
      { name: "Vienna", code: "9", cities: ["Vienna"] },
      { name: "Salzburg", code: "5", cities: ["Salzburg"] },
      { name: "Tyrol", code: "7", cities: ["Innsbruck"] }
    ]
  },
  {
    name: "Belgium",
    code: "BE",
    states: [
      { name: "Brussels", code: "BRU", cities: ["Brussels"] },
      { name: "Flanders", code: "VLG", cities: ["Antwerp", "Ghent", "Bruges"] },
      { name: "Wallonia", code: "WAL", cities: ["Liège", "Charleroi", "Namur"] }
    ]
  },
  {
    name: "Brazil",
    code: "BR",
    states: [
      { name: "São Paulo", code: "SP", cities: ["São Paulo", "Campinas", "Santos"] },
      { name: "Rio de Janeiro", code: "RJ", cities: ["Rio de Janeiro", "Niterói"] },
      { name: "Minas Gerais", code: "MG", cities: ["Belo Horizonte", "Uberlândia"] }
    ]
  },
  {
    name: "Canada",
    code: "CA",
    states: [
      { name: "Ontario", code: "ON", cities: ["Toronto", "Ottawa", "Hamilton", "London"] },
      { name: "British Columbia", code: "BC", cities: ["Vancouver", "Victoria", "Surrey"] },
      { name: "Quebec", code: "QC", cities: ["Montreal", "Quebec City", "Laval"] },
      { name: "Alberta", code: "AB", cities: ["Calgary", "Edmonton"] }
    ]
  },
  {
    name: "China",
    code: "CN",
    states: [
      { name: "Beijing", code: "BJ", cities: ["Beijing"] },
      { name: "Shanghai", code: "SH", cities: ["Shanghai"] },
      { name: "Guangdong", code: "GD", cities: ["Guangzhou", "Shenzhen", "Dongguan"] },
      { name: "Sichuan", code: "SC", cities: ["Chengdu", "Mianyang"] }
    ]
  },
  {
    name: "Denmark",
    code: "DK",
    states: [
      { name: "Capital Region", code: "84", cities: ["Copenhagen", "Frederiksberg"] },
      { name: "Central Denmark", code: "82", cities: ["Aarhus", "Viborg"] },
      { name: "Southern Denmark", code: "83", cities: ["Odense", "Esbjerg"] }
    ]
  },
  {
    name: "Egypt",
    code: "EG",
    states: [
      { name: "Cairo", code: "C", cities: ["Cairo", "Giza"] },
      { name: "Alexandria", code: "ALX", cities: ["Alexandria"] },
      { name: "Giza", code: "GZ", cities: ["Giza", "6th of October City"] }
    ]
  },
  {
    name: "Finland",
    code: "FI",
    states: [
      { name: "Uusimaa", code: "01", cities: ["Helsinki", "Espoo", "Vantaa"] },
      { name: "Pirkanmaa", code: "06", cities: ["Tampere"] },
      { name: "Varsinais-Suomi", code: "02", cities: ["Turku"] }
    ]
  },
  {
    name: "France",
    code: "FR",
    states: [
      { name: "Île-de-France", code: "IDF", cities: ["Paris", "Versailles", "Saint-Denis"] },
      { name: "Provence-Alpes-Côte d'Azur", code: "PACA", cities: ["Marseille", "Nice", "Toulon"] },
      { name: "Auvergne-Rhône-Alpes", code: "ARA", cities: ["Lyon", "Grenoble", "Saint-Étienne"] }
    ]
  },
  {
    name: "Germany",
    code: "DE",
    states: [
      { name: "Bavaria", code: "BY", cities: ["Munich", "Nuremberg", "Augsburg"] },
      { name: "Berlin", code: "BE", cities: ["Berlin"] },
      { name: "North Rhine-Westphalia", code: "NW", cities: ["Cologne", "Düsseldorf", "Dortmund"] },
      { name: "Hamburg", code: "HH", cities: ["Hamburg"] }
    ]
  },
  {
    name: "India",
    code: "IN",
    states: [
      { name: "Maharashtra", code: "MH", cities: ["Mumbai", "Pune", "Nagpur"] },
      { name: "Delhi", code: "DL", cities: ["New Delhi", "Delhi"] },
      { name: "Karnataka", code: "KA", cities: ["Bangalore", "Mysore"] },
      { name: "Tamil Nadu", code: "TN", cities: ["Chennai", "Coimbatore", "Madurai"] }
    ]
  },
  {
    name: "Indonesia",
    code: "ID",
    states: [
      { name: "Jakarta", code: "JK", cities: ["Jakarta"] },
      { name: "West Java", code: "JB", cities: ["Bandung", "Bogor", "Bekasi"] },
      { name: "East Java", code: "JI", cities: ["Surabaya", "Malang"] }
    ]
  },
  {
    name: "Italy",
    code: "IT",
    states: [
      { name: "Lazio", code: "62", cities: ["Rome", "Latina"] },
      { name: "Lombardy", code: "25", cities: ["Milan", "Bergamo", "Brescia"] },
      { name: "Campania", code: "72", cities: ["Naples", "Salerno"] }
    ]
  },
  {
    name: "Japan",
    code: "JP",
    states: [
      { name: "Tokyo", code: "13", cities: ["Tokyo", "Shibuya", "Shinjuku"] },
      { name: "Osaka", code: "27", cities: ["Osaka", "Sakai"] },
      { name: "Kanagawa", code: "14", cities: ["Yokohama", "Kawasaki"] }
    ]
  },
  {
    name: "Mexico",
    code: "MX",
    states: [
      { name: "Mexico City", code: "CMX", cities: ["Mexico City"] },
      { name: "Jalisco", code: "JAL", cities: ["Guadalajara", "Zapopan"] },
      { name: "Nuevo León", code: "NLE", cities: ["Monterrey", "San Nicolás"] }
    ]
  },
  {
    name: "Netherlands",
    code: "NL",
    states: [
      { name: "North Holland", code: "NH", cities: ["Amsterdam", "Haarlem"] },
      { name: "South Holland", code: "ZH", cities: ["The Hague", "Rotterdam"] },
      { name: "Utrecht", code: "UT", cities: ["Utrecht"] }
    ]
  },
  {
    name: "Nigeria",
    code: "NG",
    states: [
      { name: "Lagos", code: "LA", cities: ["Lagos", "Ikeja"] },
      { name: "Kano", code: "KN", cities: ["Kano"] },
      { name: "Rivers", code: "RI", cities: ["Port Harcourt"] }
    ]
  },
  {
    name: "Norway",
    code: "NO",
    states: [
      { name: "Oslo", code: "03", cities: ["Oslo"] },
      { name: "Bergen", code: "46", cities: ["Bergen"] },
      { name: "Trondheim", code: "50", cities: ["Trondheim"] }
    ]
  },
  {
    name: "Poland",
    code: "PL",
    states: [
      { name: "Masovian", code: "MZ", cities: ["Warsaw", "Radom"] },
      { name: "Lesser Poland", code: "MA", cities: ["Kraków", "Tarnów"] },
      { name: "Silesian", code: "SL", cities: ["Katowice", "Częstochowa"] }
    ]
  },
  {
    name: "Russia",
    code: "RU",
    states: [
      { name: "Moscow", code: "MOW", cities: ["Moscow"] },
      { name: "Saint Petersburg", code: "SPE", cities: ["Saint Petersburg"] },
      { name: "Novosibirsk Oblast", code: "NVS", cities: ["Novosibirsk"] }
    ]
  },
  {
    name: "South Africa",
    code: "ZA",
    states: [
      { name: "Gauteng", code: "GP", cities: ["Johannesburg", "Pretoria"] },
      { name: "Western Cape", code: "WC", cities: ["Cape Town", "Stellenbosch"] },
      { name: "KwaZulu-Natal", code: "KZN", cities: ["Durban", "Pietermaritzburg"] }
    ]
  },
  {
    name: "South Korea",
    code: "KR",
    states: [
      { name: "Seoul", code: "11", cities: ["Seoul"] },
      { name: "Busan", code: "26", cities: ["Busan"] },
      { name: "Gyeonggi", code: "41", cities: ["Suwon", "Seongnam"] }
    ]
  },
  {
    name: "Spain",
    code: "ES",
    states: [
      { name: "Madrid", code: "MD", cities: ["Madrid", "Móstoles"] },
      { name: "Catalonia", code: "CT", cities: ["Barcelona", "Hospitalet de Llobregat"] },
      { name: "Andalusia", code: "AN", cities: ["Seville", "Málaga", "Córdoba"] }
    ]
  },
  {
    name: "Sweden",
    code: "SE",
    states: [
      { name: "Stockholm County", code: "AB", cities: ["Stockholm", "Södertälje"] },
      { name: "Västra Götaland", code: "O", cities: ["Gothenburg", "Borås"] },
      { name: "Skåne", code: "M", cities: ["Malmö", "Helsingborg"] }
    ]
  },
  {
    name: "Switzerland",
    code: "CH",
    states: [
      { name: "Zurich", code: "ZH", cities: ["Zurich", "Winterthur"] },
      { name: "Geneva", code: "GE", cities: ["Geneva"] },
      { name: "Basel-Stadt", code: "BS", cities: ["Basel"] }
    ]
  },
  {
    name: "Turkey",
    code: "TR",
    states: [
      { name: "Istanbul", code: "34", cities: ["Istanbul", "Pendik"] },
      { name: "Ankara", code: "06", cities: ["Ankara"] },
      { name: "İzmir", code: "35", cities: ["İzmir", "Bayraklı"] }
    ]
  },
  {
    name: "United Kingdom",
    code: "GB",
    states: [
      { name: "England", code: "ENG", cities: ["London", "Manchester", "Birmingham", "Liverpool"] },
      { name: "Scotland", code: "SCT", cities: ["Edinburgh", "Glasgow", "Aberdeen"] },
      { name: "Wales", code: "WLS", cities: ["Cardiff", "Swansea", "Newport"] },
      { name: "Northern Ireland", code: "NIR", cities: ["Belfast", "Derry"] }
    ]
  },
  {
    name: "United States",
    code: "US",
    states: [
      { name: "California", code: "CA", cities: ["Los Angeles", "San Francisco", "San Diego"] },
      { name: "New York", code: "NY", cities: ["New York City", "Buffalo", "Albany"] },
      { name: "Texas", code: "TX", cities: ["Houston", "Dallas", "Austin", "San Antonio"] },
      { name: "Florida", code: "FL", cities: ["Miami", "Orlando", "Tampa", "Jacksonville"] }
    ]
  }
];
