import React, { ReactElement } from "react";
import Header from '../components/header';

type Props = {
    children: React.ReactNode;
}

function Layout(props: Props): ReactElement {
    return (
        <>
            <Header />
            <div className="container max-w-md mx-auto mt-10">
                <main>{props.children}</main>
            </div>
        </>
    )
}
export default Layout;