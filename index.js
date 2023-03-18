// node review
/*
- 1995 Branden Eich (netscape): js
- 1996 js on server , doesn't work
- firefox (mozilla), internet explorer, safari, ...
problem: js slow ... ex: google map
- 2008 google -> google chome, js engine (V8)
- 2009 Ryan Dahl  // server, no js (php, python, perl)
creation of node.js
- 2019 Deno
*/

// functionnement
/**
 * js code -> v8 engine -> (node.js apis) fs, http, crypto, path -> node.js bindings -> libuv
 * node === asynchronous I/O
 * --- inside libuv ---
 * (1) event loop (cpu)  <---->   (2) Thread pool  ----  (3) hardware
 */

/**
 * GLOBALS global, module,
 */

/**
 * PACKAGE = ens de modules
 * f1
 * f2
 * f3
 * index.js
 * package.json -- version, packages, versions >> npm install ++ node_modules
 * package-lock.json
 */

// express middlewares routes, controllers, models
