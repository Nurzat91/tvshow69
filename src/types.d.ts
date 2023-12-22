export interface Shows {
  id: string;
  name: string;
  description: string;
  image: string;
}

export type ApiShows = Omit<Shows,  'description', 'image'>;

export interface ShowsList {
  [id: string]:ApiShows;
}