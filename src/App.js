

import Header from './components/Header'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './components/Theme';
function App()  {
  return (
    <ThemeProvider theme={Theme}>
    <Header/>
    
          
        </ThemeProvider>
  );
}

export default App;
