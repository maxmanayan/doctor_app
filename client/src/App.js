import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import Footer from './components/Footer';
import Doctors from './pages/Doctors';
import Doctor from './pages/Doctor';
import Patients from './pages/Patients';
import Patient from './pages/Patient';
import Appointments from './pages/Appointments';

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/doctors' component={Doctors} />
          <Route exact path='/doctors/:id' component={Doctor} />
          <Route exact path='/patients' component={Patients} />
          <Route exact path='/patients/:id' component={Patient} />
          <Route exact path='/appointments' component={Appointments} />
          <Route exact path='/componentDemo' component={ComponentDemo} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
