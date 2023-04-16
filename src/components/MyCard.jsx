import { Card } from "antd";
// const { Meta } = Card;
const MyCard = ({ title, image, defaultImage }) => {
  // const url =
  //   iphone.image ||
  //   "https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-670x540.jpg";
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={image || defaultImage} />}
    >
      <h3>{title}</h3>
      {/* <Meta title={iphone.title} description={iphone.price} /> */}
    </Card>
  );
};
export default MyCard;
