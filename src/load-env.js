/**
 * Script desenvolvido para poder usar o arquivo .env para rodar o site utilizando environment variables
 * 
 */

const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const envConfig = `export const environment = {
    production: false,
    API_URL: '${process.env.API_URL}',
    API_KEY: '${process.env.API_KEY}'
  };`;
  
  fs.writeFileSync('src/environments/environment.ts', envConfig);
  console.log('Environment variables loaded into environment.ts');