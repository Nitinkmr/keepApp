import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
    login:{
     marginLeft:1000,
      marginRight: 200
    },
    grow: {
        flexGrow: 1,
      }
}



class Header extends React.Component
{

    state = {
        left: false
       };
    
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };
    
    render()
    {

        const sideList = (
            <div >
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
             
            </div>
          );

        return(
            <div className="root"> 
            <AppBar position="fixed">
             <Toolbar>
                 <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                      <MenuIcon />
                 </IconButton>
                 <Typography variant="h6" color="inherit" >
                    KEEP
                </Typography>
                <Button color="inherit" style={styles.login} >Login</Button>
            </Toolbar>

            </AppBar>


            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
            >
                {sideList}
            </div>
            </Drawer>
            </div>



        )
    }
}

export default Header;