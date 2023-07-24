function toggleDarkMode() {
    const body = document.body;
    const text = document.getElementById("infotext");
    const themeSwitchCheckbox = document.getElementById('darkmode');

    if (themeSwitchCheckbox.checked) {
      text.classList.add('dark-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      text.classList.remove('dark-mode');
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  // Function to set initial theme based on user preference (stored in local storage)
  function setInitialTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.getElementById('darkmode').checked = true;
    } else {
      document.body.classList.remove('dark-mode');
      document.getElementById('darkmode').checked = false;
    }
  }

  // Event listener for dark mode toggle
  document.getElementById('darkmode').addEventListener('change', toggleDarkMode);

  // Set initial theme
  setInitialTheme();