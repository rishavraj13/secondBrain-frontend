 interface ButtonProps {
    variant:"primary" | "secondary";
    size: "sm" | "md" | "lg";
    StartIcon?: any,
    EndIcon?: any,
    text: string
    onClick: () => void,

}


export const Button = (props: ButtonProps) => {
    return <button></button>
}

<Button variant = "primary" size = "md" onClick ={() => {}} text = {'asd'} StartIcon = {'+'}  EndIcon={'-'}/>
