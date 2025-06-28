const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const summaryField = document.getElementById("summary");
const skillsField = document.getElementById("skills");

function updatePreview() {
  document.getElementById("prev-name").innerText = nameField.value || "Your Name";
  document.getElementById("prev-email").innerText = emailField.value;
  document.getElementById("prev-phone").innerText = phoneField.value;
  document.getElementById("prev-summary").innerText = summaryField.value;

  // Update skills
  const skillList = document.getElementById("prev-skills");
  skillList.innerHTML = '';
  skillsField.value.split(',').forEach(skill => {
    if (skill.trim()) {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      skillList.appendChild(li);
    }
  });

  // Update education
  const eduInputs = document.querySelectorAll(".edu-input");
  const eduList = document.getElementById("prev-edu");
  eduList.innerHTML = '';
  eduInputs.forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value.trim();
      eduList.appendChild(li);
    }
  });

  // Update experience
  const expInputs = document.querySelectorAll(".exp-input");
  const expList = document.getElementById("prev-exp");
  expList.innerHTML = '';
  expInputs.forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement('li');
      li.textContent = input.value.trim();
      expList.appendChild(li);
    }
  });
}

[nameField, emailField, phoneField, summaryField, skillsField].forEach(input => {
  input.addEventListener("input", updatePreview);
});

function addEducation() {
  const eduSection = document.getElementById("education-section");
  const entry = document.createElement('div');
  entry.className = "edu-entry";
  entry.innerHTML = `<input type="text" class="edu-input" placeholder="Degree">`;
  eduSection.insertBefore(entry, eduSection.lastElementChild);
  entry.querySelector("input").addEventListener("input", updatePreview);
}

function addExperience() {
  const expSection = document.getElementById("experience-section");
  const entry = document.createElement('div');
  entry.className = "exp-entry";
  entry.innerHTML = `<input type="text" class="exp-input" placeholder="Job Role">`;
  expSection.insertBefore(entry, expSection.lastElementChild);
  entry.querySelector("input").addEventListener("input", updatePreview);
}

function clearForm() {
  document.getElementById("resume-form").reset();
  document.getElementById("prev-name").innerText = "Your Name";
  document.getElementById("prev-email").innerText = "";
  document.getElementById("prev-phone").innerText = "";
  document.getElementById("prev-summary").innerText = "";
  document.getElementById("prev-edu").innerHTML = "";
  document.getElementById("prev-exp").innerHTML = "";
  document.getElementById("prev-skills").innerHTML = "";
}
