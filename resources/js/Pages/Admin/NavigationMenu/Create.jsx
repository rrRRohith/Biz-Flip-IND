import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AdminAuthenticated";
import SortableComponent from "@/Components/SortableComponent";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';


const initialItems = [
  {
    id: uuidv4(),
    linkText: '',
    linkType: 'page_link',
    customLink: '',
    children: []
  }
];

const Create = ({ auth, landingPage }) => {
  const { data, setData, post, errors } = useForm({
    title: '',
    items: initialItems
  });

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedItems = [...data.items];
    const [removed] = updatedItems.splice(result.source.index, 1);
    if (result.destination.droppableId === 'droppable') {
      updatedItems.splice(result.destination.index, 0, removed);
    } else {
      const newParentIndex = parseInt(result.destination.droppableId.split('-')[1]);
      const [newParent] = updatedItems.splice(newParentIndex, 1);
      newParent.children.splice(result.destination.index, 0, removed);
      updatedItems.splice(newParentIndex, 0, newParent);
    }

    setData('items', updatedItems);
  };

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      linkText: '',
      linkType: 'page_link',
      customLink: '',
      children: []
    };
    setData('items', [...data.items, newItem]);
  };

  const handleAddChildItem = (parentId) => {
    const newItem = {
      id: uuidv4(),
      linkText: '',
      linkType: 'page_link',
      customLink: '',
      children: []
    };

    const addChildToParent = (items, parentId) => {
      return items.map(item => {
        if (item.id === parentId) {
          return { ...item, children: [...item.children, newItem] };
        } else if (item.children && item.children.length) {
          return { ...item, children: addChildToParent(item.children, parentId) };
        }
        return item;
      });
    };

    setData('items', addChildToParent(data.items, parentId));
  };

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete this item?',
      text: 'this item can`t be recover',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
 
      if (result.isConfirmed) {
        const deleteItem = (items, id) => {
          return items.filter(item => item.id !== id).map(item => {
            if (item.children && item.children.length) {
              return { ...item, children: deleteItem(item.children, id) };
            }
            return item;
          });
        };
        setData('items', deleteItem(data.items, id));
      }
    });
   
  };

  const handleChangeItem = (id, updatedItem) => {
    const updateItem = (items, id) => {
      return items.map(item => {
        if (item.id === id) {
          return { ...item, ...updatedItem };
        } else if (item.children && item.children.length) {
          return { ...item, children: updateItem(item.children, id) };
        }
        return item;
      });
    };
    setData('items', updateItem(data.items, id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('admin.navigation-menu.store'));
    // console.log(data)
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
                        <InputLabel htmlFor="title" className="fw-700 fs-16 form-label form-group__label">Menu Title</InputLabel>
                        <input
                          type="text"
                          id="title"
                          className="form-control"
                          value={data.title}
                          onChange={(e) => setData('title', e.target.value)}
                        />
                        <InputError message={errors.title} className="mt-2 col-12" />

                      </div>
                      <SortableComponent
                        items={data.items}
                        onDragEnd={handleDragEnd}
                        onAddItem={handleAddItem}
                        onAddChildItem={handleAddChildItem}
                        onDeleteItem={handleDeleteItem}
                        onChangeItem={handleChangeItem}
                        landingPage={landingPage}
                        formErrors={errors}
                      />
                      <div className="col-lg-12 text-center mt-5">
                        <button className="btn btn-success" type="submit">
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
