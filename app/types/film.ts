export type FilmDuration = "short" | "medium" | "long";

export type FilmGenre =
  | "drama"
  | "comedy"
  | "action"
  | "documentary"
  | "horror"
  | "thriller"
  | "animation"
  | "experimental";

export type CrewMember = {
  discipline: string;
  name: string;
};

export type FilmSubmission = {
  title: string;
  durationMinutes: number;
  durationType: FilmDuration;
  genres: FilmGenre[];
  shortDescription: string;
  longDescription: string;
  credits: CrewMember[];
};
