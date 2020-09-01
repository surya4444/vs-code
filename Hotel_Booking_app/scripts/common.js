loginTemplate();
contactUsTemplate()
footertemplate();
website_logo();
userLogin();


function login() {
    let modal = document.getElementsByClassName("login");
    modal[0].style.display = "block";
}

function loginTemplate () {
    let loginTemplate = 
    `
    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#example-modal" onclick="mainUserLogin()" id="login-in-button">
                        LOGIN
                    </button>
<div class="modal fade" id="example-modal" tabindex="-1" role="dialog" aria-labelledby="example-modal-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="example-modal-label">Please LogIn</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body">
                 <form>  <!--action="index.html" method="GET" -->
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" class="length" required placeholder="Enter Username"  aria-describedby="emailName">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input  type="password" id="password" class="length" required placeholder="Enter Password">
                    </div>
            </div>
            <div class="modal-footer" id="move1">
                <button type="submit" onclick="userLogin()" class="btn btn-primary">Log In</button>
            </div>
                </form>
        </div>
    </div>
</div>`
    document.getElementsByClassName('login')[0].innerHTML += loginTemplate;
}

function mainUserLogin(){
    if(document.getElementById('login-in-button').innerHTML === 'LOGOUT'){
        localStorage.clear();
        document.getElementById('login-in-button').innerHTML = 'LOGIN';
        // document.getElementById('login-in-button').role = 'none';
    }
}
function userLogin(){
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === "admin" && password === "admin"){
        alert('Successfully loggedin')
        localStorage.username = "admin";
        localStorage.password = "admin";
        document.getElementById('login-in-button').innerHTML='LOGOUT';
    }
}

function contactUs() {
    let modal = document.getElementsByClassName("contactText");
    modal[0].style.display = "block";
}

function contactUsTemplate(){
    let contactUsTemplate = 
    `
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#contact-modal" id="contact-in-button">
                        Contact Us
                    </button>
    <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="example-modal-label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="example-modal-label">Get in touch</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body">
                <form>
                    <span>Thank you for reaching out!!!</span><br>
                    <p>Please Enter you email and we will get back to you.</p>
                    <div class="form-group1">
                        <label for="example-input-email" aria-autocomplete="on">Email:</label>
                        <input type="email" id="example-input-email" class="length" required placeholder="Enter your email Id">
                    </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary move2">Submit</button>
            </div>
                </form>
        </div>
    </div>
</div>`
    document.getElementsByClassName('contactText')[0].innerHTML += contactUsTemplate;
}


function footertemplate(){
    let footertemplate = 
    `<div class="copyright">&copy; 2020 ROOM SEARCH PVT LTD</div>
    <div class="social-media">
        <a href="https://www.facebook.com/" target="_blank">
            <img src="assests/images/facebook.png" class="social-media-logo"></a>
        <a href="https://www.instagram.com/" target="_blank">
            <img src="assests/images/instagram.png" class="social-media-logo"></a>
        <a href="https://twitter.com/" target="_blank">
            <img src="assests/images/twitter.png"  class="social-media-logo"></a>
    </div>`
    document.getElementById('footer').innerHTML += footertemplate;
}

function website_logo(){
    let log = 
    `<a href="index.html">
    <img src="assests/images/logo.png" alt="logo"> </a>  `
    document.getElementById("website-logo").innerHTML += log;
}

