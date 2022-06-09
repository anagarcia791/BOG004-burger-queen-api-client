// IMPORTACION HOOKS Y OTROS
import { Link, Outlet} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LogOut } from '../../components/shared/LogOut.js';
import logoLaBurger from '../../assets/images/laBurgLogo.png';

// COMPONENTE COCINA CON B. DE NAVEGACION PARA COCINA
export const Kitchen = () => {
  return (
    <>
      <Navbar expand='sm' className='general-nav'>
        <Container>
          <Navbar.Brand>
            <img
              alt='logo-la-burger'
              src={logoLaBurger}
              className='d-inline-block align-top general-nav-img'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='general-nav-toggle'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto general-nav-dir'>
              <Link to='/kitchen'>Ordenes</Link>
              <Link to='/kitchen/delivered-orders' data-testid='nav-kitchen-delivered-orders'>Pedidos Entregados</Link>
              <LogOut/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className='general-selected-component'>
        <Outlet/>
      </section>
    </>
  )
}
