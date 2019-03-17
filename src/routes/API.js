var API = {
    postData(newCard) {
        fetch('http://localhost:2000/notes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: newCard[0].id,
                value: newCard[0].value
            })
        })
    },

    fetchData() {
        fetch('http://localhost:2000/notes')
            .then(function (response) {
                return response.json();
            });
    },

    deleteData(id) {
        fetch('http://localhost:2000/notes/' + id, {
            method: 'DELETE',

        })
    }



}

module.exports = API;