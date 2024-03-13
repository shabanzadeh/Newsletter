document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    if (email) {
        document.getElementById('emailAddress').textContent = email;
    }
});
