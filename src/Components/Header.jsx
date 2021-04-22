import React from 'react';
import {
    DropdownItem,
    DropdownToggle,
    NavbarBrand,
    UncontrolledDropdown,
    Navbar,
    DropdownMenu,
    Nav
} from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Navbar color="dark" expand="md">
                <NavbarBrand>Dashboard MeLi</NavbarBrand>
                <Nav className="mr-auto" navbar>
                </Nav>
                <UncontrolledDropdown>
                    <DropdownToggle>
                        Options
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Item 1</DropdownItem>
                        <DropdownItem>Item 2</DropdownItem>
                        <DropdownItem>Item 3</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Navbar>
        </div>
    )

}

export default Header;