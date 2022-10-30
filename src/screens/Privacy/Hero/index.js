import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import { getContent } from "../../../helpers.js";

// const content = [
//   {
//     id: 1,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien nulla amet metus, fames nunc cras ornare. Quisque semper feugiat magnis nisi interdum diam. Dui gravida ut tristique aliquam nec nec enim, posuere turpis. Libero pellentesque dui volutpat lectus dui amet tortor. Quis auctor placerat morbi sit sem. Ullamcorper nulla malesuada congue massa. Leo iaculis ac enim quis. Vitae malesuada interdum euismod netus eget."
//   },
//   {
//     id: 2,
//     text: "Egestas sit fames nibh neque, enim, dui. Sit malesuada fames non tortor sem malesuada. Eu in tristique vel enim etiam fringilla commodo in semper. Porta mauris id fusce egestas blandit ornare pharetra pellentesque nunc. Et erat maecenas tempus molestie quis. Egestas scelerisque in interdum fringilla vitae ipsum eleifend."
//   },
//   {
//     id: 3,
//     text: "Accumsan ut at arcu magna vel. A sed tristique mollis sed viverra tortor. Enim, amet, varius amet, elit, malesuada ultricies. Ultrices ullamcorper fermentum maecenas aliquam. Viverra enim, orci, diam ullamcorper. Nisl magna ut proin platea ultrices consectetur dolor placerat."
//   },
//   {
//     id: 4,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien nulla amet metus, fames nunc cras ornare. Quisque semper feugiat magnis nisi interdum diam. Dui gravida ut tristique aliquam nec nec enim, posuere turpis. Libero pellentesque dui volutpat lectus dui amet tortor. Quis auctor placerat morbi sit sem. Ullamcorper nulla malesuada congue massa. Leo iaculis ac enim quis. Vitae malesuada interdum euismod netus eget."
//   },
//   {
//     id: 5,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien nulla amet metus, fames nunc cras ornare. Quisque semper feugiat magnis nisi interdum diam. Dui gravida ut tristique aliquam nec nec enim, posuere turpis. Libero pellentesque dui volutpat lectus dui amet tortor. Quis auctor placerat morbi sit sem. Ullamcorper nulla malesuada congue massa. Leo iaculis ac enim quis. Vitae malesuada interdum euismod netus eget."
//   },
//   {
//     id: 6,
//     text: "Accumsan ut at arcu magna vel. A sed tristique mollis sed viverra tortor. Enim, amet, varius amet, elit, malesuada ultricies. Ultrices ullamcorper fermentum maecenas aliquam. Viverra enim, orci, diam ullamcorper. Nisl magna ut proin platea ultrices consectetur dolor placerat."
//   }
// ];

const Hero = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getPrivacyContent() {
      try {
        const content = await getContent("privacy");
        setContent(content);
      } catch (error) {
        console.log(error);
      }
    }
    getPrivacyContent();
  }, []);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("hero", styles.title)}>Privacy Policy</h2>
        <div className={styles.info}>
          This policy is subject to permanent change and development, please review it periodically
        </div>

        <div className={styles.containerContent}>
          <div className={styles.content}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
