import React, { useState } from 'react'
import '../dataEntryForm.css'
export default function DataEntryForm() {
  
  const [data, setData] = useState({
    email: '',
    name:'',
    address:'',
    address2:'',
    city:'',
    province:'',
    postalCode:'',
    agreedTerms:false
  })
  const [submitted, setSubmitted] = useState(false)

  const onValueChanged = (event) => {
    setData({
        ...data,
        [event.target.name]: event.target.value
    })
  }
  const onValueChangedCheckbox = (event) => {
    setData({
        ...data,
        [event.target.name]: event.target.checked
    })
  }
  const onSubmitForm = e => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <div>
      <h1>Data Entry Form</h1>
      <form onSubmit={e=>onSubmitForm(e)}>
          <div className='formRow'>
              <div className='formCell'>
                  <h3>Email</h3>
                  <input name="email" type='text' placeholder='Enter email' onChange={e=>onValueChanged(e)}/>
              </div>
              <div className='formCell'>
                  <h3>Name</h3>
                  <input name="name" type='text' placeholder='Full Name' onChange={e=>onValueChanged(e)}/>
              </div>
          </div>

          <div className='formCell'>
              <h3>Address</h3>
              <input name="address" type='text' placeholder='1234 Main St' onChange={e=>onValueChanged(e)}/>
          </div>

          <div className='formCell'>
              <h3>Address 2</h3>
              <input name="address2" type='text' placeholder='Apartment, studio, or floor' onChange={e=>onValueChanged(e)}/>
          </div>

          <div className='formRow'>
              <div className='formCell'>
                  <h3>City</h3>
                  <input name="city" type='text' onChange={e=>onValueChanged(e)}/>
              </div>
              <div className='formCell'>
                  <h3>Province</h3>
                  <input name="province" list="provinces" onChange={e=>onValueChanged(e)}/>
                  <datalist id="provinces">
                    <option value="Alberta"/>
                    <option value="British Columbia"/>
                    <option value="Manitoba"/>
                    <option value="New Brunswick"/>
                    <option value="Newfoundland and Labrador"/>
                    <option value="Nova Scotia"/>
                    <option value="Ontario"/>
                    <option value="Prince Edward Island"/>
                    <option value="Quebec"/>
                    <option value="Saskatchewan"/>
                  </datalist>
              </div>
              <div className='formCell'>
                  <h3>Postal Code</h3>
                  <input name="postalCode" type='text' onChange={e=>onValueChanged(e)}/>
              </div>
          </div>

          <div>
            <input name="agreedTerms" type='checkbox' onChange={e=>onValueChangedCheckbox(e)}/>
            <span>Agree Terms & Condition?</span>
          </div>

          <div>
            <input type='submit'/>
          </div>



      </form>
      <div>
        {submitted && <table className='dataTable'>
          <tr>
            <td>
              Email:
            </td>
            <td className='value'>
              {data.email}
            </td>
          </tr>
          <tr>
            <td>
              Full Name:
            </td>
            <td className='value'>
              {data.name}
            </td>
          </tr>
          <tr>
            <td>
              Address:
            </td>
            <td className='value'>
              {`${data.address}, ${data.address2}`}
            </td>
          </tr>
          <tr>
            <td>
              City:
            </td>
            <td className='value'>
              {data.city}
            </td>
          </tr>
          <tr>
            <td>
              Province:
            </td>
            <td className='value'>
              {data.province}
            </td>
          </tr>
          <tr>
            <td>
              Postal Code:
            </td>
            <td className='value'>
              {data.postalCode}
            </td>
          </tr>
        </table>}
      </div>
      
   

    </div>
    
  )
}
