import AuthenticatedLayout from '@/Layouts/Authenticated';
import Wrapper from './layout/Wrapper';
import { Head, Link, useForm } from "@inertiajs/react";
import AdditionalInfo from './Components/AdditionalInfo';
import React, { useState, useRef } from 'react';
import Select from 'react-select';
import InputError from '@/Components/InputError';
import { ToastContainer, toast } from 'react-toastify';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AdFranchise from './AdFranchise';
import { Picker } from 'react-gmap-picker';

export default function PropertyForm({type_options, purpose_options, ad, auth, categories_options, facilities_options, features_options, province_options, business_categories_options, API_KEY }) {

    const [additionalInfo, setAdditionalInfo] = useState(ad ? ad.additional_info : []);
    const [ad_categories, setAdcategories] = useState([]);
    const [isFranchise, setFranchise] = useState(ad && ad.business_category.slug == 'franchise');
    const [isMapEnabled, setIsMapEnabled] = useState(ad && ad.lat != '' && ad.lat != '' ? true : false);
    const { data, setData, post, errors, reset } = useForm({
        _method: ad ? "PUT" : 'POST',
        title: ad ? ad.title : '',
        price: ad ? ad.price : '',
        price_max: ad ? ad.price_max : '',
        space: ad ? ad.space : '',
        description: ad ? ad.description : '',
        property_type: ad ? ad.property_type : '',
        ad_purpose: ad ? ad.ad_purpose : '',
        category: ad ? ad.category.id : '',
        business_category: ad ? ad.business_category.id : '',
        facilities: ad ? ad.facilities_ids : [],
        features: ad ? ad.features_ids : [],
        address: ad ? ad.address : '',
        city: ad ? ad.city : '',
        postalcode: ad ? ad.postalcode : '',
        province: ad ? ad.province : '',
        status: (ad && ad.publish_at) ? 1 : 0,
        // lat: ad ? ad.lat : '',
        // lng: ad ? ad.lng : '',
        map_link: ad ? ad.map_link : '',
        has_negotiable: ad ? ad.has_negotiable : 0,
        has_commission: ad ? ad.has_commission : 0,
        commission: ad ? ad.commission : '',
        images: [],
        uploaded_images: ad ? ad.images : [],
        existing_images: ad ? ad.existing_images : [],
        seo_title: ad ? ad.seo_title : '',
        seo_keywords: ad ? ad.seo_keywords : '',
        seo_description: ad ? ad.seo_description : '',

        //Franchising details here.
        canadian_units: ad && ad.franchise ? ad.franchise.canadian_units : '',
        us_units: ad && ad.franchise ? ad.franchise.us_units : '',
        international_units: ad && ad.franchise ? ad.franchise.international_units : '',
        corporate_units: ad && ad.franchise ? ad.franchise.corporate_units : '',
        franchise_fee: ad && ad.franchise ? ad.franchise.franchise_fee : '',
        liquid_capital: ad && ad.franchise ? ad.franchise.liquid_capital : '',
        total_investment: ad && ad.franchise ? ad.franchise.total_investment : '',
        in_business_since: ad && ad.franchise ? ad.franchise.in_business_since : '',
        franchising_since: ad && ad.franchise ? ad.franchise.franchising_since : '',
        territories: ad && ad.franchise ? ad.franchise.territories : '',
        ad_type: ad && ad.ad_type ? ad.ad_type : 'sale',
        isMapEnabled : ad && ad.lat != '' && ad.lat != '' ? true : false

    });


    
    const handleCheckboxChangeMap = (event) => {
        setIsMapEnabled(event.target.checked);
        setData('isMapEnabled',event.target.checked)
      };


    const handleChange = (key, value) => {
        setData(key, value);
    };

    const addInfo = () => {
        setAdditionalInfo([...additionalInfo, { id: Date.now(), info: '', value: '' }]);
    };

    const removeInfo = (id) => {
        setAdditionalInfo(additionalInfo.filter(info => info.id !== id));
    };

    const updateInfoName = (id, info) => {
        const newInfo = additionalInfo.map(item =>
            item.id === id ? { ...item, info } : item
        );
        setAdditionalInfo(newInfo);
    };

    const updateInfoValue = (id, value) => {
        const newInfo = additionalInfo.map(item =>
            item.id === id ? { ...item, value } : item
        );
        setAdditionalInfo(newInfo);
    };

    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post(route(ad ? "account.ads.update" : "account.ads.store", {
            ad: ad ? ad.id : null,
            additional_info: additionalInfo,
            location: location,
        }), {
            preserveScroll: true,
        });
    };

    const handleDrop = (e) => {
        e.preventDefault();
        validateAndSetImages(Array.from(e.dataTransfer.files));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleImages = async function (e) {
        validateAndSetImages(Array.from(e.target.files));
    }

    const validateAndSetImages = async (fls) => {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/webp'];

        const validFiles = fls.filter(file =>
            validImageTypes.includes(file.type) && file.size <= 2 * 1024 * 1024 // 2 MB size limit
        );

        if (fls.length > validFiles.length) {

            toast.error("Please select PNG, WEBP, JPG upto 2mb", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }

        if (validFiles.length > 0) {
            const newImages = validFiles.map(file => ({
                file,
                url: URL.createObjectURL(file)
            }));
            await setImages(prevImages => [...prevImages, ...newImages]);
            setData((prevData) => ({
                ...prevData,
                images: [...prevData.images, ...validFiles],
            }));
        }
    }

    const removeImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
        setData((prevData) => ({
            ...prevData,
            images: prevData.images.filter((_, i) => i !== index),
        }));
    };

    const removeUploadedImage = (index) => {
        setData((prevData) => ({
            ...prevData,
            uploaded_images: prevData.uploaded_images.filter((_, i) => i !== index),
        }));
        setData((prevData) => ({
            ...prevData,
            existing_images: prevData.existing_images.filter((_, i) => i !== index),
        }));
    }

    const changeAdCategories = (value) => {
        const category = business_categories_options.find(item => item.value === value);
        setAdcategories(category.ad_category_collection);
        setFranchise(category.slug == 'franchise');
        // handleChange('business_category', value);
        // handleChange('category', null);
    }

    const INITIAL_LOCATION = { lat: ad && ad.lat ? ad.lat : 13.4, lng: ad && ad.lng ? ad.lng : 77.0 };

    console.log(INITIAL_LOCATION);
    const INITIAL_ZOOM = 10;

    const [defaultLocation, setDefaultLocation] = useState(INITIAL_LOCATION);
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(INITIAL_ZOOM);

    const handleChangeLocation = (lat, lng) => {
        setLocation({ lat, lng });
    };

    return (
        <>
            <Head title={ad ? 'Edit add' : 'Create new ad'} />
            <Wrapper user={auth.user}>

                <main className="py-6">
                    <div className="container px-3">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="d-flex align-items-center">
                                <div className="text-xl font-bold">{ad ? 'Edit add' : 'Create new ad'}</div>
                                <div className="ms-auto">
                                    <Link href={route('account.ads.index')} className="btn btn-neutral"><i className="bi bi-arrow-left"></i> Go back</Link>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    {!ad && (
                                        <>
                                            <div className="mb-5">
                                                <h4>Ad type</h4>
                                                <p>Choose the type of ad you want to post. Select <strong>Sale</strong> if you're offering something for sale, lease, or rent. If you're looking to buy or are seeking something, select <strong>Wanted</strong></p>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-6">
                                                    <div onClick={(e) => { setData('ad_type', 'sale') }} className={"card p-2 rounded-input " + (data.ad_type === 'sale' ? 'border-primary' : '')} role='button'>
                                                        <div className="card-body p-4 text-center position-relative">
                                                            {data.ad_type == 'sale' && (
                                                                <div className="text-primary text-lg text-primary position-absolute top-0 end-0">
                                                                    <i class="bi bi-check-circle"></i>
                                                                </div>
                                                            )}
                                                            <h4 className={(data.ad_type === 'sale' ? 'text-primary' : '')}>Sale</h4>
                                                            <div>List your ad as for sale</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div onClick={(e) => { setData('ad_type', 'wanted') }} className={"card rounded-input p-2 " + (data.ad_type === 'wanted' ? 'border-primary' : '')} role='button'>
                                                        <div className="card-body p-4 text-center position-relative">
                                                            {data.ad_type == 'wanted' && (
                                                                <div className="text-primary text-lg text-primary position-absolute top-0 end-0">
                                                                    <i class="bi bi-check-circle"></i>
                                                                </div>
                                                            )}
                                                            <h4 className={(data.ad_type === 'wanted' ? 'text-primary' : '')}>Wanted</h4>
                                                            <div>List your ad as for sale</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="mb-5">
                                        <h4>Basic details</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <label>Category</label>
                                            <Select defaultValue={{ value: data.business_category, label: ad ? ad.business_category.label : 'Select...' }} onChange={(e) => { handleChange('business_category', e.value), changeAdCategories(e.value) }} options={business_categories_options}></Select>
                                            <InputError message={errors.business_category} />
                                        </div>
                                        <div className="col-md-6">
                                            <div>
                                                <label>Title</label>
                                                <input value={data.title} onChange={(e) => { handleChange('title', e.target.value) }} type="text" placeholder="Title" className="form-control" />
                                                <InputError message={errors.title} />
                                            </div>
                                        </div>
                                        {data.ad_type == 'sale' ? (
                                            <>
                                                <div className="col-md-6">
                                                    <div><label>Price</label>
                                                        <input value={data.price} onChange={(e) => { handleChange('price', e.target.value) }} type="text" placeholder="Price" className="form-control" />
                                                        <InputError message={errors.price} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div><label>Space/Length/Area</label>
                                                        <input value={data.space} onChange={(e) => { handleChange('space', e.target.value) }} type="text" placeholder="Space/Length/Area" className="form-control" />
                                                        <InputError message={errors.space} />
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="col-md-4">
                                                    <div><label>Price min</label>
                                                        <input value={data.price} onChange={(e) => { handleChange('price', e.target.value) }} type="text" placeholder="Price min" className="form-control" />
                                                        <InputError message={errors.price} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div><label>Price max</label>
                                                        <input value={data.price_max} onChange={(e) => { handleChange('price_max', e.target.value) }} type="text" placeholder="Price max" className="form-control" />
                                                        <InputError message={errors.price_max} />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div><label>Space/Length/Area</label>
                                                        <input value={data.space} onChange={(e) => { handleChange('space', e.target.value) }} type="text" placeholder="Space/Length/Area" className="form-control" />
                                                        <InputError message={errors.space} />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {data.ad_type == 'sale' && (
                                            <>
                                                <div className="col-12">
                                                    <div className="form-check form-check-lg">
                                                        <input checked={data.has_negotiable == 1} onClick={(e) => handleChange('has_negotiable', e.target.checked ? 1 : 0)} role="button" className="form-check-input shadow-none border border-gray border-1 cursor-pointer" type="checkbox" defaultValue="true" id="has_negotiable" />
                                                        <label role="button" className="mt-1" htmlFor="has_negotiable">Is your price negotiable?</label>
                                                    </div>
                                                    <div className="text-muted small">Is your price negotiable?.</div>
                                                    <InputError message={errors.has_negotiable} />
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check form-check-lg">
                                                        <input checked={data.has_commission == 1} onClick={(e) => handleChange('has_commission', e.target.checked ? 1 : 0)} role="button" className="form-check-input shadow-none border border-gray border-1 cursor-pointer" type="checkbox" defaultValue="true" id="has_commission" />
                                                        <label role="button" className="mt-1" htmlFor="has_commission">Have commission?</label>
                                                    </div>
                                                    <div className="text-muted small">Do you have extra commission from buyer?.</div>
                                                    <InputError message={errors.has_commission} />
                                                </div>
                                            </>
                                        )}
                                        {data.has_commission == 1 && (
                                            <>
                                                <div className="col-md-6">
                                                    <div><label>Commission <small>(in percentage)</small></label>
                                                        <input value={data.commission} onChange={(e) => { handleChange('commission', e.target.value) }} type="text" placeholder="Commission" className="form-control" />
                                                        <InputError message={errors.commission} />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {/* <div className="col-md-12">
                                            <label>Description</label>
                                            <textarea value={data.description} onChange={(e) => { handleChange('description', e.target.value) }} placeholder="Tell us about your property in detail" className="form-control"></textarea>
                                            <InputError message={errors.description} />
                                        </div> */}
                                        <div className="col-md-12">
                                            <label>Description</label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={data.description}
                                                onChange={(event, editor) => {
                                                    handleChange('description', editor.getData())
                                                }} config={{
                                                    toolbar: [
                                                        'heading', '|',
                                                        'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'
                                                    ]
                                                }}
                                            />
                                            <InputError message={errors.description} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Type</label>
                                            <Select defaultValue={{ value: data.property_type, label: data.property_type ? data.property_type : 'Select...' }} onChange={(e) => { handleChange('property_type', e.value) }} options={type_options}></Select>
                                            <InputError message={errors.property_type} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Purpose</label>
                                            <Select defaultValue={{ value: data.ad_purpose, label: data.ad_purpose ? data.ad_purpose : 'Select...' }} onChange={(e) => { handleChange('ad_purpose', e.value) }} options={purpose_options}></Select>
                                            <InputError message={errors.ad_purpose} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Industry</label>
                                            <Select defaultValue={{ value: data.category, label: ad ? ad.category.label : 'Select...' }} onChange={(e) => { handleChange('category', e.value) }} options={ad_categories}></Select>
                                            <InputError message={errors.category} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Facilities</label>
                                            <Select defaultValue={ad ? ad.facilities : []} isMulti onChange={(selectedOptions) => { handleChange('facilities', selectedOptions ? selectedOptions.map(option => option.value) : []); }} options={facilities_options}></Select>
                                            <InputError message={errors.facilities} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Features</label>
                                            <Select defaultValue={ad ? ad.features : []} isMulti onChange={(selectedOptions) => { handleChange('features', selectedOptions ? selectedOptions.map(option => option.value) : []); }} options={features_options}></Select>
                                            <InputError message={errors.features} />
                                        </div>
                                    </div>
                                    <hr />
                                    {isFranchise && data.ad_type == 'sale' && (
                                        <>
                                            <AdFranchise handleChange={handleChange} data={data} errors={errors}></AdFranchise>
                                        </>
                                    )}
                                    <div className="mb-5">
                                        {data.ad_type == 'sale' ? (
                                            <h4>Address</h4>
                                        ) : (
                                            <h4>Prefered Location</h4>
                                        )}

                                    </div>
                                    <div className="row g-5 mb-5">
                                        {data.ad_type == 'sale' && (
                                            <div className="col-md-6">
                                                <div><label>Address</label>
                                                    <input value={data.address} onChange={(e) => { handleChange('address', e.target.value) }} type="text" placeholder="Address" className="form-control" />
                                                    <InputError message={errors.address} />
                                                </div>
                                            </div>
                                        )}

                                        <div className="col-md-6">
                                            <div><label>City</label>
                                                <input value={data.city} onChange={(e) => { handleChange('city', e.target.value) }} type="text" placeholder="City" className="form-control" />
                                                <InputError message={errors.city} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Postcode</label>
                                                <input maxLength={7} value={data.postalcode} onChange={(e) => { handleChange('postalcode', e.target.value) }} type="text" placeholder="Postcode" className="form-control" />
                                                <InputError message={errors.postalcode} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Province</label>
                                                <Select defaultValue={{ value: data.province, label: data.province ? data.province : 'Select...' }} onChange={(e) => { handleChange('province', e.value) }} options={province_options}></Select>
                                                <InputError message={errors.province} />
                                            </div>
                                        </div>
                                        {data.ad_type == 'sale' && (
                                            <>
                                            <div className="col-12 mb-5">
                                                <div className='mb-3'>
                                                    <input
                                                        id="map"
                                                        className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                        type="checkbox"
                                                        name="map_enable"
                                                        defaultChecked={isMapEnabled}
                                                        onChange={handleCheckboxChangeMap}
                                                    />
                                                    <label
                                                        role="button" className='ms-2' for="map"> Enable Map</label>
                                                </div>
                                                {isMapEnabled && (
                                                    <div>
                                                        <Picker
                                                            defaultLocation={defaultLocation}
                                                            zoom={zoom}
                                                            mapTypeId="roadmap"
                                                            style={{ height: '300px' }}
                                                            onChangeLocation={handleChangeLocation}
                                                            apiKey={API_KEY}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                                {/* <div className="col-md-12">
                                                    <div><label>Map link</label>
                                                        <input value={data.map_link} onChange={(e) => { handleChange('map_link', e.target.value) }} type="text" placeholder="Map link" className="form-control" />
                                                        <InputError message={errors.map_link} />
                                                    </div>
                                                </div> */}
                                                <div className="col-md-6 d-none">
                                                    <div><label>Latitude</label>
                                                        <input value={data.lat} onChange={(e) => { handleChange('lat', e.target.value) }} type="hidden" placeholder="Latitude" className="form-control" />
                                                        <InputError message={errors.lat} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 d-none">
                                                    <div><label>Longitude</label>
                                                        <input value={data.lng} onChange={(e) => { handleChange('lng', e.target.value) }} type="hidden" placeholder="Longitude" className="form-control" />
                                                        <InputError message={errors.lng} />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <hr />
                                    <div className="mb-5">
                                        <h4>Gallery</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-12">
                                            <div onDrop={handleDrop} onDragOver={handleDragOver} className="card rounded-input border-dashed bg-gray-100">
                                                <label role='button' htmlFor="images">
                                                    <div className="card-body">
                                                        <div className="text-center py-5" role="button">

                                                            <i className="bi bi-upload text-lg"></i>
                                                            <div className="font-semibold">
                                                                Upload a file or drag and drop
                                                            </div>
                                                            <div className="text-muted small">
                                                                PNG, WEBP, JPG upto 2mb
                                                            </div>

                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="row mt-4">
                                                {ad && (
                                                    <>
                                                        {data.uploaded_images.map((image, index) => (
                                                            <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">

                                                                <div className='position-relative'>
                                                                    <img className="ad-image shadow-sm rounded-input pointer-events-none" src={image} />
                                                                    <div className="position-absolute p-1 top-0 end-0">
                                                                        <div onClick={() => removeUploadedImage(index)} role='button' className="d-flex align-items-center w-h-30  bg-white border border-2 text-dark rounded-circle">
                                                                            <i className="bi bi-trash m-auto"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                                {images.map((image, index) => (
                                                    <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">

                                                        <div className='position-relative'>
                                                            <img className="ad-image shadow-sm rounded-input pointer-events-none" src={image.url} />
                                                            <div className="position-absolute p-1 top-0 end-0">
                                                                <div onClick={() => removeImage(index)} role='button' className="d-flex align-items-center w-h-30  bg-white border border-2 text-dark rounded-circle">
                                                                    <i className="bi bi-trash m-auto"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <input onChange={(e) => handleImages(e)} type="file" name="" id="images" multiple hidden accept='image/*' />
                                        </div>
                                        <InputError className='mt-0' message={errors.images} />
                                    </div>
                                    <hr />
                                    <div className="mb-5">
                                        <h4>Additional info</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        {additionalInfo.map(info => (
                                            <AdditionalInfo onNameChange={updateInfoName}
                                                onValueChange={updateInfoValue}
                                                onDelete={removeInfo} info={info}></AdditionalInfo>
                                        ))}
                                        <InputError handleChange={handleChange} message={errors.addiotion_info} />
                                        <div className="col-12">
                                            <button type="button" className="btn btn-secondary" onClick={addInfo}><i className="bi bi-plus"></i> Add additional info</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="mb-5">
                                        <h4>Seo Settings</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-12">
                                            <div>
                                                <label>Title</label>
                                                <input value={data.seo_title} onChange={(e) => { handleChange('seo_title', e.target.value) }} type="text" placeholder="Seo title" className="form-control" />
                                                <InputError message={errors.seo_title} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label>Keywords</label>
                                            <textarea value={data.seo_keywords} onChange={(e) => { handleChange('seo_keywords', e.target.value) }} placeholder="Seo keywords" className="form-control"></textarea>
                                            <InputError message={errors.seo_keywords} />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Description</label>
                                            <textarea value={data.seo_description} onChange={(e) => { handleChange('seo_description', e.target.value) }} placeholder="Seo description" className="form-control"></textarea>
                                            <InputError message={errors.seo_description} />
                                        </div>
                                    </div>
                                    <div className="row g-5">
                                        <div className="col-12">
                                            <div className="form-check form-check-lg">
                                                <input checked={data.status == 1} onClick={(e) => handleChange('status', e.target.checked ? 1 : 0)} role="button" className="form-check-input shadow-none border border-gray border-1 cursor-pointer" type="checkbox" name="publish_property" defaultValue="true" id="publish_property" />
                                                <label role="button" className="mt-1" htmlFor="publish_property">Publish ad</label>
                                            </div>
                                            <div className="text-muted small">Your ad will not visible to your clients if not published.</div>
                                            <InputError message={errors.status} />
                                        </div>
                                        <div className="col-12 text-end">
                                            <Link href={route('account.ads.index')} className="btn btn-neutral me-2">Cancel</Link>
                                            <button type="submit" className="btn btn-primary">Save</button>
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
