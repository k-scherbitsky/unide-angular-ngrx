export interface IPeopleApiModel {
  height: string;
  name: string;
  gender: string;
  created: string;
  edited: string;
}

export interface ISwapiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>
}
