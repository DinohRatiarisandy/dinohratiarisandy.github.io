import React from "react"

import { IconPropsType } from "./icons/icon-props-type"

type ContactProps = {
   icon: React.ComponentType<IconPropsType>
   title: string
   profileImg: string
   address: string
   url?: string
}

function ContactCard({
   icon: Icon,
   title,
   profileImg,
   address,
   url,
}: ContactProps) {
   return (
      <div className="flex items-center gap-3 p-2">
         <div className="relative">
            <img
               className="h-10 rounded-full ring-2 ring-sky-600"
               src={profileImg}
               alt="Ratiarisandy's profile"
            />
            <Icon size={14} title={title} className="absolute left-7 top-7" />
         </div>
         {url ? (
            <a href={url} target="_blank">
               {" "}
               <i className="trasition-colors text-slate-300 hover:text-sky-400 lg:text-sm">
                  {address}
               </i>
            </a>
         ) : (
            <i className="text-slate-300 lg:text-sm">{address}</i>
         )}
      </div>
   )
}

export default ContactCard
