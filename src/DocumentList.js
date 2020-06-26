import React from 'react'
import App1 from './App1'


 const DocumentList = (props) => {


 
    return (
        <div className="table-responsive">

        <table className="table">
            <thead>
            <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Publisher</th>
            </tr>
            </thead>


            <tbody>
                    {props.docs.length > 0 ? (
                    props.docs.map(item => (
                    <tr key={item.id}>
                    <td>{item.docTitle}</td>
                    <td>{item.description}</td>
                    <td>{item.publisher}</td>

                        <td>

        <button onClick={() => {
             props.editDocument(item) }} 
             className="btn btn-default">Edit</button>

<button onClick={() => props.deleteDocument(item.id)} 
className="btn btn-default">Delete
</button>
 
 
 
                        </td>

                    </tr>
            ))
            ) : (
            <tr>
            <td colSpan={4}>No any document to display</td>
            </tr>
            )}
            
            </tbody>


            </table>




        </div>
    )
}

export default DocumentList