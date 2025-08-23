import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";

export function CreatecontentModel({ open, Onclose }) {
    return <div>
        <div>
            {
                open && <div className="h-screen w-screen bg-black 
            fixed left-0 top-0 opacity-95 flex justify-center">
                    <div className="flex flex-col justify-center">
                        <div className="bg-white rounded opacity-100 min-h-52  border">
                            <div className="flex justify-end  m-1 ">
                                <button onClick={Onclose} className="cursor-pointer">
                                    <CrossIcon size="md" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Input placeholder={"Title"} />
                                <Input placeholder={"Link"} />

                            </div>

                            <div className="justify-center flex">
                                <Button variant='primary' text='ADD' size="md"/>
                            </div>

                        </div>



                    </div>

                </div>
            }


        </div>
    </div>
}

function Input({ onChange, placeholder }: { onChange?: () => void; placeholder: string }) {
    return <div>

        <input placeholder={placeholder}
            type={"text"}
            className="px-4 py-2 border rounded m-2"
            onChange={onChange} />
    </div>
}