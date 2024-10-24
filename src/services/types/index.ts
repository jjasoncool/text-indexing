import DocType from "../../constants/DocType";
import { int } from "../../types/alias";

export type Doc = {
  id: int;
  type: DocType;
  sentences: string[];
  meta: Meta;
};

export type Meta = {
  id: int;
  hash: string;
  charCount: int;
  wordCount: int;
  sentenceCount: int;
};

export type Gdelt = {
  id: int;
  url: string;
  title: string;
  content: string;
};

export type Pubmed = {
  id: int;
  title: string;
  abstract: string;
};
