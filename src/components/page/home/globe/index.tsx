import React, { useRef, useState } from "react";
import { useIsVisible } from "react-is-visible";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import axios from "axios";
import { API_TOKEN, API_LINK } from "../../../../config";

const Globe = () => {
  const nodeRef = useRef() as React.LegacyRef<HTMLButtonElement>;
  const isVisible = useIsVisible(nodeRef);
  const navigate = useNavigate();

  const style = {
    backgroundSize: isVisible ? "200%" : "100%",
    backgroundPosition: isVisible ? "center right" : "center center",
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`${API_LINK}/api/globes`);
      const globeData = res.data;
      setData(globeData.data);
    }
    getdata();
  }, []);

  console.log(data);
  return (
    <div className={styles.container}>
      <div style={style} className={styles.globe}>
        <button ref={nodeRef}>hello</button>
        {isVisible && (
          <>
            {data.map((item: any) => (
              <div
                className={styles.dots}
                style={{
                  top: `${item.attributes.Top}vh`,
                  left: `${item.attributes.Left}vw`,
                }}
                onClick={() => {
                  navigate("/tours");
                }}
              >
                {item.attributes.Name}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Globe;
