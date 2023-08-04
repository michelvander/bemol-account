import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './style.css';
import api from '../../Services/api';

export const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState({});
  const [labelError1, setLabelError1] = useState(false);
  const [labelError2, setLabelError2] = useState(false);

  useEffect(()=> {
    setUserData({
      name: name,
      email: email
    })
  }, [name, email])

  const sendUser = () => {
    let error = false;

    if(name === ''){
        setLabelError1(true);
        error = true;
    } else {
        setLabelError1(false);
    }

    if(email === ''){
        setLabelError2(true);
        error = true;
    } else {
        setLabelError2(false);
    }

    if(!error){
      api
      .post('/user/create', userData)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log('Error send user: ' + err);
      })

    }
  }

  return (
    <>
    <Header />
    <div className='main_div_home'>
      <div className='form_group_home'>
        <label>Nome</label>
        <input type='text' placeholder='Nome' value={name} onChange={e => setName(e.target.value)}></input>
        <label className='required_label' style={{display: labelError1 ? 'block' : 'none' }}>Required field</label>
      </div>
      <div className='form_group_home'>
        <label>E-mail</label>
        <input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}></input>
        <label className='required_label' style={{display: labelError2 ? 'block' : 'none' }}>Required field</label>
      </div>
      <div className='button_div'>
        <button className='button' onClick={sendUser} >Cadastrar</button>
      </div>
    </div>
    </>
  );
}
