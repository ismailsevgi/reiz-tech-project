const { createSlice } = require('@reduxjs/toolkit');
// import { COUNTRY_OBJECT, ARRAY_OF_COUNTRIES } from '@/utils/InterfacesAndTypes';
const initialState = {
  region: 'All',
  secondFilter: 'name',
  sorting: 'ASC',
  countries: [],
  filteredCountries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    SET_COUNTRIES: (state, { type, payload }) => {
      return { ...state, countries: [...payload] };
    },
    SET_SORTING: (state, { type, payload }) => {
      let sortedArray =
        state.region === 'All'
          ? [...state.countries]
          : [...state.filteredCountries];

      switch (payload) {
        case 'ASC':
          sortedArray.sort(function ASCENDING(a, b) {
            return a.name.localeCompare(b.name);
          });
          break;

        case 'DESC':
          sortedArray.sort(function DESCENDING(a, b) {
            return b.name.localeCompare(a.name);
          });

          break;
        default:
          break;
      }

      if (state.region === 'All') {
        return {
          ...state,
          sorting: payload,
          countries: sortedArray,
        };
      } else {
        return {
          ...state,
          sorting: payload,
          filteredCountries: sortedArray,
        };
      }
    },
    SET_REGION: (state, { type, payload }) => {
      console.log('Gelen Region Payload: ', payload);

      const filterByRegion = (region) => {
        return [
          ...state.countries.filter((country) => country.region === region),
        ];
      };

      let filteredArray;

      switch (payload) {
        case 'All':
          return {
            ...state,
            region: payload,
          };
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
    // SET_AREA: (state, {type, payload}) => {
    //     let sortedArray =
    //     state.region === 'All'
    //       ? [...state.countries]
    //       : [...state.filteredCountries];

    //   switch (payload) {
    //     case 'ASC':
    //       sortedArray.sort(function ASCENDING(a, b) {
    //         return a.name.localeCompare(b.name);
    //       });
    //       break;

    //     case 'DESC':
    //       sortedArray.sort(function DESCENDING(a, b) {
    //         return b.name.localeCompare(a.name);
    //       });

    //       break;
    //     default:
    //       break;
    //   }

    //   if (state.region === 'All') {
    //     return {
    //       ...state,
    //       sorting: payload,
    //       countries: sortedArray,
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       sorting: payload,
    //       filteredCountries: sortedArray,
    //     };
    //   }
    // }
  },
});

export default countriesSlice.reducer;
export const { SET_COUNTRIES, SET_SORTING, SET_REGION } =
  countriesSlice.actions;
