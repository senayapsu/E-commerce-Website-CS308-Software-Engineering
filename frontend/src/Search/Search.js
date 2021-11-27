import React, { useState, useEffect } from 'react';
import background from '../assets/soft.jpg';
import Categories from "../components/Categories"
import {Grid} from "@material-ui/core";
import axios from "axios";
import Product from '../components/Products/Product/Product';
import useStyles from "../components/Products/Product/styles";
/*
const getProducts = async (what) => {
  var res = await axios
  .get('http://localhost:3003/search?search=' + what)
  .then(response => {
      console.log("in response");
      console.log(response);
      return response.data;
      });
  console.log(res);
  };


class Search extends Component {
  
    constructor(props) {
        super(props);
        //this.userClick = false;
        //this.products = [];
        this.state = {
          search:  "",
          products: [],
          userClick: false,
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.check = localStorage.getItem("isLoggedIn");
      }
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        axios
        .get('http://localhost:3003/search?search=' + this.state.search)
        .then(response => {
            this.state.userClick = true;
            this.state.products = response.data;
            
          });
      }
        render() {
          console.log(this.state.userClick);
          if(!this.state.userClick){
            return(
            <div style={{justifyContent: 'center', backgroundImage:`url(${background})` }}> 
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30}}>
                <h1> Search Page </h1>
                </div>
                <form onSubmit={this.handleSubmit} style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
                    <label htmlFor="header-search"> 
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search Products"
                        name="search" 
                        onChange={this.handleChange}
                    />
                    <button  onClick={this.handleSubmit} type="submit">Search</button>
                </form>
                <Categories/>
            </div> 
            );}
            else
            {
              console.log("aaaaa");
              return (
                  <div style={{margin: 40, backgroundImage: `url(${background})`,}} >
                  <Grid container justifyContent="center" spacing={4}>
                    {this.state.products.map((product) => (
                      <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                      </Grid>
                    ))}
                  </Grid>
                  </div>
                
              )
            }
        }
}

export default Search;
*/

var searchText = "";
var userClick = false;

var products = [];

const getProducts = async (what) => {
  var res = await axios.get('http://localhost:3003/search?search=' + what)
  products = res.data;
  return res.data;
};

const handleChange = (event) => {
  searchText = event.target.value;
}

const handleSubmit = (event) => {
  event.preventDefault();
  userClick = true;
}


const Search  = (props) => 
{
    const [apiResponse, setApiResponse] = useState([]);
    const [dummy, setDummy] = useState(1);
    const classes = useStyles();
    
    useEffect(() => {
      console.log("useEffect");
      getProducts(searchText).then(
        (res) => setApiResponse(res));
    }, [dummy])

    if (!userClick)
    return (
      <div style={{justifyContent: 'center', backgroundImage:`url(${background})` }}> 
      <div style={{ display: 'flex', justifyContent: 'center', padding: 30}}>
          <h1> Search Page </h1>
          </div>
          <form style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
              <label htmlFor="header-search"> 
              </label>
              <input
                  type="text"
                  id="header-search"
                  placeholder="Search Products"
                  name="search" 
                  onChange={handleChange}
              />
              <button onClick={(event) => {handleSubmit(event); setDummy(dummy+1);}}>Search</button>
          </form>
          <Categories/>
      </div> 
    );
    else {
      return(
        <div style={{justifyContent: 'center', backgroundImage:`url(${background})` }}> 
      <div style={{ display: 'flex', justifyContent: 'center', padding: 30}}>
          <h1> Search Page </h1>
          </div>
          <form style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
              <label htmlFor="header-search"> 
              </label>
              <input
                  type="text"
                  id="header-search"
                  placeholder="Search Products"
                  name="search" 
                  onChange={handleChange}
              />
              <button onClick={(event) => {handleSubmit(event); setDummy(dummy+1);}}>Search</button>
          </form>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
              {apiResponse.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </main>
      </div> 
      )
    }
}

export default Search;