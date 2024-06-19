import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AdminAuthenticated";
import SortableComponent from "@/Components/SortableComponent";

const initialItems = [
  { id: 'item-1', linkText: '', linkType: 'page_link', customLink: '' },
];

const Create = ({ auth }) => {
  const { data, setData, post } = useForm({
    title: '',
    items: initialItems
  });

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const draggedItem = data.items[result.source.index];
    const updatedItems = [...data.items];
    updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, draggedItem);

    setData('items', updatedItems);
  };

  const handleAddItem = () => {
    const newItem = {
      id: `item-${data.items.length + 1}`,
      linkText: '',
      linkType: 'page_link',
      customLink: '',
    };
    setData('items', [...data.items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = data.items.filter((item, i) => i !== index);
    setData('items', updatedItems);
  };

  const handleChangeItem = (index, updatedItem) => {
    const updatedItems = [...data.items];
    updatedItems[index] = updatedItem;
    setData('items', updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data including the sortable items
    // post(route('your.route.name')); // Replace with your route
    console.log(data)
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
                      <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          id="title"
                          className="form-control"
                          value={data.title}
                          onChange={(e) => setData('title', e.target.value)}
                        />
                      </div>
                      <SortableComponent
                        items={data.items}
                        onDragEnd={handleDragEnd}
                        onAddItem={handleAddItem}
                        onDeleteItem={handleDeleteItem}
                        onChangeItem={handleChangeItem}
                      />
                      <div className="col-lg-12 text-center">
                        <button className="btn btn-info" type="submit">
                          Submit
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

export default Create;
