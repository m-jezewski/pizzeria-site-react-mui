import { Typography, Button } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import PageButton from '../PageButton';

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
                (<PageButton component='span'>{props.children}</PageButton>)
                :
                (<AppBarButton variant={props.buttonVariant} sx={props.buttonSx}>
                    <Typography variant='subtitle1'>{props.children}</Typography>
                </AppBarButton>)}
        </Link>
    );
}

export default NavButton;
