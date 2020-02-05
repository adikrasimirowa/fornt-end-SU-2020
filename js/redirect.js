var x = location.search.replace('?email=', '');
if(x) {
  console.log(x);
  document.getElementById("user-email").innerHTML = x;
 } else {
 window.location="index.html"
 }
 function quizRedirect(redirectTo) {
     if(redirectTo== 'quiz') {
        window.location = "quiz.html?email=" + x
     }
     if(redirectTo== 'categories') {
        window.location = "categories.html?email=" + x
     }
     
 }
