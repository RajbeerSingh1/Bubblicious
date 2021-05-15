import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
  p {
    margin: 2rem 0 0 0;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Bubblicious {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
