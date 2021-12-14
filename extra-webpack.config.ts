import { Configuration, BannerPlugin } from 'webpack';

/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */
export default {
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ['ts-loader']
            },
            {
                test: /\.js?$/,
                use: [{
                    loader: 'share-loader',
                    options: {
                        modules: [/@angular/],
                        namespace: 'container-app'
                    }
                }]
            }
        ]
    },
    plugins: [
        new BannerPlugin('This is my cool banner')
    ],
} as Configuration;