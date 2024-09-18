// Create.jsx

import React, { useState, useRef } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import EmailEditor from 'react-email-editor';

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        title: '',
        content: '',
        seo_title: '',
        seo_keywords: '',
        seo_description: '',
        status: 1,
        image: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.content-page.store'));
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

    const emailEditorRef = useRef(null);

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            setData('content', html);
            handleSubmit();
        });
    };

    const onLoad = () => {
        // editor instance is created
    };

    const onReady = () => {
        // editor is ready
        console.log('onReady');
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Content Page/Create</h2>}
        >
            <Head title="Content Page Create" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Create Content Page</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.content-page.index')}>Content Page</Link></li>
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
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <div className="row">
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Title</InputLabel>
                                                                    <TextInput
                                                                        id="title"
                                                                        type="text"
                                                                        name="title"
                                                                        className="form-control"
                                                                        value={data.title}
                                                                        onChange={(e) => handleChange("title", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.title} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">SEO Title</InputLabel>
                                                                    <TextInput
                                                                        id="seo_title"
                                                                        type="text"
                                                                        name="seo_title"
                                                                        className="form-control"
                                                                        value={data.seo_title}
                                                                        onChange={(e) => handleChange("seo_title", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.seo_title} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">SEO Keywords</InputLabel>
                                                                    <TextInput
                                                                        id="seo_keywords"
                                                                        type="text"
                                                                        name="seo_keywords"
                                                                        className="form-control"
                                                                        value={data.seo_keywords}
                                                                        onChange={(e) => handleChange("seo_keywords", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.seo_keywords} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">SEO Description</InputLabel>
                                                                    <TextInput
                                                                        id="seo_description"
                                                                        type="text"
                                                                        name="seo_description"
                                                                        className="form-control"
                                                                        value={data.seo_description}
                                                                        onChange={(e) => handleChange("seo_description", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.seo_description} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="border rounded-4 p-3 text-center">
                                                                    <h4 className="box-title text-center">Breadcrumb Image</h4>
                                                                    <div className="product-img">
                                                                        {imagePreview ? (
                                                                            <div className="mb-15 text-center position-relative">
                                                                                <img src={imagePreview} alt="Selected" className="w-50 rounded-5" />
                                                                                <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveImage}></i>
                                                                            </div>
                                                                        ) : (
                                                                            <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 w-75 text-center" />
                                                                        )}
                                                                        <div className="btn mb-20">
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
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <InputLabel className="fw-700 fs-16 form-label form-group__label">Content</InputLabel>
                                                            <EmailEditor
                                                                ref={emailEditorRef}
                                                                onLoad={onLoad}
                                                                onReady={onReady}
                                                            />
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

                                            <div className="form-actions mt-10">
                                                <button type="button" className="btn btn-sm btn-neutral" onClick={exportHtml}>
                                                    <i className="bi bi-check"></i> Save Data
                                                </button>
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
