# CONTACT-REST-API

steps
install node.js 
dependencies - 
  * npm install express pg
  * npm install
  * sudo snap install ngrok
  * ngrok http 3000
  * ngrok config add-authtoken <your-token>            // get the token from ngrok (Your Auhtoken)
  * csv-parser

curl -X POST   -F "file=@/home/manoj/Project/quicksource/src/csv_files/processed/Test.csv"   https://rapid-square-glider.ngrok-free.app/api/check-csv
curl -X POST   -F "file=@/homcurl -X POST https://tight-wren-virtually.ngrok-free.app/api/check      -H "phone: 7656434567"      -H "x-api-key: supersecret123"
curl -X POST   -F "file=@/homngrok http --url=rapid-square-glider.ngrok-free.app 3000
 Contact Phone Number API Setup Guide (Steps Only)
Below are all the steps we followed to build, run, and expose your API.

🟢 1️⃣ Install Node.js
Install Node.js and npm using your system package manager (e.g., apt for Ubuntu).

Verify installation by checking the version of Node.js and npm.

🟢 2️⃣ Create Project Directory
Make a new folder for your project and move into it.

🟢 3️⃣ Initialize Node.js Project
Run npm init -y to create the package.json file.

🟢 4️⃣ Install Dependencies
Install the following npm packages:

express

pg

multer

csv-parser

cors

These handle the web server, PostgreSQL database connection, file uploads, CSV parsing, and CORS support.

🟢 5️⃣ Create app.js
Create your main application file that:

Listens for incoming requests

Checks if a phone number exists

Accepts CSV uploads and processes each row

🟢 6️⃣ Start API Server
Run the Node.js server locally to make sure it starts without errors.

🟢 7️⃣ Install ngrok
Install ngrok either via snap or download the binary, then move it into your PATH.

Verify that ngrok is installed correctly.

🟢 8️⃣ Authenticate ngrok
Sign up at ngrok.com, get your auth token, and configure it with ngrok config add-authtoken.

🟢 9️⃣ Start ngrok Tunnel
Use ngrok to expose your local server to the internet. You will receive a public HTTPS URL.

🟢 1️⃣0️⃣ Test API with curl
Send HTTP POST requests with:

A phone number header to check single numbers.

A CSV file for bulk checking.

Verify that you receive JSON responses indicating whether numbers were found.

🟢 1️⃣1️⃣ Test API with Postman
Create POST requests to:

Check individual numbers (with request headers).

Upload CSV files (with form-data body).

Confirm that the API responds correctly.

🟢 1️⃣2️⃣ Use ngrok Reserved Domains (Optional)
If you want a static URL, you can reserve an ngrok domain (requires a paid plan).

🟢 1️⃣3️⃣ Notes for Usage
Keep the node app.js process and ngrok process running to keep the API live.

Each time you restart ngrok, the public URL changes unless you use a reserved domain.

You can test from anywhere via the ngrok public URL.

Use CORS to enable web clients to connect.


