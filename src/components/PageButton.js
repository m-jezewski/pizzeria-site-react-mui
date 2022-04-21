import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'

const PageButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    '&:hover': {
        backgroundColor: theme.palette.secondary.light
    }
}));

export default PageButton;