// Create.jsx

import React, {useState,useEffect} from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';

export default function Create({ page_item ,queryParams = null, auth}) {
   
    const { data, setData, post, errors, reset } = useForm({
        image: '',
        category_name: page_item.name || '',
        status: page_item.status = 'published' ? 1 : 0 || 1,
        position: page_item.position || '', _method: "PUT",
        remove_image: false,
    });
   
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        // Set the initial image preview if an image exists
        if (page_item.icon) {
            setImagePreview(page_item.icon);
        }
    }, [page_item.icon]);

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
      
            post(route("admin.content-page.update", page_item.id));
          };

         
    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Content Page/Edit</h2>}
        >
            <Head title="Content Page Edit" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Edit Content Page</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.content-page.index')}>Content Page</Link></li>
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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-lg-9">
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
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Position</InputLabel>
                                                                    <SelectOption
                                                                        onChange={(value) => handleChange("position", value)}
                                                                        value={data.position}
                                                                        defaultValue={data.position}
                                                                    />
                                                                    <InputError message={errors.position} className="mt-2 col-12" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="fw-700 fs-16 form-label">Status</label>
                                                                    <div className="radio-list">
                                                                        <RadioButtonLabel
                                                                            name="status"
                                                                            onChange={(value) => handleChange("status", value)}
                                                                            value="1"
                                                                            checked={data.status === 1}
                                                                            label="Published"
                                                                        />
                                                                        <RadioButtonLabel
                                                                            name="status"
                                                                            onChange={(value) => handleChange("status", value)}
                                                                            value="0"
                                                                            checked={data.status === 0}
                                                                            label="Draft"
                                                                        />
                                                                      <InputError message={errors.status} className="mt-2 col-12" />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="border rounded-4 p-3  text-center">
                                                                    <h4 className="box-title text-center">Icon/Image</h4>
                                                                    <div className="product-img">
                                                                        {imagePreview ? (
                                                                            <div className="mb-15 text-center position-relative">
                                                                                <img src={imagePreview} alt="Selected" className="w-100 rounded-5" />
                                                                                <i className="bi bi-x-lg fw-bold position-absolute text-danger top-0" role="button" onClick={handleRemoveImage}></i>
                                                                                
                                                                            </div>
                                                                        ) : (
                                                                            <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
                                                                        )}
                                                                        <div className="btn mb-20">
                                                                        <button
                                                                                type="button"
                                                                                className="btn btn-primary"
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
                                            <div className="form-actions mt-10">
                                                <button type="submit" className="btn btn-primary"> <i className="bi bi-check"></i> Save Data</button>
                                            </div>
                                        </form>
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