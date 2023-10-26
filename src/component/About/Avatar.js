import React from "react";
import Image from "../gatsby/Image";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const AvatarWrapper = styled.div`
  width: 230px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid pink;
  overflow: hidden;
  margin: 0;
  background-color: transparent;
`;

const Avatar = ({ imageSrc }) => {
  return (
    <AvatarWrapper>
      {/* <Image src={imageSrc} />
       */}
      <GatsbyImage image={imageSrc} alt='about image'></GatsbyImage>
    </AvatarWrapper>
  );
};

export default Avatar;
