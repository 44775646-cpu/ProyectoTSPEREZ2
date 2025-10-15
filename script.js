document.addEventListener('DOMContentLoaded', () => {
    

    
    const params = new URLSearchParams(window.location.search);
    if (params.get('form') === 'register') {
    
        showRegisterForm(); 
    }
    

    
    function showRegisterForm() {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    }
});