import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3010;
// Assume index.html is in the same directory as index.ts
const INDEX_HTML_PATH: string = path.join(__dirname, "index.html");

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    // Read the index.html file
    fs.readFile(INDEX_HTML_PATH, (err, data) => {
      // Send the HTML content if file is read successfully
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  },
);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Attempting to serve: ${INDEX_HTML_PATH}`);
});
