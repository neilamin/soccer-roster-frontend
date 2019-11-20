import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import DashboardView from "../views/Dashboard/DashboardView"

export default () => (
    <Router>
        <Route path="/" exact component={DashboardView} />
    </Router>
)