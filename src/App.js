import './App.css';
import Home from './Home';
import SecondView from './SecondView'
import ContactList from './ContactList'
import ContactDetailView from './ContactDetailView'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactData from './data.json';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const contacts = ContactData.map(contact => {
    return { ...contact, id: uuidv4() }
  })

  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <Link to="/"><div>Home</div></Link>
          <Link to="/contacts"><div>Contact List</div></Link>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/secondview" element={ <SecondView /> } />
          <Route path="/contacts" element={ <ContactList contacts={ contacts }/> } >
            <Route path=":contactId" element={ <ContactDetailView contacts={ contacts } /> } />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
