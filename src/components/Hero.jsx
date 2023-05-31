import { StyledHero } from './styles/Hero.styled';
import { Container } from './styles/Container.styled';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <section>
          <div>
            <h1>The Product</h1>
            <p>
              This is The Product you've always wanted. This is The Product many of your friends
              doesn't have yet. Time to make The decision.
            </p>
            <Link to="form-section" smooth={true} duration={1000}>
              <button>Explore</button>
            </Link>
          </div>
          <img src="./images/hero.svg" />
        </section>
      </Container>
    </StyledHero>
  );
}
