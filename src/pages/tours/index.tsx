import axios from "axios";
import React, { useEffect, useState } from "react";
import Info from "../../components/page/tours/info";
import PreviousTours from "../../components/page/tours/previousTours";
import UpcommingTours from "../../components/page/tours/upcomingTours";
import { API_TOKEN } from "../../config";
import Footer from "../footer";

const Tours = () => {
  const [tours, setTours] = useState<any>({});

  useEffect(() => {
    async function getdata() {
      const config = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      };
      const res = await axios.get(
        "http://localhost:1337/api/tours?populate=*",
        config
      );
      const products = res.data;
      setTours(products);
    }
    getdata();
  }, []);

  console.log(tours);

  return (
    <div>
      <Info
        title={"What are Samagati Voyages?"}
        text={
          "We believe that redesigning the structure of\
             learning through travel is the need of the hour and\
              we are here to disrupt the taboo of taking GAP Days\
              /Week/Month and Year in India. "
        }
      />

      {tours.data ? <UpcommingTours data={tours?.data} /> : <h1></h1>}
      <Info
        title={"Our previous voyages"}
        text={
          "In our past voyages we experienced the city of\
                     Maheshwar in Madhya Pradesh to understand the story\
                      of a woman, Ahilya Bai Holkar - one of the top admini\
                      strators and rulers India has ever produced"
        }
      />
      <PreviousTours />

      <Footer />
    </div>
  );
};

export default Tours;
