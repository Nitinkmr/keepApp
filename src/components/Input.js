import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

class Input extends React.Component {
    constructor() {
      super();
      this.state = {
        note: ""
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.loadData = this.loadData.bind(this);
    }

    handleSubmit() {
      console.log(this.state.note);
      this.setState({
        note: ""
      });
      const newId = Math.random() * 365;
      const newValue = this.state.note;

      const newState = [{
        id: newId,
        value: newValue
      }];


      this.props.addNewCard(newState);

    }

    handleTextChange(event) {
      this.setState({
        note: event.target.value
      });
    }

    loadData() {
      this.props.loadData();
    }
    render() {
        return (
          <form  className="inputNote" noValidate autoComplete="off" >
            <TextField
              id="filled-full-width"
              style={{ margin: 8 }}
              placeholder="Enter Note here"
              fullWidth
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true
              }}
              onChange = {this.handleTextChange}
              value={this.state.note}
            />
          <div className="loadData" >
             <Button className="saveButton" style={{marginRight:"5%"}}variant="contained" color="secondary" size="small" onClick={this.handleSubmit}>
                <SaveIcon  />
                Save
            </Button>
                
              <Button  variant="contained"  style={{marginLeft:"5%"}} color="secondary" size="small" onClick={this.loadData}>
                Load Cards
              </Button>

            </div>
          </form>
        );
      }
    
}

export default Input;