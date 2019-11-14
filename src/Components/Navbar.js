import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import ButtonContainer from './Button';
import styled from 'styled-components';

function Navbar () {
   
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            
               <Link to="/">
                    <img src={logo} alt="Store" className="navbar-brand" />
               </Link> 
               
                <ul className="navbar-nav align-items-center">
                    <li className="li-items ml-5">
                        <Link to="/" className="nav-link">
                            AshAvi Creations
                        </Link>
                    </li>
                </ul>
                <Link to ="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                         My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>

        );
    }

    const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        font-family: Gabriola;
    }
    `
export default Navbar;
