import Octicon, {ThreeBars} from "@githubprimer/octicons-react";
import * as React from 'react';
import {SyntheticEvent} from "react";
import {
    Collapse,
    // DropdownItem,
    // DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    // NavLink,
    // UncontrolledDropdown
} from "reactstrap";
// import DropdownMenu from "reactstrap/lib/DropdownMenu";
import "./NavbarSection.css"


interface INavbarProps {
    color?: 'blue' | 'green' | 'yellow';
    type: "hello";
}

interface INavbarStates {
    isOpen: boolean;
    isTop: boolean;
    // myRef: RefObject<HTMLDivElement>;
    myType: string;
    navbarClass: string;
    triangleClass: string;
    menuCStyle: any
}


class NavbarSection extends React.Component<INavbarProps, INavbarStates> {


    private navbarTransparent = "navbar-transparent";

    private navbarWhite = "navbar-white shadow";

    private triangleOpen = "menu-background-open shadow-lg col-6";

    private triangleClose = "menu-background";


    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isTop: true,
            menuCStyle: {},
            myType: this.props.type,
            navbarClass: this.navbarTransparent,
            triangleClass: this.triangleClose
        };
    }

    public toggle() {
        if (this.state.isOpen) {
            this.setState(
                {
                    isOpen: !this.state.isOpen,
                    menuCStyle: {overflow: "hidden"},
                    navbarClass: this.navbarTransparent,
                    triangleClass: this.triangleClose
                }
            )
        }
        else {
            this.setState(
                {
                    isOpen: !this.state.isOpen,
                    menuCStyle: {overflow: "visible"},
                    navbarClass: "nav-mobile-white",
                    triangleClass: this.triangleOpen
                }
            )
        }
    }

    public componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                if (this.state.isOpen) {
                    return;
                }

                if (isTop === true) {
                    // alert("transparent");;
                    this.setState({isTop, navbarClass: this.navbarTransparent});
                } else {
                    // alert("white");
                    this.setState({isTop, navbarClass: this.navbarWhite});
                }
            }
        });
    }


    public render() {

        return (

            <div className="col-md-12 fixed-top" style={{padding: "0px"}}>


                {/*<div className={"menu-container"} style={this.state.menuCStyle}>*/}
                {/*<div className={this.state.triangleClass}/>*/}
                {/*</div>*/}
                <Navbar className={this.state.navbarClass + " col-sm-3 col-md-12 col-6"} expand="md">

                    <NavbarBrand className="brand-nb">
                        <img src="logo.ico" style={{width:'2vw', marginLeft:'2vw'}} />
                    </NavbarBrand>


                    <NavbarToggler onClick={this.toggle} style={{backgroundColor: "white"}}>
                        <Octicon icon={ThreeBars}/>
                    </NavbarToggler>


                    <Collapse isOpen={this.state.isOpen}
                              className="justify-nav"
                              navbar={true} >
                        <Nav className=" " navbar={true}>
                            <NavItem className={"nav-op-c"}>
                                <button type="button"
                                        onClick={this.buttonClick.bind(this)}
                                        className="btn navbar-options nav-item ">{this.props.color}</button>
                            </NavItem>

                            <NavItem className={"nav-op-c"}>
                                <button type="button" className="btn navbar-options">Stories</button>
                            </NavItem>


                            <NavItem className={"nav-op-c"}>
                                <button type="button" className="btn navbar-options nav-item">About us</button>

                            </NavItem>

                            <NavItem className={"nav-op-c"}>
                                <button type="button" className="btn navbar-options nav-item">Create Account</button>
                            </NavItem>
                            <NavItem className={"nav-op-c"}>
                                <button type="button" className="btn navbar-options nav-item sign-in-option">Sign in
                                </button>
                            </NavItem>

                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        )
            ;
    }

    private buttonClick(e: SyntheticEvent) {
        // tslint:disable-next-line:no-console
        console.log(e);
        // tslint:disable-next-line:no-debugger
        debugger;
        // tslint:disable-next-line:no-console
        console.log(this.state.myType);
    }

}

export default NavbarSection;


// {/*<NavItem>*/}
// {/*<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
// {/*</NavItem>*/}
// {/*<UncontrolledDropdown nav={true} inNavbar={true}>*/}
// {/*<DropdownToggle nav={true} caret={true}>*/}
// {/*Options*/}
// {/*</DropdownToggle>*/}
// {/*<DropdownMenu right={true}>*/}
// {/*<DropdownItem>*/}
// {/*Option 1*/}
// {/*</DropdownItem>*/}
// {/*<DropdownItem>*/}
// {/*Option 2*/}
// {/*</DropdownItem>*/}
// {/*<DropdownItem divider={true}/>*/}
// {/*<DropdownItem>*/}
// {/*Reset*/}
// {/*</DropdownItem>*/}
// {/*</DropdownMenu>*/}
// {/*</UncontrolledDropdown>*/}