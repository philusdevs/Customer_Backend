import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerListPage from './pages/CustomerListPage';
import CustomerFormPage from './pages/CustomerFormPage';
import CustomerDetailsPage from './pages/CustomerDetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/customers" element={<CustomerListPage />} />
      <Route path="/customers/new" element={<CustomerFormPage />} />
      <Route path="/customers/:id" element={<CustomerDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
