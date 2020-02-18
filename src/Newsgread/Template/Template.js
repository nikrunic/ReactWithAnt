import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Template.css';
import { Layout, Menu } from 'antd';
import { Home } from '../Pages/Home';

// import { HeaderPage } from '../Components/HeaderPage/HeaderPage';
// import { FooterPage } from '../Components/FooterPage';

const { Item } = Menu;
const { Header, Content, Footer } = Layout;

class Template extends React.Component {


  render() {

    return (
      <Layout className="MarketLayout">
        <Header className="HeaderPage d-flex flex-column justify-content-center">
        <div className="container">
                <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="leftSide d-flex flex-row align-items-center">
                        <div className="logo d-flex flex-row">
                            {/* <CustIcon type="logo" /> */}
                        </div>
    
                        <Menu theme="light"  mode="horizontal">
                            <Item key="/home" >
                                <Link to="/home" >
                                    <span>HOME</span>
    
                                </Link>
                            </Item>
                            <Item key="/sell">
                                <Link to="/sell" >
                                    <span>SELL CONTENT</span>
                                </Link>
                            </Item>
                            <Item key="/purchase">
                                <Link to="/purchase" >
                                    <span>PURCHASE</span>
                                </Link>
                            </Item>
                            <Item key="/poolsloops">
                                <Link to="/poolsloops" >
                                    <span>POOLS &amp; LOOPS</span>
                                </Link>
                            </Item>
                            <Item key="/groups">
                                <Link to="/groups" >
                                    <span>GROUPS</span>
                                </Link>
                            </Item>
                            <Item key="/settings">
                                <Link to="/settings" >
                                    <span>SETTINGS</span>
                                </Link>
                            </Item>
                        </Menu>
                    </div>
                    <div className="rightSide d-flex flex-row align-items-center justify-content-end">
                        <div className="loginLink">
                        </div>
                        <div className="cart">
                            <div className="cartIcon">
                                <Link to="/cart" className="d-flex">
                                    <span className="d-flex flex-row align-items-center">
                                        {/* <CustIcon type="cart" className="mr-2" /> */}
                                        <span>MY CART</span>
                                    </span>
                                    <span className="cart_counter">{}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
        <Content className="wrapper" >
          <Switch>
            <Route path="/home" render={(props) => <Home/>} />
          </Switch>
        </Content>
        <Footer>
        </Footer>
      </Layout>

    );
  }
}


export {  Template };


