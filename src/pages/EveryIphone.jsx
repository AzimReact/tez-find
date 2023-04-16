import React from "react";
import { useParams } from "react-router-dom";

export default function EveryIphone({ iphoneModels }) {
  const params = useParams();
  const thisIphone = {};
  for (const key in iphoneModels) {
    // Почему условие - if (allIphones[key] === params.title) - не работает???
    if (iphoneModels[key]["modelName"] === params.title) {
      Object.assign(thisIphone, iphoneModels[key]);
    }
  }
  // let { istore } = thisIphone;
  const allPrices = [];
  thisIphone["istore"].forEach((iphone) => {
    allPrices.push(+iphone["price"].slice(0, -4));
  });
  allPrices.sort((a, b) => a - b);
  console.log(allPrices);
  return (
    <div>
      <h2>{params.title}</h2>
      <div className="iphoneModel">
        <div>
          <img
            className="iphoneImage"
            src={thisIphone.image}
            alt={thisIphone.modelName}
          />
        </div>
        <div className="iphoneModel__settings">
          <h2>Цена:</h2>
          <div>
            Цена в диапозоне: ${allPrices[0]} - ${allPrices.pop()} сомов!
          </div>
        </div>
      </div>
    </div>
  );
}
