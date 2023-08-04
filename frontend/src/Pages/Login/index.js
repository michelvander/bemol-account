import './style.css';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/semantic.css';

export const Login = () => {
    const navigate = useNavigate();
    const [operatorId, setOperatorId] = useState('');

    const userLogin = () => {
        if(operatorId.length < 1){
            alertify.error('Invalid operator id')
        } else {
            alertify.success('Success!');
            sessionStorage.setItem('operatorId', operatorId);
            navigate('/home');
        }
    }

    const keyPress = (e) => {
        if (e.key === "Enter") {
            userLogin();
        }
    }

    return (
        <>
        <Header setButtonVisible={false}/>
        <div className='login_div'>
            <input type='number' placeHolder='Operator' onKeyPress={(e) => keyPress(e)} onChange={(e) => setOperatorId(e.target.value)}></input>
            <button className='button' onClick={userLogin}>Login</button>
        </div>
        </>
    );
}