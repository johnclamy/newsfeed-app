import { Button, Container, Form } from 'react-bootstrap'

const Login = () => {
  return (
    <Container className="border border-info rounded m-1">
      <header className="mt-3">
        <h1 className="font-weight-bold text-info text-uppercase mb-3 h4">
          Login
        </h1>
      </header>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="info" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login