export interface Sheep {
  id: number;
  name: string;
  species: string;
  description: string;
  imageUrl: string;
  likes: number;
  category: 'military'|'science'|'movie'|'unknown';
}
