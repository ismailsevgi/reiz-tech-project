const { createSlice } = require('@reduxjs/toolkit');
// import { COUNTRY_OBJECT, ARRAY_OF_COUNTRIES } from '@/utils/InterfacesAndTypes';
const initialState = {
  region: 'All',
  lithuaniaMode: false,
  compare_area: 'BIGGER',
  sorting: 'ASC_BY_NAME',
  countries: [],
  filteredCountries: [],
};

const Lithuania = {
  name: 'Lithuania',
  area: 65300,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    SET_COUNTRIES: (state, { type, payload }) => {
      if (state.region === 'All') {
        return {
          ...state,
          countries: [...payload],
          filteredCountries: [...payload],
        };
      }
    },
    SET_SORTING: (state, { type, payload }) => {
      if (!state.lithuaniaMode) {
        let sortedArray = [...state.filteredCountries];

        switch (payload) {
          case 'ASC_BY_NAME':
            sortedArray.sort(function ASCENDING(a, b) {
              return a.name.localeCompare(b.name);
            });
            break;

          case 'DESC_BY_NAME':
            sortedArray.sort(function DESCENDING(a, b) {
              return b.name.localeCompare(a.name);
            });

            break;
          default:
            break;
          case 'ASC_BY_AREA':
            sortedArray.sort(function ASCENDING(a, b) {
              return a.area - b.area;
            });
            break;
          case 'DESC_BY_AREA':
            sortedArray.sort(function DESCENDING(a, b) {
              return b.area - a.area;
            });
            break;
        }

        return {
          ...state,

          sorting: payload,
          filteredCountries: sortedArray,
        };
      }

      if (state.lithuaniaMode) {
        let biggerCountries;
        let smallerCountries;

        if (payload === 'SMALLER') {
          smallerCountries = [...state.countries];
        } else {
          biggerCountries = [...state.countries];
        }

        switch (payload) {
          case 'BIGGER':
            biggerCountries = biggerCountries.filter(
              (country) => country.area > 65300
            );
            biggerCountries.sort((a, b) => a.area - b.area);
            break;

          case 'SMALLER':
            smallerCountries = smallerCountries.filter(
              (country) => country.area < 65300
            );
            smallerCountries.sort((a, b) => b.area - a.area);
            break;
        }
        console.log('Smaller: ', smallerCountries);
        console.log('bigger: ', biggerCountries);
        return {
          ...state,
          compare_area: payload,
          filteredCountries:
            payload === 'SMALLER' ? smallerCountries : biggerCountries,
        };
      }
    },
    SET_REGION: (state, { type, payload }) => {
      console.log('Gelen Region Payload: ', payload);

      const filterByRegion = (region) => {
        if (region === 'All') {
          return [...state.countries];
        }

        return [
          ...state.countries.filter((country) => country.region === region),
        ];
      };

      let filteredArray;

      switch (payload) {
        case 'All':
          filteredArray = filterByRegion('All');
          break;
        case 'Asia':
          filteredArray = filterByRegion('Asia');
          break;
        case 'Europe':
          filteredArray = filterByRegion('Europe');
          break;
        case 'Africa':
          filteredArray = filterByRegion('Africa');
          break;
        case 'Oceania':
          filteredArray = filterByRegion('Oceania');
          break;
        case 'Americas':
          filteredArray = filterByRegion('Americas');
          break;
      }

      return {
        ...state,
        filteredCountries: filteredArray,
        region: payload,
      };
    },
    SET_MODE: (state, { type, payload }) => {
      return {
        ...state,
        lithuaniaMode: payload,
      };
    },
    SET_SEARCH_QUERY: (state, { type, payload }) => {
      console.log('Gelen Payload! ', payload);
      const searchedCountries = state.countries.filter((country) =>
        country.name.toLowerCase().includes(payload.trim().toLowerCase())
      );

      return {
        ...state,
        searchQuery: payload,
        filteredCountries: searchedCountries,
      };
    },
  },
});

export default countriesSlice.reducer;
export const {
  SET_COUNTRIES,
  SET_SORTING,
  SET_REGION,
  SET_AREA,
  SET_MODE,
  SET_SEARCH_QUERY,
} = countriesSlice.actions;
