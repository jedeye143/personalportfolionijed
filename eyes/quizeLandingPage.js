function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
}

function loginSubmit() {
    var username = document.getElementById("login-username").value;
    alert("Welcome, " + username);
    window.location.href = "quize.html"; 
}

function signupSubmit() {
    togglePopup('login-popup'); 
    
}