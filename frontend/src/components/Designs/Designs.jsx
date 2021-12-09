import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import Design from './Design/Design';
import useStyles from './styles';
import axios from "axios";
import styled from "styled-components";

const Hr = styled.hr`
    background-color: white;
    border: none;
    height: 1px;
`;
const getProducts = async () => {

    const res = await axios.get("http://localhost:3003/design_ideas");
    console.log(res.data);
    return res.data;

};


const Designs = (props) => // Produtcs var. is a fuction which does not take a parameter
{
    const [apiResponse, setApiResponse] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
      getProducts().then(
        (res) => setApiResponse(res));
    }, [])

    return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justifyContent="center" spacing={20}>
          <Grid margin="10" padding="10">
            {apiResponse.map((design) => (
              <Grid justifycontent='center'align-items='center' margin="10" padding="10" key={design.id} item xs={50} sm={20} md={50} lg={15}>
                <Design  margin="100" padding="100" design={design} /> 
                <Hr/>
              </Grid>
            ))}
             </Grid>
          </Grid>
        </main>
      );
}

export default Designs;