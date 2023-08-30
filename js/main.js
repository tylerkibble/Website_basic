import htmx from 'htmx.org';
document.addEventListener('DOMContentLoaded', function() {
  const servicesList = document.getElementById('services-list');
  const serviceInput = document.getElementById('service-input');
  const addServiceBtn = document.getElementById('add-service-btn');

  addServiceBtn.addEventListener('click', function() {
    const serviceName = serviceInput.value.trim();
    if (serviceName !== '') {
      const listItem = document.createElement('li');
      listItem.innerText = serviceName;
      servicesList.appendChild(listItem);
      serviceInput.value = '';
    }
  });
});
