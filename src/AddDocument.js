import React from 'react'
import {useState} from 'react'

 const  AddDocument =(props)  => {

// initial value for a new form data    
const initialFormState = { 
        id: null,
        docTitle: '',
        description: '', 
        publisher: '' ,
    }

// define var document of type array assign init value = initialformstate and use func setDocument to mutate 
const [document, setDocument] = useState(initialFormState)

 

// function to handle input change
const handleInputChange = (e) => {

    const { name, value } = e.target
 
setDocument({ ...document, [name]: value })

} 

// submit function 
const submitDoc = (event) => {

    event.preventDefault();

    if (!document.docTitle || !document.description || !document.publisher) return

    // vall func to add in  parent component
    props.addDocument(document)
    setDocument(initialFormState)
}


     return (
 <form onSubmit={submitDoc} className="form-group">
    <div  >
     <input type="text"       name="docTitle" placeholder="Enter Title" value={document.docTitle} onChange={handleInputChange} />
     <input type="text"   name="description" placeholder="Enter Description" value={document.description} onChange={handleInputChange} />
     <input type="text"     name="publisher" placeholder="Enter Publisher" value={document.publisher} onChange={handleInputChange} />  
     <button className="btn btn-primary  ">Add Document</button>
     </div>
    </form>




     )
}

export default AddDocument