import React, { ChangeEventHandler, ReactElement } from "react"

type Props = {
    htmlFor: string;
    title: string;
    value: string | undefined;
    options: string[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

function SelectBox(props: Props): ReactElement {
    return (
        <div>
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                htmlFor={props.htmlFor}
            >
                {props.title}
            </label>
            <div className="relative">
                <select 
                    className="appearance-none bg-transparent border-b border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mb-3" 
                    id={props.htmlFor}
                    value={props.value}
                    onChange={props.onChange}
                >
                    {props.options.map((option: string) => {
                        return <option>{option}</option>
                    })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
    )
}
export default SelectBox