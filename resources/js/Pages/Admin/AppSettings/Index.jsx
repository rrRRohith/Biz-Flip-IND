
import React, {useState,useEffect} from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';

export default function index({ app_settings ,queryParams = null, auth, success = null, error = null }) {
   
    const { data, setData, post, errors, reset } = useForm({
        splash_screen   :  '',
        app_background  :  '',
        apiKey          :  app_settings.apiKey || '',
        authDomain      :  app_settings.authDomain || '',
        databaseURL     :  app_settings.databaseURL || '',
        projectId       :  app_settings.projectId || '',
        storageBucket   :  app_settings.storageBucket || '',
        messagingSenderId: app_settings.messagingSenderId || '',
        appId           :  app_settings.appId || '',
        measurementId   :  app_settings.measurementId || '',
        _method         : "PUT",
        remove_image    : false,
        remove_image2   : false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        post(route("admin.app-settings.update", app_settings.id));
    };


    const [imagePreview, setImagePreview] = useState('');
    const [imagePreview2, setImagePreview2] = useState('');

    const handleImageDkChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('splash_screen', file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveDkImage = () => {
        setData('splash_screen', '');
        setImagePreview('');
        setData('remove_image', true);
    };


    const handleImageMbChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('app_background', file);
            setImagePreview2(URL.createObjectURL(file));
        }
    };

    const handleRemoveMbImage = () => {
        setData('app_background', '');
        setImagePreview2('');
        setData('remove_image2', true);
    };

    useEffect(() => {
        // Set the initial image preview if an image exists
        if (app_settings.splash_screen) {
            setImagePreview(app_settings.splash_screen);
        }
        if (app_settings.app_background) {
            setImagePreview2(app_settings.app_background);
        }
        

    }, [app_settings.splash_screen,app_settings.app_background]);



         
    const handleChange = (key, value) => {
        setData(key, value);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">App Settings</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="App Settings" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">App Settings</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">App Settings</li>
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
                                                   
                                                    <div className="col-lg-6">
                                                        <div className="row">

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Firebase ApiKey</InputLabel>
                                                                    <TextInput
                                                                        id="apiKey"
                                                                        type="text"
                                                                        name="apiKey"
                                                                        className="form-control"
                                                                        value={data.apiKey}
                                                                        onChange={(e) => handleChange("apiKey", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.apiKey} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            			
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Firebase AuthDomain</InputLabel>
                                                                    <TextInput
                                                                        id="authDomain"
                                                                        type="text"
                                                                        name="authDomain"
                                                                        className="form-control"
                                                                        value={data.authDomain}
                                                                        onChange={(e) => handleChange("authDomain", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.authDomain} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Database URL</InputLabel>
                                                                    <TextInput
                                                                        id="databaseURL"
                                                                        type="text"
                                                                        name="databaseURL"
                                                                        className="form-control"
                                                                        value={data.databaseURL}
                                                                        onChange={(e) => handleChange("databaseURL", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.databaseURL} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            	
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Project Id</InputLabel>
                                                                    <TextInput
                                                                        id="projectId"
                                                                        type="text"
                                                                        name="projectId"
                                                                        className="form-control"
                                                                        value={data.projectId}
                                                                        onChange={(e) => handleChange("projectId", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.projectId} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Storage Bucket</InputLabel>
                                                                    <TextInput
                                                                        id="storageBucket"
                                                                        type="text"
                                                                        name="storageBucket"
                                                                        className="form-control"
                                                                        value={data.storageBucket}
                                                                        onChange={(e) => handleChange("storageBucket", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.storageBucket} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                            			
                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Messaging Sender Id</InputLabel>
                                                                    <TextInput
                                                                        id="messagingSenderId"
                                                                        type="text"
                                                                        name="messagingSenderId"
                                                                        className="form-control"
                                                                        value={data.messagingSenderId}
                                                                        onChange={(e) => handleChange("messagingSenderId", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.messagingSenderId} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">App Id</InputLabel>
                                                                    <TextInput
                                                                        id="appId"
                                                                        type="text"
                                                                        name="appId"
                                                                        className="form-control"
                                                                        value={data.appId}
                                                                        onChange={(e) => handleChange("appId", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.appId} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Measurement Id</InputLabel>
                                                                    <TextInput
                                                                        id="measurementId"
                                                                        type="text"
                                                                        name="measurementId"
                                                                        className="form-control"
                                                                        value={data.measurementId}
                                                                        onChange={(e) => handleChange("measurementId", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.measurementId} className="mt-2 col-12" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="border rounded-4 p-3  text-center">
                                                                	
                                                                    <h4 className="box-title text-center">Splash Screen</h4>
                                                                    <div className="desktop-img">
                                                                        {imagePreview ? (
                                                                            <div className="mb-15 text-center position-relative">
                                                                                <img src={imagePreview} alt="Selected" className="w-100 rounded-5" />
                                                                                <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveDkImage}></i>

                                                                            </div>
                                                                        ) : (
                                                                            <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
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
                                                                    <h4 className="box-title text-center">App Background</h4>
                                                                    <div className="desktop-img">
                                                                        {imagePreview2 ? (
                                                                            <div className="mb-15 text-center position-relative">
                                                                                <img src={imagePreview2} alt="Selected" className="w-100 rounded-5" />
                                                                                <i role="button" className="bi bi-x-lg fw-bold position-absolute text-danger top-0" onClick={handleRemoveMbImage}></i>

                                                                            </div>
                                                                        ) : (
                                                                            <img src="/assets/admin/images/noimage.webp" alt="No Image" className="mb-15 text-center" />
                                                                        )}
                                                                        <div className="mb-20">
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
                                                <button type="submit" className="btn btn-sm btn-neutral"> <i className="bi bi-check"></i> Update Data</button>
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
