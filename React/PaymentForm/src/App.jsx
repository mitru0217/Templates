import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
import { theme } from './constant';
import PaymentForm from './components/PaymentForm';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PaymentForm />
    </ThemeProvider>
  );
};

export default App;
