import home from "./pages/home.js";
import outcomes from "./pages/outcomes.js";

const css = `
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  flex-direction: column;
}

header {
  padding: 16px 20px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}

textarea {
  flex: 1;
  width: calc(100% - 32px);
  margin: 16px;
  border: 1px solid #ddd;
  outline: none;
  resize: none;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 12px 20px;
  border-top: 1px solid #ddd;
  font-size: 12px;
  color: #555;
}

.btn {
  padding: 8px 14px;
  border: 1px solid #ccc;
  background: #f5f5f5;
  cursor: pointer;
  border-radius: 6px;
}

.btn:hover {
  background: #eaeaea;
}

.blue-button {
  background-color: #007BFF !important;
  border-color: #007BFF !important;
  color: white !important;
}

.blue-button:hover,
.blue-button:active,
.blue-button:focus {
  background-color: #0056D2 !important;
  color: white !important;
}

.grey-button {
  background-color: #6C757D !important;
  border-color: #6C757D !important;
  color: white !important;
}

.grey-button:hover,
.grey-button:active,
.grey-button:focus {
  background-color: #5A6268 !important;
  color: white !important;
}

.content {
  padding: 5px 16px;
}
`;

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        switch (url.pathname) {
            case "/":
                return home(request, env);

            case "/outcomes":
                return outcomes(request, env);

            case "/style.css":
                return new Response(css, {
                    headers: { "Content-Type": "text/css" }
                });

            default:
                return new Response("404 Not Found", { status: 404 });
        }
    }
};
