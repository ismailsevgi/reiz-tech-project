import React, { useEffect, useState } from 'react';
import { COUNTRY_OBJECT, REDUX_STORE_STATE } from '@/utils/InterfacesAndTypes';
import styles from './Countries.module.scss';
import { useSelector } from 'react-redux';
import { withRouter } from 'next/router';
import useDeclaredHooks from '../DeclaredHooks/useDeclaredHooks';

function CountriesList({ router }: { router: any }) {
  const [pageState, setPageState] = useState([0, 10]);
  const { theme, lithuaniaMode, countries, allCountries } = useDeclaredHooks();
  function getDynamicSlice(pageValue: any) {
    //scrolling to absolute top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    let startValue = (pageValue - 1) * 10;
    let endValue = startValue + 10;

    if (startValue && endValue) {
      return [startValue, endValue];
    } else {
      router.push('/?page=1', undefined, { shallow: true });
      return [0, 10];
    }
  }

  useEffect(() => {
    console.log('useEffect: ', router.query.page);
    setPageState(getDynamicSlice(router.query.page));
  }, [router.query.page]);

  const lithuaniaElement = allCountries.find(
    (country: COUNTRY_OBJECT) => country.name === 'Lithuania'
  );

  return (
    <div
      className={`w-full bg-red-100 ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] '
          : 'animate-[toLight_1s_ease_1]'
      } `}
    >
      {lithuaniaElement && lithuaniaMode && (
        <div
          key={lithuaniaElement.alpha2Code}
          className=' lg:w-2/3 mx-6 relative lg:mx-auto lg:px-0'
          style={{
            backgroundImage: `url(${lithuaniaElement.flag})`,
            height: '250px',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className={styles.FlagBackground}></div>

          <div className={styles.CountrySpecs}>
            <h1 className='text-2xl md:text-4xl tracking-wider text-orange-400'>
              {lithuaniaElement.name}
            </h1>
            <p className='tracking-wider text-xl'>
              Capital : {lithuaniaElement.capital}
            </p>
            <p className='tracking-wider text-xl'>
              Region : {lithuaniaElement.region}
            </p>
            <p className='tracking-wider text-xl'>
              AREA : {new Intl.NumberFormat().format(lithuaniaElement.area)} km
              <sup className='tracking-wider '>2</sup>
            </p>
            <p className='tracking-wider text-xl'>
              Region :{' '}
              {new Intl.NumberFormat().format(lithuaniaElement.population)}
            </p>
          </div>
        </div>
      )}
      <div className='w-full lg:w-2/3 min-h-screen px-6 py-12 lg:mx-auto lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {countries.slice(...pageState).map((country: COUNTRY_OBJECT) => {
          return (
            <div
              key={country.alpha2Code}
              className={styles.Country}
              style={{
                backgroundImage: `url(${country.flag})`,
                height: '250px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <div className={styles.FlagBackground}></div>

              <div className={styles.CountrySpecs}>
                <h1 className='text-2xl md:text-4xl tracking-wider'>
                  {country.name}
                </h1>
                <p className='tracking-wider text-xl'>
                  Capital : {country.capital}
                </p>
                <p className='tracking-wider text-xl'>
                  Region : {country.region}
                </p>
                <p className='tracking-wider text-xl'>
                  AREA : {new Intl.NumberFormat().format(country.area)} km
                  <sup className='tracking-wider '>2</sup>
                </p>
                <p className='tracking-wider text-xl'>
                  Region : {new Intl.NumberFormat().format(country.population)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withRouter(CountriesList);
