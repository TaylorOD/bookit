import { combineReducers } from "redux";
import { allRoomsReducer } from "./roomRecucers";

const reducer = combineReducers({
  allRooms: allRoomsReducer
})

export default reducer