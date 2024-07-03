// PageView.jsx
import React, { useState } from 'react';

const PageView = ({ collection, handleClose }) => {

    return (
        <div className='col-lg-12'>
             <div dangerouslySetInnerHTML={{ __html: collection.content }} />
        </div>
    );
};


export default PageView;
