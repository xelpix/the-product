import { socialIcons } from '../socialIcons.jsx';
import { Container } from '../components/styles/Container.styled';
import { StyledFooter } from './styles/Footer.styled.js';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <section>
          {socialIcons.map((icon, index) => {
            return (
              <li key={index}>
                <a href={icon.link}>{icon.icon}</a>
              </li>
            );
          })}
        </section>

        <p>&copy; 2023 The Product. All rights reserved. </p>
      </Container>
    </StyledFooter>
  );
}
