import React from 'react';
import { Head, Link, useForm, router } from '@inertiajs/react';
import Authenticated from '@/Layouts/AdminAuthenticated';
import PermissionAllow from '@/Components/PermissionAllow';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Index({ files = [], images = [], auth }) {
    const { data, setData, post, errors, reset } = useForm({
        db_name: '',
        image_name: ''
    });
   
    const handleRestoreDb = async (name) => {
      
       
        try {
            const options = {
                url: route("admin.backups.update-db"),
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                  db_name: name
                }
              };
       
            Swal.fire({
                title: 'Are you sure you want to restore this Database?',
                text: 'Once restored, old data cannot be recovered.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, Restore it!',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios(options)
                    .then(response => {
                       
                      if(response.status == 200){
                        Swal.fire('Restored!', 'Database have been restored.', 'success');
                      }
                      else{
                        Swal.fire('Error!', 'There was an error restoring the database.', 'error');
                      }
                    });
                }
            });
            
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };
    
    const handleRestoreImage = (name) => {
       
        const options2 = {
            url: route("admin.backups.update-images"),
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                image_name: name
            }
          };

        Swal.fire({
            title: 'Are you sure you want to restore this Images?',
            text: 'Once restored, old data cannot be recovered.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, Restore it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios(options2)
                .then(response => {
                    
                  if(response.status){
                    Swal.fire('Restored!', 'Images have been restored.', 'success');
                  }
                  else{
                    Swal.fire('Error!', 'There was an error restoring the images.', 'error');
                  }
                });
                
            }
        });
    };
    
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Backup Files</h2>}
        >
            <Head title="Backup Files" />

            <div className="content-wrapper me-4">
                <div className="container-full">
                    <div className="content-header">
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="d-flex flex-column">
                                    <h4 className="page-title">Backup Files</h4>
                                    <div className="d-inline-block align-items-center mt-2">
                                        <nav>
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link href={route('admin.index')}><i className="bi bi-house"></i> Dashboard</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">Backup Files</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className="text-end">
                                    {/* Additional actions can be added here */}
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
                                            {/* Images Table */}
                                            <div className="table-responsive rounded card-table">
                                                <Table className="table border-no">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Image File</Th>
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {images.map((image, index) => (
                                                            <Tr key={index}>
                                                                <Td>{image.name}</Td>
                                                                <Td align='right'>
                                                                    <PermissionAllow permission={'Category Show'}>
                                                                        <span onClick={() => handleRestoreImage(image.originalName)} title='Restore' className="btn btn-transparent">
                                                                            <i className="bi bi-arrow-clockwise"></i>
                                                                        </span>
                                                                    </PermissionAllow>
                                                                </Td>
                                                            </Tr>
                                                        ))}
                                                    </Tbody>
                                                </Table>
                                            </div>
                                            
                                            {/* Databases Table */}
                                            <div className="table-responsive rounded card-table">
                                                <Table className="table border-no">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Database Name</Th>
                                                            <Th></Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {files.map((file, index) => (
                                                            <Tr key={index}>
                                                                <Td>{file.name}</Td>
                                                                <Td align='right'>
                                                                    <PermissionAllow permission={'Category Show'}>
                                                                        <span onClick={() => handleRestoreDb(file.originalName)} title='Restore' className="btn btn-transparent">
                                                                            <i className="bi bi-arrow-clockwise"></i>
                                                                        </span>
                                                                    </PermissionAllow>
                                                                </Td>
                                                            </Tr>
                                                        ))}
                                                    </Tbody>
                                                </Table>
                                            </div>
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
