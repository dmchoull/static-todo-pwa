/* eslint-disable import/no-extraneous-dependencies,no-param-reassign */
import path from 'path';
import ServiceWorkerWebpackPlugin from 'serviceworker-webpack-plugin';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import autoprefixer from 'autoprefixer';

// noinspection JSUnusedGlobalSymbols
export default {
  getSiteData: () => ({
    title: 'React Static',
  }),

  getRoutes: () => [
    {
      path: '/',
      component: 'src/containers/TodoList',
    },
    {
      is404: true,
      component: 'src/components/404',
    },
  ],

  preact: true,

  extractCssChunks: true,
  webpack: (config, { defaultLoaders, stage }) => {
    const cssLoaders = [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          minimize: true,
          sourceMap: stage === 'dev',
          modules: true,
          camelCase: true,
          localIdentName: stage === 'dev' ? '[name]__[local]--[hash:base64:5]' : '[hash:base64]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            postcssFlexbugsFixes,
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      },
    ];

    if (stage === 'dev') {
      config.module.rules = [
        {
          oneOf: [
            {
              test: /\.pcss$/,
              use: ['style-loader'].concat(cssLoaders),
            },
            defaultLoaders.jsLoader,
            defaultLoaders.fileLoader,
          ],
        },
      ];
    } else {
      config.module.rules = [
        {
          oneOf: [
            {
              test: /\.pcss$/,
              use: ExtractCssChunks.extract({
                fallback: {
                  loader: 'style-loader',
                  options: {
                    sourceMap: false,
                    hmr: false,
                  },
                },
                use: cssLoaders,
              }),
            },
            defaultLoaders.jsLoader,
            defaultLoaders.fileLoader,
          ],
        },
      ];
    }

    return {
      ...config,
      plugins: [
        ...config.plugins,
        new ServiceWorkerWebpackPlugin({ entry: path.join(__dirname, 'src/sw.js') }),
      ],
    };
  },
};
