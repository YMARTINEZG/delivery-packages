import React from 'react'
import { AppBar, Typography, Container } from "@material-ui/core";
import Link from '@material-ui/core/Link';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Grego
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Footer() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Container maxWidth="xs">
            <Copyright />
          </Container>
        </AppBar>      
      </div>
    )
}
