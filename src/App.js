import { Route, Routes } from 'react-router-dom';
import './App.css';
import PublicPage from './Pages/Welcome';
import Auth from './Pages/Auth';
import AppCekOngkir from './Pages/App'

function App() {
//const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/app" element={<AppCekOngkir />} />
      </Routes>
    </div>
  );
}

export default App;
