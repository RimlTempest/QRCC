import React, { ReactElement } from "react"
import { IntlContextConsumer, changeLocale, useIntl } from "gatsby-plugin-intl";

interface ILangage {
    [
        key: string
    ]: any;
}

function Language(): ReactElement {
    const intl = useIntl();

    const languageName: {ja: string, en: string} = {
        ja: intl.formatMessage({ id: "i18n.ja" }),
        en: intl.formatMessage({ id: "i18n.en" }),
    };

    return (
        <div>
            <IntlContextConsumer>
                {({ languages, language: currentLocale }: {
                    languages: string[], language: React.Key
                }) =>
                languages.map((language: string) => (
                    <button
                        key={language}
                        onClick={() => changeLocale(language)}
                        className={
                            currentLocale === language
                            ? `font-bold underline cursor-pointer mx-2 text-white`
                            : `none cursor-pointer mx-2 text-white`
                        }
                    >
                    {(languageName as ILangage)[language]}
                    </button>
                ))
                }
            </IntlContextConsumer>
        </div>
    )
}
export default Language;