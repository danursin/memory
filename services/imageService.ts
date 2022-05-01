import { Photo } from "../types";
import images from "./imageData";
import sampleSize from "lodash.samplesize";

export const getImages = async (n: number): Promise<Photo[]> => {
    return sampleSize(images, n);
};
