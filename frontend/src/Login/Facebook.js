import React, { Component } from 'react';
import  FacebookLogin  from 'react-facebook-login';


export default class Facebook extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          name: "",
          hasAgreed: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(e) {
        e.preventDefault();
    
        console.log("The form was submitted with the following data:");
        console.log(this.state);
        axios
            .post('https://lapss-cs308.herokuapp.com/add_user',
                {
                "username": this.state.name,
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password,
                })
                .then(response => {
                console.log("in response");
                console.log(response);
                
                this.props.history.push("/Login");
                }
                )
                .catch(function (error) {
                console.log("in error");
                console.log(error.response.data);
                });
      }

    state ={
        
        isLoggedIn: false,
        userID: '',
        name:'',
        email: '',
        picture: '',
    };
    responseFacebook = response => {
        //console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email:response.email,
            picture: response.picture.data.url
        });
    };
    componentClicked = () => this.handleSubmit;
    render() {
        let fbContent;
        if(this.state.isLoggedIn)
        {
            fbContent = (<div style= {{
                width: '400px',
                margin: 'auto',
                background:'#f4f4f4',
                padding:'20px'
            }}>
                <img src={this.state.picture} alt={this.state.name}/>
                <h2> Welcome {this.state.name} </h2>
                Email: {this.state.email}
            </div>);
        }
        else
        {
            fbContent = (<FacebookLogin
                appId="1059570218143042"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }
        return <div>{fbContent}</div>
        
    }
}
