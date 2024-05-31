import React, { useState, useRef, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import EmailEditor from 'react-email-editor';
import PermissionAllow from "@/Components/PermissionAllow";
import DynamicSelect from "@/Components/DynamicSelect";

export default function Edit({ page_item, auth, imageList }) {
    const images = Object.entries(imageList).map(([key, value]) => ({
        value: key,
        label: value
    }));

    const [editorDesign, setEditorDesign] = useState(null);


    const returnPageContent = ({
                                    design: page_item.data,
                                    html: page_item.content,
                                });

    const { data, setData, post, errors, reset } = useForm({
        title: page_item.title || '',
        status: 1,
        seo_title: page_item.seo_title || '',
        seo_keywords: page_item.seo_keywords || '',
        seo_description: page_item.seo_description || '',
        image: page_item.banner_id || '',
        pageContent: returnPageContent,
        _method:'PUT'
    });

    const handleChange = (key, value) => {
        setData(key, value);
    };


    const emailEditorRef = useRef(null);


    useEffect(() => {
        setData('pageContent', editorDesign);
    }, [editorDesign]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route('admin.content-page.update',page_item.id));
    };

    const onDesignChange = () => {
        emailEditorRef.current.editor.exportHtml((data3) => {
            const { design, html } = data3;
            setEditorDesign({
                design: design,
                html: html,
            });
        });
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
                                                <PermissionAllow permission={'Content Pages Listing'}>
                                                    <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.content-page.index')}>Content Page</Link></li>
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
                                        <PermissionAllow permission={'Content Page Edit'} message={true}>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-body">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
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
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Image</InputLabel>
                                                                        <DynamicSelect
                                                                            onChange={(value) => handleChange("image", value)}
                                                                            value={data.image}
                                                                            options={images}
                                                                            name="image"
                                                                            defaultValue={page_item.image}
                                                                        />
                                                                        <InputError message={errors.image} className="mt-2 col-12" />

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
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <InputLabel className="fw-700 fs-16 form-label form-label">Content</InputLabel>
                                                                <InputError message={errors.pageContent} className="mt-2 col-12" />
                                                                <EmailEditor ref={emailEditorRef} onLoad={() => {
                                                                    emailEditorRef.current.editor.addEventListener('design:updated', onDesignChange);
                                                                    emailEditorRef.current.editor.loadDesign(page_item.data);
                                                                }} />
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
                                                                </div>
                                                                <InputError message={errors.status} className="mt-2 col-12" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions mt-3 text-center">
                                                        <button type="submit" className="btn btn-primary me-2">Save</button>
                                                    </div>
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
