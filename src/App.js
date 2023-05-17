import Contact from './components/Contact';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
