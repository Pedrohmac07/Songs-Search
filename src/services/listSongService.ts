import { dataSongs } from "../data/songsdata";
import type { interfaceFilterSong } from "../models/filterSongModel";

export const serviceListSongs = async (): Promise<interfaceFilterSong> => {
  let responseFormat: interfaceFilterSong = {
    statusCode: 200,
    body: []
  };

  const data = await dataSongs();
  
  responseFormat = {
    statusCode: data.length !== 0 ? 200 : 204,
    body: data
  }

  return responseFormat;
};
