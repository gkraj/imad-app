var button = document.getElementById('counter');

button.onclick = function(){
//crate a request
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
      //if ready
    if (request.readystate === XMLHttpRequest.DONE){
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
    //not ready
  };
  //made a request
  request.open('GET', 'https://http://ggokulrajan.imad.hasura-app.io/counter', true);
  request.send(null);

};