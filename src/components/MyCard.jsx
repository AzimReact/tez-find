import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const MyCard = ({ title, image, defaultImage }) => {
  const navigate = useNavigate()

  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      onClick={() => navigate(title)}
      cover={<img alt="example" src={image || defaultImage} />}
    >
      <h3>{title}</h3>
    </Card>
  );
};
export default MyCard;
