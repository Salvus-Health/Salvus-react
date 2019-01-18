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
    triangleClass:string;
}


class NavbarSection extends React.Component<INavbarProps, INavbarStates> {


    private navbarTransparent = "navbar-transparent";

    private navbarWhite = "navbar-white shadow";

    private triangleOpen = "menu-background-open col-6";

    private triangleClose ="menu-background";


    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isTop: true,
            myType: this.props.type,
            navbarClass: this.navbarTransparent,
            triangleClass:this.triangleClose
        };
    }

    public toggle() {
        if(this.state.isOpen){
            this.setState(
                {
                    isOpen: !this.state.isOpen,
                    triangleClass: this.triangleClose
                }
            )
        }
        else{
            this.setState(
                {
                    isOpen: !this.state.isOpen,
                    triangleClass: this.triangleOpen
                }
            )
        }
    }

    public componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {

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
                <div className={this.state.triangleClass}>
                    {/*<img src="/assets/images/navbar/menu.png"/>*/}

                </div>
                <Navbar className={this.state.navbarClass + " col-md-12"} expand="md">
                    <NavbarBrand className="row ">

                        <NavbarToggler onClick={this.toggle}>
                            Salvus
                        </NavbarToggler>

                    </NavbarBrand>

                    <Collapse isOpen={this.state.isOpen}
                              className="col-md-12"
                              navbar={true}>
                        <Nav className="col-6 " navbar={true}>
                            <NavItem>
                                <button type="button" className="btn navbar-options">Stories</button>
                            </NavItem>

                            <NavItem>
                                <button type="button"
                                        onClick={this.buttonClick.bind(this)}
                                        className="btn navbar-options nav-item ">{this.props.color}</button>
                            </NavItem>

                            <NavItem>
                                <button type="button" className="btn navbar-options nav-item">About us</button>

                            </NavItem>

                            <NavItem>
                                <button type="button" className="btn navbar-options nav-item">Create Account</button>
                            </NavItem>
                            <NavItem>
                                <button type="button" className="btn navbar-options nav-item sign-in-option">Sign in
                                </button>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
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