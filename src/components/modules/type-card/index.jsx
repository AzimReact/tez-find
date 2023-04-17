import { Card } from "antd";

export const TypeCard = ({
  title,
  image,
  defaultImage,
  onClick: handleClick,
  children
}) => {
  return (
      <Card
        hoverable
        onClick={handleClick}
        cover={<img alt="" src={image || defaultImage} />}
      >
        <h3>{title}</h3>
        {children}
      </Card>
  );
};
