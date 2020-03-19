import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import axios from 'axios'


import './style/common.css'
import './style/based.css'
import './static/iconfont.css'
import 'antd/dist/antd.css'




import Logo from './Logo'
import Left from './Left'
import Login from './Login'
import Right from './Right';




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    

    render() {
        return (

                <div>
                    <Logo />
                    <Login />
                    <Left />
                    <Right />
                </div>

        );
    }
}

export default App;