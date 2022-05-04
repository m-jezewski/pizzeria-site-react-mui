import { ClickAwayListener, Fade, Paper, List, ListItem, Typography, Stack } from '@mui/material'
import React from 'react'
import contactCardStyles from './contactCardStyles'

const ContactCard = ({ openContactCard, setOpenContactCard }) => {
  const classes = contactCardStyles()

  const handleClickAway = () => {
    if (openContactCard === true) {
      setTimeout(() => {
        setOpenContactCard(false)
      }, 0)
    }
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        {openContactCard ? (
          <Fade in={openContactCard} timeout={400}>
            <Paper elevation={12} className={classes.container}>
              <List>
                <ListItem>
                  <Typography variant='h4'>Contact:</Typography>
                </ListItem>
                <ListItem>
                  <Stack>
                    <Typography variant='subtitle2'>Phone Numer:</Typography>
                    <Typography variant='subtitle1'>+XX XXX XXX XXX</Typography>
                  </Stack>
                </ListItem>
                <ListItem>
                  <Stack>
                    <Typography variant='subtitle2'>Address:</Typography>
                    <Typography variant='subtitle1'>Lorem ipsum 24-12 Mozarella</Typography>
                  </Stack>
                </ListItem>
                <ListItem>
                  <Stack>
                    <Typography variant='subtitle2'>Opening Hours:</Typography>
                    <Typography variant='subtitle1'>12:00 - 23:00</Typography>
                  </Stack>
                </ListItem>
              </List>
            </Paper>
          </Fade>
        ) : null}
      </div>
    </ClickAwayListener>
  )
}

export default ContactCard
