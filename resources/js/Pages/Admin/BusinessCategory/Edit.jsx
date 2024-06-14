// Create.jsx

import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import PermissionAllow from "@/Components/PermissionAllow";
import Form from 'react-bootstrap/Form';

export default function Create({ category_item, queryParams = null, auth }) {
console.log(category_item)
    const { data, setData, post, errors, reset } = useForm({
        image: '',
        category_name: category_item.name || '',
        status: category_item.status == 1  ? 1 : 0  || 0,
        position: category_item.position || '', _method: "PUT",
        remove_image: false
    });

    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        // Set the initial image preview if an image exists
        if (category_item.icon) {
            setImagePreview(category_item.icon);
        }
    }, [category_item.icon]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        }
        // setData('remove_image', false);
    };

    const handleRemoveImage = () => {
        setData('image', '');
        setImagePreview('');

        setData('remove_image', true);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("admin.business-category.update", category_item.id));
    };


    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Category/Edit</h2>}
        >
            <Head title="Category Edit" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Edit Category</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Categories Listing'}>
                                                    <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.business-category.index')}>Category</Link></li>
                                                </PermissionAllow>
                                                <li className="breadcrumb-item active" aria-current="page">Edit</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'></div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <PermissionAllow permission={'Category Edit'} message="true">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-body">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="row">
                                                                <div className="col-md-12 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Name</InputLabel>
                                                                        <TextInput
                                                                            id="category-name"
                                                                            type="text"
                                                                            name="category_name"
                                                                            className="form-control"
                                                                            value={data.category_name}
                                                                            onChange={(e) => handleChange("category_name", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.category_name} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                              
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group ps-3 ">
                                                                        <label className="fw-700  form-label">Status</label>
                                                                        <Form.Check
                                                                            type="switch"
                                                                            id="custom-switch"
                                                                            name="status"
                                                                            label="Publish"
                                                                            role="button"
                                                                            checked={data.status === 1}
                                                                            onChange={(e) => handleChange('status', e.target.checked ? 1 : 0)}

                                                                        />
                                                                        <InputError message={errors.status} className="mt-2 col-12" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="form-actions mt-10 col-lg-6 text-center">
                                                    <button type="submit" className="btn btn-success"> <i className="bi bi-check"></i> Update Data</button>
                                                </div>
                                            </form>
                                        </PermissionAllow>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}
