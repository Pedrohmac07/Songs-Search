import * as http from "http";

import { getFilterSongs, getListSongs } from "./controllers/mainController";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  // queryString
  const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

  // Route for listing all songs
  if (req.method === "GET" && baseUrl === "/api/list") {
    await getListSongs(req, res);
  }

  // Route for filtering songs by artist name

  if (req.method === "GET" && baseUrl === "/api/filter") {
    await getFilterSongs(req, res);
  }
};
