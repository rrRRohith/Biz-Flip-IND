import React from 'react';

export default function ViewStaff({ collection, handleClose }) {
    return (
      <>
        <table className='table table-separated'>
            <tbody>
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
                        <span>Email</span>
                    </th>
                    <td>
                        {collection.email}
                    </td>
                </tr>
                <tr>
                    <th>
                        <span>Phone</span>
                    </th>
                    <td>
                        {collection.phone}
                    </td>
                </tr>
                <tr>
                    <th>
                        <span>Role</span>
                    </th>
                    <td>
                        
                        {collection.role_names}
                    </td>
                </tr>
            </tbody>
        </table>
      </>
    )
}
