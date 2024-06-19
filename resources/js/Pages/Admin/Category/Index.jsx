import React, { useState, useEffect } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Pagination } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

export default function Index({ categoryList, auth }) {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState(categoryList.data);

    const { data, setData, post, errors, reset } = useForm({
        orderedIds: []
    });

    const deleteCategory = (category) => {
        if (!window.confirm("Are you sure you want to delete the category?")) {
            return;
        }
        router.delete(route("admin.category.destroy", category.id));
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const displayList = searchQuery.length > 0 ? categories : categoryList.data;
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;
    const paginatedList = displayList.slice(startIdx, endIdx);

    const [items, setItems] = useState(paginatedList);

    const handleDragEnd = async (result) =>  {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, reorderedItem);

        const updatedItems = reorderedItems.map((item, index) => ({
            ...item,
            position: index + 1
        }));

        setItems(updatedItems);
        setCategories(updatedItems);

        const orderedIdsArray = updatedItems.map(item => item.id);
        setData('orderedIds', orderedIdsArray);
          post(route('admin.category.position-update'));
    };


    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Categories</h2>}
        >
            <Head title="Category List" />

            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">Ad Categories</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Ad Categories</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    <PermissionAllow permission={'Category Create'}>
                                        <Link className='btn btn-info text-end' href={route('admin.category.create')}><i className='bi bi-plus'></i> Create</Link>
                                    </PermissionAllow>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body">
                                        <PermissionAllow permission={'Categories Listing'} message="true">
                                            <div className="table-responsive rounded card-table">
                                                <DragDropContext onDragEnd={handleDragEnd}>
                                                    <Droppable droppableId="categories">
                                                        {(provided) => (
                                                            <table className="table border-no" id="example1" {...provided.droppableProps} ref={provided.innerRef}>
                                                                <thead>
                                                                    <tr>
                                                                        <th></th>
                                                                        <th>Name</th>
                                                                        <th className='text-center'>Status</th>
                                                                        <th className='text-center'>Last Modified</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {items.map((category, index) => (
                                                                        <Draggable key={`${category.id}-${category.name}`} draggableId={`${category.id}-${category.name}`} index={index}>
                                                                            {(provided, snapshot) => (
                                                                                <tr
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    className={` ${snapshot.isDragging ? 'dragging' : ''}`}
                                                                                >
                                                                                    <td><i className='bi bi-arrows-move me-3 fw-bold'></i></td>
                                                                                    <td>
                                                                                        <img
                                                                                            src={category.icon}
                                                                                            className='w-30 me-20 rounded-5'
                                                                                            alt={`${category.icon} icon`}
                                                                                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                                                                        />
                                                                                        {category.name}
                                                                                    </td>
                                                                                    <td className='text-center'>
                                                                                        <div dangerouslySetInnerHTML={{ __html: window.statusIcon(category.status) }} />
                                                                                    </td>
                                                                                    <td className='text-center'>{window.formatDateTime(category.updated_at)}</td>
                                                                                    <td align='right'>
                                                                                        <PermissionAllow permission={'Category Edit'}>
                                                                                            <Link className='btn btn-transparent' href={route('admin.category.edit', category.id)}>
                                                                                                <i className="bi bi-pencil"></i>
                                                                                            </Link>
                                                                                        </PermissionAllow>
                                                                                        <PermissionAllow permission={'Category Delete'}>
                                                                                            <button onClick={() => deleteCategory(category)} className="btn btn-transparent border-0">
                                                                                                <i className="bi bi-trash"></i>
                                                                                            </button>
                                                                                        </PermissionAllow>
                                                                                    </td>
                                                                                </tr>
                                                                            )}
                                                                        </Draggable>
                                                                    ))}
                                                                    {provided.placeholder}
                                                                </tbody>
                                                            </table>
                                                        )}
                                                    </Droppable>
                                                </DragDropContext>
                                            </div>

                                            {displayList.length > itemsPerPage && (
                                                <div className="pagination-container float-end py-5">
                                                    <Pagination
                                                        count={Math.ceil(displayList.length / itemsPerPage)}
                                                        page={currentPage}
                                                        onChange={handlePageChange}
                                                    />
                                                    <i>Show All</i>
                                                </div>
                                            )}
                                        </PermissionAllow>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}

Index.propTypes = {
    categoryList: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};
