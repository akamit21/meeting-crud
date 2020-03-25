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
  rooms: [],
  availableRooms: [],
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
      // console.log(startDate);
      let temp = [];
      state.allRooms.forEach(room => {
        let count = 0;
        // eslint-disable-next-line array-callback-return
        room.bookedDate.filter(function(x) {
          if (
            (startDate >= x.startDate && startDate <= x.endDate) ||
            (endDate >= x.startDate && endDate <= x.endDate)
          ) {
            count++;
          }
        });
        console.log(count);
        if (count === 0) {
          temp.push(room);
        }
      });
      console.log(temp);
      return {
        ...state,
        rooms: [...temp],
        availableRooms: [...temp]
      };
    }
    case FILTER_ROOM: {
      let temp = state.rooms.filter(
        room => room.floor === parseInt(action.payload)
      );
      if (action.payload === "") {
        return {
          ...state,
          availableRooms: [...state.availableRooms]
        };
      }
      return {
        ...state,
        availableRooms: [...temp]
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
