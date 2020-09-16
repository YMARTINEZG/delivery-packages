import React from 'react'
import { Container,Grid, Segment, Divider } from 'semantic-ui-react'
import CreateOrden from '../containers/CreateOrden'
import OrdenList from '../containers/OrdenList'

const WorkOrden = () => {
    return (
    <Container>   
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <CreateOrden />
          </Grid.Column>
          <Grid.Column>
            <OrdenList />
          </Grid.Column>      
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>   
    </Container>
    )
};

export default WorkOrden