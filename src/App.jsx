import { useState } from 'react';

// styled components:
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';

// JSX:
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const theme = {
    colors: {
      mainWhite: 'whitesmoke',
      mainDark: '#222',
      darkestDark: '#111111',
      lightSlate: '#dce6eca4',
      darkSlate: '#60616285',
      gold: 'rgb(250, 171, 35)',
      snake: '#ffde59',
    },
    darkMode: isDarkMode,
    mobile: '768px',
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header handleTheme={handleTheme} isDarkMode={isDarkMode} />
        <Hero />
        <Reviews />
        <Form />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
