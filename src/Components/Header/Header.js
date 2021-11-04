import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Sarker Travels</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/addyourchoice">Add Your Choice</Nav.Link>
                        <Nav.Link as={Link} to="/userlist">Your List</Nav.Link>
                        <Nav.Link as={Link} to="/alluserslist">See Total List</Nav.Link>
                        {user ?
                            <Navbar>
                                <Navbar.Text>
                                    Signed in as : {user}
                                </Navbar.Text>
                                <button className="btn btn-danger ms-2" onClick={logOut}>Logout</button>
                            </Navbar>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;
