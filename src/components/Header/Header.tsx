import { useState } from "react";
import * as S from "./styles"
import {FiLogIn , FiLogOut, FiShoppingCart} from 'react-icons/fi'
import { Cart } from "../Cart/Cart";
import {} from 'redux'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/UserRedux/user-slice";

export const Header: React.FC = ()=>{
    const {user} = useSelector((rootReducer: RootReducer)=>rootReducer.userReducer)

    const dispatch = useDispatch ()

   

    const [showCart, setShowCart] = useState(false);
    const isLogged = user != null;

    function handleUserAuth (){
        //usuário não está logado
        if(user===null){
            dispatch(login({
                name: '',
                email: ''
            }))

            //dispara a action de login
         

        } else{
            dispatch(logout({}))
            
        }

    }

    return(
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>
                
                <S.ButtonWrapper>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>{isLogged ? "Logout": "Login" } {isLogged ? <FiLogOut/> : <FiLogIn/>}  </S.AuthButton>
                    
                    <S.CartButton onClick={() => setShowCart(!showCart)}>Carrinho <FiShoppingCart/></S.CartButton>   
                </S.ButtonWrapper>

            </S.Wrapper>

            <Cart showCart = {showCart} />

        </S.StyledHeader>
    )
}