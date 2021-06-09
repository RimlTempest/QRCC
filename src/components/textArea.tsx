import React, { ChangeEventHandler, ReactElement } from "react"

type Props = {
    htmlFor: string;
    title: string;
    type: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function TextArea(props: Props): ReactElement {
    return (
        <div>
            <label 
                className="block text-gray-700 text-sm font-bold"
                htmlFor={props.htmlFor}
            >
            {props.title}
            </label>
            <input className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mb-3" 
                id={props.htmlFor}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onBlur={!props.onBlur? undefined : props.onBlur}
            />
        </div>
    )
}
export default TextArea