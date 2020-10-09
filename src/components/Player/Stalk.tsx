/* eslint-disable no-use-before-define */
import { Box, Typography, Avatar, Grid, makeStyles, Paper } from '@material-ui/core'

import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5rem',
    height: '90vh'
  },
  avatar: {
    width: '200px',
    height: '200px',
    margin: '1rem'
  },
  firstContainer: {
    height: '100%',
    width: '100%'
  }
}))
const Stalk = () => {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid container>
        <Grid item xs={6} container>
          <Grid item xs={3}>
            <Avatar
              className={classes.avatar}
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"
            />
          </Grid>
          <Grid item xs={9}>
            <Box alignItems="center" margin={2}>
              <Typography variant="h3" color="initial" align="justify">
                USERNAME
              </Typography>
              <Typography variant="body1" color="initial" align="justify">
                GUILDNAME
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={6} container>
          <Grid xs={3} />
          <Grid xs={6}>
            <img
              alt={'steve'}
              src="https://mcpedl.com/wp-content/uploads/2016/12/img_1483030121.png"
            />
          </Grid>
          <Grid xs={3} />
          <Grid xs={3}>
            <img
              alt={'steve'}
              width={150}
              src="https://manycam.com/effects/get/?f=l&i=22656&v=4.0.52"
            />
          </Grid>
          <Grid xs={3}>
            <img
              alt={'steve'}
              width={150}
              src="https://manycam.com/effects/get/?f=l&i=22656&v=4.0.52"
            />
          </Grid>
          <Grid xs={3}>
            <img
              alt={'steve'}
              width={150}
              src="https://manycam.com/effects/get/?f=l&i=22656&v=4.0.52"
            />
          </Grid>
          <Grid xs={3}>
            <img
              alt={'steve'}
              width={150}
              src="https://manycam.com/effects/get/?f=l&i=22656&v=4.0.52"
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
export default Stalk
