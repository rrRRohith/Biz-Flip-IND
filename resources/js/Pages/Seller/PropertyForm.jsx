import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import { Link } from '@inertiajs/react';
import SelectBox from './Components/SelectBox';
import AdditionalInfo from './Components/AdditionalInfo';
import React, { useState } from 'react';

const features_options = [
    {
        'label': 'CCTV camera',
        'value': 'CCTV camera',
    },
    {
        'label': 'Smoke alarm',
        'value': 'Smoke alarm',
    },
    {
        'label': 'Coffee maker',
        'value': 'Coffee maker',
    }
];

const facilities_options = [
    {
        'label': 'Driveway',
        'value': 'Driveway',
    },
    {
        'label': 'Car parking',
        'value': 'Car parking',
    },
    {
        'label': 'Wheelchair access',
        'value': 'Wheelchair access',
    }
];

const categories_options = [
    {
        'label': 'House',
        'value': 'House',
    },
    {
        'label': 'Shop',
        'value': 'Shop',
    },
    {
        'label': 'Warehouse',
        'value': 'Warehouse',
    }
];

const type_options = [
    {
        'label': 'Rental',
        'value': 'Rental',
    },
    {
        'label': 'Lease',
        'value': 'Lease',
    },
    {
        'label': 'Sale',
        'value': 'Sale',
    }
];

const province_options = [
    {
        'label': 'Ontatio',
        'value': 'Ontatio',
    },
];

export default function PropertyForm() {
    const [additionalInfo, setAdditionalInfo] = useState([]);

    const addInfo = () => {
        setAdditionalInfo([...additionalInfo, { id: Date.now(), name: '', value: '' }]);
    };

    const removeInfo = (id) => {
        setAdditionalInfo(additionalInfo.filter(info => info.id !== id));
    };

    const updateInfoName = (id, name) => {
        const newInfo = additionalInfo.map(item =>
            item.id === id ? { ...item, name } : item
        );
        setAdditionalInfo(newInfo);
    };

    const updateInfoValue = (id, value) => {
        const newInfo = additionalInfo.map(item =>
            item.id === id ? { ...item, value } : item
        );
        setAdditionalInfo(newInfo);
    };
    return (
        <>
            <Head title="Create property" />
            <Wrapper>

                <main className="py-6 bg-surface-secondary">
                    <div className="container">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="d-flex align-items-center">
                                <div className="text-xl font-bold">Create new property</div>
                                <div className="ms-auto">
                                    <Link href={route('seller.properties.index')} className="btn btn-neutral"><i className="bi bi-arrow-left"></i> Go back</Link>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-5">
                                        <h4>Basic details</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>Property name</label> <input type="text" placeholder="Property name" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Property price</label> <input type="text" placeholder="Property price" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-12">
                                            <label>Description</label>
                                            <textarea placeholder="Tell us about your property in detail" className="form-control"></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Property type</label>
                                            <SelectBox name="type" options={type_options}></SelectBox>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Property category</label>
                                            <SelectBox name="category" options={categories_options}></SelectBox>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Facilities</label>
                                            <SelectBox name="facilities" multiple="true" options={facilities_options}></SelectBox>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Features</label>
                                            <SelectBox name="features" multiple="true" options={features_options}></SelectBox>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Address</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>Address</label> <input type="text" placeholder="Address" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>City</label> <input type="text" placeholder="City" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Postcode</label> <input type="text" placeholder="Postcode" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Province</label> 
                                            <SelectBox name="province" options={province_options}></SelectBox>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div><label>Map link</label> <input type="text" placeholder="Map link" className="form-control" /></div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Property gallery</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-12">
                                            <div className="card rounded-input border-dashed">
                                                <div className="card-body">
                                                    <div className="text-center py-5" role="button">
                                                        <i className="bi bi-upload text-lg"></i>
                                                        <div className="font-semibold">
                                                            Upload a file or drag and drop
                                                        </div>
                                                        <div className="text-muted small">
                                                            PNG, WEBP, JPG upto 3mb
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Additional info</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        {additionalInfo.map(info => (
                                            <AdditionalInfo onNameChange={updateInfoName}
                                                onValueChange={updateInfoValue}
                                                onDelete={removeInfo} info={info}></AdditionalInfo>
                                        ))}
                                        <div className="col-12">
                                            <button type="button" className="btn btn-secondary" onClick={addInfo}><i className="bi bi-plus"></i> Add additional info</button>
                                        </div>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-12">
                                            <div className="form-check form-check-lg">
                                                <input role="button" className="form-check-input shadow-none border border-gray border-1 cursor-pointer" type="checkbox" name="publish_property" defaultValue="true" id="publish_property" />
                                                <label role="button" className="mt-1" htmlFor="publish_property">Publish property</label>

                                            </div>
                                            <div className="text-muted small">Your property will not visible to your clients if not published.</div>
                                        </div>
                                        <div className="col-12 text-end">
                                            <button type="button" className="btn btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
