import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Index({ category, auth }) {
    // State to hold the dynamically added fields
    const [fields, setFields] = useState([]);

    // State for modal and editing field
    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editField, setEditField] = useState({
        name: '',
        placeholder: '',
        label: '',
        required: false,
        values: [] // For select, checkbox, and radio options
    });

    const [newValue, setNewValue] = useState(""); // To store new value when adding

    // Function to add new fields based on selection
    const addField = (type) => {
        const newField = { type, name: '', placeholder: '', label: '', required: false, values: [] };
        setFields([...fields, newField]);
        openEditModal(fields.length);  // Automatically open the edit modal for the new field
    };

    // Function to remove a field
    const removeField = (index) => {
        setFields(fields.filter((_, i) => i !== index));
    };

    // Function to open the modal for editing a field
    const openEditModal = (index) => {
        setEditField({ ...fields[index] });
        setEditIndex(index);
        setShowModal(true);
    };

    // Function to handle modal form changes
    const handleEditChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditField(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Function to save the edited field details
    const saveFieldDetails = () => {
        const updatedFields = [...fields];
        updatedFields[editIndex] = editField;
        setFields(updatedFields);
        setShowModal(false);
    };

    // Function to add a new value to options (for select, checkbox, or radio fields)
    const addOptionValue = () => {
        if (newValue.trim()) {  // Only add value if it's non-empty
            setEditField(prev => ({
                ...prev,
                values: [...prev.values, newValue]
            }));
            setNewValue('');
        }
    };

    // Function to remove a value from options
    const removeOptionValue = (index) => {
        setEditField(prev => ({
            ...prev,
            values: prev.values.filter((_, i) => i !== index)
        }));
    };

    // Function to render the appropriate input field based on type
    const renderField = (field, index) => {
        return (
            <div className="mb-3 d-flex align-items-start" key={index}>
                <div className="flex-grow-1">
                    <label htmlFor={`${field.type}-${index}`} className="form-label">{field.label || `Field ${index + 1}`}</label>
                    {
                        field.type === 'textarea' ? (
                            <textarea
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-control"
                                id={`${field.type}-${index}`}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                            />
                        ) : field.type === 'select' ? (
                            <select
                                className="form-control"
                                id={`${field.type}-${index}`}
                                name={field.name}
                                required={field.required}
                            >
                                {field.values.map((value, i) => <option key={i} value={value}>{value}</option>)}
                            </select>
                        ) : field.type === 'checkbox' ? (
                            field.values.map((value, i) => (
                                <div key={i} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`${field.type}-${index}-${i}`}
                                        value={value}
                                    />
                                    <label className="form-check-label" htmlFor={`${field.type}-${index}-${i}`}>
                                        {value}
                                    </label>
                                </div>
                            ))
                        ) : field.type === 'radio' ? (
                            field.values.map((value, i) => (
                                <div key={i} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id={`${field.type}-${index}-${i}`}
                                        name={`radio-group-${index}`}
                                        value={value}
                                    />
                                    <label className="form-check-label" htmlFor={`${field.type}-${index}-${i}`}>
                                        {value}
                                    </label>
                                </div>
                            ))
                        ) : (
                            <input
                                type={field.type}
                                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-control"
                                id={`${field.type}-${index}`}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                            />
                        )
                    }
                </div>
                <div className="ms-3">
                    <button type="button" className="btn btn-transparent btn-sm me-2" onClick={() => openEditModal(index)}>
                    <i class="bi bi-pencil"></i>
                    </button>
                    <button type="button" className="btn btn-transparent btn-sm" onClick={() => removeField(index)}>
                    <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Customize category fields</h2>}
        >
            <Head title="Customize category fields" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">Customize category fields</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link></li>
                                                <PermissionAllow permission={'Categories Listing'}>
                                                    <li className="breadcrumb-item" aria-current="page"><Link href={route('admin.category.index')}>Categories</Link></li>
                                                </PermissionAllow>
                                                <li className="breadcrumb-item active" aria-current="page">Customize category fields</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'></div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="row mb-200">
                            <div className="col-12 col-xl-6 m-auto">
                                <div className="alert alert-warning">
                                    You are currently customizing form fields for ad category <strong>{category.name}</strong>
                                </div>
                                <div className="box mb-200">
                                    <div className="box-body">

                                        <PermissionAllow permission={'Ad Type Edit'} message={true}>
                                            <form>
                                                
                                                <div className="mt-30"></div>

                                                {/* Render dynamically added fields */}
                                                {fields.map((field, index) => renderField(field, index))}

                                                {!fields.length &&(
                                                    <div className="text-center pb-50 fs-5">
                                                        Add form fields
                                                    </div>
                                                )}

                                                <div className="form-actions d-flex mt-10 col-lg-12 text-left">
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                        Add new field
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => addField('text')}>Add text</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => addField('email')}>Add email</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => addField('number')}>Add number</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => addField('textarea')}>Add textarea</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => addField('select')}>Add select</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => addField('checkbox')}>Add checkbox</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => addField('radio')}>Add radio button</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                    <button type="submit" className="ms-4 btn btn-success">
                                                        <i className="bi bi-check"></i> Save changes
                                                    </button>
                                                </div>
                                            </form>
                                        </PermissionAllow>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Modal for editing field details */}
                    <Modal centered show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Field</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Field Label</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="label"
                                        value={editField.label}
                                        onChange={handleEditChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Field Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={editField.name}
                                        onChange={handleEditChange}
                                    />
                                </Form.Group>

                                {/* Placeholder input only for text, email, number, and textarea */}
                                {(editField.type === 'text' || editField.type === 'email' || editField.type === 'number' || editField.type === 'textarea') && (
                                    <Form.Group className="mb-3">
                                        <Form.Label>Placeholder</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="placeholder"
                                            value={editField.placeholder}
                                            onChange={handleEditChange}
                                        />
                                    </Form.Group>
                                )}

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        label="Required"
                                        name="required"
                                        checked={editField.required}
                                        onChange={handleEditChange}
                                    />
                                </Form.Group>

                                {/* Values for select, checkbox, or radio */}
                                {(editField.type === 'select' || editField.type === 'checkbox' || editField.type === 'radio') && (
                                    <div>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Add Option</Form.Label>
                                            <div className="d-flex">
                                                <Form.Control
                                                    type="text"
                                                    value={newValue}
                                                    onChange={(e) => setNewValue(e.target.value)}
                                                />
                                                <Button onClick={addOptionValue} className="ms-2 text-white"><i class="bi bi-plus"></i></Button>
                                            </div>
                                        </Form.Group>

                                        <ul className="list-group">
                                            {editField.values.map((value, i) => (
                                                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                                                    <Form.Control
                                                        type="text"
                                                        value={value}
                                                        onChange={(e) => {
                                                            const updatedValues = [...editField.values];
                                                            updatedValues[i] = e.target.value;
                                                            setEditField(prev => ({
                                                                ...prev,
                                                                values: updatedValues
                                                            }));
                                                        }}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn ms-2 btn-sm btn-danger text-white"
                                                        onClick={() => removeOptionValue(i)}
                                                    ><i class="bi bi-trash"></i>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Close
                            </Button>
                            <Button variant="primary" className="text-white" onClick={saveFieldDetails}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </Authenticated>
    );
}
