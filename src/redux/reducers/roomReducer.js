import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
  AVAILABLE_ROOM,
  FILTER_ROOM,
  SORT_ROOM
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
        ...state
        // isLoading: true
      };
    }
    case FETCH_ROOMS_SUCCESS: {
      return {
        ...state,
        // isLoading: false,
        allRooms: [...action.payload.data]
      };
    }
    case FETCH_ROOMS_FAILURE: {
      return {
        ...state,
        // isLoading: false,
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
    case FILTER_ROOM: {
      let temp = state.availableRooms.filter(
        room => room.floor === action.payload
      );
      if (action.payload === "") {
        return {
          ...state,
          filteredRooms: [...state.availableRooms]
        };
      }
      return {
        ...state,
        filteredRooms: [...temp]
      };
    }
    case SORT_ROOM: {
      let temp;
      if (action.payload === "asc") {
        temp = state.availableRooms.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
      } else {
        temp = state.availableRooms.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
      }
      return {
        ...state,
        availableRooms: [...temp]
      };
    }
    default:
      return state;
  }
};
