// Welcome screen functionality
document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    
    // Show welcome screen for 7 seconds
    setTimeout(function() {
        // Fade out welcome screen
        welcomeScreen.classList.add('fade-out');
        
        // Show main content after fade out
        setTimeout(function() {
            mainContent.classList.add('show');
        }, 500);
    }, 7000); // 7 seconds
});
