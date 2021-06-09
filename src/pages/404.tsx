import React, { ReactElement } from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { useIntl } from "gatsby-plugin-intl";

function NotFound(): ReactElement {
    const intl = useIntl();
    return (
        <Layout>
            <SEO 
                title={intl.formatMessage({ id: "notfound.message" })}
                description={intl.formatMessage({ id: "description" })} 
            />
            <div className="flex justify-center mb-10 text-gray-700">
                <h1>{intl.formatMessage({ id: "notfound.message" })}</h1>
            </div>
            <div className="flex justify-center mt-10">
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
                <Link to="/">{intl.formatMessage({ id: "notfound.totop" })}</Link>
            </button>
            </div>
        </Layout>
    )
}

export default NotFound;