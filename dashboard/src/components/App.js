import './App.css';
//import {
//  BrowserRouter, Routes, Route
//} from 'react-router-dom'
//import ResultsPage from './results/ResultsPage';
//import SearchPage from './search/SearchPage';
import NavigationBar from './common/NavigationBar'
import Layout from './common/Layout';
import Footer from './common/Footer';
import TestCropList from './images/TestCropList';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Layout></Layout>
      <TestCropList></TestCropList>
      <Footer />
    </div>
  );
}

export default App;

/*

<BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<ResultsPage />} />
                  <Route path="search" element={<SearchPage />} />
              </Route>
          </Routes>
      </BrowserRouter>

*/
