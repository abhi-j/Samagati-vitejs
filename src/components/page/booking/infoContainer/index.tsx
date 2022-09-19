import React from "react";
import Corousal from "./corousal";
import InfoText from "./infotext";
import styles from "./styles.module.scss";
import { API_LINK } from "../../../../config";

const InfoContainer = () => {
  const data = JSON.parse(localStorage.getItem("selected") as string);
  console.log(data);
  return (
    <div className={styles.container}>
      <Corousal />
      <div className={styles.infoContainer}>
        <InfoText heading="Overview" paragraph={data.attributes.description} />
        <InfoText
          heading="Itinerary along with inclusions and exclusions"
          paragraph={`We believe that redesigning the structure of learning
                 through travel is the need of the hour and we are here
                  to disrupt the taboo of taking GAP Days/Week/Month and Year in India.`}
        />
        <InfoText
          heading="Terms and Conditions"
          paragraph={`We believe that redesigning the structure of learning
                 through travel is the need of the hour and we are here
                  to disrupt the taboo of taking GAP Days/Week/Month and Year in India.`}
        />
        <InfoText
          heading="Cancellation Policy"
          paragraph={`We believe that redesigning the structure of learning
                 through travel is the need of the hour and we are here
                  to disrupt the taboo of taking GAP Days/Week/Month and Year in India.`}
        />
      </div>
    </div>
  );
};

export default InfoContainer;
