import "./index.scss";

function main()
{
    let app = document.querySelector("#app");
    let app_h1 = app.appendChild("h1");
    let message  = "Hello World";
    console.log(message);
    app_h1.innerText = message;
}

main();