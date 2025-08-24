import { useState } from "react"
import { SidebarIcon } from "../../icons/SidebarIcon";
import { CrossIcon } from "../../icons/CrossIcon";
import { SidebarItems } from "./SidebarItems";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { BrainIcon } from "../../icons/BrainIcon";

export const Sidebar = () => {
    const [Open, SetOpen] = useState<boolean>(true);

    if (!!Open) {
        return <div className="fixed left-0 right-0">
            <div className="cursor-pointer  " onClick={
                () => {
                    SetOpen(!open)
                }
            }>
                <SidebarIcon size="md" />
            </div>
        </div>
    }

    return (
        <div className="h-screen border-r w-72 left-0 top-0 fixed pl-4">
            <div>

                <div className=" flex justify-end m-2">
                    <CrossIcon size="md" />
                </div>
                <div className="flex items-center">
                    <div className="pr-2 justify-center">
                        <BrainIcon />
                    </div>

                    <div className=" text-2xl justify-center ">
                        Brainly
                    </div>
                </div>


                <div className="py-4">
                    <SidebarItems text="Twitter" icons={<TwitterIcon />} />
                    <SidebarItems text="Youtube" icons={<YoutubeIcon />} />

                </div>
            </div>

        </div>
    )

}