import './index.css';
import logo from './welcome.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function PublicPage() {
  return (
    <div className="Container">
        {/* <div className='align-right'>
        <Link to="/login" className='text-black'>Login</Link>
        </div> */}
     
      <h1>Selamat Datang di Aplikasi Cek Ongkir</h1>
      <img className="Logo" src={logo} alt="welcome"/><br/>
      <Link to="/login" className='btn btn-primary'>Login</Link>
    </div>
  );
}

export default PublicPage;
