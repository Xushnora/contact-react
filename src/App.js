import './App.css';
import Rows from './components/Layout/Layout';
import NewContact from './components/Main/NewContact/NewContact';
import OldContact from './components/Main/OldContact/OldContact';
import Container from './UI/Container/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Rows>
          <NewContact />
          <OldContact />
        </Rows>
      </Container>
    </div>
  );
}

export default App;
