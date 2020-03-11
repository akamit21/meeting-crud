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

export const fetchRoomReducer = (state = initialState, action) => {
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
        rooms: action.payload
      };
    }
    case FETCH_ROOMS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export const availableRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case AVAILABLE_ROOM: {
      const { startDate, endDate } = action.payload;
      let sd = new Date(startDate);
      console.log(sd.getTime(), endDate);
      return state;
    }
    default:
      return state;
  }
};

// export const fetchRoomRequest = state => state.isLoading;
// export const fetchRoomSuccess = state => state.rooms;
// export const fetchRoomFailure = state => state.error;
