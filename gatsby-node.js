/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onPreInit = () => console.log('Loaded gatsby plugin');
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === "build-html") {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                 {
//                     test: /lib/,
//                     use: loaders.null(),
//                 },
//                 ],
//             },
//         })
//     }
// }