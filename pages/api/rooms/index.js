import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { allRooms, newRoom } from "../../../controllers/roomControllers"

dbConnect();

const handler = nc();

handler.get(allRooms)
handler.post(newRoom)

export default handler;