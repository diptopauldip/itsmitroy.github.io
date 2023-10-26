import styled, { css } from "styled-components";
// import IconLink from "./IconLink";

const common = css`
  background: var(--clr-btn-base);
  color: var(--clr-btn-light);
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    color: red;
    background: blue;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const Button = styled.button`
  // ${common};
  width: auto;
  height: auto;
  font-size: 12px;
  margin: 0px 0;
  padding: 1em;
  border-radius: 5px;
  width: fit-content;
`;

// export const IconButton = styled(IconLink)`
//   ${common};
//   display: inline-block;
//   /* max-width: 40px;
//   max-height: 40px; */
//   font-size: 18px;
//   text-align: center;
//   line-height: 0;
//   padding: 10px;
//   margin: 0px 0;
//   border-radius: 50%;
//   transition: 0.2s;

//   &:hover {
//     transform: scale(1.05);
//     transition: 0.2s;
//   }
// `;

export default Button;
