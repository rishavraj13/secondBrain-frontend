import { useState } from "react"
import { SidebarIcon } from "../../icons/SidebarIcon";
import { CrossIcon } from "../../icons/CrossIcon";

export const Sidebar = () => {
    const [Open,SetOpen] = useState<boolean>(true);

    if(!!Open){
        return <div className="fixed left-0 right-0">
            <div className="cursor-pointer  " onClick={
                () => {
                    SetOpen(!open)
                }
            }>
                <SidebarIcon size="md"/>
            </div>
        </div>
    }

    return (
        <div className="h-screen bg-amber-500 border-r w-72 left-0 top-0 fixed">
            <div>
                <div className=" flex justify-end m-2">
                 <CrossIcon size="md" />
                </div>
            </div>

        </div>
    )

}