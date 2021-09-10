import { Document, model, Schema } from "mongoose";
import shortId from 'shortid';


/**
 * Interface to model the URL Schema for TypeScript.
 */
export interface URL extends Document {
  fullURL: string,
  shortURL: string,
  clicks: number,
  date: Date
}

const urlSchema: Schema = new Schema({
  fullURL: {
    type: String,
    required: true
  },
  shortURL: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks : {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const url = model<URL>("ShortURL", urlSchema);

export default url;
