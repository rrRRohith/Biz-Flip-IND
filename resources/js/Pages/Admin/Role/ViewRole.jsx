import React from 'react';

export default function ViewRole({ collection, handleClose }) {
    console.log(collection)
    return (
      <>
        <table className='table table-separated'>
            <tbody>
                <tr>
                    <th>
                        <span>Role Name</span>
                    </th>
                    <td>
                        {collection.name}
                    </td>
                </tr>
                <tr>
                    <th>
                        <span>Last Modified</span>
                    </th>
                    <td>
                        {window.formatDateTime(collection.updated_at)}
                    </td>
                </tr>
                <tr>
                    <th>
                        <span>Permissions</span>
                    </th>
                    <td>
                        <ul>
                          {Object.values(collection.permissions).map((permission, index) => (
                            <li key={index}>{permission}</li>
                          ))}
                        </ul>
                        
                    </td>
                </tr>
               
            </tbody>
        </table>
      </>
    )
}
