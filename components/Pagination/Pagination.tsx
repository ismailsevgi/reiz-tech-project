import React from 'react';
import { useSelector } from 'react-redux';
import { COUNTRY_OBJECT, REDUX_STORE_STATE } from '@/utils/InterfacesAndTypes';
import { useRouter } from 'next/router';

type Props = {};

function Pagination({}: Props) {
  const theme = useSelector((state: REDUX_STORE_STATE) => state?.theme);
  const router = useRouter();

  const changePage = (direction: 'next' | 'prev') => {
    let page = router.query.page! as string;

    if (direction === 'next') {
      router.push(`/?page=${parseInt(page) + 1}`, undefined, { shallow: true });
    }

    if (direction === 'prev' && page > '1') {
      router.push(`/?page=${parseInt(page) - 1}`, undefined, {
        shallow: true,
      });
    }
  };

  return (
    <div
      id='pagination-wrapper'
      className={`h-24 w-full px-8 ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] '
          : 'animate-[toLight_1s_ease_1]'
      }`}
    >
      <div
        id='pagination'
        className='lg:w-1/3 mx-4 h-14 lg:mx-auto grid grid-cols-2 gap-4'
      >
        <div
          className={`h-full border-2 text-left pl-2 grid place-content-center cursor-pointer hover:bg-green-400 ease duration-300 ${
            theme === 'light' && 'bg-slate-200'
          }`}
          onClick={() => changePage('prev')}
        >
          <div className='flex gap-2 justify-center items-center'>
            <i className='fa-solid fa-arrow-left'></i>
            <span>PREV</span>
          </div>
        </div>

        <div
          className={`h-full border-2  text-right pr-2 grid place-content-center cursor-pointer hover:bg-green-400 ease duration-300 ${
            theme === 'light' && 'bg-slate-200'
          }`}
          onClick={() => changePage('next')}
        >
          <div className='flex gap-2 justify-center items-center'>
            <span>NEXT</span>
            <i className='fa-solid fa-arrow-right '></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
