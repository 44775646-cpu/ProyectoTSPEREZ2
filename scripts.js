document.addEventListener('DOMContentLoaded', () => {
   
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    

    registerTab.addEventListener('click', () => {
        
        loginForm.classList.add('hidden');      
        registerForm.classList.remove('hidden'); 

        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    });

    loginTab.addEventListener('click', () => {

        registerForm.classList.add('hidden');   
        loginForm.classList.remove('hidden');    

        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    });

    
    const setupPasswordToggle = (inputId, toggleId) => {
        const passwordInput = document.getElementById(inputId);
        const togglePassword = document.getElementById(toggleId);
        if (togglePassword) {
            togglePassword.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                togglePassword.classList.toggle('fa-eye-slash');
            });
        }
    };
    setupPasswordToggle('login-password', 'toggle-login-password');
    setupPasswordToggle('register-password', 'toggle-register-password');
});