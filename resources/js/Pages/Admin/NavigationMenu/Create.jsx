import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AdminAuthenticated";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import DynamicSelect from "@/Components/DynamicSelect";

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        title: "",
        landingpageUrl: "",
        custom_link: "",
        children: [],
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

    const handleAddChild = () => {
        setData("children", [
            ...data.children,
            { title: "", landingpageUrl: "page-link", custom_link: "", children: [] },
        ]);
    };

    const handleRemoveChild = (index) => {
        const updatedChildren = [...data.children];
        updatedChildren.splice(index, 1);
        setData("children", updatedChildren);
    };

    const handleChange = (key, value) => {
        setData(key, value);
    };

    const handleNodeChange = (parentIndex, field, value) => {
        const updatedChildren = [...data.children];
        updatedChildren[parentIndex][field] = value;
        setData("children", updatedChildren);
    };

    const handleAddChildToParent = (parentIndex) => {
        const updatedChildren = [...data.children];
        updatedChildren[parentIndex].children.push({
            title: "",
            landingpageUrl: "page-link",
            custom_link: "",
            children: [],
        });
        setData("children", updatedChildren);
    };

    const handleRemoveChildFromParent = (parentIndex, childIndex) => {
        const updatedChildren = [...data.children];
        updatedChildren[parentIndex].children.splice(childIndex, 1);
        setData("children", updatedChildren);
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
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="tree-node row">
                                                <div className="col-lg-3 mb-3">
                                                    <div className="form-group">
                                                        <InputLabel
                                                            htmlFor="title"
                                                            className="fw-700 fs-16 form-label form-group__label"
                                                        >
                                                            Title
                                                        </InputLabel>
                                                        <TextInput
                                                            id="title"
                                                            className="form-control"
                                                            value={data.title}
                                                            onChange={(e) =>
                                                                handleChange("title", e.target.value)
                                                            }
                                                        />
                                                        <InputError error={errors.title} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 mb-3">
                                                    <div className="form-group">
                                                        <InputLabel
                                                            htmlFor="landingpageUrl"
                                                            className="fw-700 fs-16 form-label form-group__label"
                                                        >
                                                            Link Type
                                                        </InputLabel>
                                                        <DynamicSelect
                                                            id="landingpageUrl"
                                                            className="form-control"
                                                            value={data.landingpageUrl}
                                                            options={[
                                                                { value: "page-link", label: "Page Link" },
                                                                { value: "custom-link", label: "Custom Link" },
                                                            ]}
                                                            onChange={(value) =>
                                                                handleChange("landingpageUrl", value)
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                {data.landingpageUrl === "custom-link" && (
                                                    <div className="col-lg-3 mb-3">
                                                        <div className="form-group">
                                                            <InputLabel
                                                                htmlFor="custom_link"
                                                                className="fw-700 fs-16 form-label form-group__label"
                                                            >
                                                                Custom Link
                                                            </InputLabel>
                                                            <TextInput
                                                                id="custom_link"
                                                                className="form-control"
                                                                value={data.custom_link}
                                                                onChange={(e) =>
                                                                    handleChange("custom_link", e.target.value)
                                                                }
                                                            />
                                                            <InputError error={errors.custom_link} />
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="col-lg-3 mb-3">
                                                    
                                                </div>
                                            </div>

                                            <div className="row">
                                                {data.children.map((parent, parentIndex) => (
                                                    <div key={parentIndex} className="mb-4">
                                                        <TreeNode
                                                            node={parent}
                                                            parentIndex={parentIndex}
                                                            onRemoveParent={() =>
                                                                handleRemoveChild(parentIndex)
                                                            }
                                                            onAddChild={() =>
                                                                handleAddChildToParent(parentIndex)
                                                            }
                                                            onRemoveChild={(childIndex) =>
                                                                handleRemoveChildFromParent(
                                                                    parentIndex,
                                                                    childIndex
                                                                )
                                                            }
                                                            onChange={handleNodeChange}
                                                            errors={errors} // Pass errors to TreeNode
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-1">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-dark"
                                                    onClick={handleAddChild}
                                                >
                                                    Add Child
                                                </button>
                                            </div>
                                            <div className="mt-3">
                                                <button type="submit" className="btn btn-primary">
                                                    Save Menu
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
};

const TreeNode = ({
    node,
    parentIndex,
    onRemoveParent,
    onAddChild,
    onRemoveChild,
    onChange,
    errors,
}) => {
    const handleNodeChange = (field, value) => {
        onChange(parentIndex, field, value);
    };

    const handleAddChildToParent = () => {
        onAddChild(parentIndex);
    };

    const handleRemoveChildFromParent = (childIndex) => {
        onRemoveChild(parentIndex, childIndex);
    };

    return (
        <div className="tree-node row">
            <i className="bi bi-move move-icon"></i>
            <div className="col-lg-3 mb-3">
                <div className="form-group">
                    <InputLabel
                        htmlFor="title"
                        className="fw-700 fs-16 form-label form-group__label"
                    >
                        Title
                    </InputLabel>
                    <TextInput
                        value={node.title}
                        className="form-control"
                        onChange={(e) => handleNodeChange("title", e.target.value)}
                        placeholder="Title"
                    />
                </div>
            </div>
            <div className="col-lg-3 mb-3">
                <div className="form-group">
                    <InputLabel
                        htmlFor="landingpageUrl"
                        className="fw-700 fs-16 form-label form-group__label"
                    >
                        Link Type
                    </InputLabel>
                    <DynamicSelect
                        value={node.landingpageUrl}
                        className="form-control"
                        options={[
                            { value: "page-link", label: "Page Link" },
                            { value: "custom-link", label: "Custom Link" },
                        ]}
                        onChange={(value) => handleNodeChange("landingpageUrl", value)}
                    />
                </div>
            </div>
            <div className="col-lg-3 mb-3">
                {node.landingpageUrl === "custom-link" && (
                    <div className="form-group">
                        <InputLabel
                            htmlFor="custom_link"
                            className="fw-700 fs-16 form-label form-group__label"
                        >
                            Custom Link
                        </InputLabel>
                        <TextInput
                            className="form-control"
                            value={node.custom_link}
                            onChange={(e) => handleNodeChange("custom_link", e.target.value)}
                            placeholder="Enter Custom Link"
                        />
                        <InputError error={errors.custom_link} />
                    </div>
                )}
            </div>
            <div className="col-lg-3 mb-3">
                <div className="mt-1">
                    <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => onRemoveParent(parentIndex)}
                    >
                        Remove Parent
                    </button>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={handleAddChildToParent}
                    >
                        Add Child
                    </button>
                </div>
            </div>
            {node.children.map((child, childIndex) => (
                <div key={childIndex} className="mb-2">
                    <TreeNode
                        node={child}
                        parentIndex={parentIndex}
                        onRemoveParent={() => onRemoveParent(parentIndex)}
                        onAddChild={handleAddChildToParent}
                        onRemoveChild={() => handleRemoveChildFromParent(childIndex)}
                        onChange={onChange}
                        errors={errors} // Pass errors to TreeNode
                    />
                </div>
            ))}
        </div>
    );
};

export default Create;
