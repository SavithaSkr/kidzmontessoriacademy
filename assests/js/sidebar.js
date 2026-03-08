// Sidebar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

  // Toggle sidebar
  sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    sidebarToggle.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
  });

  // Close sidebar when clicking overlay
  sidebarOverlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    sidebarToggle.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });

  // Close sidebar when clicking a link
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      sidebar.classList.remove('active');
      sidebarToggle.classList.remove('active');
      sidebarOverlay.classList.remove('active');
    });
  });
});
