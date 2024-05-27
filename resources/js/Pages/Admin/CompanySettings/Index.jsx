
import React, {useState,useEffect} from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import SelectOption from '@/Components/SelectOption';
import DynamicSelect from '@/Components/DynamicSelect';


export default function index({ company_settings ,queryParams = null, auth, success = null, error = null }) {
   
    const { data, setData, post, errors, reset } = useForm({
        facebook_link       :   company_settings.facebook_link || '',
        instagram_link      :   company_settings.instagram_link || '',
        linkedin_link       :   company_settings.linkedin_link || '',
        youtube_link        :   company_settings.youtube_link || '',
        twitter_link        :   company_settings.twitter_link || '',
        seo_title           :   company_settings.seo_title || '',
        seo_description     :   company_settings.seo_description || '',
        seo_keywords        :   company_settings.seo_keywords || '',
        email_config_api_url:   company_settings.email_config_api_url || '',
        email_config_api_key:   company_settings.email_config_api_key || '',
        email_config_api_method :  company_settings.email_config_api_method || '',
        _method             :   "PUT"
    });
   
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        post(route("admin.company-settings.update", company_settings.id));
    };

    const options = [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' }
    ]

         
    const handleChange = (key, value) => {
        setData(key, value);
    };
    

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company Settings</h2>}
            success = {success}
            error   = {error}
        >
            <Head title="Company Settings" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">Company Settings</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Company Settings</li>
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
                                                   
                                                    <div className="col-lg-12">
                                                        <div className="row">

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Facebook Link</InputLabel>
                                                                    <TextInput
                                                                        id="facebook_link"
                                                                        type="text"
                                                                        name="facebook_link"
                                                                        className="form-control"
                                                                        value={data.facebook_link}
                                                                        onChange={(e) => handleChange("facebook_link", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.facebook_link} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Instagram Link</InputLabel>
                                                                    <TextInput
                                                                        id="instagram_link"
                                                                        type="text"
                                                                        name="instagram_link"
                                                                        className="form-control"
                                                                        value={data.instagram_link}
                                                                        onChange={(e) => handleChange("instagram_link", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.instagram_link} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Linkedin Link</InputLabel>
                                                                    <TextInput
                                                                        id="linkedin_link"
                                                                        type="text"
                                                                        name="linkedin_link"
                                                                        className="form-control"
                                                                        value={data.linkedin_link}
                                                                        onChange={(e) => handleChange("linkedin_link", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.linkedin_link} className="mt-2 col-12" />
                                                                </div>
                                                            </div>


                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Youtube Link</InputLabel>
                                                                    <TextInput
                                                                        id="youtube_link"
                                                                        type="text"
                                                                        name="youtube_link"
                                                                        className="form-control"
                                                                        value={data.youtube_link}
                                                                        onChange={(e) => handleChange("youtube_link", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.youtube_link} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Twitter Link</InputLabel>
                                                                    <TextInput
                                                                        id="twitter_link"
                                                                        type="text"
                                                                        name="twitter_link"
                                                                        className="form-control"
                                                                        value={data.twitter_link}
                                                                        onChange={(e) => handleChange("twitter_link", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.twitter_link} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Email Configration Api Url</InputLabel>
                                                                    <TextInput
                                                                        id="email_config_api_url"
                                                                        type="text"
                                                                        name="email_config_api_url"
                                                                        className="form-control"
                                                                        value={data.email_config_api_url}
                                                                        onChange={(e) => handleChange("email_config_api_url", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.email_config_api_url} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Email Configration Api Key</InputLabel>
                                                                    <TextInput
                                                                        id="email_config_api_key"
                                                                        type="text"
                                                                        name="email_config_api_key"
                                                                        className="form-control"
                                                                        value={data.email_config_api_key}
                                                                        onChange={(e) => handleChange("email_config_api_key", e.target.value)}
                                                                        autoComplete="off"
                                                                    />
                                                                    <InputError message={errors.email_config_api_key} className="mt-2 col-12" />
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 mb-3">
                                                                <div className="form-group">
                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Email Configration Api Method</InputLabel>
                                                                    <DynamicSelect
                                                                        onChange={(value) => handleChange("email_config_api_method", value)}
                                                                        value={data.email_config_api_method}
                                                                        options={options}
                                                                        name="email_config_api_method"
                                                                    />
                                                                    <InputError message={errors.email_config_api_method} className="mt-2 col-12" />
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

                                                            <div className="col-md-12 mb-3">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-actions mt-10">
                                                <button type="submit" className="btn btn-primary"> <i className="bi bi-check"></i> Update Data</button>
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
