// Footer
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
document.body.appendChild(footer);

const copyright = document.createElement("p");
copyright.innerHTML = `© America Juarez ${thisYear}`;

footer.appendChild(copyright);


// Skills
const skills = ["HTML", "CSS", "JavaScript", "GitHub", "Community Organizing"];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// MESSAGE FORM
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log(userName, userEmail, userMessage);

  messageForm.reset();
});

document.addEventListener("DOMContentLoaded", function () {

  const messageForm = document.querySelector('form[name="leave_message"]');

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    // Select message section
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    // Create new message item
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
      <a href="mailto:${userEmail}">${userName}</a>
      <span>: ${userMessage}</span>
    `;

    messageList.appendChild(newMessage);

    // Clear form
    messageForm.reset();
  });

});

const removeButton = document.createElement("button");
removeButton.textContent = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function () {
  const entry = removeButton.parentNode;
  entry.remove();
});

newMessage.appendChild(removeButton);
