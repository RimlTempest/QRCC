import React, { ReactElement } from "react";
import Dialog from '../components/dialog';
import { useIntl } from "gatsby-plugin-intl";

type Props = {
    title: string;
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
}

function ConfilmDialog(props: Props): ReactElement {
    const intl = useIntl();
    if (!props.open) {
        return <></>;
    }
    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <h2 className="text-xl text-gray-700">{props.title}</h2>
            <div className="py-5 text-gray-700">{props.children}</div>
            <div className="flex justify-end">
                <div className="p-1">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => {
                            props.onClose();
                        }}
                    >
                        {intl.formatMessage({ id: "dialog.close" })}
                    </button>
                </div>
            </div>
        </Dialog>
    )
}
export default ConfilmDialog