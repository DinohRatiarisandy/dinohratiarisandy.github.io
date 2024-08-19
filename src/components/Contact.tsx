import Card from "./Card"
import ContactCard from "./ContactCard"
import FacebookIcon from "./icons/FacebookIcon"
import GmailIcon from "./icons/GmailIcon"
import profileFacebook from "../assets/profile/fb-profile.jpg"

const CONTACTS = [
   {
      icon: GmailIcon,
      title: "Gmail",
      profileImg: profileFacebook,
      address: "dinohratiarisandy@gmail.com",
   },
   {
      icon: FacebookIcon,
      title: "Facebook",
      profileImg: profileFacebook,
      address: "Ratiarisandy Dinoh Liantsoa",
      url: "https://facebook.com/ratiarisandy",
   },
]

function Contact() {
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

export default Contact
