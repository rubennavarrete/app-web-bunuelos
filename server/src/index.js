import app from "./app";

import morgan from "morgan";

app.use(morgan("tiny"));

app.listen(app.get("port"));

console.log("Server on port", app.get("port"), "☄️  🤖 🤯");
