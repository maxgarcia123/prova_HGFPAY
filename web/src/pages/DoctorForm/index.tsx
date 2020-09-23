import React, { useState, FormEvent } from "react";
import NavBar from "../../components/navBar";

import api from '../../services/api'

function DoctorForm() {
const[name,setName] = useState('');
           const[sex,setSex] = useState('');
           const[cpf,setCpf] = useState('');
           const[rg,setRg] = useState('');
           const[city,setCity] = useState('');
           const[dateBirth,setDateBirth] = useState('');         
           const[cep,setconsultationDate] = useState('');
           const[street,setStreet] = useState('');
           const[addressNumber,setAddressNumber] = useState('');
           const[sector,setSector] = useState('');
           const[hourWork,setHourWork] = useState('');
           
           
           
           
           async function handleSubimit(e: FormEvent) {
              e.preventDefault(); 
              await api.post('./DoctorForm',{
                  name,
                  sex,
                  cpf,
                  rg,
                  city,
                  cep,
                  street,
                  addressNumber,
                  dateBirth
              }).then(() => alert("cadastrado com sucesso")).catch((res) => console.log(res))
             
           }

          return(
              <div className="container col-10 col-md-6 col-lg-4 formsigup" >
                   <header style={{ marginTop: "3.5rem" }}>
                       <NavBar/>
                   </header>

                   <div className="row">
                    
                    <div className="col-12 text-center my-5">
                        <h1 className="display-6 fonte" style={{color:"black"}}> Cadastro de médico</h1>
                    </div>

                    </div>

                    <div className="row mb-5">
                       <div className="col-12 ">
                         
                           <form style={{height:"800px"}} onSubmit={handleSubimit}>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        
                                        <label htmlFor="inputName" className="fonte">Nome</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="nome" 
                                        required value={name} onChange={e =>setName(e.target.value)} name="name"></input>
                                    </div>
                                   
                                    <div className="form-group col-12">
                                        <label className="my-1 mr-2 fonte" htmlFor="inlineFormCustomSelectPref">Sexo</label>
                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"  
                                         value={sex} onChange={e =>setSex(e.target.value)}>
                                            <option selected>-</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                            <option value="feminino">Outro</option>
                                        </select>
                                     </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Cpf</label>
                                            <input type="number" className="form-control" placeholder="Cpf" 
                                             required value={cpf} onChange={e =>setCpf(e.target.value)} name="cpf"></input>
                                    </div>

                                    <div className="form-group col-12">
                                            <label htmlFor="inputRg" className="fonte">RG</label>
                                            <input type="number" className="form-control" placeholder="RG" 
                                             required value={rg} onChange={e =>setRg(e.target.value)} name="rg"></input>
                                    </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Data nacimento</label>
                                            <input type="date" className="form-control" placeholder="Data nacimento" 
                                             required value={dateBirth} onChange={e =>setDateBirth(e.target.value)} name="dateBirth"></input>
                                    </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Cidade</label>
                                            <input type="text" className="form-control" placeholder="Cidade" 
                                             required value={city} onChange={e =>setCity(e.target.value)} name="city"></input>
                                    </div>
                                    <div className="form-group col-12">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label htmlFor="inputCodigo3" className="fonte">Rua</label>
                                                    <input type="text" className="form-control" placeholder="Rua" 
                                                    required value={street} onChange={e =>setStreet(e.target.value)} name="street"/>
                                                </div>
                                                <div className="col-lg-3">
                                                    <label htmlFor="inputCodigo3" className="fonte">Numero</label>
                                                    <input type="text" className="form-control" placeholder="Numero" 
                                                    required value={addressNumber} onChange={e =>setAddressNumber(e.target.value)} name="addresNumber"/>
                                                </div>
                                                <div className="col-lg-3">
                                                    <label htmlFor="inputCodigo3" className="fonte">CEP</label>
                                                    <input type="text" className="form-control" placeholder="Numero" 
                                                    required value={cep} onChange={e =>setconsultationDate(e.target.value)} name="consultationDate"/>
                                                </div>
                                            </div> 
                                    </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Setor</label>
                                            <input type="text" className="form-control" placeholder="Setor" 
                                             required value={sector} onChange={e =>setSector(e.target.value)} name="sector"></input>
                                    </div>
                                    <div className="row">
                                                <div className="col-lg-6">
                                                    <label htmlFor="inputCodigo3" className="fonte">Data da consulta</label>
                                                    <input type="time" className="form-control" placeholder="Dia da consulta" 
                                                    required value={hourWork} onChange={e =>setconsultationDate(e.target.value)} name="hourWork"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="inputCodigo3" className="fonte">Data da consulta</label>
                                                    <input type="time" className="form-control" placeholder="Dia da consulta" 
                                                    required value={hourWork} onChange={e =>setHourWork(e.target.value)} name="hourwork"/>
                                                </div>
                                            </div> 
                                   </div>  
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                                </form>

                       </div> 
                    </div>
              </div>
              
          )
      }
    
export default DoctorForm;