export interface COUNTRY_OBJECT {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  demonym: string;
  timezones: string[];
  borders: string[];
  flags: [svg: string, png: string];
  currencies: [
    {
      code: string;
      name: string;
      symbol: string;
    }
  ];
  languages: [
    {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }
  ];
  flag: string;
  area: number;
  independent: boolean;
}

export type ARRAY_OF_COUNTRIES = COUNTRY_OBJECT[];

export interface COUNTRIES_STATE {
  region: string;
  secondFilter: string;
  sorting: string;
  lithuaniaMode: Boolean;
  compare_area: 'BIGGER' | 'SMALLER';
  searchQuery: string;
  countries: ARRAY_OF_COUNTRIES;
  filteredCountries: ARRAY_OF_COUNTRIES;
}
export interface REDUX_STORE_STATE {
  countries: COUNTRIES_STATE;
  theme: 'light' | 'dark';
}
