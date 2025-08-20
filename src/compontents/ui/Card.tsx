import { DocIcon } from "../../icons/DocIcon";
import { ShareIcon } from "../../icons/shareicon";
import { TrashIcon } from "../../icons/TrashIcon";

export function Cards() {
    return <div>
        <div className="p-6  bg-white rounded-md shadow-md border-gray-200 border max-w-72 ">

            <div className="flex justify-between">
                <div className="flex items-center text-md font-medium ">
                    <DocIcon size="md" />
                    <div className="pl-4">
                        Project Ideas

                    </div>
                </div>

                <div className="flex items-center">
                    <div className="pr-5">
                        <ShareIcon size="md" />

                    </div>

                    <div>
                        <TrashIcon size="md" />
                    </div>

                </div>

            </div>
        </div>
    </div>
}