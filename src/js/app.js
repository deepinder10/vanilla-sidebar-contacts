import RandomStringGenerator from './utilities/random';
import copyToClipboard from './utilities/copyToClipboard';
import '../scss/app.scss';
import closeIcon from '../images/close-icon.svg';
import backIcon from '../images/back-icon.svg';
import selectContactIcon from '../images/contact-icon.svg';
import contacts from "./utilities/contacts.json";
import getRandomColor from "./utilities/randomColor";

const alphabets= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const crossIcon = document.getElementById('invoice__header__close-icon');
// crossIcon.src = closeIcon;
// const selectContactButton = document.getElementById('select-contact-icon');
// selectContactButton.src = selectContactIcon;
const alphabetsDiv = document.querySelector('.contacts__list__alphabets');
for (let item of alphabets) {
  const el = document.createElement('div');
  el.textContent = item;
  alphabetsDiv.appendChild(el);
}
const recentContacts = document.querySelector('#recent-contacts');
const backButton = document.getElementById('contact-back-btn');
backButton.src = backIcon;
const pickRecentContacts = () => {
  const recentContacts = contacts.slice(10);
  for (let item of recentContacts) {
    createContactCard(item.name);
  }
}
const createContactCard = (name) => {
  const el = document.createElement('div');
  el.classList.add('invoice__body__contact-card', 'd-flex', 'flex-column', 'align-center');
  const nameImage = document.createElement('div');
  nameImage.style.backgroundColor = getRandomColor();
  nameImage.classList.add('invoice__body__contact-image', 'd-flex', 'justify-center', 'align-center')
  el.appendChild(nameImage);
  nameImage.textContent = name[0];
  const textNameDiv = document.createElement('p');
  textNameDiv.classList.add('invoice__body__contact-text');
  textNameDiv.textContent = name;
  el.appendChild(textNameDiv);
  recentContacts.appendChild(el);
}
pickRecentContacts();
fillRecentContacts();

copyIconElem.src = closeIcon;
copyIconElem.onclick = () => {
  copyToClipboard(document.getElementById('actual_password').innerText);
  alert('Copied to clipboard!');
};

document.addEventListener('DOMContentLoaded', () => {
  const randomStringGenerator = new RandomStringGenerator();
  const randomString = `Random String: <span id="actual_password">${randomStringGenerator.generate()}</span>`;
});