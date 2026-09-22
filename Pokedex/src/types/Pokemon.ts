export interface Poke {
  id: number;
  name: string;
  premiered: string | null;
  height : number;
  weight : number;
  species: { name: string; url: string } | null;
  types: { name: string; url: string }[];
  image: { medium: string; original: string } | null;
}
