import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL
        }
        
        const url = 'https://peaceful-dawn-07384.herokuapp.com/addEvent';

        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(result => {
            if(result){
                alert('event added successfully');
            }
        })
    };

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '9b47112ad80a837b5cf2ee77c729dc51');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <h1>add your event hare</h1>
            <form onSubmit={imageURL && handleSubmit(onSubmit)}>

                <input name="name" placeholder="new event add hare" ref={register} />
                <br/>
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                <p style={{color: "red"}}>please wait 5 second after choose an image.</p>
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;