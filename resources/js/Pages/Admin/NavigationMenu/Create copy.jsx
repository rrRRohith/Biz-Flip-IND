import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AdminAuthenticated";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import DynamicSelect from "@/Components/DynamicSelect";
import Sortable from "react-sortablejs";

const Create = ({ auth }) => {
    const { data, setData, post, errors, reset } = useForm({
        menuItems: [
            {
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

    const handleAddPart = () => {
        setData("menuItems", [
            ...data.menuItems,
            {
                title: "",
                landingpageUrl: "",
                custom_link: "",
                children: [],
            },
        ]);
    };

    const handleRemovePart = (index) => {
        const updatedMenuItems = [...data.menuItems];
        updatedMenuItems.splice(index, 1);
        setData("menuItems", updatedMenuItems);
    };

    const handleChange = (parentIndex, key, value) => {
        const updatedMenuItems = [...data.menuItems];
        updatedMenuItems[parentIndex][key] = value;
        setData("menuItems", updatedMenuItems);
    };

    const handleAddChild = (parentIndex) => {
        const updatedMenuItems = [...data.menuItems];
        updatedMenuItems[parentIndex].children.push({
            title: "",
            landingpageUrl: "page-link",
            custom_link: "",
            children: [],
        });
        setData("menuItems", updatedMenuItems);
    };

    const handleRemoveChild = (parentIndex, childIndex) => {
        const updatedMenuItems = [...data.menuItems];
        updatedMenuItems[parentIndex].children.splice(childIndex, 1);
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
                        {data.menuItems.map((menuItem, parentIndex) => (
                            <div key={parentIndex} className="mb-4">
                                <div className="tree-node row">
                                    <div className="col-lg-3 mb-3">
                                        <div className="form-group">
                                            <InputLabel
                                                htmlFor={`title-${parentIndex}`}
                                                className="fw-700 fs-16 form-label form-group__label"
                                            >
                                                Title
                                            </InputLabel>
                                            <TextInput
                                                id={`title-${parentIndex}`}
                                                className="form-control"
                                                value={menuItem.title}
                                                onChange={(e) =>
                                                    handleChange(
                                                        parentIndex,
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError error={errors.title} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 mb-3">
                                        <div className="form-group">
                                            <InputLabel
                                                htmlFor={`landingpageUrl-${parentIndex}`}
                                                className="fw-700 fs-16 form-label form-group__label"
                                            >
                                                Link Type
                                            </InputLabel>
                                            <DynamicSelect
                                                id={`landingpageUrl-${parentIndex}`}
                                                className="form-control"
                                                value={menuItem.landingpageUrl}
                                                options={[
                                                    { value: "page-link", label: "Page Link" },
                                                    { value: "custom-link", label: "Custom Link" },
                                                ]}
                                                onChange={(value) =>
                                                    handleChange(
                                                        parentIndex,
                                                        "landingpageUrl",
                                                        value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    {menuItem.landingpageUrl === "custom-link" && (
                                        <div className="col-lg-3 mb-3">
                                            <div className="form-group">
                                                <InputLabel
                                                    htmlFor={`custom_link-${parentIndex}`}
                                                    className="fw-700 fs-16 form-label form-group__label"
                                                >
                                                    Custom Link
                                                </InputLabel>
                                                <TextInput
                                                    id={`custom_link-${parentIndex}`}
                                                    className="form-control"
                                                    value={menuItem.custom_link}
                                                    onChange={(e) =>
                                                        handleChange(
                                                            parentIndex,
                                                            "custom_link",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError error={errors.custom_link} />
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-lg-3 mb-3">
                                        <div className="mt-1">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleRemovePart(parentIndex)}
                                            >
                                                Remove
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-primary"
                                                onClick={() => handleAddChild(parentIndex)}
                                            >
                                                Add Child
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <Sortable
                                            tag="div"
                                            options={{
                                                animation: 150,
                                                handle: ".move-icon",
                                                onEnd: ({ oldIndex, newIndex }) => {
                                                    // Reorder children array
                                                    const updatedMenuItems = [...data.menuItems];
                                                    const children = updatedMenuItems[parentIndex].children;
                                                    const [removed] = children.splice(oldIndex, 1);
                                                    children.splice(newIndex, 0, removed);
                                                    setData("menuItems", updatedMenuItems);
                                                },
                                            }}
                                        >
                                            {menuItem.children.map((child, childIndex) => (
                                                <div
                                                    key={childIndex}
                                                    className="mb-4 ml-5 child-tree-node"
                                                >
                                                    <TreeNode
                                                        node={child}
                                                        parentIndex={parentIndex}
                                                        childIndex={childIndex}
                                                        onRemoveParent={() =>
                                                            handleRemoveChild(parentIndex, childIndex)
                                                        }
                                                        onAddChild={() => handleAddChild(parentIndex)}
                                                        onChange={handleChange}
                                                        errors={errors} // Pass errors to TreeNode
                                                    />
                                                </div>
                                            ))}
                                        </Sortable>
                                    </div>
                                </div>
                            </div>
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
                            <button type="submit" className="btn btn-sm btn-neutral" onClick={handleSubmit}>
                                Save Menu
                            </button>
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
    childIndex,
    onRemoveParent,
    onAddChild,
    onChange,
    errors,
}) => {
    const handleNodeChange = (field, value) => {
        onChange(parentIndex, field, value);
    };

    return (
        <div className="tree-node row">
            <div className="col-lg-3 mb-3">
                <div className="form-group">
                    <InputLabel
                        htmlFor={`title-${parentIndex}-${childIndex}`}
                        className="fw-700 fs-16 form-label form-group__label"
                    >
                        Title
                    </InputLabel>
                    <TextInput
                        id={`title-${parentIndex}-${childIndex}`}
                        className="form-control"
                        value={node.title}
                        onChange={(e) => handleNodeChange("title", e.target.value)}
                    />
                </div>
            </div>
            <div className="col-lg-3 mb-3">
                <div className="form-group">
                    <InputLabel
                        htmlFor={`landingpageUrl-${parentIndex}-${childIndex}`}
                        className="fw-700 fs-16 form-label form-group__label"
                       >
                           Link Type
                       </InputLabel>
                       <DynamicSelect
                           id={`landingpageUrl-${parentIndex}-${childIndex}`}
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
               {node.landingpageUrl === "custom-link" && (
                   <div className="col-lg-3 mb-3">
                       <div className="form-group">
                           <InputLabel
                               htmlFor={`custom_link-${parentIndex}-${childIndex}`}
                               className="fw-700 fs-16 form-label form-group__label"
                           >
                               Custom Link
                           </InputLabel>
                           <TextInput
                               id={`custom_link-${parentIndex}-${childIndex}`}
                               className="form-control"
                               value={node.custom_link}
                               onChange={(e) => handleNodeChange("custom_link", e.target.value)}
                           />
                           <InputError error={errors.custom_link} />
                       </div>
                   </div>
               )}
               <div className="col-lg-3 mb-3">
                   <div className="mt-1">
                       <button
                           type="button"
                           className="btn btn-sm btn-danger move-icon"
                           onClick={() => onRemoveParent(childIndex)}
                       >
                           Remove
                       </button>
                       <button
                           type="button"
                           className="btn btn-sm btn-primary move-icon"
                           onClick={() => onAddChild()}
                       >
                           Add Child
                       </button>
                   </div>
               </div>

               {node.children.map((grandChild, grandChildIndex) => (
                   <div key={grandChildIndex} className="mb-4 ml-5 child-tree-node">
                       <TreeNode
                           node={grandChild}
                           parentIndex={parentIndex}
                           childIndex={grandChildIndex}
                           onRemoveParent={() => onRemoveParent(grandChildIndex)}
                           onAddChild={() => onAddChild(parentIndex)}
                           onChange={onChange}
                           errors={errors} // Pass errors to TreeNode
                       />
                   </div>
               ))}
           </div>
       );
   };

   export default Create;
