// Function to disable scrolling
function disableScrolling() {
    document.body.style.overflow = "hidden";
  }
  
  // Function to enable scrolling
  function enableScrolling() {
    document.body.style.overflow = "auto";
  }
  
  // Disable scrolling initially
  disableScrolling();
  
  // Re-enable scrolling after 5 seconds
  setTimeout(enableScrolling, 4000); // 5000 milliseconds = 5 seconds