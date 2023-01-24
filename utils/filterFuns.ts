import {
  ASC,
  DESC,
  ALL,
  ASIA,
  EUROPE,
  AMERICAS,
  AFRICA,
  OCEANIA,
} from './constants';

export function changeSorting(
  sortValue: string,
  dispatch: Function,
  action: Function
) {
  if (sortValue === ASC) {
    dispatch(action(ASC));
  } else {
    dispatch(action(DESC));
  }
}

export function changeRegion(
  sortValue: string,
  dispatch: Function,
  action: Function
) {
  switch (sortValue) {
    case ALL:
      dispatch(action(ALL));
      break;
    case ASIA:
      dispatch(action(ASIA));
      break;
    case EUROPE:
      dispatch(action(EUROPE));
      break;
    case AMERICAS:
      dispatch(action(AMERICAS));
      break;
    case AFRICA:
      dispatch(action(AFRICA));
      break;
    case OCEANIA:
      dispatch(action(OCEANIA));
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
