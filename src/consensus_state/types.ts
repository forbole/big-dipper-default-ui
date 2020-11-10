type Info = {
  price: number;
  inflation: number;
  marketCap: number;
  communityPool: number;
}
export interface Props {
  data: any;
  info: Info;
}
