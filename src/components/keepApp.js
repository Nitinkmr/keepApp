import React from 'react';
import Notes from './Notes';
import Header from './Header';
import Input from './Input';
import Button from '@material-ui/core/Button';
import API from '../routes/API'
class KeepApp extends React.Component {
        constructor(props) {
            console.log("keepapp");
            super(props);
            this.state = {
                cards: []
            }
            this.addNewCard = this.addNewCard.bind(this);
            this.setCards = this.setCards.bind(this);
            this.loadData = this.loadData.bind(this);
            this.deleteCard = this.deleteCard.bind(this);
            this.render = this.render.bind(this);


            if (this.props.cards) {
                console.log(this.props.cards);
                this.setState({
                    cards: this.props.cards
                });
            }


        }

        addNewCard(newCard) {
            this.setState(state => ({
                cards: state.cards.concat(newCard)
            }));
            API.postData(newCard);
        }

        setCards(myJson) {
            this.setState({
                cards: myJson
            });
        }

        loadData() {
            fetch('http://localhost:2000/notes')
                .then(function (response) {
                    return response.json();
                })
                .then(result => this.setCards(result));
        }


        deleteCard(id) {
            this.setState(prevState => ({
                cards: prevState.cards.filter(card => card.id != id)
            }))

            API.deleteData(id);
        }

    
    render()
    {
        
        return (
            
           <div>            
               <Header/>
            <Input addNewCard = {this.addNewCard} loadData={this.loadData} />
            <Notes deleteCard = {this.deleteCard} cards={this.state.cards}/>         
            </div>

      
        )
        
    }  
    
    
}

export default KeepApp;