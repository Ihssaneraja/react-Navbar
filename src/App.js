
import { Container, Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#about">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h1 className='my-5'>Welcome to My React App</h1>
        <Card className='mb-3'>
          <Card.Body >
            <Card.Title>Card 1</Card.Title>
            <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi tempore sapiente quisquam distinctio ipsum numquam tenetur reprehenderit officiis magni nesciunt suscipit cum quod, quidem rem minima, quam a obcaecati. </Card.Text>
          </Card.Body>
        </Card>
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas consequatur libero suscipit illo corporis architecto omnis, earum assumenda vitae nesciunt quasi animi cumque incidunt vel asperiores perferendis! Saepe, voluptas vero? </Card.Text>
          </Card.Body>
        </Card>
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ratione repellat esse impedit soluta ad error repellendus, repudiandae unde eius molestiae autem perferendis ab sapiente fugiat velit, commodi deleniti amet.</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
    
    
    
    
    
    
    </>
  );
}

export default App;
