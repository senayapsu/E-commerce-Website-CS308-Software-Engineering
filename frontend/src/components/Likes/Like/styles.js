import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
root: 
{
    maxWidth: '100%',
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)", 
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
},
media: 
{
    height: 0,
    padding: 100,
},
cardActions: 
{
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius : 10,
    
},
cardContent: 
{
    
    justifyContent: 'space-between',
    borderRadius : 10,
    
},
}))
