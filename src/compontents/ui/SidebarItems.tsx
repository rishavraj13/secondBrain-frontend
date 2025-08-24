import type { ReactElement } from "react";

export function SidebarItems ({text, icons}: {
    text: string,
    icons: ReactElement,

}) {
    return <div className="flex text-gray-600 py-2 ">
        <div className="justify-center pr-2">
        {icons} 
    </div>

    <div className="justify-center ">
        {text}
    </div>

        

    </div>
    
}