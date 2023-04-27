import chalk from 'chalk';
import main from './main.js';
import {configs} from './main.js';
import axios from 'axios';
import {config} from 'dotenv';
config();
console.log(process.env.API_KEY);

console.log(chalk.bgBlue("Hello,, World!"));
main();
configs();

let api_url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`;
axios.get(api_url)
.then(response => {
    // console.log(response.data);
});