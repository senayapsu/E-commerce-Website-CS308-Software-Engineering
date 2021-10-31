import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: "black",
      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
    title: {
        flexGrow: 2,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        fontWeight: 'bold',
        color: "white",
      },
      text: {
        flexGrow: 2,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        color: "white",
      },
  }));