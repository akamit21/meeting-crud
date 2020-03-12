import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
  AVAILABLE_ROOM
} from "../actionType";

let initialState = {
  isLoading: false,
  error: null,
  allRooms: [],
  availableRooms: [],
  filteredRooms: [],
  bookedRooms: []
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_ROOMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        allRooms: [...action.payload.data]
      };
    }
    case FETCH_ROOMS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case AVAILABLE_ROOM: {
      const { startDate, endDate } = action.payload;
      let temp = state.allRooms.filter(room => room.isBooked === false);
      console.log(temp);
      return {
        ...state,
        availableRooms: [...temp]
      };
    }
    default:
      return state;
  }
};
