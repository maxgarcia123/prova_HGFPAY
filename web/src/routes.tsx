import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import PatientForm from './pages/PatientForm';
import DoctorFom from './pages/DoctorForm';
import FormSchedule from './pages/FormSchedule'

function Routes() {
    return(
        <BrowserRouter> 
           <Route path="/" exact component={Home}/>
           <Route path="/CadastrarMedicos" component={DoctorFom}/>
           <Route path="/CadastrarPacientes" component={PatientForm}/>
           <Route path="/Agendar" component={FormSchedule}/>
        </BrowserRouter>
    )
}

export default Routes;