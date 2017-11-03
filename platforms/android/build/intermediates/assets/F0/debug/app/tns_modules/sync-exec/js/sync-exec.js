// Generated by CoffeeScript 1.9.3
(function() {
  var child_process, create_pipes, proxy, read_pipes, timeout;

  child_process = require('child_process');

  create_pipes = require('./lib/create-pipes');

  proxy = require('./lib/proxy');

  read_pipes = require('./lib/read-pipes');

  timeout = require('./lib/timeout');

  module.exports = function(cmd, max_wait, options) {
    var dir, ref;
    if (max_wait && typeof max_wait === 'object') {
      ref = [max_wait, null], options = ref[0], max_wait = ref[1];
    }
    if (options == null) {
      options = {};
    }
    if (!options.hasOwnProperty('encoding')) {
      options.encoding = 'utf8';
    }
    if (!(typeof options === 'object' && options)) {
      throw new Error('options must be an object');
    }
    if (max_wait == null) {
      max_wait = options.timeout || options.max_wait || 3600000;
    }
    if (!((max_wait == null) || max_wait >= 1)) {
      throw new Error('`options.timeout` must be >=1 millisecond');
    }
    delete options.max_wait;
    if (options.forceEmulation) {
      delete options.forceEmulation;
    } else if (child_process.execSync) {
      return proxy(cmd, max_wait, options);
    }
    delete options.timeout;
    dir = create_pipes();
    cmd = '((((' + cmd + ' > ' + dir + '/stdout 2> ' + dir + '/stderr ) ' + '&& echo $? > ' + dir + '/status) || echo $? > ' + dir + '/status) &&' + ' echo 1 > ' + dir + '/done) || echo 1 > ' + dir + '/done';
    child_process.exec(cmd, options, function() {});
    return read_pipes(dir, max_wait);
  };

}).call(this);
