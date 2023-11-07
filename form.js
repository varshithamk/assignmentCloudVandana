function submitForm() {
     const form = document.getElementById('surveyForm');
     if (form.checkValidity()) {
         displaySurveyDetails();
         resetForm();
         return false; 
     } else {
         return true; 
     }
 }
 
 function displaySurveyDetails() {
     const surveyDetails = document.getElementById('surveyDetails');
     surveyDetails.innerHTML = '';
 
     const form = document.getElementById('surveyForm');
     const elements = form.elements;
 
     for (let i = 0; i < elements.length; i++) {
         const element = elements[i];
         if (element.type !== 'submit' && element.type !== 'reset') {
             const label = document.querySelector(`label[for="${element.id}"]`).textContent;
             const value = element.type === 'radio' ? (element.checked ? 'Yes' : 'No') : element.value;
 
             const detail = document.createElement('div');
             detail.innerHTML = `<span>${label}:</span> ${value}`;
             surveyDetails.appendChild(detail);
         }
     }
 
     openPopup();
 }
 
 function openPopup() {
     const popup = document.getElementById('popup');
     popup.style.display = 'block';
 }
 
 function closePopup() {
     const popup = document.getElementById('popup');
     popup.style.display = 'none';
 }
 
 function resetForm() {
     const form = document.getElementById('surveyForm');
     form.reset();
 }
 