// TRANSLATION
import { translation } from './translation.js';

const photography_button = document.querySelector("#port-photography a");
const videography_button = document.querySelector("#port-video a");
const design_button = document.querySelector("#port-web a");
const code_button = document.querySelector("#port-code a");

const photo_folder = document.querySelector("#photography-folder");
const video_folder = document.querySelector("#video-folder");
const design_folder = document.querySelector("#web-folder");
const code_folder = document.querySelector("#code-folder");



addEventListener("DOMContentLoaded", () => {
  // GeoLocation interactions
  // Elements to translate in homepage
  let user_lang = navigator.language;
  console.log(`User language is ${user_lang}`);

  const landing_text = document.querySelector("#landing-text p");
  const flag = document.querySelector(".flag");
  const cv_link = document.querySelector(".cv");
  const intro_text = document.querySelector(".introduction p");
  const salutations = document.querySelector(".introduction .left h3");

  // FRENCH
  if (user_lang.startsWith("fr")) {
    design_button.innerText = "Projets Web";
    code_button.innerText = "Projets Logiciels";
    photography_button.innerText = "Photographie et Conception";
    videography_button.innerText = "Videographie";

    intro_text.innerHTML = translation.Introduction_FR[0];
    salutations.innerHTML = translation.Introduction_FR[1];
    landing_text.innerHTML = "<b>Soyez le bienvenu!</b> Je vous offre ce que vous recherchez.";

    cv_link.href = "https://drive.google.com/file/d/1UJTMjMxV83N_CFwpVpyr34CVuklIPgcJ/view?usp=sharing";
    flag.src = "https://en.wikipedia.org/wiki/Flag_of_France#/media/File:Flag_of_France.svg";
    flag.alt = "French Flag - France";
    if (user_lang === "fr-CA") {
      flag.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg";
      flag.alt = "French-Canadian Flag - Quebec";
    }
    // PORTUGUESE
  } else if (user_lang.startsWith("pt")) {
    design_button.innerText = "Design Web";
    code_button.innerText = "Softwares";
    photography_button.innerText = "Fotografia e Design";
    videography_button.innerText = "Videografia";

    landing_text.innerHTML = "<b>A simplicidade</b> é o mais alto grau da sofisticação.";
    intro_text.innerHTML = translation.Introduction_PT[0];
    salutations.innerHTML = translation.Introduction_PT[1];
    // Change if you will, currently disabled to avoid preference-intent '-'
    flag.classList.add("hidden")
    flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Brazil_%28Escobar_project%29.svg/1920px-Flag_of_Brazil_%28Escobar_project%29.svg.png";
    flag.alt = "Bandeira do Brasil - Língua Portuguesa";
  } else {
    cv_link.href = "https://drive.google.com/file/d/1FK_yAh3cft7x2CrK-GnOr5fbjv-heKwg/view?usp=sharing";
    flag.classList.add("hidden");
  }

  if (!user_lang.startsWith("en")) {
    console.log("Language is not English. Loading Google Translate widget...");
    
    // Make the translate element container visible
    const translateContainer = document.getElementById("google_translate_element");
    translateContainer.style.display = "block";

    // Define the Google Translate callback function
    function googleTranslateElementInit() {
      try {
        new google.translate.TranslateElement(
          { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element'
        );
        console.log("Google Translate widget initialized successfully.");
      } catch (error) {
        console.error("Google Translate initialization failed:", error);
      }
    }

    // Load the Google Translate script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    // Listen for script load or error events
    script.onload = () => console.log("Google Translate script loaded successfully.");
    script.onerror = () => console.error("Failed to load Google Translate script.");

    document.head.appendChild(script);
  }

});

