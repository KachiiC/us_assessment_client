import { Card } from "antd";

interface IHomeCards {
  image: string;
  name: string;
  value: string;
}

export const HomeCard = ({ image, name, value }: IHomeCards) => {
  const { Meta } = Card;

  const homeCardStyles = {
    width: "300px",
    marginRight: "24px",
    marginBottom: "24px"
  };

  return (
    <Card style={homeCardStyles} cover={<img alt="example" src={image} className="home-cards-single"/>}>
      <Meta title={value} description={name}/>
    </Card>
  );
};
