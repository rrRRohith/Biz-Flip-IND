
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


export default function index({ company_settings, queryParams = null, auth, success = null, error = null }) {

    const { data, setData, post, errors, reset } = useForm({
        socialmedia_liks: '',
        seo_title: company_settings.seo_title || '',
        seo_description: company_settings.seo_description || '',
        seo_keywords: company_settings.seo_keywords || '',
        email_config_api_url: company_settings.email_config_api_url || '',
        email_config_api_key: company_settings.email_config_api_key || '',
        email_config_api_method: company_settings.email_config_api_method || '',
        facebook: company_settings.social_links.facebook || '',
        twitter: company_settings.social_links.twitter || '',
        instagram: company_settings.social_links.instagram || '',
        linkedin: company_settings.social_links.linkedin || '',
        _method: "PUT"
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

    
    const [checkedSocials, setCheckedSocials] = useState(company_settings.social_settings);

    const handleSocialCheckboxChange = async (social) => {
        await setCheckedSocials((prevCheckedSocials) => ({
            ...prevCheckedSocials,
            [social]: !prevCheckedSocials[social]
        }));
    }

    const socials = [
        { id: 'facebook', label: 'Facebook' },
        { id: 'twitter', label: 'Twitter' },
        { id: 'instagram', label: 'Instagram' },
        { id: 'linkedin', label: 'Linkedin' },
    ];

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
                                                            <Nav.Link eventKey="first">Email Configration</Nav.Link>
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
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-body">
                                                                    <div className="row1">

                                                                        <div className="col-lg-12">
                                                                            <div className="row1">
                                                                                <div className="col-md-6 mb-4">
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

                                                                                <div className="col-md-6 mb-4">
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

                                                                                <div className="col-md-6 mb-4">
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
                                                                                <div className="col-md-6 mb-3 text-center">
                                                                                    <div className="form-actions mt-10 ">
                                                                                        <button type="submit" className="btn btn-primary"> <i className="bi bi-check"></i> Update Data</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            <div>
                                                                <table>
                                                                    {socials.map((social) => (
                                                                        <tr key={social.id}>
                                                                            <td>
                                                                                <div className="me-2">
                                                                                    <div className="form-check form-check-lg">
                                                                                        <input
                                                                                            role="button"
                                                                                            className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                                                            type="checkbox"
                                                                                            id={`social_${social.id}`}
                                                                                            checked={checkedSocials[social.id]}
                                                                                            onChange={() => handleSocialCheckboxChange(social.id)}
                                                                                        />
                                                                                        <label role="button" className="mt-1" htmlFor={`social_${social.id}`}>
                                                                                            {social.label}

                                                                                        </label>
                                                                                    </div>
                                                                                    <div>
                                                                                        <small>Set your {social.label} page link</small>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                {checkedSocials[social.id] && (
                                                                                    <div>
                                                                                        <input value={data[social.id]} onChange={(e) => { handleChange(social.id, e.target.value) }} type="text" placeholder={`${social.label} page`} className="form-control" />
                                                                                    </div>
                                                                                )}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </table>
                                                            </div>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="three">
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-body">
                                                                    <div className="row1">

                                                                        <div className="col-lg-12">
                                                                            <div className="row1">

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
                                                                                    <div className="form-actions mt-10 ">
                                                                                        <button type="submit" className="btn btn-primary"> <i className="bi bi-check"></i> Update Data</button>
                                                                                    </div>
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
