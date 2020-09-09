import '../scss/app.scss';
import closeIcon from '../images/close-icon.svg';
import backIcon from '../images/back-icon.svg';
import selectContactIcon from '../images/contact-icon.svg';
import searchIcon from '../images/search-icon.svg';
import contacts from "./utilities/contacts.json";
import getRandomColor from "./utilities/randomColor";
import alphabets from "./utilities/alphabets";
import formatContactsData from "./utilities/formatContacts";
import formValidationInit from './utilities/formValidation';

const invoiceDiv = document.querySelector('#invoice');
const contactsDiv = document.querySelector('#contacts');
const contactForm = document.forms[0];
const nextBtn = document.querySelector('#next-btn');
const selectContactBtn = document.querySelector('#select-contact-btn');
const crossImage = document.querySelector('#invoice-close-icon');
const selectContactImage = document.querySelector('#select-contact-icon');
const searchImage = document.querySelector('#contact-search-icon');
const contactList = document.querySelector('#contact-list');
const alphabetsDiv = document.querySelector('#contacts-list-alphabets');
const recentContacts = document.querySelector('#recent-contacts');
const contactsBackImage = document.querySelector('#contact-back-btn');

/**
 * Setting sources for images
 */
crossImage.src = closeIcon;
selectContactImage.src = selectContactIcon;
searchImage.src = searchIcon;
contactsBackImage.src = backIcon;

/**
 * Toggling states of sidebars on click of buttons
 */
selectContactBtn.onclick = () => {
  invoiceDiv.style.display = "none";
  contactsDiv.style.display = "flex";
}

contactsBackImage.onclick = () => {
  invoiceDiv.style.display = "flex";
  contactsDiv.style.display = "none";
}

/**
 * Attach Click Listener to alphabets using event delegation and scroll the list into view
 */
const attachAlphabetListener = () => {
  alphabetsDiv.onclick = (event) => {
    const character = event.target.textContent;
    const el = document.querySelector(`#${character}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
}

/**
 * Function creates alphabets from a list of alphabets fetched
 */
const createAlphabets = () => {
  for (let item of alphabets) {
    const el = document.createElement('div');
    el.textContent = item;
    alphabetsDiv.appendChild(el);
  }
}
/**
 * Picks 10 contacts from whole json to display in recent contact list
 */
const pickRecentContacts = () => {
  const recentContacts = contacts.slice(10);
  for (let item of recentContacts) {
    createRecentContactCard(item.name);
  }
}

/**
 * This gets the formatted and sorted data of contacts from json and then create the vertical
 * contacts list visible on 2nd sidebar.
 */
const createContactsList = () => {
  const contactsArray = formatContactsData();
  createContactListItem(contactsArray);
}

/**
 * This function creates the elements using the contacts array .
 * @param {*} array - 0th item is the character of name, 1st item is the array of objects containing
 * name and email.
 */
const createContactListItem = (array) => {
  for (let item of array) {
    const el = document.createElement('div');
    el.id = item[0];
    const heading = document.createElement('h3');
    heading.textContent = item[0];
    el.appendChild(heading);
    
    for (let person of item[1]) {
      const nameCard = document.createElement('div');
      const nameText = document.createElement('h4');
      nameText.classList.add('contacts__list__name-text');
      nameText.textContent = person.name;
      nameCard.appendChild(nameText);
      
      const emailText = document.createElement('p');
      emailText.classList.add('contacts__list__email-text');
      emailText.textContent = person.email;
      nameCard.appendChild(emailText);
      el.appendChild(nameCard)
    }
    contactList.appendChild(el);
  }
}

/**
 * Here we are creating the recent contacts cards which are horizontally scrollable.
 * @param {*} name - name of the contact
 */
const createRecentContactCard = (name) => {
  const el = document.createElement('div');
  el.classList.add('invoice__body__contact-card', 'd-flex', 'flex-column', 'align-center');
  
  const nameImage = document.createElement('div');
  nameImage.style.backgroundColor = getRandomColor();
  nameImage.classList.add('invoice__body__contact-image', 'd-flex', 'justify-center', 'align-center')
  nameImage.textContent = name[0];
  el.appendChild(nameImage);
  
  const textNameDiv = document.createElement('p');
  textNameDiv.classList.add('invoice__body__contact-text');
  textNameDiv.textContent = name;
  el.appendChild(textNameDiv);
  recentContacts.appendChild(el);
}

document.addEventListener('DOMContentLoaded', () => {
  // inits the form handling listeners
  formValidationInit(contactForm, nextBtn);
  // hides contacts by default
  contactsDiv.style.display = "none";
  // creates contacts list
  createContactsList();
  // picks 10 items from contacts json and creates the horizontal items
  pickRecentContacts();
  // create alphabet elements
  createAlphabets();
  // attach clicks on alphabets
  attachAlphabetListener();
});