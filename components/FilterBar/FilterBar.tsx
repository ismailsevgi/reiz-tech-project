import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTRY_OBJECT, REDUX_STORE_STATE } from '@/utils/InterfacesAndTypes';
import { withRouter } from 'next/router';

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
import useDeclaredHooks from '../DeclaredHooks/useDeclaredHooks';

type Props = {
  router: any;
};

function FilterBar({ router }: Props) {
  const { dispatch, theme, sorting, region, compare_area, lithuaniaMode } =
    useDeclaredHooks();

  const [searchQuery, setSearchQuery] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Debouncing function that calls the SET_SEARCH_QUERY action
  const handleSearch = useCallback(
    (query: string) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const id = setTimeout(() => {
        router.push('/?page=1', undefined, { shallow: true });
        dispatch(SET_SEARCH_QUERY(query));
      }, 500);
      setTimeoutId(id);
    },
    [timeoutId]
  );

  return (
    <div
      className={`min-h-max py-6  ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] '
          : 'animate-[toLight_1s_ease_1]'
      }`}
    >
      <div className='lg:w-2/3 mx-auto  border-green-500 px-6 lg:px-0 h-full flex justify-between items-center flex-wrap gap-4'>
        <div className='flex flex-wrap justify-start items-center gap-4'>
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
              className='appearance-none bg-green-600 text-white rounded-md h-12 p-2 hover:bg-green-500 cursor-pointer focus:outline-none'
              value={sorting}
              disabled={lithuaniaMode ? true : false}
              onChange={(e) => {
                router.push('/?page=1', undefined, { shallow: true });
                changeSorting(e.target.value, dispatch, SET_SORTING);
              }}
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
          <div className='flex gap-2 w-min rounded-md items-center '>
            <label className={`block ${theme === 'dark' && 'text-white'}`}>
              REGION
            </label>
            <select
              className='appearance-none bg-green-600 text-white rounded-md h-12 p-2 hover:bg-green-500 cursor-pointer focus:outline-none text-center'
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

        <div className='flex gap-4 '>
          <div
            className={
              lithuaniaMode
                ? 'h-12 w-20 border-4 border-green-600'
                : 'h-12 w-20'
            }
            onClick={() => {
              dispatch(SET_MODE(!lithuaniaMode));
              if (lithuaniaMode) {
                router.push('/?page=1', undefined, { shallow: true });
                changeRegion('All', dispatch, SET_REGION, SET_SORTING, BIGGER);
              } else {
                router.push('/?page=1', undefined, { shallow: true });
                changeRegion('All', dispatch, SET_REGION, SET_SORTING, BIGGER);
              }
            }}
          >
            <img
              src='https://flagcdn.com/lt.svg'
              className='h-full w-full'
              alt='lithuanianFlagMode'
            />
          </div>
          <div className='flex gap-2 w-min rounded-md'>
            <label
              className={`block ${
                theme === 'dark'
                  ? 'animate-[toDark_1s_ease_1]'
                  : 'animate-[toLight_1s_ease_1]'
              }`}
            >
              <span className='hidden sm:block'>AREA SIZE</span>
            </label>
            <select
              className='appearance-none bg-green-600 text-white rounded-md h-12 p-2 hover:bg-green-500 cursor-pointer focus:outline-none'
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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(FilterBar);
