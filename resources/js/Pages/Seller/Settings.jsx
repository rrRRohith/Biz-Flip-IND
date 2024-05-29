import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/react';
import Wrapper from './layout/Wrapper';
import React, { useState } from 'react';

const days = [
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' }
];

export default function Settings() {
    const [checkedDays, setCheckedDays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    });

    const handleCheckboxChange = (day) => {
        setCheckedDays((prevCheckedDays) => ({
            ...prevCheckedDays,
            [day]: !prevCheckedDays[day]
        }));
    };
    return (
        <>
            <Head title="Settings" />
            <Wrapper>

                <main className="py-6 bg-surface-secondary">
                    <div className="container">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Your business settings</div>
                            <div className="card rounded-input">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-flex align-items-center">
                                                <a href="#" className="avatar avatar-lg border-2 border-gray rounded-circle text-white"><img alt="..." src="https://res.cloudinary.com/rr6/image/upload/v1716213343/1042239_407_vaviwn.png" /></a>
                                                <div className="ms-4"><span className="h4 d-block mb-0">Able Reatly</span></div>
                                            </div>
                                        </div>
                                        <div className="ms-auto"><button type="button" className="btn btn-sm btn-neutral">Upload</button></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-5">
                                        <h4>About your business</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <label>Business name</label>
                                            <input placeholder="Your business name" className="form-control" />
                                        </div>

                                        <div className="col-md-12">
                                            <label>Short bio</label>
                                            <input placeholder="Tell us about your business briefly" className="form-control" />
                                        </div>
                                        <div className="col-md-12">
                                            <label>Description</label>
                                            <textarea placeholder="Tell us about your business in detail" className="form-control"></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Address</label>
                                            <input type="text" placeholder="Where is your office located at?" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>No of employees</label>
                                            <select name="" id="" className='form-select form-control'>
                                                <option value="">Select an option</option>
                                                <option value="">Less than 10</option>
                                                <option value="">10 to 25</option>
                                                <option value="">25 to 50</option>
                                                <option value="">50 to 100</option>
                                                <option value="">More than 100</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Contact person</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>First name</label> <input type="text" placeholder="Your first name" className="form-control" id="first_name" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Last name</label> <input type="text" placeholder="Your last name" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label htmlFor="email">Email</label> <input placeholder="Your email address" type="email" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Phone number</label> <input type="tel" placeholder="Your phone number" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Designation</label> <input type="text" placeholder="Your designation" className="form-control" /></div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Socials media & website</h4>
                                    </div>
                                    <div className="row g-5 mb-5">
                                        <div className="col-md-6">
                                            <div><label>Facebook</label> <input type="text" placeholder="Your facebook page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Instagram</label> <input type="text" placeholder="Your instagram page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Youtube</label> <input type="text" placeholder="Your youtube page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Linkedin</label> <input type="text" placeholder="Your linkedin page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Twitter</label> <input type="text" placeholder="Your twitter page" className="form-control" /></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div><label>Website</label> <input type="text" placeholder="Your website url" className="form-control" /></div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <h4>Office working days</h4>
                                    </div>
                                    <div className="card mb-5 rounded-input">
                                        <div className="card-body">
                                            <div className="">
                                                {days.map((day) => (
                                                    <div key={day.id} className="form-check form-check-lg">
                                                        <input
                                                            role="button"
                                                            className="form-check-input shadow-none border border-gray border-1 cursor-pointer"
                                                            type="checkbox"
                                                            id={`office_${day.id}`}
                                                            checked={checkedDays[day.id]}
                                                            onChange={() => handleCheckboxChange(day.id)}
                                                        />
                                                        <label role="button" className="mt-1" htmlFor={`office_${day.id}`}>
                                                            {day.label} {checkedDays[day.id] ? <span className="text-success">(opened)</span> : <span className="text-danger">(closed)</span>}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-5">

                                        <div className="col-12 text-end">
                                            <button type="button" className="btn btn-neutral me-2">Cancel</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button></div>
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
