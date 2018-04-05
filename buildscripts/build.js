/* eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production'
console.log(chalk.blue("Generating minified bundle for production, This will take a while"));
webpack(webpackConfig).run((err,stats)=>{
  if(err){
    console.log(chalk.red(err));
    return 1;
  }
  // Statis reports for error, warning ... can be shown below
  console.log(chalk.green("The app has been built for procution and written to /build "));
  return 0;
});
