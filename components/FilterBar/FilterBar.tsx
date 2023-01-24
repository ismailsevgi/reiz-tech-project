import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTRY_OBJECT, STORE_STATE } from '@/utils/InterfacesAndTypes';
import { SET_SORTING, SET_REGION } from '@/Features/countriesSlice';
import { changeSorting, changeRegion } from '@/utils/filterFuns';

type Props = {};

function FilterBar({}: Props) {
  type store = {
    theme: 'light' | 'dark';
  };
  const dispatch = useDispatch();
  const sorting = useSelector((state: STORE_STATE) => state.countries.sorting);
  const region = useSelector((state: STORE_STATE) => state.countries.region);

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
              onChange={(e) =>
                changeSorting(e.target.value, dispatch, SET_SORTING)
              }
            >
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value='ASC'
              >
                ASCENDING
              </option>
              <option
                className='bg-green-500 text-white hover:bg-green-400 hover:text-white'
                value='DESC'
              >
                DESCENDING
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
              onChange={(e) =>
                changeRegion(e.target.value, dispatch, SET_REGION)
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
          {/* <div className='flex gap-2 w-min rounded-md items-center'>
            <label className='block'>AREA</label>
            <select
              className='appearance-none bg-green-500 text-white rounded-md h-12 p-2 hover:bg-green-400 cursor-pointer focus:outline-none text-center'
              value={region}
              onChange={(e) => changeRegion(e.target.value)}
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
          </div> */}
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
            placeholder='Enter a country name...'
            className='h-12 pl-2 outline-green-400'
          />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
