export const init = (selector, component) => {
    const app= document.querySelector(selector);
    const newElement = document.createElement(component.type);
    const newTextContent = document.createElement(component.template);

    newElement.append(newTextContent);
    app.append(newElement);
}