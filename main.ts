import {
  reverseString,
  countCharacters,
  upperLower,
} from "./utils/stringUtils.js";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sentence = "Node is good for everything :)";
console.log(countCharacters(sentence));
console.log(upperLower(sentence));
const reversedSentence = reverseString(sentence);

const saveToFile = async (fileName: string, data: string): Promise<void> => {
  try {
    await fs.writeFile(fileName, data);
    console.log(path.join(__dirname, fileName));
  } catch (error) {
    console.error(`Error writing file ${error}`);
  }
};

saveToFile("reversed.txt", reversedSentence);
