import { Button } from "../compontents/ui/Button";
import { Input } from "../compontents/ui/Input";

export function SignIn() {
    return <div className="bg-gray-200 h-screen w-screen justify-center items-center flex"> 
        <div className=" bg-white rounded-xl border min-w-48 p-8">
            <Input placeholder="username"/>
            <Input placeholder="password"/>

            <div>
                <Button size="md" variant="primary" text="SignIn" fullWidth = {true}/>
            </div>
        </div>
    </div>
}