

// ====================== Login page js ========================== //

// var usernames = ["Saurabh", "Jumbo","Mahesh","Omkar"];
// var passwords = ["1234", "12345","123","12"];

// function login()
// {
// var user = document.getElementById("uname").value;
// console.log(user);
// var pwd = document.getElementById("pass").value;
// console.log(pwd);

// for (var i = 0; i < usernames.length; i++)
// {
//    if(user == usernames[i] && pwd == passwords[i])
//     {
//         document.getElementById("login").action="index.html";
//         console.log("Done");
//         return true;
//     }
//     else if(i==usernames.length-1)
//     {
//         window.alert("Try again");
//     }   
// }
// }

function login()
{
  var myMap = new Map([['Saurabh','1234'],['Demo','12345']]);
  console.log(map);
}

function signup()
{
    var user1 = document.getElementById("uname").value;
    console.log(user1);
    var pwd1 = document.getElementById("pass").value;
    console.log(pwd1);

    usernames.push(user1);
    passwords.push(pwd1);

    window.alert("Done");

}

// ================================================ //


/* ========================= Index page js ===================== */

$(document).ready(function(){
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if(this.hash !== "") 
      {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        
        });
      } // End if
    });
  })
  
  /* =================================================== */