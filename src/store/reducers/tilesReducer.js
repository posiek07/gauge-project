import * as actionTypes from '../actions/actionTypes';

const initialState = [
  {
    start: '20:02',
    end: '21:15',
    type: 'personal',
    id: '1',
  },
  {
    start: '15:03',
    end: '19:15',
    type: 'buisness',
    id: '2',
  },
  {
    start: '13:20',
    end: '13:50',
    type: 'buisness',
    id: '3',
  },
  {
    start: '16:20',
    end: '19:15',
    type: 'personal',
    id: '4',
  },
  {
    start: '10:10',
    end: '14:20',
    type: 'buisness ',
  },
  {
    start: '20:05',
    end: '21:15',
    type: 'personal',
    id: '5',
  },
  {
    start: '13:23',
    end: '13:50',
    type: 'buisness',
    id: '6',
  },
  {
    start: '16:24',
    end: '19:15',
    type: 'personal',
    id: '7',
  },
  {
    start: '10:12',
    end: '14:20',
    type: 'buisness ',
    id: '8',
  },
  {
    start: '20:01',
    end: '21:15',
    type: 'personal',
    id: '9',
  },
];

export const tilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ITEM:
      const newState = [...state].filter((item) => item.id !== action.itemId);
      return newState;
    default:
      return state;
  }
};
