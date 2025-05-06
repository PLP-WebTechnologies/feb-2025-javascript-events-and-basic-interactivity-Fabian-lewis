document.addEventListener('DOMContentLoaded', function() {

  // For carousel functionality
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }

  // Initial state
  items[currentIndex].classList.add('active');

  // Change every 4 seconds
  setInterval(showNextItem, 4000);

  // Handle tab switching in services section
  const services = {
    'AI Solutions': {
      text: `In AI Solutions, we provide cutting-edge AI technologies to enhance your business operations. Our team of experts will work with you to develop customized solutions that meet your specific needs.`,
      video: 'assets/ai.mp4'
    },
    'Smart Systems': {
      text: `In Smart Systems, we design and implement intelligent systems that automate processes and improve efficiency. Our solutions are tailored to your business requirements, ensuring maximum productivity.`,
      video: 'assets/smart-home.mp4'
    },
    'Data Science': {
      text: `In Data Science, we analyze and interpret complex data to help you make informed decisions. Our data scientists use advanced analytics and machine learning techniques to extract valuable insights from your data.`,
      video: 'assets/data-science.mp4'
    },
    'Consulting': {
      text: `In Consulting, we offer expert advice and guidance to help you navigate the complexities of technology. Our consultants have extensive experience in various industries and can provide valuable insights to drive your business forward.`,
      video: 'assets/consulting.mp4'
    }
  };
  
  const tabButtonsContainer = document.getElementById('tab-buttons');
  const tabContent = document.querySelector('.tab-contents');
  const tabVideo = document.querySelector('#tab-video');
  const tabDescription = document.querySelector('.tab-description');
  const videoContainer = document.querySelector('.video-container');
  
  // Create tabs dynamically
  Object.keys(services).forEach((serviceName, index) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    if (index === 0) tab.classList.add('active'); // make first one active by default
    tab.textContent = serviceName;
    tabButtonsContainer.appendChild(tab);
  
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Fade out current content
      tabDescription.classList.remove('active');
      videoContainer.classList.remove('active');
  
      // Update content after a small delay for fade-out
      setTimeout(() => {
        const selected = services[serviceName];
        tabContent.textContent = selected.text;
        tabVideo.src = selected.video;

        // Fade in new content
        tabDescription.classList.add('active');
        videoContainer.classList.add('active');
      }, 500); // Adjust this delay to match the fade-out duration
    });
  });
  
// Set initial content (on page load)
const firstService = Object.keys(services)[0];
tabContent.textContent = services[firstService].text;
tabVideo.src = services[firstService].video;
tabDescription.classList.add('active');
videoContainer.classList.add('active');
  
  
    // Form validation (real-time feedback)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      
      if (name === "" || email === "") {
        alert('Please fill in all required fields!');
        event.preventDefault(); // Prevent form submission
      } else if (!/\S+@\S+\.\S+/.test(email)) // Simple regex for email validation 
      {
        alert('Please enter a valid email address!');
        event.preventDefault(); // Prevent form submission
      } else {
        alert('Thank you for contacting us!');
      }
    });
  });
  