import React, { useState } from 'react'
import axios from "axios";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TrackIcon from '@material-ui/icons/LocalShipping';
import CheckBoxBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { createStyles, makeStyles,IconButton } from '@material-ui/core'
import { Grid, Typography, TextField, Container } from "@material-ui/core"
const apiUrl = '/api';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

const Search = () => {
    const classes = useStyles()
    const [searchResult, setSearchResult] = useState([])
    const [query, setQuery] = useState('')
    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }
    
    const handleEnterKey = (ev) => {
        if (ev.key === 'Enter') {
            axios.get(`${apiUrl}/v1/${query}/events`)
            .then(response=> {
                console.log(response.data)
              setSearchResult(response.data)
            })
            .catch(error => {
              throw(error);
            });
          ev.preventDefault();
        }
    }
    const renderElement = (elem) => {
        if(elem.deliveryStatus) {
          return (
            <Typography display="inline">
            <IconButton aria-label="Task completed">
              <CheckBoxIcon />
            </IconButton>
                  {elem.deliveryStatus}
           </Typography> 
          )
        }
        return (
            <Typography display="inline">
            <IconButton aria-label="Task completed">
              <TrackIcon />
            </IconButton>
              Despachado con Guia # {elem.guiaNumber}  el {elem.startDate}
           </Typography>            
        )

    }
    const renderFinalLine = (query) => {
        if (query !== ''){
          return (
            <Typography display="inline">
            <IconButton aria-label="Paquete entregado">
              <CheckBoxBlankIcon  />
            </IconButton>
              Paquete entregado hoy
           </Typography>            
          )            
        }
    }
    return (
        <Container>
        <div>
           <Typography variant="h6">Tracking : </Typography>
           <form onSubmit={handleEnterKey}>
            <TextField 
              type="text" 
              label="Numero de Guia: " 
              onChange={handleInputChange}
              onKeyPress={handleEnterKey}
              name={query}
              >
            </TextField>
          </form>                 
        </div>
    
         <div className={classes.root}>
           <Grid
             container
             spacing={2}
             direction="column"
             justify="flex-start"
             alignItems="flex-start"
           >
           {searchResult.map(elem => (
               renderElement(elem)
            ))}
            {renderFinalLine(query)}
          </Grid>
        </div>      
      </Container>  
    )
}
export default Search