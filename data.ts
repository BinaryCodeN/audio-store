import S852 from './assets/S852.png';
import Earpods1 from './assets/earpods1.png';
import Earpods2 from './assets/earpods2.png';
import Airpods from './assets/airpods.png';
import Gerlax from './assets/gerlax.png';
import Borofone from './assets/borofone.png';

export interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  quantity?: number;
}

export const wiredHeadphones: Product[] = [
  {
    id: 1,
    img: S852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 2,
    img: Earpods1,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 3,
    img: Earpods2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 4,
    img: S852,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    id: 5,
    img: Earpods1,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
  {
    id: 6,
    img: Earpods2,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
  },
];

export const wirelessHeadphones: Product[] = [
  {
    id: 7,
    img: Airpods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
  },
  {
    id: 8,
    img: Gerlax,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
  },
  {
    id: 9,
    img: Borofone,
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
  },
];
