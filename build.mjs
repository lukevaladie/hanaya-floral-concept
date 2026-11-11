import {build} from 'esbuild';
await build({entryPoints:['App.jsx'],bundle:true,minify:true,outfile:'app.js',format:'esm',target:['es2020'],jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},legalComments:'linked'});
console.log('Production React bundle built. Serve this directory as a static site.');
