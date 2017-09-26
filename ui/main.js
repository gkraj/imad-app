
//login form
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      //if ready
        if (request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                alert('successfully logged in');
                }else if (request.status === 403){
                    alert('username/password is incorrect');
                }else if (request.status === 500){
                    alert('something wrong in server');
                }
    }  
    //not ready
  };
  //made a request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST', 'http://ggokulrajan.imad.hasura-app.io/login', true);
  request.setRequestHeader ('Content-Type', 'application/json');
  request.send(JSON.stringify({username: username, password: password}));
};