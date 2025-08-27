import { IncomingMessage, ServerResponse } from "http";

import { serviceListSongs } from "../services/listSongService";
import { serviceFilterSongs } from "../services/filterSongService";

export const dataSongs = async (songName: string): Promise<any> => {
  // Dummy implementation, replace with actual logic
  return { name: songName, data: "Song data goes here" };
};

export const getListSongs = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListSongs();

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterSongs = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queryString = req.url?.split("?s=")[1] || "";
  const decodedQuery = decodeURIComponent(queryString.replace(/\+/g, " "));

  const content = await serviceFilterSongs(decodedQuery);

  res.writeHead(content.statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify(content.body));
};

export const getDataSongs = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const songName = req.url?.split("/").pop() || "";
  const data = await dataSongs(songName);

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
};
