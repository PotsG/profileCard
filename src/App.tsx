import './App.scss';
import Card from './components/card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';

const  App = () => {
  library.add(fab, fas);

  return (
    <main className="container">
      <Card />
    </main>
  );
};

export default App;


