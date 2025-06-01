import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected path
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Placeholder components for routes
const Home = () => <div>Home Page</div>;
const Create = () => <div>Create Page</div>;
const Update = () => <div>Update Page</div>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>   
          <Route path='/' element={<user />} />
          <Route path='/create' element={<createuser />} />  
          <Route path='/update' element={<updateuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
