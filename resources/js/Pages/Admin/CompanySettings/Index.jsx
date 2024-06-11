import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import DynamicSelect from '@/Components/DynamicSelect';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default function Index({ company_settings, socialLinks, queryParams = null, auth, success = null, error = null }) {

    const { data, setData, post, errors, reset } = useForm({
        socialmedia_links: socialLinks || [
            { key: 'facebook', label: 'Facebook', url: '' },
            { key: 'twitter', label: 'Twitter', url: '' },
            { key: 'instagram', label: 'Instagram', url: '' },
            { key: 'linkedin', label: 'Linkedin', url: '' },
            { key: 'youtube', label: 'Youtube', url: '' }
        ],
        seo_title: company_settings.seo_title || '',
        seo_description: company_settings.seo_description || '',
        seo_keywords: company_settings.seo_keywords || '',
        email_config_api_url: company_settings.email_config_api_url || '',
        email_config_api_key: company_settings.email_config_api_key || '',
        email_config_api_method: company_settings.email_config_api_method || '',
    });


    const handleSubmitEmailConfig = (e) => {
        e.preventDefault();
        post(route("admin.company-settings.email-config", company_settings.id));
    };

    const handleSubmitSocialLink = (e) => {
        e.preventDefault();
        post(route("admin.company-settings.social-link", company_settings.id));
    };

    const handleSubmitSEO = (e) => {
        e.preventDefault();
        post(route("admin.company-settings.seo", company_settings.id));
    };

    const options = [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' }
    ];

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleSocialChange = (index, value) => {
        const newSocialLinks = [...data.socialmedia_links];
        newSocialLinks[index].url = value;
        setData('socialmedia_links', newSocialLinks);
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company Settings</h2>}
            success={success}
            error={error}
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
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                            <Row>
                                                <Col sm={2}>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first">Email Configuration</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="second">Social Media</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="three">SEO Details</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col sm={10}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="first">
                                                            <form onSubmit={handleSubmitEmailConfig}>
                                                                <div className="form-body">
                                                                    <div className="row1">
                                                                        <div className="col-lg-12">
                                                                            <div className="row1">
                                                                                <div className="col-md-6 mb-4">
                                                                                    <div className="form-group">
                                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Email Configuration Api Url</InputLabel>
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

                                                                                <div className="col-md-6 mb-4">
                                                                                    <div className="form-group">
                                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Email Configuration Api Key</InputLabel>
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

                                                                                <div className="col-md-6 mb-4">
                                                                                    <div className="form-group">
                                                                                        <InputLabel className="fw-700 fs-16 form-label form-group__label">Email Configuration Api Method</InputLabel>
                                                                                        <DynamicSelect
                                                                                            onChange={(value) => handleChange("email_config_api_method", value)}
                                                                                            value={data.email_config_api_method}
                                                                                            options={options}
                                                                                            name="email_config_api_method"
                                                                                        />
                                                                                        <InputError message={errors.email_config_api_method} className="mt-2 col-12" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6 mb-3 text-center">
                                                                                    <div className="form-actions mt-10">
                                                                                        <button type="submit" className="btn btn-primary">
                                                                                            <i className="bi bi-check"></i> Update Data
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            <form onSubmit={handleSubmitSocialLink}>
                                                                <div className="form-body">
                                                                    <div className="row">
                                                                        {data.socialmedia_links.map((social, index) => (
                                                                            <div className="col-md-6 mb-4" key={social.key}>
                                                                                <div className="form-group">
                                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">{social.label}</InputLabel>
                                                                                    <div>
                                                                                        <input
                                                                                            value={social.url}
                                                                                            onChange={(e) => handleSocialChange(index, e.target.value)}
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                        <div className="col-md-12 mb-3 text-center">
                                                                            <div className="form-actions mt-10">
                                                                                <button type="submit" className="btn btn-primary">
                                                                                    <i className="bi bi-check"></i> Update Data
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="three">
                                                            <form onSubmit={handleSubmitSEO}>
                                                                <div className="form-body">
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="col-md-6 mb-4">
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

                                                                            <div className="col-md-6 mb-4">
                                                                                <div className="form-group">
                                                                                    <InputLabel className="fw-700 fs-16 form-label form-group__label">SEO Description</InputLabel>
                                                                                    <textarea
                                                                                        id="seo_description"
                                                                                        type="text"
                                                                                        name="seo_description"
                                                                                        rows={5}
                                                                                        className="form-control"
                                                                                        value={data.seo_description}
                                                                                        onChange={(e) => handleChange("seo_description", e.target.value)}
                                                                                        autoComplete="off"
                                                                                    ></textarea>
                                                                                    <InputError message={errors.seo_description} className="mt-2 col-12" />
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-md-6 mb-4">
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

                                                                            <div className="col-md-6 mb-3 text-center">
                                                                                <div className="form-actions mt-10">
                                                                                    <button type="submit" className="btn btn-primary">
                                                                                        <i className="bi bi-check"></i> Update Data
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
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
