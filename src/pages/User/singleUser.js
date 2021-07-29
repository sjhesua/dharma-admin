
import React, { Component } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';

class SingleUserPage extends Component {
  constructor(props)//Para que se ejecute apenas se cree la clase
  {
      super(props);//Para jalar todas las funcionabilidades de extends Components
      let match = props.match;
      console.log(match)
      this.state = {//como session en php
          loading : true,
          restaurantes:[],
          userId : match.params.userId
      }

  }
  
    async componentDidMount()//apenas carga el componente
    {
        const res = await axios.get(`https://mozorun-backend.herokuapp.com/restaurants/${this.state.userId}`)
        .then(res => {
            this.setState({
                restaurantes:res.data,
                loading : false
            });
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    }

  render() {
      return (
          <div>
              {this.state.userId ? <h1> {this.state.userId} </h1>:<h1>No hay</h1>}
          </div>
      )
  }
}

export default SingleUserPage;