import React from 'react';
import { COUNTRY_OBJECT, STORE_STATE } from '@/utils/InterfacesAndTypes';
import styles from './Countries.module.scss';
import { useSelector } from 'react-redux';

function CountriesList() {
  const counter = {
    Asia: 50,
    Europe: 53,
    Africa: 60,
    Oceania: 27,
    Americas: 57,
  };

  //pull current region to decide which array should be.
  const region = useSelector((state: STORE_STATE) => state?.countries?.region!);

  console.log('Decide: ', region);

  //If current region is other than 'All' then pull the filteredArray otherwise use pure countries.
  const countries = useSelector(
    (state: STORE_STATE) =>
      state?.countries?.[region === 'All' ? 'countries' : 'filteredCountries']!
  );
  type store = {
    theme: 'light' | 'dark';
  };
  const theme = useSelector((state: store) => state?.theme);
  console.log('Theme: ', theme);

  console.log('Listeye ülkere geldi!', countries.slice(0, 10));

  return (
    <div
      className={`w-full bg-red-100 ${
        theme === 'dark'
          ? 'animate-[toDark_1s_ease_1] '
          : 'animate-[toLight_1s_ease_1]'
      } `}
    >
      <div className='w-full lg:w-2/3 px-6 lg:mx-auto lg:px-0 flex flex-col gap-5'>
        {countries.slice(0, 35).map((country) => {
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

export default CountriesList;
