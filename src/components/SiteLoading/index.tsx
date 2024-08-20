import { Spin } from "antd";
import { FC } from "react";
import './SiteLoading.scss'

export const SiteLoading: FC = () => (
  <div className="site-loading">
    <Spin />
  </div>
);
