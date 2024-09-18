import AuthenticatedLayout from '@/Layouts/Authenticated';
import { Head, Link, useForm } from "@inertiajs/react";
import Wrapper from './layout/Wrapper';
import Select from 'react-select';
import React, { useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import SettingsForm from './SettingsForm';

const employee_options = [
    {
        'label': 'Select an option',
        'value': 'Select an option',
    },
    {
        'label': 'Less than 10',
        'value': 'Less than 10',
    },
    {
        'label': '10 to 25',
        'value': '10 to 25',
    },
    {
        'label': '25 to 50',
        'value': '25 to 50',
    },
    {
        'label': '50 to 100',
        'value': '50 to 100',
    },
    {
        'label': 'More than 100',
        'value': 'More than 100',
    }
];

const days = [
    { id: 'mon', label: 'Monday' },
    { id: 'tue', label: 'Tuesday' },
    { id: 'wed', label: 'Wednesday' },
    { id: 'thu', label: 'Thursday' },
    { id: 'fri', label: 'Friday' },
    { id: 'sat', label: 'Saturday' },
    { id: 'sun', label: 'Sunday' }
];

const socials = [
    { id: 'facebook', label: 'Facebook' },
    { id: 'twitter', label: 'Twitter' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'linkedin', label: 'Linkedin' },
];

export default function Settings({ seller, auth, success, error, province_options }) {
    return (
        <>
            <Head title="Settings" />
            <Wrapper user={auth.user} success={success} error={error}>

                <main className="py-6">
                    <div className="container px-3 px-lg-6">
                        <div className="max-w-screen-md vstack gap-6 m-auto">
                            <div className="text-xl font-bold">Your business settings</div>
                            <div>Manage your business information easily. Update your profile, contact details, and company description.</div>
                            <SettingsForm seller={seller} province_options={province_options}></SettingsForm>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    );
}
