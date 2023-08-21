var roll_menu = function () {
    var element = document.getElementById("navigation");
    var class_name = element === null || element === void 0 ? void 0 : element.className.trim();
    var new_class;
    if (class_name === null || class_name === void 0 ? void 0 : class_name.includes('hidden')) {
        new_class = class_name.replace('hidden', '');
    }
    else {
        new_class = class_name === null || class_name === void 0 ? void 0 : class_name.concat(' hidden');
    }
    element === null || element === void 0 ? void 0 : element.setAttribute('class', new_class);
};
var handle_search = function (event) {
    var target = event.target;
    var value = target.value;
    alert(value);
};
var Sections = {
    Hero: document.getElementById('hero'),
    About: document.getElementById('about'),
    Realizations: document.getElementById('realizations'),
    Contact: document.getElementById('contact'),
};
var scroll_to = function (id) {
    var section;
    switch (id) {
        case "Home":
            section = Sections.Hero;
            break;
        case "About":
            section = Sections.About;
            break;
        case "Realizations":
            section = Sections.Realizations;
            break;
        case "Contact":
            section = Sections.Contact;
            break;
        default:
            section = Sections.Hero;
            break;
    }
    section.scrollIntoView({ behavior: 'smooth' });
};
