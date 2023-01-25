import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTRY_OBJECT, STORE_STATE } from '@/utils/InterfacesAndTypes';

import {
  SET_SORTING,
  SET_REGION,
  SET_MODE,
  SET_SEARCH_QUERY,
} from '@/Features/countriesSlice';
import { changeSorting, changeRegion } from '@/utils/filterFuns';
import {
  ASC_BY_AREA,
  DESC_BY_AREA,
  ASC_BY_NAME,
  DESC_BY_NAME,
  BIGGER,
  SMALLER,
  ALL,
} from '@/utils/constants';

type Props = {};

function FilterBar({}: Props) {
  type store = {
    theme: 'light' | 'dark';
  };
  const dispatch = useDispatch();
  const sorting = useSelector((state: STORE_STATE) => state.countries.sorting);
  const region = useSelector((state: STORE_STATE) => state.countries.region);
  const searchQuery = useSelector(
    (state: STORE_STATE) => state.countries.searchQuery
  );
  const compare_area = useSelector(
    (state: STORE_STATE) => state.countries.compare_area
  );
  const lithuaniaMode = useSelector(
    (state: STORE_STATE) => state.countries.lithuaniaMode
  );

  const theme = useSelector((state: store) => state?.theme);
  console.log('Theme: ', theme);
  console.log('Current Sorting: ', sorting);

  return (
    <div
      className={`w-full h-28  ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] '
          : 'animate-[toLight_1s_ease_1]'
      }`}
    >
      <div className='w-full lg:w-2/3 mx-auto  border-green-500 p-2 h-full flex justify-between items-center flex-wrap'>
        <div className='flex gap-4'>
          <div className='flex gap-2 w-min rounded-md'>
            <label
              className={`block ${
                theme === 'dark'
                  ? 'animate-[toDark_1s_ease_1]'
                  : 'animate-[toLight_1s_ease_1]'
              }`}
            >
              LISTING ORDER
            </label>
            <select
              className='appearance-none bg-green-500 text-white rounded-md h-12 p-2 hover:bg-green-400 cursor-pointer focus:outline-none'
              value={sorting}
              disabled={lithuaniaMode ? true : false}
              onChange={(e) =>
                changeSorting(e.target.value, dispatch, SET_SORTING)
              }
            >
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value={ASC_BY_NAME}
              >
                ASCENDING BY NAME
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value={DESC_BY_NAME}
              >
                DESCENDING BY NAME
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value={ASC_BY_AREA}
              >
                ASCENDING BY AREA
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value={DESC_BY_AREA}
              >
                DESCENDING BY AREA
              </option>
            </select>
          </div>
          <div className='flex gap-2 w-min rounded-md items-center'>
            <label className={`block ${theme === 'dark' && 'text-white'}`}>
              REGION
            </label>
            <select
              className='appearance-none bg-green-500 text-white rounded-md h-12 p-2 hover:bg-green-400 cursor-pointer focus:outline-none text-center'
              value={region}
              disabled={lithuaniaMode ? true : false}
              onChange={(e) =>
                changeRegion(
                  e.target.value,
                  dispatch,
                  SET_REGION,
                  SET_SORTING,
                  sorting
                )
              }
            >
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white '
                value='All'
              >
                ALL
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value='Asia'
              >
                ASIA
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value='Europe'
              >
                EUROPE
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value='Americas'
              >
                AMERICAS
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value='Africa'
              >
                AFRICA
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value='Oceania'
              >
                OCEANIA
              </option>
            </select>
          </div>
        </div>

        <div className='flex gap-4'>
          <div
            className={
              lithuaniaMode
                ? 'h-12 w-20 border-4 border-green-500'
                : 'h-12 w-20'
            }
            onClick={() => {
              dispatch(SET_MODE(!lithuaniaMode));
              if (lithuaniaMode) {
                changeRegion('All', dispatch, SET_REGION, SET_SORTING, BIGGER);
              } else {
                changeRegion('All', dispatch, SET_REGION, SET_SORTING, BIGGER);
              }
            }}
          >
            <img src='https://flagcdn.com/lt.svg' className='h-full w-full' />
          </div>
          <div className='flex gap-2 w-min rounded-md'>
            <label
              className={`block ${
                theme === 'dark'
                  ? 'animate-[toDark_1s_ease_1]'
                  : 'animate-[toLight_1s_ease_1]'
              }`}
            >
              AREA SIZE
            </label>
            <select
              className='appearance-none bg-green-500 text-white rounded-md h-12 p-2 hover:bg-green-400 cursor-pointer focus:outline-none'
              value={compare_area}
              disabled={!lithuaniaMode ? true : false}
              onChange={(e) =>
                changeSorting(e.target.value, dispatch, SET_SORTING)
              }
            >
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value={BIGGER}
              >
                BIGGER THAN LITHUANIA
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value={SMALLER}
              >
                SMALLER THAN LITHUANIA
              </option>
            </select>
          </div>
        </div>

        <div className='flex border-2 w-max'>
          <label
            htmlFor='search'
            className='w-12 h-12 grid place-content-center'
          >
            <i
              className={`fa fa-search ${
                theme === 'dark'
                  ? 'animate-[toDark_1s_ease_1]'
                  : 'animate-[toLight_1s_ease_1]'
              }`}
            ></i>
          </label>
          <input
            id='search'
            name='search'
            value={searchQuery}
            placeholder='Enter a country name...'
            className='h-12 pl-2 outline-green-400 text-black'
            onChange={(e) => dispatch(SET_SEARCH_QUERY(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
