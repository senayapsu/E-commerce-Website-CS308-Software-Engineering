import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
root: 
{
    maxWidth: '100%',
    padding: 25,
    backgroundColor: "white", //rgba(0,0,0, 0.3) -> transparent background
    borderBottomLeftRadius : 0,
    borderBottomRightRadius: 0
},
media: 
{
    height: 200,
    padding: 250,
    paddingLeft: 550,
    paddingRight: 550,
    margin: 10,
},
cardActions: 
{
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius : 10,
    flex:1,
    
},
cardContent: 
{
    padding: 20,
    margin: 10,
    justifyContent: 'flex-center',
    borderRadius : 10,
    
},
}))