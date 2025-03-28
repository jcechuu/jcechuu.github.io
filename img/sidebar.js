    // sidebar.js
    fetch('sidebar.html')
    .then(response => response.text())
    .then(sidebarHtml => {
        const sidebarContainer = document.getElementById('sidebar-container');
        sidebarContainer.innerHTML = sidebarHtml;

        // Add event listener for the sidebar toggler
        const sidebarToggler = document.querySelector('.sidebar-toggler');
        const sidebar = document.querySelector('.sidebar');
        const sidebarToggleButton = document.querySelector('.sidebar-toggle-button');

        if (sidebarToggler && sidebar) {
            sidebarToggler.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');
            });
        }

        if (sidebarToggleButton && sidebar) {
            sidebarToggleButton.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });
        }
    });

        document.addEventListener('DOMContentLoaded', function() {
            const songTitleArtist = document.getElementById('song-title-artist');
            const songAudio = document.getElementById('song-audio');
            let audioVisible = false; // Track the audio player's visibility
        
            if (songTitleArtist && songAudio) {
                songTitleArtist.addEventListener('click', function() {
                    if (audioVisible) {
                        // Hide the audio player if it's visible
                        songAudio.style.display = 'none';
                        songAudio.pause(); // Pause the audio
                        songAudio.currentTime = 0; // Reset audio to the beginning
                        audioVisible = false;
                    } else {
                        // Show the audio player if it's hidden
                        songAudio.style.display = 'block';
                        songAudio.play();
                        audioVisible = true;
                    }
                });
            }
        });

        