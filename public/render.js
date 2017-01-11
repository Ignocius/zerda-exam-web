var ServerProjects = (function() {
  var list = document.querySelector('ol');
  var messages = [];
  var ajax = new Ajax();

  function render(){
    messages.forEach(function(msg, index){
     let li = document.createElement('li');
     list.appendChild(li);
     console.log(index);
     console.log(msg);
     li.textContent = msg.project_name;
    //  console.log(msg);
    })
  }

  return {
    init: function(){
      ajax.getData( function(res){
        console.log(res);
        messages = res;
        render();
      })
    }
  }

})();

// ServerProjects.init();
