import  { type ReactNode } from "react";


 interface ButtonProps {
    variant:"primary" | "secondary";
    size: "sm" | "md" | "lg";
    StartIcon?: ReactNode,
    EndIcon?: ReactNode,
    text: string,
    onClick?: () => void,

}

const VariantStyles = {
    "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-300 text-white" 
}

const DefaultStyles = "rounded-md p-2 flex "

const DefaultSize = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4" ,
    "lg": "py-4 px-6",
}

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className= {`${VariantStyles[props.variant]}
     ${DefaultStyles}
      ${DefaultSize[props.size]} `} >
        {props.StartIcon ? <div className="pr-2">{props.StartIcon}</div>: null}
        {props.text}
        {props.EndIcon}
    </button>
}

<Button variant = "primary" size = "md" onClick ={() => {}} text = {'asd'}/>
