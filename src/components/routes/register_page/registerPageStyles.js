import { makeStyles } from '@mui/styles'

const registerPageStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.light,
    marginTop: theme.spacing(2),
  },

  formContainer: {
    border: 'solid 2px',
    borderColor: theme.palette.primary.light,
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    padding: theme.spacing(9),
  },

  textInput: {
    borderRadius: '5px',
    width: '100%',
    backgroundColor: theme.palette.primary.light,
  },
}))

export default registerPageStyles
