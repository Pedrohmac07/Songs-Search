import { dataSongs } from "../data/songsdata";
import type { interfaceFilterSong } from "../models/filterSongModel";

export const serviceFilterSongs = async (artistName: string):Promise<interfaceFilterSong> => {
  let responseFormat: interfaceFilterSong = {
    statusCode: 0,
    body: []
  };

  const data = await dataSongs(artistName);

  // verify content
  if (data.length !== 0) {
    responseFormat.statusCode = 200;
  } else {
    responseFormat.statusCode = 204;
  }
  responseFormat.body = data;

  return responseFormat;
}