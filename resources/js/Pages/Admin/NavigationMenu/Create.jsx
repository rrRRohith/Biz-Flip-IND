import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AdminAuthenticated";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import DynamicSelect from "@/Components/DynamicSelect";
import SortableComponent from "@/Components/SortableComponent";

const Create = ({ auth }) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Navigation Menu/Create
                </h2>
            }
        >
            <Head title="Navigation Menu Create" />
            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="d-flex flex-column">
                                    <h4 className="page-title"> Create Navigation Menu</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link href={route("admin.index")}>
                                                        <i className="bi bi-house"></i> Dashboard
                                                    </Link>
                                                </li>
                                                <li className="breadcrumb-item">
                                                    <Link href={route("admin.navigation-menu.index")}>
                                                        Navigation Menu
                                                    </Link>
                                                </li>
                                                <li className="breadcrumb-item active">Create</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6"></div>
                        </div>
                    </div>

                    <section className="content">
                    <SortableComponent />
                        
                    </section>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;