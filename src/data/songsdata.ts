import type { promises } from "dns";
import fs from "fs";
import path from "path";
import { interfaceSong } from "../models/songModel";

const pathData = path.join(__dirname, "../data/song.json");

export const dataSongs = async (artistName?: string): Promise<interfaceSong[]> => {
  const data = await fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(data);

  if(artistName) {
    jsonFile = jsonFile.filter((song: interfaceSong) => song.artistName === artistName);
  }
  
  return jsonFile;
};
