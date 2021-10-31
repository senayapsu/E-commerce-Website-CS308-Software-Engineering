import { makeStyles } from "@material-ui/core";
export default makeStyles(() => ({
root: 
{
    maxWidth: '100%',
    padding: 5,
    backgroundColor: "white", //rgba(0,0,0, 0.3) -> transparent background
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
},
media: 
{
    height: 0,
    paddingTop: '56.25%'
},
cardActions: 
{
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius : 10,
    
},
cardContent: 
{
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius : 10,
    
},
}))