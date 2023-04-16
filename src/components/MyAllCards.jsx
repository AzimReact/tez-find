import React from "react";
import MyCard from "./MyCard";

export default function MyAllCards({ searchedIphones }) {
  return (
    <div className="all-cards">
      <h1>Все айфоны!</h1>
      <div className="cards">
        {searchedIphones.map((iphoneModel, i) => (
          <MyCard
            key={i}
            title={iphoneModel.modelName}
            image={iphoneModel.image}
            defaultImage="https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-670x540.jpg"
          />
        ))}
      </div>
    </div>
  );
}
