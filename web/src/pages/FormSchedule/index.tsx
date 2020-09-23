import React, { useState, FormEvent } from "react";

import api from '../../services/api'

function FormSchedule() {
           const[name,setName] = useState('');
           const[sexo,setSexo] = useState('');
           const[cpf,setCpf] = useState('');
           const[rg,setRg] = useState('');
           const[cidade,setCidade] = useState('');
           const[consultationDate,setconsultationDate] = useState('');
           const[codigo,setCodigo] = useState('');
           const[salario,setSalario] = useState('');
           
           
           async function handleSubimit(e: FormEvent) {
              e.preventDefault(); 
              const response = await api.post('./Pessoas',{
                  name,
                  sexo,
                  cpf,
                  rg,
                  cidade,
                  consultationDate,
                  codigo,
                  salario
              })
              console.log(response.data);
           }

          return(
              <div className="container col-10 col-md-6 col-lg-4 formsigup" >

                    <div className="row">
                    
                    <div className="col-12 text-center my-5">
                        <h1 className="display-6 fonte" style={{color:"black"}}> Agende seu Horário</h1>
                    </div>

                    </div>

                    <div className="row mb-5">
                       <div className="col-12 ">
                         
                           <form style={{height:"800px"}} onSubmit={handleSubimit}>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        
                                        <label htmlFor="inputName" className="fonte">Nome</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="nome da cidade" 
                                        required value={name} onChange={e =>setName(e.target.value)} name="nome"></input>
                                    </div>
                                    <div className="form-group col-12">
                                            <label htmlFor="inputCodigo3" className="fonte">Data da consulta</label>
                                            <input type="date" className="form-control" placeholder="Dia da consulta" 
                                             required value={consultationDate} onChange={e =>setconsultationDate(e.target.value)} name="consultationDate"/>
                                    </div>
                                    <div className="form-group col-12">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <label htmlFor="inputCodigo3" className="fonte">Data da consulta</label>
                                                    <input type="date" className="form-control" placeholder="Dia da consulta" 
                                                    required value={consultationDate} onChange={e =>setconsultationDate(e.target.value)} name="consultationDate"/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="inputCodigo3" className="fonte">Data da consulta</label>
                                                    <input type="date" className="form-control" placeholder="Dia da consulta" 
                                                    required value={consultationDate} onChange={e =>setconsultationDate(e.target.value)} name="consultationDate"/>
                                                </div>
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
    
export default FormSchedule;