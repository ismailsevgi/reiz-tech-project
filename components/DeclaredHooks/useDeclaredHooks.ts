import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTRY_OBJECT, REDUX_STORE_STATE } from '@/utils/InterfacesAndTypes';

function useDeclaredHooks() {
  const sorting = useSelector(
    (state: REDUX_STORE_STATE) => state.countries.sorting
  );
  const region = useSelector(
    (state: REDUX_STORE_STATE) => state.countries.region
  );

  const compare_area = useSelector(
    (state: REDUX_STORE_STATE) => state.countries.compare_area
  );
  const lithuaniaMode = useSelector(
    (state: REDUX_STORE_STATE) => state.countries.lithuaniaMode
  );
  const theme = useSelector((state: REDUX_STORE_STATE) => state?.theme);

  //If current region is other than 'All' then pull the filteredArray otherwise use pure countries.
  const countries = useSelector(
    (state: REDUX_STORE_STATE) => state?.countries?.filteredCountries
  );

  const allCountries = useSelector(
    (state: REDUX_STORE_STATE) => state?.countries?.countries!
  );

  //Ready to use functions
  const dispatch = useDispatch();
  const router = useRouter();
  return {
    dispatch,
    router,
    theme,
    sorting,
    region,
    compare_area,
    lithuaniaMode,
    countries,
    allCountries,
  };
}

export default useDeclaredHooks;
