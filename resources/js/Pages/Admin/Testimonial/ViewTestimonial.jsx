import React from 'react';

export default function ViewTestimonial({ collection, handleClose }) {

    return (
        <>
            <table className='table table-separated'>
                <tbody>
                    <tr>
                        <td colSpan={2} className='text-center'>
                            <img
                                src={collection.image}
                                className='w-40 rounded-5 '
                                alt={`${collection.image} icon`}
                                onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span>Full Name</span>
                        </th>
                        <td>
                            {collection.name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span>Company Name</span>
                        </th>
                        <td>
                            {collection.company_name}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span>Designation</span>
                        </th>
                        <td>
                            {collection.designation}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span>Message</span>
                        </th>
                        <td>

                            {collection.message}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span>Status</span>
                        </th>
                        <td>

                            {collection.status}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span>Created Date</span>
                        </th>
                        <td>

                        {window.formatDateTime(collection.created_at)}
                        </td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}
