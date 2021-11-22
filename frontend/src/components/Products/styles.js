import { makeStyles } from '@material-ui/core/styles';
import background from '../../assets/soft.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));