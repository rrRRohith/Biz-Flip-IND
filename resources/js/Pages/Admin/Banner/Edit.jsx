
import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import RadioButtonLabel from '@/Components/RadioButtonLabel';
import DynamicSelect from '@/Components/DynamicSelect';
import PermissionAllow from "@/Components/PermissionAllow";

export default function Edit({ banner, queryParams = null, auth, countries }) {

    const { data, setData, post, errors, reset } = useForm({
        title: banner.title || '',
        redirection: banner.redirection || '',
        type: banner.type || '',
        new_window: banner.new_window || '',
        picture_desktop: '',
        picture_mobile: '',
        position: banner.position || '',
        status: '1',
        _method: "PUT",
        remove_image: false,
        remove_image2: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Data to be submitted:', data);

        post(route("admin.banners.update", banner.id));
    };
    const [imagePreview, setImagePreview] = useState('');
    const [imagePreview2, setImagePreview2] = useState('');

    useEffect(() => {
        // Set the initial image preview if an image exists
        if (banner.picture_desktop) {
            setImagePreview(banner.picture_desktop);
        }
        if (banner.picture_mobile) {
            setImagePreview2(banner.picture_mobile);
        }

    }, [banner.picture_desktop, banner.picture_mobile]);


    const handleImageDkChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('picture_desktop', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveDkImage = () => {
        setData('picture_desktop', '');
        setImagePreview('');
        setData('remove_image', true);
    };


    const handleImageMbChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('picture_mobile', file);
            setImagePreview2(URL.createObjectURL(file));
        }
    };

    const handleRemoveMbImage = () => {
        setData('picture_mobile', '');
        setImagePreview2('');
        setData('remove_image2', true);
    };



    const handleChange = (key, value) => {
        setData(key, value);
    };

    const options = [
        { value: 'Banner Slider', label: 'Banner Slider' },
        { value: 'Home Tile', label: 'Home Tile' },
        { value: 'Page Top Tile', label: 'Page Top Tile' },
    ]


    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">City/Edit</h2>}
        >
            <Head title="City Edit" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Edit City</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Banners Listing'}>
                                                <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.banners.index')}>Banners</Link></li>
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
                                        <PermissionAllow permission={'Banner Edit'} message={true}>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-body">
                                                    <div className="row">
                                                        <div className="col-lg-6">
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
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Redirection</InputLabel>
                                                                        <TextInput
                                                                            id="redirection"
                                                                            type="text"
                                                                            name="redirection"
                                                                            className="form-control"
                                                                            value={data.redirection}
                                                                            onChange={(e) => handleChange("redirection", e.target.value)}
                                                                            autoComplete="off"
                                                                        />
                                                                        <InputError message={errors.redirection} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mb-3">
                                                                    <div className="form-group">
                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Type</InputLabel>
                                                                        <DynamicSelect
                                                                            onChange={(value) => handleChange("type", value)}
                                                                            value={data.type}
                                                                            options={options}
                                                                            name="type"
                                                                            defaultValue={data.type}
                                                                        />
                                                                        <InputError message={errors.type} className="mt-2 col-12" />

                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
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
                                                                                checked={data.status === "1"}
                                                                                label="Published"
                                                                            />
                                                                            <RadioButtonLabel
                                                                                name="status"
                                                                                onChange={(value) => handleChange("status", value)}
                                                                                value="0"
                                                                                checked={data.status === "0"}
                                                                                label="Draft"
                                                                            />
                                                                            <InputError message={errors.status} className="mt-2 col-12" />

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="border rounded-4 p-3  text-center">
                                                                        <h4 className="box-title text-center">Desktop Image</h4>
                                                                        <div className="desktop-img">
                                                                            {imagePreview ? (
                                                                                <div className="mb-15 text-center position-relative">
                                                                                    <img src={imagePreview} alt="Selected" className="w-100 rounded-5" />
                                                                                    <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveDkImage}></i>

                                                                                </div>
                                                                            ) : (
                                                                                <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
                                                                            )}
                                                                            <div className=" mb-20">
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
                                                                                    name="picture_desktop"
                                                                                    className="d-none mt-1 block w-full upload"
                                                                                    onChange={handleImageDkChange}
                                                                                />

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="border rounded-4 p-3  text-center">
                                                                        <h4 className="box-title text-center">Mobile Image</h4>
                                                                        <div className="desktop-img">
                                                                            {imagePreview2 ? (
                                                                                <div className="mb-15 text-center position-relative">
                                                                                    <img src={imagePreview2} alt="Selected" className="w-100 rounded-5" />
                                                                                    <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveMbImage}></i>

                                                                                </div>
                                                                            ) : (
                                                                                <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
                                                                            )}
                                                                            <div className=" mb-20">
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn btn-sm btn-neutral"
                                                                                    onClick={() => document.getElementById('project_image_path2').click()}
                                                                                >
                                                                                    Choose Image
                                                                                </button>
                                                                                <TextInput
                                                                                    id="project_image_path2"
                                                                                    type="file"
                                                                                    name="picture_mobile"
                                                                                    className="d-none mt-1 block w-full upload"
                                                                                    onChange={handleImageMbChange}
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
