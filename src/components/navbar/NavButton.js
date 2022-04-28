import { Typography, Button } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const AppBarButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    color: theme.palette.primary.light,
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0),
        padding: theme.spacing(0.3)
    }
}));

const NavButton = (props) => {
    return (
        <Link to={props.path} onClick={props.onClick} style={{ textDecoration: 'none' }}>
            {props.pageButton ?
                (<Button variant='pageButton' component='span'>{props.children}</Button>)
                :
                (<AppBarButton variant={props.buttonVariant} sx={props.buttonSx}>
                    <Typography variant='subtitle1'>{props.children}</Typography>
                </AppBarButton>)}
        </Link>
    );
}

export default NavButton;
