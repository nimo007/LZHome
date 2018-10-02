import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch } from 'react-router-dom'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

//components
import Home from './Home'
import Applicant from './Applicant'
import About from './About'

const { Header, Sider, Content } = Layout;

const mapStateToProps = (state, ownProps) => {
    return state
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    linkToHome: ()=>dispatch(push('/Home')),
    linkToApplicant: ()=>dispatch(push('/Applicant')),
    linkToAbout: ()=>dispatch(push('/About')),
})

@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['Home']} onClick={this.menuClicked}>
                        <Menu.Item key="Home">
                            <Icon type="user" />
                            <span>Home</span>
                        </Menu.Item>
                        <Menu.Item key="Applicant">
                            <Icon type="video-camera" />
                            <span>Application</span>
                        </Menu.Item>
                        <Menu.Item key="About">
                            <Icon type="upload" />
                            <span>About</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '20px 16px', padding: 20, background: '#fff', flex: 'auto' }}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/applicant" component={Applicant} />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    menuClicked = ({ item, key, keyPath }) => {
        const link = 'linkTo' + key
        this.props[link]()
    }
}

export default App