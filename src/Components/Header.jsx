import { useHistory } from 'react-router-dom';

import {
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    let history = useHistory();
    function howTo(){
        history.push('/how-to-generate-data');
    }
    return (
        <div>
            <Navbar color="dark" expand="md">
                <NavbarBrand className="navbar-text" href="/">Dashboard</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="navbar-text" onClick={howTo}>Cómo generar datos</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )

}

export default Header;