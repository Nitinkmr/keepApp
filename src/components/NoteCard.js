import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
class NoteCard extends React.Component {
        constructor(props) {
            super(props);
            this.deleteNote = this.deleteNote.bind(this);
        }

        deleteNote() {
            this.props.deleteCard(this.props.data.id);
        }
    

    render()
    {
        return (        
                    <Grid item xs={3}>
                        <Paper >{this.props.data.value} 
                        <IconButton  aria-label="Delete" onClick={this.deleteNote}>
                            <DeleteIcon  />
                        </IconButton>
                        </Paper>                   
                    </Grid>         
        )
    }
}

export default NoteCard;