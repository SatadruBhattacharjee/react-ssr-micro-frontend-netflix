import React, { Component } from 'react'
import ReactDOM from "react-dom";

import Navbar from './components/Navbar'

ReactDOM.hydrate(<Navbar/>, document.getElementById('header'))
