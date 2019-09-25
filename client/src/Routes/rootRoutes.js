import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from '../components/Home/Home'
import Agencies from '../components/Agencies/Agencies'
import AgencyDetails from '../components/AgencyDetails/AgencyDetails'
import AgencyForm from '../components/AgencyForm/AgencyForm'
import Travels from '../components/Travels/Travels'
import TravelDetails from '../components/TravelDetails/TravelDetails'
import TravelsForm from '../components/TravelsForm/TravelsForm'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import EditAgency from '../components/EditAgency/EditAgency'
import EditTravel from '../components/EditTravel/EditTravel'

const RootRoutes = () => {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/agencies' component={Agencies} />
            <Route exact path='/agencies/agency/:id' component={AgencyDetails} />
            <Route exact path='/agencies/agency/:id/edit' component={EditAgency} />
            <Route exact path='/agencies/add' component={AgencyForm} />
            <Route exact path='/agencies/edit' component={EditAgency} />
            <Route exact path='/travels' component={Travels} />
            <Route exact path='/travels/travel/:id' component={TravelDetails} />
            <Route exact path='/travels/travel/:id/edit' component={EditTravel} />
            <Route exact path='/travels/add' component={TravelsForm} />
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}

export default RootRoutes