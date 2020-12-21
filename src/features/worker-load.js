/*
 * Supports loading System.register in workers
 */
import { systemJSPrototype } from '../system-core';

if (typeof importScripts === 'function')
  systemJSPrototype.instantiate = function (url) {
    var loader = this;
    return Promise.resolve().then(function () {
      importScripts(url);
      return loader.getRegister();
    });
  };
