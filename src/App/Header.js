/* global PROJECT_NAME */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    Nav,
    Navbar,
    NavbarToggler,
    Collapse,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarBrand
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPowerOff,
    faUserCircle,
    faUser,
    faKey
} from '@fortawesome/free-solid-svg-icons';
import IntersectionVisible from 'react-intersection-visible';

import {getFullName} from '@util/ui';
import {requestSignOut} from '@state/Session/actions';
import {getUser} from '@state/Session/selectors';
import {Snackbar} from '@components/common';
import routes from '@constants/routes';
import NavItems from './Routes/NavItems';

class Header extends Component {
    static propTypes = {
        user: PropTypes.shape({
            roles: PropTypes.arrayOf(PropTypes.string)
        }),
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }),
        requestSignOut: PropTypes.func.isRequired
    };

    static defaultProps = {
        user: undefined,
        history: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isCollapse: false,
            dropdownOpen: false,
            isVisible: true
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }

    onHide() {
        this.setState(() => ({isVisible: false}));
    }

    onShow() {
        this.setState(() => ({isVisible: true}));
    }

    toggleNavbar() {
        this.setState(prevState => ({
            isCollapse: !prevState.isCollapse
        }));
    }

    redirect(to) {
        const {history} = this.props;
        history.push(to);
    }

    render() {
        const {
            user
        } = this.props;
        const {isVisible} = this.state;
        return (
            <div>
                <IntersectionVisible
                    onHide={e => this.onHide(e)}
                    onShow={e => this.onShow(e)}
                >
                    <header className="d-print-none">
                        <Navbar expand="lg" fixed={!isVisible ? 'top' : ''} >
                            <NavbarBrand tag={Link} to="/" className="ml-2 text-white">
                                {PROJECT_NAME}
                            </NavbarBrand>
                            <NavbarToggler onClick={() => this.toggleNavbar()} style={{color: 'fff'}}/>
                            <Collapse isOpen={this.state.isCollapse} navbar>
                                <NavItems redirect={route => this.redirect(route)} userRoles={user.roles}/>
                                <Nav className="ml-auto" navbar>
                                    <Dropdown
                                        nav
                                        inNavbar
                                        isOpen={this.state.dropdownOpen}
                                        onMouseOver={this.onMouseEnter}
                                        onFocus={this.onMouseEnter}
                                        onMouseLeave={this.onMouseLeave}
                                        onClick={this.onMouseEnter}
                                    >
                                        <DropdownToggle nav caret>
                                            <FontAwesomeIcon icon={faUserCircle}/>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <h6>
                                                    <strong>
                                                        {user && getFullName(user)}
                                                    </strong>
                                                </h6>
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem onClick={() => this.redirect(routes.ACCOUNT)}>
                                                <FontAwesomeIcon icon={faUser}/>
                                                &nbsp;&nbsp; Mi Perfil
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem onClick={() => this.redirect(routes.ACCOUNT_PASSWORD)}>
                                                <FontAwesomeIcon icon={faKey}/>
                                                &nbsp;&nbsp; Cambio Contraseña
                                            </DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem onClick={() => this.props.requestSignOut()}>
                                                <FontAwesomeIcon icon={faPowerOff}/>
                                                &nbsp;&nbsp; Cerrar sesión
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </header>
                </IntersectionVisible>
                <Snackbar/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: getUser(state)
});

export default withRouter(connect(
    mapStateToProps,
    dispatch => ({
        requestSignOut: () => dispatch(requestSignOut())
    })
)(Header));
