import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { margin } from '@mui/system';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Paginate = ({ itemsPerPage = 1 }) => {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event, page) => {
        const newOffset = (page * itemsPerPage) % items.length;
        console.log(page);
        setItemOffset(newOffset);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Pagination count={pageCount} showFirstButton showLastButton onChange={handlePageClick} />
        </div >
    );
}

export default Paginate;