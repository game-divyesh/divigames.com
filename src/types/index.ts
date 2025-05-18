export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string[];
  rating: number;
  plays: number;
  isNew?: boolean;
  isTrending?: boolean;
  url?: string;
}

export type Category = {
  id: string;
  name: string;
  slug: string;
};