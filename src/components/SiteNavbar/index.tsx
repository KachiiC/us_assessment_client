import { MenuProps, Menu } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { navLinks } from "./SiteNavbar";

const SiteNavbar: FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    if (e.keyPath.includes("server")) {
      navigate(`/server/${e.key}`);
    } else {
      navigate(e.key === "home" ? "/" : `/${e.key}`);
    }
  };

  return <Menu onClick={onClick} mode="horizontal" items={navLinks} />;
};

export default SiteNavbar;
