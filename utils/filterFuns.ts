import { ALL, ASIA, EUROPE, AMERICAS, AFRICA, OCEANIA } from './constants';

export function changeSorting(
  sortValue: string,
  dispatch: Function,
  action: Function
) {
  dispatch(action(sortValue));
}

export function changeRegion(
  sortValue: string,
  dispatch: Function,
  regionAction: Function,
  sortingAction: Function,
  currentSorting: string
) {
  switch (sortValue) {
    case ALL:
      dispatch(regionAction(ALL));
      dispatch(sortingAction(currentSorting));
      break;
    case ASIA:
      dispatch(regionAction(ASIA));
      dispatch(sortingAction(currentSorting));
      break;
    case EUROPE:
      dispatch(regionAction(EUROPE));
      dispatch(sortingAction(currentSorting));
      break;
    case AMERICAS:
      dispatch(regionAction(AMERICAS));
      dispatch(sortingAction(currentSorting));
      break;
    case AFRICA:
      dispatch(regionAction(AFRICA));
      dispatch(sortingAction(currentSorting));
      break;
    case OCEANIA:
      dispatch(regionAction(OCEANIA));
      dispatch(sortingAction(currentSorting));
      break;
  }
  //   if (sortValue === ALL) {
  //     dispatch(action(ALL));
  //   }
  //   if (sortValue === ASIA) {
  //     dispatch(action(ASIA));
  //   }
  //   if (sortValue === EUROPE) {
  //     dispatch(action(EUROPE));
  //   }
  //   if (sortValue === AMERICAS) {
  //     dispatch(action(AMERICAS));
  //   }
  //   if (sortValue === AFRICA) {
  //     dispatch(action(AFRICA));
  //   }
  //   if (sortValue === OCEANIA) {
  //     dispatch(action(OCEANIA));
  //   }
}
