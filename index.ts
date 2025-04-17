import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3010;
const INDEX_HTML_PATH: string = path.join(__dirname, "index.html");

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    // Read the environment variable on the server
    const buildingName = process.env.BUILDING_NAME || ""; // Default to empty string if not set

    fs.readFile(INDEX_HTML_PATH, "utf8", (err, htmlContent) => {
      if (err) {
        console.error("Error reading index.html:", err);
        res.writeHead(500);
        res.end("Server error reading HTML file.");
        return;
      }

      const processedHtml = htmlContent.replace(
        '"%%BUILDING_NAME%%"',
        JSON.stringify(buildingName), // Use JSON.stringify for proper JS string escaping
      );

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // Ensure UTF-8
      res.end(processedHtml);
    });
  },
);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Attempting to serve: ${INDEX_HTML_PATH}`);
});
