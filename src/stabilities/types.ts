type Price = {
  title: string;
  display: string;
}

type Inflation = {
  title: string;
  display: string;
}

type MarketCap = {
  title: string;
  display: string;
}

type CommunityPool = {
  title: string;
  display: string;
}

type Data = {
  total: Total;
  detail: Detail[];
}

type Total = {
  value: number;
  display: string;
}

type Detail = {
  title: string;
  value: number;
  display: string;
}

export interface Props {
  title: string;
  coin: string;
  price: Price;
  inflation: Inflation;
  marketCap: MarketCap;
  communityPool: CommunityPool;
  data: Data;
  classname?: string;
}
