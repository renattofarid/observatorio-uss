import { API_URL } from "@/config/api";
import { Post } from "./posts";

export async function getHomeData(): Promise<HomeResponse> {
  const response = await fetch(`${API_URL}/posts/find/home`);
  const data = await response.json();
  return data;
}

export async function registerVisit(): Promise<number> {
  const response = await fetch(`${API_URL}/statistics/register-visit`, {
    method: "POST",
  });
  const data = await response.json();
  return data;
}

// Generated by https://quicktype.io

export interface HomeDataResponse {
  top: Post[];
  secondary: Post[];
  extras: Post[];
  tubes: Post[];
  reads: Post[];
}
// Generated by https://quicktype.io

export interface HomeResponse {
  "section-1": Editorial[];
  "editorial": Editorial[];
  "section-2": Editorial[];
  "section-3": Editorial[];
  "section-4": Editorial[];
}

export interface Editorial {
  postId: string;
  section: string;
  index: number;
  id: string;
  post: Post;
}

export enum Category {
  NEWS = "edu-news",
  BITS = "edu-bits",
  READS = "edu-reads",
  TUBES = "edu-tubes",
  PODCAST = "edu-podcast",
  EDITORIAL = "editorial",
}

// mapper para enum Category
export const categoryMapper: {
  [key in Category]: string;
} = {
  [Category.NEWS]: "Noticias",
  [Category.BITS]: "Educando",
  [Category.READS]: "Lecturas",
  [Category.TUBES]: "AudioVisual",
  [Category.PODCAST]: "Podcast",
  [Category.EDITORIAL]: "Mensaje Editorial",
};
export const categoryMapperLink: any = {
  [Category.NEWS]: "news",
  [Category.BITS]: "educating",
  [Category.READS]: "reads",
  [Category.TUBES]: "tube",
  [Category.PODCAST]: "podcast",
  [Category.EDITORIAL]: "news",
};

export type HomeSection =
  | "section-1"
  | "section-2"
  | "section-3"
  | "section-4"
  | "editorial";
