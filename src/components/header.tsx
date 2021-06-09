import React, { ReactElement } from "react"
import { useIntl } from "gatsby-plugin-intl";
import Language from '../components/langage';

function Header(): ReactElement {
    const intl = useIntl();
    return (
        <div>
        <nav className="flex flex-wrap items-center justify-between p-6 bg-gray-600">
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <svg
                className="w-8 h-8 mr-2 fill-current"
                width="54px"
                height="54px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="qrIconTitle"
                stroke="#FFFFFF"
                stroke-width="0.8888888888888888"
                stroke-linecap="square"
                stroke-linejoin="miter"
                >
                    <title id="qrIconTitle">QR Code</title>
                    <rect x="10" y="3" width="7" height="7" transform="rotate(90 10 3)"/>
                    <rect width="1" height="1" transform="matrix(-1 0 0 1 7 6)"/>
                    <rect x="10" y="14" width="7" height="7" transform="rotate(90 10 14)"/>
                    <rect x="6" y="17" width="1" height="1"/>
                    <rect x="14" y="20" width="1" height="1"/>
                    <rect x="17" y="17" width="1" height="1"/>
                    <rect x="14" y="14" width="1" height="1"/>
                    <rect x="20" y="17" width="1" height="1"/>
                    <rect x="20" y="14" width="1" height="1"/>
                    <rect x="20" y="20" width="1" height="1"/>
                    <rect x="21" y="3" width="7" height="7" transform="rotate(90 21 3)"/>
                    <rect x="17" y="6" width="1" height="1"/>
                </svg>
            <span className="text-xl font-semibold tracking-tight">
                { intl.formatMessage({ id: "title" }) }
            </span>
            </div>
            <div className="block lg:hidden">
                <Language />
            </div>
        </nav>
    </div>
    )
}
export default Header