import { useState, useEffect } from 'react';
import { Container } from './styles/Container.styled';
import { StyledFormSection } from './styles/Form.styled';
import { animateScroll } from 'react-scroll';
import Alert from './Alert';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    isAgreed: false,
  });

  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });

  const scrollToFormSection = () => {
    animateScroll.scrollTo('#form-section', {
      smooth: 'easeInOutQuart',
      duration: 1000,
    });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, email, isAgreed } = formData;

    if (!firstName || !email || !isAgreed) {
      setAlert({
        show: true,
        type: 'dangerous',
        msg: 'Both of the fields and checkbox must be done.',
      });
      return;
    }

    setAlert({
      show: true,
      type: 'success',
      msg: `Message to ${email} has been sent! (No)`,
    });

    setFormData({
      firstName: '',
      email: '',
      isAgreed: false,
    });
  };

  return (
    <StyledFormSection>
      <Container>
        <div id="form-section">
          <form onSubmit={handleSubmit}>
            <img src="./images/hero.svg" alt="" />

            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <div>
              <input
                type="checkbox"
                name="isAgreed"
                id="isAgreed"
                checked={formData.isAgreed}
                onChange={handleChange}
              />
              <label htmlFor="isAgreed">Are you agree? </label>
            </div>

            <button type="submit">Submit</button>
            {alert.show && <Alert alert={alert} setAlert={setAlert} />}
          </form>
        </div>
      </Container>
    </StyledFormSection>
  );
}
