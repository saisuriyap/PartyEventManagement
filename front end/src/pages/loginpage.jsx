import {
    Container,
    Header,
    Content,
    Footer,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid
  } from 'rsuite';
  import { Link } from 'react-router-dom';
  const Login = () => (
    <div className="show-fake-browser login-page">
      <Container >
        <Header>
        <Navbar style={{ backgroundColor:'#239f9f' }}>
  <Navbar.Brand>
    <a style={{ color: '#fff' }}>EventPlanner</a>
  </Navbar.Brand>
</Navbar>

        </Header>
        <Content style={{marginTop:"10vh"}}>
            <div >
          <FlexboxGrid justify="center" align='middle'>
            <FlexboxGrid.Item colspan={12} style={{width:500}}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <Form.Group>
                    <Form.ControlLabel>Username or email address</Form.ControlLabel>
                    <Form.Control name="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                  </Form.Group>
                  <Form.Group>
                  <ButtonToolbar>
  <Button appearance="primary" color="cyan"><Link to={'/home'}>Login</Link></Button>
  <Button appearance="link" color="cyan">Forgot password?</Button>
  <br/>
  <br></br>
  <Button appearance="primary" color="cyan"><Link to='/register'>Sign Up</Link></Button>
</ButtonToolbar>

                  </Form.Group>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          </div>
        </Content>
        
      </Container>
    </div>
  );
  export default Login