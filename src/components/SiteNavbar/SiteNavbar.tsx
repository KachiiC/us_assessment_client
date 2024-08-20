import { CloudServerOutlined, HomeOutlined } from "@ant-design/icons";
import { INavLinks } from "./SiteNavbar.types";
import { regionList } from "../../data/regionList";

export const navLinks: INavLinks[] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />
  },
  {
    key: "server",
    label: "Servers",
    icon: <CloudServerOutlined />,
    children: regionList.map(({ name, value }) => ({
      key: value,
      label: name
    }))
  }
];
