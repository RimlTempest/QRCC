import React, { ReactElement } from "react"

type Props = {
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
}

function Dialog(props: Props): ReactElement {
    if (!props.open) {
        return <></>;
    }
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-25 flex">
            <div className="relative p-8 w-full max-w-md m-auto bg-white flex-col flex rounded-lg ml-3 mr-3 lg:ml-auto lg:mr-auto xl:ml-auto xl:mr-auto">
                <div>{props.children}</div>
            </div>
        </div>
    )
}
export default Dialog