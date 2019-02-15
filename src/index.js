import "./index.scss";

function main()
{
    let app = document.querySelector("#app");
    let append_title = () =>
    {
        let dom = document.createElement("h2");
        dom.classList.add("foo"); 
        dom.innerText = "Webpack Success";
        return dom;
    };
    let append_paragraph = message =>
    {
        let dom = document.createElement("p");
        dom.innerText = message;
        return dom;
    };
    let html_render = () =>
    {
        let dom_list = [
            append_title(),
            append_paragraph("This paragraph use append_paragraph() function!")
        ];
        dom_list.forEach( dom => app.appendChild(dom) );
    };
    html_render();
}

main();