var Control = (function(){
  var button = document.querySelector('button');
  var loading = document.querySelector('span');
  var textInput = document.querySelector('textarea');
  var numberInput = document.querySelector('input[type=number]');
  var emailInput = document.querySelector('input[type=email]');
  var list = document.querySelector('ol');
  var projects = [];
  var ajax = new Ajax();

  button.addEventListener('click', function(){
    var returnedData = {};
    returnedData.feedback = textInput.value;
    returnedData.scale = numberInput.value;
    returnedData.email = emailInput.value;
    // console.log(returnedData);
    loading.textContent = "LOADED";
    sendDataBack(returnedData);
  });

  function render(){
    let li = document.createElement('li');
    try {
      projects.forEach(function(project, index){
        list.appendChild(li);
        li.textContent = project.project_name;
      });
    } catch (e) {
      console.log(projects.message);
        list.appendChild(li);
        li.textContent= projects.message;
    };
    //  console.log(project);
  }

  function sendDataBack(collectedData) {
    ajax.sendData(collectedData, function(res){
      loading.textContent = "";
      console.log(res);
      projects = res;
      render();
    })
  }

})();
