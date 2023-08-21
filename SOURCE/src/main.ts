
const roll_menu = () => {
    var element = document.getElementById("navigation");
    const class_name = element?.className.trim();
    var new_class;
    if (class_name?.includes('hidden')) {
        new_class = class_name.replace('hidden', '');
    } else {
        new_class = class_name?.concat(' hidden');
    }


    element?.setAttribute('class', new_class as string);
}

const handle_search = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    alert(value);
}

const Sections = {
    Hero: document.getElementById('hero') as HTMLElement,
    About: document.getElementById('about') as HTMLElement,
    Realizations: document.getElementById('realizations') as HTMLElement,
    Contact: document.getElementById('contact') as HTMLElement,
}

const scroll_to = (id: "Home" | "About" | "Realizations" | "Contact") => {
    let section;
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

}