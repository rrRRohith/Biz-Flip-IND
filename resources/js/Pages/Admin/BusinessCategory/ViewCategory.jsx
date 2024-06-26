
// ViewCategory.jsx
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from "@inertiajs/react";
import SlickSlider from '@/Components/SlickSlider';
import TabView from '@/Components/TabView';
import StatusBtn from '@/Components/StatusBtn';
import DynamicSelect from '@/Components/DynamicSelect';

const ViewCategory = ({ collection, handleClose }) => {

    return (
        <div className='col-lg-12'>
            <div className='row  border-0'>
                <div className='col-lg-12 mx-auto'>
                    <div className=' p-4'>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-2'>
                                    <img src={collection.icon} className='wd-100 me-3 rounded-circle' onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }} />
                                </div>
                                <div className='col-lg-10'>
                                    <h3 className="mb-2 fw-bold">{collection.name}</h3>
                                    <p className="mb-2">{collection.description}</p>
                                    <div className='mt-5 mb-5'>
                                        <i className='fw-bold'>Ad Categories</i>
                                        <div className='row mt-5'>
                                            {collection.ad_categories.map((adCategory, index) => (
                                                <>
                                                <div className='d-flex'>
                                                    <i className='bi bi-dot me-2'></i> <p className="mb-2 col-lg-6">{adCategory.name}</p>
                                                </div>
                                                </>
                                            ))}
                                        </div>    
                                    </div>
                                    <strong className='me-3'>Status : </strong>                 
                                    <>
                                        <StatusBtn status={collection.status} />
                                    </>
                                </div>
                            </div>
                        </div>
                        
                 
                       
                        
                                     
                    </div>
                </div>
            </div>
        </div>

    );
};

ViewCategory.propTypes = {
    collection: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default ViewCategory;
