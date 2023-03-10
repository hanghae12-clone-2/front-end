import React from 'react';
import styled, { css } from 'styled-components';

export default function Img({ src, ...props }) {
  return <ImgStyle {...props} src={src} />;
}

const ImgStyle = styled.img`
  width: 40rem;
  height: 50rem;
  border-radius: ${props => props.theme.borderRadius.small};

  ${props =>
    props.regular &&
    css`
      height: 8rem;
      width: 8rem;
      object-fit: cover;
    `}

  ${props =>
    props.largeRegular &&
    css`
      height: 12rem;
      width: 12rem;
      object-fit: cover;
    `}

  ${props =>
    props.medium &&
    css`
      width: 15rem;
      height: 15rem;
    `}

    ${props =>
    props.large &&
    css`
      width: 40rem;
      height: 40rem;
    `}

    ${props =>
    props.small &&
    css`
      width: 3rem;
      height: 3rem;
    `}

    ${props =>
    props.fitCover &&
    css`
      object-fit: cover;
    `}
`;
