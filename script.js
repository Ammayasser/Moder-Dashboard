  // 3D Mouse Movement Effect
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.tilt-element');
  const x = e.clientX;
  const y = e.clientY;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (centerY - y) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  });

  // Update interactive background
  document.documentElement.style.setProperty('--x', `${x}px`);
  document.documentElement.style.setProperty('--y', `${y}px`);
});

// Create 3D Particles
function create3DParticles() {
  const particleSystem = document.querySelector('.particle-system');
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle-3d';
    
    // Random starting position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation delay and duration
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${8 + Math.random() * 4}s`;
    
    particleSystem.appendChild(particle);
  }
}

// Initialize 3D effects
document.addEventListener('DOMContentLoaded', () => {
  create3DParticles();
  
  // Add depth layers
  const body = document.body;
  const depthLayer1 = document.createElement('div');
  const depthLayer2 = document.createElement('div');
  
  depthLayer1.className = 'depth-layer depth-layer-1';
  depthLayer2.className = 'depth-layer depth-layer-2';
  
  body.insertBefore(depthLayer1, body.firstChild);
  body.insertBefore(depthLayer2, body.firstChild);
  
  // Add 3D classes to elements
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('tilt-element', 'glow-3d');
  });
  
  document.querySelectorAll('.statistics-card').forEach(card => {
    card.classList.add('card-stack');
  });
  
  document.querySelectorAll('h1, h2, h3').forEach(heading => {
    heading.classList.add('text-3d');
  });

  // Initialize Performance Chart
  const ctx = document.getElementById('performanceChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Performance Score',
        data: [65, 78, 72, 85, 82, 90, 88],
        borderColor: '#3182ce',
        backgroundColor: 'rgba(49, 130, 206, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });

  // Initialize Progress Rings
  const progressRings = document.querySelectorAll('.progress-ring');
  progressRings.forEach(ring => {
    const progress = ring.getAttribute('data-progress');
    const circumference = 2 * Math.PI * 20; // radius = 20
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '50');
    svg.setAttribute('height', '50');
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '25');
    circle.setAttribute('cy', '25');
    circle.setAttribute('r', '20');
    circle.setAttribute('stroke-width', '3');
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = strokeDashoffset;
    
    svg.appendChild(circle);
    ring.insertBefore(svg, ring.firstChild);
  });

  // Technology Stack Progress Bars
  const techBars = document.querySelectorAll('.tech-item .progress-bar');
  techBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.setProperty('--progress', `${progress}%`);
  });

  // Notification Badge Counter
  const notificationBadge = document.querySelector('.notification-badge');
  if (notificationBadge) {
    const count = notificationBadge.getAttribute('data-count');
    notificationBadge.style.setProperty('--count', `"${count}"`);
  }

  // Search Functionality
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      // Add your search logic here
      console.log('Searching for:', e.target.value);
    });
  }

  // Add Project Button
  const addProjectBtn = document.querySelector('.add-project');
  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
      // Add your project creation logic here
      console.log('Adding new project');
    });
  }

  // Time Filter Change
  const timeFilter = document.querySelector('.time-filter');
  if (timeFilter) {
    timeFilter.addEventListener('change', (e) => {
      // Add your time filter logic here
      console.log('Time filter changed to:', e.target.value);
    });
  }

  // Activity List Animation
  const activityItems = document.querySelectorAll('.activity-item');
  activityItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
  });

  // 3D Card Effect
  const cards = document.querySelectorAll('.kpi-card, .tech-stack-card, .activity-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });

  // Initialize Tooltips
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = element.getAttribute('data-tooltip');
      document.body.appendChild(tooltip);
      
      const rect = element.getBoundingClientRect();
      tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
      tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
    });
    
    element.addEventListener('mouseleave', () => {
      const tooltip = document.querySelector('.tooltip');
      if (tooltip) tooltip.remove();
    });
  });
});

// Utility Functions
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDate(date) {
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
    Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24)),
    'day'
  );
}

// Animation Helper
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Smooth reset of card tilt
document.addEventListener('mouseleave', () => {
  document.querySelectorAll('.tilt-element').forEach(card => {
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  });
});