import { FC } from "react";
import { Card } from "antd";
import { regionList } from "../../data/regionList";
import { HomeCard } from "./HomeCards";
import { HomeTitle } from "./HomeTitle";
import "./Home.scss";
import SiteNavbar from "../../components/SiteNavbar";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  const { Grid } = Card;

  const displayedHomeCards = regionList.map(({ name, value, image }, index) => (
    <Link key={index} to={`/server/${value}`} className="home-cards-link">
      <HomeCard name={name} value={value} image={image} key={index} />
    </Link>
  ));

  return (
    <>
      <SiteNavbar />
      <div className="page-container">
        <HomeTitle />
        <Grid className="home-cards">{displayedHomeCards}</Grid>
      </div>
    </>
  );
};
