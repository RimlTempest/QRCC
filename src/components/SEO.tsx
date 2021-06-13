import React, { ReactElement } from "react"
import { Helmet } from "react-helmet"

type Props = {
    title: string;
    description: string;
}

function SEO(props: Props): ReactElement {
    return (
        <Helmet
            htmlAttributes={{ lang: "ja-jp" }}
            title={props.title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: props.description,
                },
                {
                    property: `og:title`,
                    content: props.title,
                },
                {
                    property: `og:description`,
                    content: props.description,
                },
                {
                    property: `og:url`,
                    content: `https://qrcc.riml.work`
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `QRCC`,
                },
                {
                    property: `og:locale`,
                    content: `ja_JP`,
                },
                {
                    property: `twitter:card`,
                    content: `Summary Card`,
                },
                {
                    property: `twitter:site`,
                    content: `@Fande4d`
                }
            ]}
        />
    )
}

export default SEO;