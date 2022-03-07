import { theme } from '@learn/theme';
import { DripsyProvider } from 'dripsy';
import Navigation from './navigation';

const App: React.FC = () => {
  return (
    <DripsyProvider theme={theme}>
      <Navigation />
    </DripsyProvider>
  );
};

export default App;
