// Create.jsx

import React, { useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import PermissionAllow from "@/Components/PermissionAllow";
import Form from 'react-bootstrap/Form';

export default function Create({ auth }) {
    const { BusinesscategoryList } = usePage().props;
    const { data, setData, post, errors, reset } = useForm({
        image: '',
        category_name: '',
        status: '1',
        description: '',
        businessCategories: [],
    });


    const handleCheckboxChange = (categoryId) => {
        let updatedCategory;
        if (data.businessCategories.includes(categoryId)) {
            updatedCategory = data.businessCategories.filter(id => id !== categoryId);
        } else {
            updatedCategory = [...data.businessCategories, categoryId];
        }
        setData('businessCategories', updatedCategory);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Data to be submitted:', data);
        post(route('admin.category.store'))
    };

    const [imagePreview, setImagePreview] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setData('image', '');
        setImagePreview('');
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Category/Create</h2>}
        >
            <Head title="Category Create" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Create Ad Category</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Categories Listing'}>
                                                    <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.category.index')}>Ad Categories</Link></li>
                                                </PermissionAllow>
                                                <li className="breadcrumb-item active" aria-current="page">Create</li>
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
                                        <PermissionAllow permission={'Category Create'} message="true">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-body">
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-7">
                                                                    <div className="row">
                                                                        <div className="col-md-12 mb-3">
                                                                            <div className="form-group">
                                                                                <InputLabel className="fw-700 fs-16 form-label form-group__label">Title</InputLabel>
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
                                                                        <div className="col-md-12 mb-3">
                                                                            <div className="form-group">
                                                                                <InputLabel className="fw-700 fs-16 form-label form-group__label">Description</InputLabel>
                                                                                <textarea className="form-control" rows={4} onChange={(e) => handleChange("description", e.target.value)}></textarea>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="form-group p-3 ">
                                                                                <label className="fw-700  form-label">Status</label>
                                                                                <Form.Check
                                                                                    type="switch"
                                                                                    id="custom-switch"
                                                                                    name="status"
                                                                                    label="Publish"
                                                                                    role="button"
                                                                                    onChange={(e) => handleChange('status', e.target.checked ? 1 : 0)}

                                                                                />
                                                                                <InputError message={errors.status} className="mt-2 col-12" />

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="border bg-bubbles-white rounded-4 p-3  text-center">
                                                                                <h4 className="box-title text-center">Icon/Image</h4>
                                                                                <div className="product-img">
                                                                                    {imagePreview ? (
                                                                                        <div className="mb-15 text-center position-relative">
                                                                                            <img src={imagePreview} alt="Selected" className="w-50 rounded-5" />
                                                                                            <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImage}></i>

                                                                                        </div>
                                                                                    ) : (
                                                                                        <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 w-50 text-center" />
                                                                                    )}
                                                                                    <div className="mb-20">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn btn-sm btn-neutral"
                                                                                            onClick={() => document.getElementById('project_image_path').click()}
                                                                                        >
                                                                                            Choose Image
                                                                                        </button>
                                                                                        <TextInput
                                                                                            id="project_image_path"
                                                                                            type="file"
                                                                                            name="image"
                                                                                            className="d-none mt-1 block w-full upload"
                                                                                            onChange={handleImageChange}
                                                                                        />

                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="col-lg-12">
                                                                <div className="h-100 border p-3">
                                                                    <h6 className="fw-bold mb-3">Select Availabe to Business Categories</h6>
                                                                    <div className="p-3 row">

                                                                        {BusinesscategoryList.data.map((category, index) => (

                                                                            <div className="form-group">
                                                                                <Form.Check
                                                                                    key={index}
                                                                                    type="switch"
                                                                                    id={`custom-switch-${index}`}
                                                                                    name="adCategory"
                                                                                    value={category.id}
                                                                                    label={category.name}
                                                                                    role="button"
                                                                                    onChange={(e) => handleCheckboxChange(category.id)}
                                                                                />
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="form-actions mt-10 col-lg-12 text-left">
                                                    <button type="submit" className="btn btn-success"> <i className="bi bi-check"></i> Save Data</button>
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
