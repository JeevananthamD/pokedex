import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';

const Paginate = ({ setOffset, itemsPerPage, pageCount }) => {
    // Invoke when user click to request another page.
    const handlePageClick = (event, page) => {
        const newOffset = ((page - 1) * itemsPerPage);
        setOffset(newOffset);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Pagination count={pageCount} showFirstButton showLastButton onChange={handlePageClick} />
        </div >
    );
}

export default Paginate;