var Ajax = function(){
  this.APIEndpoint = 'http://localhost:3600/';

  this.getData = function(callback) {
    this.open('GET', false, 'exam/', callback);
  }

  this.sendData = function(data, callback) {
    this.open('POST', data, 'exam/', callback);
  }

  this.open = function(method, data, resource, callback) {
    var xhr = new XMLHttpRequest();
    data = (data) ? data : null;
    xhr.open( method, this.APIEndpoint + resource)

    if (method !== 'DELETE') {
      xhr.setRequestHeader('Content-Type', 'application/json');
    }

    xhr.send( JSON.stringify(data));
    xhr.onreadystatechange = function (rsp) {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if ( xhr.status === 200 ) {
          callback( JSON.parse(xhr.response));
          // console.log(xhr.responseText);
        } else {
          alert('There was a problem with the connection!');
        }
      }
    }
  }
}
