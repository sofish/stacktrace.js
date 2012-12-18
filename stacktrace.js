(function(win) {

  var StackTrace = function() {}
    , proto = StackTrace.prototype
    , stacktrace

  // make error traces visitable outside the closure
  win.ErrorTrace = [];

  // set a url to pesist your error traces
  proto.url = '';

  // run a supervisor
  proto.track = function() {
    var that = this;

    return function(msg, url, line) {
      ErrorTrace.push(msg + '@' + line);
      that.post(msg, url, line);
    }
  };

  // post data to backend
  proto.post = function(msg, url, line) {
    var xhr, params;

    params = 'url=' + url +
      '&message=' + msg +
      '&line=' + line +
      '&ua=' + navigator.userAgent;

    xhr = typeof win.XMLHttpRequest === 'undefined' ?
      new ActiveXObject('Msxml2.XMLHTTP') :
      new XMLHttpRequest();

    xhr.open('POST', this.url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
  };

  stacktrace = new StackTrace();

  // record error traces
  win.onerror = stacktrace.track();

})(window);