import Card from "./ui/Card"
import ContactCard from "./ContactCard"
import { CONTACTS } from "../constants/contacts"

function Contacts() {
   return (
      <div>
         <Card title="Contact-me">
            {CONTACTS.map(function (contact) {
               return <ContactCard key={contact.address} {...contact} />
            })}
         </Card>
      </div>
   )
}

export default Contacts
