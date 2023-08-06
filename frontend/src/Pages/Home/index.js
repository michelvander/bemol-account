import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import './style.css';
import {api, api_cep} from '../../Services/api';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import 'alertifyjs/build/css/themes/semantic.css';

export const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [userData, setUserData] = useState({});
  const [labelError1, setLabelError1] = useState(false);
  const [labelError2, setLabelError2] = useState(false);
  const [labelError3, setLabelError3] = useState(false);
  const [labelError4, setLabelError4] = useState(false);
  const [labelError5, setLabelError5] = useState(false);
  const [labelError6, setLabelError6] = useState(false);
  const [labelError7, setLabelError7] = useState(false);
  const [labelError8, setLabelError8] = useState(false);
  const [labelError9, setLabelError9] = useState(false);
  const [labelError10, setLabelError10] = useState(false);
  const [labelError11, setLabelError11] = useState(false);
  const [labelError12, setLabelError12] = useState(false);

  useEffect(() => {
    setUserData({
      name: name,
      email: email,
      telephone: telephone,
      password: password,
      zip_code: zipCode,
      city: city,
      state: state,
      district: district,
      street: street,
      number: number,
      complement: complement
    })
  }, [name, email, telephone, password, zipCode, city, state, district, street, number, complement])

  const sendUser = () => {
    let error = false;

    if (name === '') {
      setLabelError1(true);
      error = true;
    } else {
      setLabelError1(false);
    }

    if (email === '') {
      setLabelError2(true);
      error = true;
    } else {
      setLabelError2(false);
    }

    if (telephone === '') {
      setLabelError3(true);
      error = true;
    } else {
      setLabelError3(false);
    }

    if (password === '') {
      setLabelError4(true);
      error = true;
    } else if(!equalPasswords(password, confirmPassword)){
      setLabelError12(true);
    } else {
      setLabelError4(false);
      setLabelError12(false);
    }

    if (zipCode === '') {
      setLabelError6(true);
      error = true;
    } else {
      setLabelError6(false);
    }

    if (number === '') {
      setLabelError10(true);
      error = true;
    } else {
      setLabelError10(false);
    }

    if (!error) {
      api
        .post('/user/create', userData)
        .then((response) => {
          alertify.success('Usuário cadastrado com sucesso!');
          setName('');
          setEmail('');
          setTelephone('');
          setPassword('');
          setConfirmPassword('');
          setZipCode('');
          setCity('');
          setState('');
          setDistrict('');
          setStreet('');
          setNumber('');
          setComplement('');
          setUserData('');
        })
        .catch((err) => {
          console.log('Error send user: ' + err);
        })

    }
  }

  const findCEP = () => {
    api_cep
    .get(zipCode + '/json/')
    .then((response) => {
      console.log(response);
      setCity(response.data.localidade);
      setState(response.data.uf);
      setDistrict(response.data.bairro);
      setStreet(response.data.logradouro);
      setLabelError6(false);
    })
    .catch((err) => {
      setLabelError6(true);
    })
  }

  const validateEmail = (email) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(validRegex.test(email)){
      setLabelError11(false);
      return true;
    } else {
      setLabelError11(true);
      return false;
    }
  }

  const equalPasswords = (pass1, pass2) => {
    if(pass1 === pass2){
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Header />
      <div className='main_div_home'>
        <div className='form_group_home'>
          <label>Nome</label>
          <input type='text' placeholder='Nome' value={name} onChange={e => setName(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError1 ? 'block' : 'none' }}>*Campo obrigatório</label>
        </div>
        <div className='form_group_home'>
          <label>E-mail</label>
          <input type='text' placeholder='E-mail' onBlur={e => validateEmail(e.target.value)} value={email} onChange={e => setEmail(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError2 ? 'block' : 'none' }}>*Campo obrigatório</label>
          <label className='required_label' style={{ display: labelError11 ? 'block' : 'none' }}>*E-mail inválido</label>
        </div>
        <div className='form_group_home'>
          <label>Telefone</label>
          <input type='text' placeholder='Telefone' value={telephone} onChange={e => setTelephone(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError3 ? 'block' : 'none' }}>*Campo obrigatório</label>
        </div>
        <div className='form_group_home'>
          <label>Senha</label>
          <input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError4 ? 'block' : 'none' }}>*Campo obrigatório</label>
          <label className='required_label' style={{ display: labelError12 ? 'block' : 'none' }}>*Senhas não conferem</label>
        </div>
        <div className='form_group_home'>
          <label>Confirmar senha</label>
          <input type='password' placeholder='Confirmar senha' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError5 ? 'block' : 'none' }}>*Campo obrigatório</label>
          <label className='required_label' style={{ display: labelError12 ? 'block' : 'none' }}>*Senhas não conferem</label>
        </div>
        <hr />
        <div className='form_group_home'>
          <label>CEP</label>
          <input type='text' placeholder='CEP' onBlur={findCEP} value={zipCode} onChange={e => setZipCode(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError6 ? 'block' : 'none' }}>*CEP não encontrado.</label>
        </div>
        <div className='form_group_home'>
          <label>Cidade</label>
          <input type='text' placeholder='Cidade' disabled={true} value={city} onChange={e => setCity(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError7 ? 'block' : 'none' }}>*Campo obrigatório</label>
        </div>
        <div className='form_group_home'>
          <label>Estado</label>
          <input type='text' placeholder='Estado' disabled={true} value={state} onChange={e => setState(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError8 ? 'block' : 'none' }}>*Campo obrigatório</label>
        </div>
        <div className='form_group_home'>
          <label>Bairro</label>
          <input type='text' placeholder='Bairro' disabled={true} value={district} onChange={e => setDistrict(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError8 ? 'block' : 'none' }}>*Campo obrigatório</label>
        </div>
        <div className='form_group_home'>
          <label>Rua</label>
          <input type='text' placeholder='Rua' disabled={true} value={street} onChange={e => setStreet(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError9 ? 'block' : 'none' }}>*Campo obrigatório</label>
        </div>
        <div className='form_group_home'>
          <label>Número</label>
          <input type='number' placeholder='Número' value={number} onChange={e => setNumber(e.target.value)}></input>
          <label className='required_label' style={{ display: labelError10 ? 'block' : 'none' }}>*Campo obrigatório</label>
        </div>
        <div className='form_group_home'>
          <label>Complemento</label>
          <input type='text' placeholder='Complemento' value={complement} onChange={e => setComplement(e.target.value)}></input>
        </div>
        <div className='button_div'>
          <button className='button' onClick={sendUser} >Cadastrar</button>
        </div>
      </div>
    </>
  );
}
