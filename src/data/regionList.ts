import { IRegionList } from "./data.types";
import UsImage from '../static/usa.jpg'
import EuImage from '../static/europe.jpg'
import AsiaImage from '../static/asia.png'
import SouthAmericaImage from '../static/south_america.png'

export const regionList: IRegionList[] = [
  {
    name: "United States East",
    value: "us-east",
    image: UsImage
  },
  {
    name: "United States West",
    value: "us-west",
    image: UsImage
  },
  {
    name: "Europe West",
    value: "eu-west",
    image: EuImage
  },
  {
    name: "Europe Central",
    value: "eu-central",
    image: EuImage
  },
  {
    name: "South America East",
    value: "sa-east",
    image: SouthAmericaImage
  },
  {
    name: "Asia Pacific South-East",
    value: "ap-southeast",
    image: AsiaImage
  }
];
