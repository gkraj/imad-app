var button = document.getElementById('counter');

button.onclick = function(){
//crate a request
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
      //if ready
    if (request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }  
    //not ready
  };
  //made a request
  request.open('GET', 'http://ggokulrajan.imad.hasura-app.io/counter', true);
  request.send(null);
};

var submit = document.getElementById('submit-btn');
submit.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      //if ready
        if (request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for( var i=0;i<names.length; i++ ){
                list += '<li>'+names[i]+ '</li>';
                 }
     var ul = document.getElementById('nameList');
     ul.innerHTML = list;
        }
    }  
    //not ready
  };
  //made a request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET', 'http://ggokulrajan.imad.hasura-app.io/submit-name?name='+name, true);
  request.send(null);
};

/*var submitobj = document.getElementById('submit_button'); 
    //value of id assign it to submitobj
submit.onclick = function(){ 
    //clicking the submit btn will call fnt
    var requestobj = new XMLHttpRequest(); 
    // create obj requestobj for html getting value as html
    // after clicking sending hte request to server as html value
    request.onreadystatechange = function(){
    if (requestobj.readystate === XMLHttpRequest.DONE){ 
        if(requestobj.response === 200){ 
            //after successfully sending res to server it will resposne as 200 means success
            //creating obj for response text which we entered
            //json.parse is used to convet the html to js obj
            var commentobj = JSON.parse (requestobj.responseText);
            var comment_txt = '';
            for (i=0; i<comment_txt.length; i++){
                comment_txt += '<p>' + commentobj[i] +'</p>';
            }
            var comment = document.getElementById('comments');
            comment.innerHTML = comment_txt;
        }
    }
    };
var text_out = document.getElementById('text_box');
var text_box = text_out.value;
request.open('GET', 'http://ggokulrajan.imad.hasura-app.io/articleName/submit?text_box=' +text_box, true);
request.send(null);
 };
 */
 
 
 
 
 
 
 
 
 
 
 
