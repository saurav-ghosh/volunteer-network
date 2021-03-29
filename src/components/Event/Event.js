import React from 'react';

const Event = ({event}) => {
    const deleteEvent = (id) => {
        fetch(`https://peaceful-dawn-07384.herokuapp.com/deleteEvent/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                window.location.reload();
            }
        })
    }

    return (
        <div>
            <img style={{height: '300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name}</h3>
            <button onClick={() => deleteEvent(event._id)}>delete</button>
        </div>
    );
};

export default Event;