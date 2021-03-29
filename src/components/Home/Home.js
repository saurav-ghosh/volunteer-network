import React, { useEffect, useState } from 'react';
import Event from  '../Event/Event';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://peaceful-dawn-07384.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className="event-container">
            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;