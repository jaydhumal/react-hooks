import React from 'react'
import {useState, useEffect } from 'react'
import DocumentList from './DocumentList'
import AddDocument from './AddDocument'
import EditDocument from './EditDocument'


 const App1 =() => {

    // define init array with some sample data 
    const documentData = [
        { id: 1, docTitle: 'doc1', description: 'desc1', publisher: 'pub1' },
        { id: 2, docTitle: 'doc2', description: 'desc2', publisher: 'pub2'},
        { id: 3, docTitle: 'doc3', description: 'desc3', publisher: 'pub3' }
                          ]

// define var  documents assign func setDocuments to mutate and init value = documentdata
const [documents, setDocuments] = useState(documentData)

const initialFormState = { id: null, docTitle: '', description: '', publisher: '' }

const [editing, setEditing] = useState(false);

const [currentDocument, setCurrentDocument] = useState(initialFormState)

// define a variable count and assign func setcount to mutate and init value = usestate=0
const [count, setCount] = useState(0);

// function to increate the count 
    const inc = () => {
        setCount(count+1)
    }

// Similar to componentDidMount and componentDidUpdate:


// function to add document 
const addDocument = (document) => {

    document.id = documents.length + 1

    setDocuments([...documents, document])

}

 // delete documents...
const deleteDocument = (id) => {
setDocuments(documents.filter(document => document.id !== id))
}

 // set value for edit document form...
  const editDocument = (document) => {

    setEditing(true)

    setCurrentDocument({
    id: document.id,
    docTitle: document.docTitle,
    description: document.description,
    publisher : document.publisher
    })

     }
  
// update document
const updateDocument = (id, updatedDocument) => {
setEditing(false)
 setDocuments(documents.map(item => (item.id === id ? updatedDocument : item)))
}



    return (
        <div>
    <p>You clicked {count} times</p>
     <button onClick={inc}>   Click me  </button>
        <hr />

        <div className="container">
        <h4 className="text-center">React.js CRUD App using Hooks</h4>

        <div className="row">
        {editing ? (
            <div>
            <h2 className="text-center">Edit Document</h2>

            <div className="col-md-12 ">

    <EditDocument editing={editing} 
    setEditing={setEditing} 
    currentDocument={currentDocument}
    updateDocument={updateDocument}
    deleteDocument={deleteDocument}  />
            </div>

            </div>
            ) : (
            <div>
            <h3 className="text-center">Add Document</h3>
            <div className="col-md-12 ">
            <AddDocument addDocument={addDocument} />
            </div>
            </div>
            )}

                </div>

<hr />
</div>

<div className="row">
<h3 className="text-center">Document List</h3>
<div className="col-md-6 col-md-offset-3">

 <DocumentList docs={documents} editDocument={editDocument} deleteDocument={deleteDocument}/>
</div>
</div>



                    </div>

     )
}

export default App1