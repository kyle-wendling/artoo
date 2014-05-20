;(function(undefined) {
  'use strict';

  /**
   * artoo settings
   * ===============
   *
   * artoo default settings that user may override.
   */

  // Defaults
  artoo.settings = {

    // Root settings
    autoInit: true,
    autoExec: true,
    chromeExtension: false,
    debug: false,
    gist: null,
    scriptUrl: null,
    eval: null,
    reload: false,

    // Methods settings
    cache: {
      delimiter: '%'
    },
    instructions: {
      autoRecord: true
    },
    jquery: {
      version: '2.1.1',
      force: false,
      ß: true
    },
    log: {
      enabled: true,
      level: 'verbose',
      beeping: false
    },
    navigation: {
      history: true
    },
    store: {
      engine: 'local'
    }
  };

  // Setting utility
  artoo.loadSettings = function(ns) {
    artoo.settings = artoo.helpers.extend(ns, artoo.settings);
  };
}).call(this);