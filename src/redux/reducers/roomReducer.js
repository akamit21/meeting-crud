import {
  ADD_ROOM,
  AVAILABLE_ROOM,
  BOOK_ROOM,
  VIEW_ROOM,
  DELETE_ROOM,
  FILTER_ROOM,
  SORT_ROOM
} from "../actionType";

let ls = window.localStorage;
let initialState = {};
if (ls.getItem("rooms") != null) {
  let data = JSON.parse(ls.getItem("rooms"));
  initialState = {
    rooms: data,
    selected: data
  };
} else {
  initialState = {
    rooms: [],
    selected: []
  };
}

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROOM: {
      let temp = [...state.rooms, { ...action.payload }];
      ls.setItem("rooms", JSON.stringify(temp));
      return {
        ...state,
        rooms: [...state.rooms, { ...action.payload }],
        selected: [...state.rooms, { ...action.payload }]
      };
    }
    case AVAILABLE_ROOM: {
      let temp = state.rooms.filter(room => room.booked === false);
      return {
        ...state,
        selected: [...temp]
      };
    }
    case BOOK_ROOM: {
      let temp = state.rooms.map((room, index) => {
        if (index === action.payload) {
          let data = {
            floor: room.floor,
            name: room.name,
            capacity: room.capacity,
            price: room.price,
            booked: true
          };
          return data;
        } else {
          return room;
        }
      });
      ls.setItem("rooms", JSON.stringify(temp));
      return {
        ...state,
        selected: [...temp]
      };
    }
    case VIEW_ROOM: {
      return;
    }
    case DELETE_ROOM: {
      let temp = state.rooms.filter((_, index) => index !== action.payload);

      ls.setItem("rooms", JSON.stringify(temp));
      return {
        ...state,
        rooms: [...temp],
        selected: [...temp]
      };
    }
    case FILTER_ROOM: {
      let temp = state.rooms.filter(room => room.floor === action.payload);
      if (action.payload === "") {
        return {
          ...state,
          selected: [...state.rooms]
        };
      }
      return {
        ...state,
        selected: [...temp]
      };
    }
    case SORT_ROOM: {
      let temp;
      if (action.payload === "asc") {
        temp = state.rooms.sort((a, b) => Number(a.price) - Number(b.price));
      } else {
        temp = state.rooms.sort((a, b) => Number(b.price) - Number(a.price));
      }
      return {
        ...state,
        selected: [...temp]
      };
    }

    default:
      return state;
  }
};

export default roomReducer;
