import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getContacts} from "../../../JS/actions/contact"
import Contact from "../Contact/Contact"
import './Contact.css'
function ContactList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getContacts())
    
  }, [])
  const contacts = useSelector(state => state.contactReducer.contacts)

  return (
    <div className="profilesCard">
      {contacts.map(el=><Contact contact={el}/>)}
    </div>
  )
}

export default ContactList
