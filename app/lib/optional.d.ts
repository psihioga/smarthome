// declare module '../app/images/icons/*.svg' {
//     import * as React from 'react';

//     export const ReactComponent: React.FunctionComponent<React.SVGProps<
//         SVGSVGElement
//     > & { title?: string }>;

//     const src: string;
//     export default src;
// }


declare module "*.svg" {

    import * as React from 'react';
    /**
     * Use `any` to avoid conflicts with
     * `@svgr/webpack` plugin or
     * `babel-plugin-inline-react-svg` plugin.
     */
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;


}

// declare module '*.svg' {
//     /**
//      * Use `any` to avoid conflicts with
//      * `@svgr/webpack` plugin or
//      * `babel-plugin-inline-react-svg` plugin.
//      */
//     import * as React from 'react';

//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//     export default content;
//   }