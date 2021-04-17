import React from 'react';

const BookingData = ({book}) => {
    return (
        <div>
            <h6>{book.data.name}</h6>
            <h1>{book.data.email}</h1>
            <p>{book.data.description}</p>
        </div>
    );
};

export default BookingData;