import React from 'react';
import NoteCard from './NoteCard';
import Grid from '@material-ui/core/Grid';
class Notes extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div className="cards">
             <Grid container spacing={40}>
            
             {this.props.cards.map(
                item =>
                <NoteCard class="card" key={item.id} data={item} deleteCard={this.props.deleteCard}/>
            )}
            
            </Grid>
            </div>           
        )
    }
}

export default Notes;