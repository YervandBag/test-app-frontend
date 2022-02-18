// /**
//  * Automatically imports all the modules and exports as a single module object
//  */
//  const requireModule = require.context('.', false, /^\.\/.*\/index\.js$/);
//  console.log({requireModulse: require.context('.').keys(), k: requireModule.keys() });
//  const modules = {};
 
//  requireModule.keys().forEach(filename => {
//      // create the module name from fileName
//      // remove the store.js extension and capitalize
//      const moduleName = filename
//                     .replace(/(\.\/|\.store\.js)/g, '')
//                     .replace(/^\w/, c => c.toUpperCase())
     
//      modules[moduleName] = requireModule(filename).default || requireModule(filename);
//  });
 
//  export default modules;

import user from './user'
import auth from './auth'

export default {
    user,
    auth
}