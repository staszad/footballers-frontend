export interface Req {
  data: {
    result: Array<{
      _id: string;
      name: string;
      role: string;
      __v: number;
    }>;
  };
  results: number;
}
