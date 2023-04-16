import { Card } from "antd";
import { useNavigate } from "react-router-dom";
const MyCard = ({ title, image, defaultImage }) => {
  const navigate = useNavigate();
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
      onClick={() => navigate(`/${title}`)}
    >
      <h3>{title}</h3>
    </Card>
  );
};
export default MyCard;
