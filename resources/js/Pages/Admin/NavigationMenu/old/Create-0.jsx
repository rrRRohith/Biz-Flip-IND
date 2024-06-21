import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AdminAuthenticated";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import DynamicSelect from "@/Components/DynamicSelect";
import { v4 as uuidv4 } from "uuid";

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        menuItems: [
            {
                id: uuidv4(),
                title: "",
                landingpageUrl: "",
                custom_link: "",
                children: [],
            },
        ],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.navigation-menu.store"), {
            onSuccess: () => {
                reset();
                // Redirect or show success message as needed
            },
        });
    };

    const handleChange = (id, key, value) => {
        const updateData = (items) => {
            return items.map((item) => {
                if (item.id === id) {
                    return { ...item, [key]: value };
                }
                if (item.children.length > 0) {
                    return { ...item, children: updateData(item.children) };
                }
                return item;
            });
        };

        const updatedMenuItems = updateData(data.menuItems);
        setData("menuItems", updatedMenuItems);
    };

    const handleAddPart = () => {
        setData("menuItems", [
            ...data.menuItems,
            {
                id: uuidv4(),
                title: "",
                landingpageUrl: "",
                custom_link: "",
                children: [],
            },
        ]);
    };

    const handleRemovePart = (id) => {
        const removeData = (items) => {
            return items
                .filter((item) => item.id !== id)
                .map((item) => {
                    if (item.children.length > 0) {
                        return { ...item, children: removeData(item.children) };
                    }
                    return item;
                });
        };

        const updatedMenuItems = removeData(data.menuItems);
        setData("menuItems", updatedMenuItems);
    };

    const handleAddChild = (parentId) => {
        const addChild = (items) => {
            return items.map((item) => {
                if (item.id === parentId) {
                    return {
                        ...item,
                        children: [
                            ...item.children,
                            {
                                id: uuidv4(),
                                title: "",
                                landingpageUrl: "",
                                custom_link: "",
                                children: [],
                            },
                        ],
                    };
                }
                if (item.children.length > 0) {
                    return { ...item, children: addChild(item.children) };
                }
                return item;
            });
        };

        const updatedMenuItems = addChild(data.menuItems);
        setData("menuItems", updatedMenuItems);
    };

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
                        <form onSubmit={handleSubmit}>
                            {data.menuItems.map((menuItem) => (
                                <TreeNode
                                    key={menuItem.id}
                                    node={menuItem}
                                    handleChange={handleChange}
                                    handleRemovePart={handleRemovePart}
                                    handleAddChild={handleAddChild}
                                    errors={errors}
                                />
                            ))}
                            <div className="mt-1">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-dark"
                                    onClick={handleAddPart}
                                >
                                    Add Part
                                </button>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-success">
                                    Save Menu
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
};

const TreeNode = ({ node, handleChange, handleRemovePart, handleAddChild, errors }) => {
    const handleNodeChange = (key, value) => {
        handleChange(node.id, key, value);
    };

    const handleAddChildNode = () => {
        handleAddChild(node.id);
    };

    const handleRemoveNode = () => {
        handleRemovePart(node.id);
    };

    return (
        <div className="tree-node ">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="form-group">
                            <InputLabel
                                htmlFor={`title-${node.id}`}
                                className="fw-700 fs-16 form-label form-group__label"
                            >
                                Title
                            </InputLabel>
                            <TextInput
                                id={`title-${node.id}`}
                                className="form-control"
                                value={node.title}
                                onChange={(e) => handleNodeChange("title", e.target.value)}
                            />
                            <InputError error={errors.title} />
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="form-group">
                            <InputLabel
                                htmlFor={`landingpageUrl-${node.id}`}
                                className="fw-700 fs-16 form-label form-group__label"
                            >
                                Link Type
                            </InputLabel>
                            <DynamicSelect
                                id={`landingpageUrl-${node.id}`}
                                className="form-control"
                                value={node.landingpageUrl}
                                options={[
                                    { value: "page-link", label: "Page Link" },
                                    { value: "custom-link", label: "Custom Link" },
                                ]}
                                onChange={(value) => handleNodeChange("landingpageUrl", value)}
                            />
                        </div>
                    </div>

                    <div className="col-lg-3 ">
                        {node.landingpageUrl === "custom-link" && (
                            <div className="form-group">
                                <InputLabel
                                    htmlFor={`custom_link-${node.id}`}
                                    className="fw-700 fs-16 form-label form-group__label"
                                >
                                    Custom Link
                                </InputLabel>
                                <TextInput
                                    id={`custom_link-${node.id}`}
                                    className="form-control"
                                    value={node.custom_link}
                                    onChange={(e) => handleNodeChange("custom_link", e.target.value)}
                                />
                                <InputError error={errors.custom_link} />
                            </div>
                        )}

                    </div>
                    <div className="col-lg-3  text-end">
                        <div className="mt-1">
                            <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={handleRemoveNode}
                            >
                                Remove
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-primary ms-2"
                                onClick={handleAddChildNode}
                            >
                                Add Child
                            </button>
                        </div>
                    </div>
                    {node.children && node.children.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            handleChange={handleChange}
                            handleRemovePart={handleRemovePart}
                            handleAddChild={handleAddChild}
                            errors={errors}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Create;
