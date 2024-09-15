import './layout.scss';
import Footer from '../footer/footer';
import Header from '../header/header';
import PropTypes from 'prop-types';

const Layout = ({children}) => {


  return (
    <div className='layoutWrapper'>
      <Header />
      <div className='contentWrapper'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,  // 'node' permite cualquier tipo de contenido React (texto, elementos, etc.)
};

export default Layout;
