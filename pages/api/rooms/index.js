import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { allRooms } from "../../../controllers/roomControllers"

dbConnect();

const handler = nc();

handler.get(allRooms)

export default handler;