export interface Storie {
  userId: string;
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}
export interface StorieContainer {
  data: Storie[];
}
