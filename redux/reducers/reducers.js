import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailsReducer } from "./roomRecucers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer
})

export default reducer