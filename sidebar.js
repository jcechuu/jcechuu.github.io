    fetch('sidebar.html')
    .then(response => response.text())
    .then(sidebarHtml => {
        const sidebarContainer = document.getElementById('sidebar-container');
        sidebarContainer.innerHTML = sidebarHtml;

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
            let audioVisible = false; 
        
            if (songTitleArtist && songAudio) {
                songTitleArtist.addEventListener('click', function() {
                    if (audioVisible) {
                        // Hide the audio player if it's visible
                        songAudio.style.display = 'none';
                        songAudio.pause();
                        songAudio.currentTime = 0; 
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

        
        