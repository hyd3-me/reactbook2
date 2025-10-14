import './App.css';
import Excel from './components/Excel';
import Discovery from './components/Discovery';

const isDiscovery = window.location.pathname.replace(/\//g, '') === 'discovery';

function App() {
  if (isDiscovery) {
    return <Discovery />;
  }
  return (
    <div>
      <Excel
        headers={['Name', 'Year']}
        initialData={[
          ['Charles', '1859'],
          ['Antoine', '1943'],
        ]}
      />
    </div>
  );
}

export default App;
