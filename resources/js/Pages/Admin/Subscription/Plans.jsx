import React, { useState } from 'react';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import ModalPopup from '@/Components/ModalPopup';
import Authenticated from '@/Layouts/AdminAuthenticated';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
// Custom Table Components
import SubscriptionPlansTable from './SubscriptionPlansTable';
import SubscribedAgentsTable from './SubscribedAgentsTable';
import FreePlanAgentsTable from './FreePlanAgentsTable';
import InvoicesTable from './InvoicesTable';
import Form from 'react-bootstrap/Form';
import SelectOption from '@/Components/SelectOption';
import DynamicSelect from '@/Components/DynamicSelect';
import Swal from 'sweetalert2';

export default function Plans({ plans, subscribedAgents, freePlanAgents, invoices, auth }) {
    const [key, setKey] = useState('SubscriptionPlans');
    // State management
    const [show, setShow] = useState(false);
    const [currentPlan, setCurrentPlan] = useState(null);
    const [modalType, setModalType] = useState(""); // "view", "edit", or "create"

    const { data, setData, post, errors, reset } = useForm({
        name: '',
        description: '',
        features: '',
        price: '',
        ads: '',
        duration: '1',
        default: '0',
        visibility: '0',
        status: '0',
    });

    // Handlers for modal show/close
    const handleModelShow = (type, plan = null) => {
        setModalType(type);
        if (plan) {
            setCurrentPlan(plan);
            setData({
                name: plan.name,
                description: plan.description,
                features: plan.features,
                price: plan.price,
                ads: plan.ads,
                duration: plan.duration,
                default: plan.default,
                visibility: plan.visibility,
                status: plan.status,
            });
        } else {
            reset();
        }
        setShow(true);
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    // Handle form submission (create or edit)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (modalType === "create") {
            post(route('admin.subscription.create'), {
                preserveScroll: true,
                onSuccess: () => handleClose()
            });
        } else if (modalType === "edit") {
            post(route('admin.subscription.update', { id: currentPlan.id }), {
                preserveScroll: true,
                onSuccess: () => handleClose()
            });
        }
    };

    const handleClose = () => {
        setShow(false);
        setCurrentPlan(null);
        reset();
    };

    const handleDelete = (planId) => {
        Swal.fire({
            title: 'Are you sure you want to delete this plan?',
            text: 'Once deleted, it cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route("admin.subscription.delete", planId), {
                    onSuccess: () => {
                        Swal.fire('Deleted!', 'Plan has been deleted.', 'success');
                    },
                });
            }
        });
    };

    const durations = [
        { value: '1', label: '1 Month' }, { value: '2', label: '2 Month' }, { value: '3', label: '3 Month' },
        { value: '4', label: '4 Month' }, { value: '5', label: '5 Month' }, { value: '6', label: '6 Month' },
        { value: '7', label: '7 Month' }, { value: '8', label: '8 Month' }, { value: '9', label: '9 Month' },
        { value: '10', label: '10 Month' }, { value: '11', label: '11 Month' }, { value: '12', label: '12 Month' },
        { value: '13', label: '13 Month' }, { value: '14', label: '14 Month' }, { value: '15', label: '15 Month' },
        { value: '16', label: '16 Month' }, { value: '17', label: '17 Month' }, { value: '18', label: '18 Month' },
        { value: '19', label: '19 Month' }, { value: '2', label: '2 Month' }, { value: '22', label: '22 Month' },
        { value: '23', label: '23 Month' }, { value: '24', label: '24 Month' }, { value: '25', label: '25 Month' },
        { value: '26', label: '26 Month' }, { value: '27', label: '27 Month' }, { value: '27', label: '27 Month' },
        { value: '28', label: '28 Month' }, { value: '29', label: '29 Month' }, { value: '30', label: '30 Month' },
        { value: '31', label: '31 Month' }, { value: '32', label: '32 Month' }, { value: '33', label: '33 Month' },
        { value: '34', label: '34 Month' }, { value: '35', label: '35 Month' }, { value: '36', label: '36 Month' },
    ];
    return (
        <>
            <Head title="Subscription Plans" />
            <Authenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Subscription Plans</h2>}
            >
                <div className="content-wrapper me-4">
                    <div className="container-full">
                        <div className="content-header">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="d-flex flex-column">
                                        <h4 className="page-title">Subscription Plans</h4>
                                        <div className="d-inline-block align-items-center mt-2">
                                            <nav>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <Link href={route('admin.index')}>
                                                            <i className="bi bi-house"></i> Dashboard
                                                        </Link>
                                                    </li>
                                                    <li className="breadcrumb-item active" aria-current="page">Subscription Plans</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <button onClick={() => handleModelShow("create")} className="btn btn-info btn-sm float-end mb-4">
                                        Create New Plan
                                    </button>
                                </div>
                            </div>
                        </div>

                        <section className="content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="max-w-screen-md vstack gap-6 m-auto">
                                                <div className="container">

                                                    <div className="table-responsive rounded card-table">
                                                        <Table className="table border-no" id="example1">

                                                            <Thead>
                                                                <Tr>
                                                                    <Th>#</Th>
                                                                    <Th>Name</Th>
                                                                    <Th  className="text-end">Price</Th>
                                                                    <Th  className="text-center">No:of Ads</Th>
                                                                    <Th>Duration</Th>
                                                                    <Th>Status</Th>
                                                                    <Th className="text-end">Actions</Th>
                                                                </Tr>
                                                            </Thead>
                                                            <Tbody>
                                                                {plans.data.map(plan => (
                                                                    <Tr key={plan.id}>
                                                                        <Td>{plan.id}</Td>
                                                                        <Td>{plan.name}</Td>
                                                                        <Td className="text-end">{window.formatPrice(plan.price)}</Td>
                                                                        <Td className="text-center">{plan.ads}</Td>
                                                                        <Td className="text-capitalize">{plan.duration} {plan.duration > 1 ? 'months' : 'month'}</Td>
                                                                        <Td>
                                                                            <div dangerouslySetInnerHTML={{ __html: window.statusIcon(plan.status) }} />
                                                                        </Td>
                                                                        <Td className="text-end">
                                                                            <button className="btn btn-transparent" onClick={() => handleModelShow("view", plan)}>
                                                                                <i className="bi bi-eye"></i>
                                                                            </button>
                                                                            <button className="btn btn-transparent" onClick={() => handleModelShow("edit", plan)}>
                                                                                <i className="bi bi-pencil"></i>
                                                                            </button>
                                                                            <button className="btn btn-transparent" onClick={() => handleDelete(plan.id)}>
                                                                                <i className="bi bi-trash"></i>
                                                                            </button>
                                                                        </Td>
                                                                    </Tr>
                                                                ))}
                                                            </Tbody>
                                                        </Table>
                                                    </div>
                                                </div>

                                                {/* Modal for viewing, editing, or creating a plan */}
                                                <ModalPopup show={show} handleClose={handleClose} size="md" title={modalType === "create" ? "Create New Plan" : modalType === "edit" ? "Edit Plan" : "View Plan"}>
                                                    {modalType === "view" && currentPlan && (
                                                        <div>
                                                            <table className='table'>
                                                                <thead></thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Plan Name</th>
                                                                        <td>{currentPlan.name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Description</th>
                                                                        <td>{currentPlan.description}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Features</th>
                                                                        <td>{currentPlan.features}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Price</th>
                                                                        <td>{window.formatPrice(currentPlan.price)}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>No:of Ads</th>
                                                                        <td>{currentPlan.ads}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Duration</th>
                                                                        <td className='text-capitalize'>{currentPlan.duration} {currentPlan.duration > 1 ? 'months' : 'month'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Status</th>
                                                                        <td>{currentPlan.status_text}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    )}

                                                    {(modalType === "edit" || modalType === "create") && (
                                                        <form onSubmit={handleSubmit} method='POST'>
                                                            <div className="modal-body row">
                                                                <div className="col-lg-12 mb-3">
                                                                    <InputLabel value="Plan Name" />
                                                                    <TextInput
                                                                        name="name"
                                                                        value={data.name}
                                                                        className="form-control"
                                                                        autoComplete="name"
                                                                        onChange={(e) => handleChange('name', e.target.value)}
                                                                    />
                                                                    <InputError message={errors.name} className="mt-2" />
                                                                </div>
                                                                <div className="col-lg-12 mb-3">
                                                                    <InputLabel value="Plan Description" />
                                                                    <TextInput
                                                                        name="description"
                                                                        value={data.description}
                                                                        className="form-control"
                                                                        autoComplete="description"
                                                                        onChange={(e) => handleChange('description', e.target.value)}
                                                                    />
                                                                    <InputError message={errors.description} className="mt-2" />
                                                                </div>
                                                                <div className="col-lg-12 mb-3">
                                                                    <InputLabel value="Features" />
                                                                    <TextInput
                                                                        name="features"
                                                                        value={data.features}
                                                                        className="form-control"
                                                                        autoComplete="features"
                                                                        onChange={(e) => handleChange('features', e.target.value)}
                                                                    />
                                                                    <InputError message={errors.features} className="mt-2" />
                                                                </div>
                                                                <div className="col-lg-6 mb-3">
                                                                    <InputLabel value="Plan Price" />
                                                                    <TextInput
                                                                        name="price"
                                                                        value={data.price}
                                                                        className="form-control"
                                                                        autoComplete="price"
                                                                        onChange={(e) => handleChange('price', e.target.value)}
                                                                    />
                                                                    <InputError message={errors.price} className="mt-2" />
                                                                </div>
                                                                <div className="col-lg-6 mb-3">
                                                                    <InputLabel value="No:of Ads" />
                                                                    <TextInput
                                                                        name="ads"
                                                                        value={data.ads}
                                                                        className="form-control"
                                                                        autoComplete="ads"
                                                                        onChange={(e) => handleChange('ads', e.target.value)}
                                                                    />
                                                                    <InputError message={errors.ads} className="mt-2" />
                                                                </div>
                                                                <div className="col-lg-6 mb-3">
                                                                    <InputLabel value="Duration" />
                                                                    <SelectOption name="duration" items={durations} onChange={(e) => handleChange('duration', e.target.value)} value={data.duration} />
                                                                    <InputError message={errors.duration} className="mt-2" />
                                                                </div>
                                                                <div className='col-lg-12'>
                                                                    <div className="form-group mb-20 ps-10">

                                                                        <Form.Check
                                                                            type="switch"
                                                                            id="default"
                                                                            name="default"
                                                                            label="Default"
                                                                            role="button"
                                                                            checked={data.default ? true : false}
                                                                            onChange={(e) => handleChange('default', e.target.checked ? data.default : 0)}
                                                                        />
                                                                        <InputError message={errors.default} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>

                                                                <div className='col-lg-4'>
                                                                    <div className="form-group mb-20 ps-10">

                                                                        <Form.Check
                                                                            type="switch"
                                                                            id="status"
                                                                            name="status"
                                                                            label="Publish"
                                                                            role="button"
                                                                            checked={data.status ? true : false}
                                                                            onChange={(e) => handleChange('status', e.target.checked ? data.status : 0)}
                                                                        />
                                                                        <InputError message={errors.status} className="mt-2 col-12" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-sm  btn-secondary" onClick={handleClose}>
                                                                    Cancel
                                                                </button>
                                                                <button type="submit" className="btn btn-sm text-white  btn-success">
                                                                <i class="bi bi-check"></i>
                                                                    {modalType === "create" ? "Create Plan" : "Update Plan"}
                                                                </button>
                                                            </div>
                                                        </form>
                                                    )}
                                                </ModalPopup>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
