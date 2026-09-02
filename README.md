# calends-online ver 0.1
This app presents an html table showing the class meeting dates for a specified time frame and automatically fills in when those dates fall on hoidays. The program is run on Docker-Compose and outputs a document to the user-configured location. Calends currently supports SUU and TXST Academic Calendars.

# Installation
This project requires [Docker](https://docs.docker.com/desktop/).

After installing Docker, download the files from Github and unzip, or clone the repository using git.

Navigate in the terminal to the root project folder and then run `docker-compose build` to create the containers and React App. The docker-compose dev environment is configured to run on Windows.

Run `docker-compose up` or run the `calends-online` stack in Docker Desktop. Wait for the React App to start (it will take up to 5 minutes).
![ReactAppLog](img\ReactAppLog.png)

# Run

Once the React App has started, navigate to [localhost:80](http://localhost:80) to access the front-end App.

![Calends App](img\CalendsApp.png)

1. Choose an institution from the dropdown list

2. Select a first day of classes.

3. Select the last day of classes. Currently Calends does not search for exam dates, so select the last day of classes before exams begin, not the first or last day of exams.

4. Select checkboxes for days of the week that classes meet.

5. Click `Get Calendar`!

# Output

Calends creates a table in html and presents it filling in class dates and holidays. You can easily highlight and copy/paste into your favorite document writing program.

![CalendsOutput](img\CalendsOut.png)

# Portable Windows Build

For end users who don't have Docker, Python, or Node installed, Calends is also available as a single portable `.exe` for Windows. No installation is required.

1. Get `CalendsOnline.exe` from whoever shared it with you.
2. Double-click it. A console window will open and your default browser will open automatically to the app.
3. Use the app as described above in [Run](#run).
4. When you're done, close the console window to stop Calends.

### Building the portable exe yourself

The exe bundles the FastAPI backend together with a production build of the React frontend, so there's nothing else to install on the end user's machine.

1. Set up a Python virtual environment and install the backend dependencies, plus PyInstaller:
   ```
   cd calends
   python -m venv .venv
   .venv\Scripts\python.exe -m pip install -r requirements.txt pyinstaller
   ```
2. Build the frontend and copy it into the backend:
   ```
   cd vite-react
   npm install
   npm run build
   cd ..
   rmdir /s /q calends\static
   mkdir calends\static
   xcopy /e /i vite-react\dist calends\static
   ```
3. Build the exe:
   ```
   cd calends
   .venv\Scripts\python.exe -m PyInstaller --onefile --name CalendsOnline --add-data "static;static" --hidden-import uvicorn.lifespan.on --hidden-import uvicorn.lifespan.off --hidden-import uvicorn.protocols.http.auto --hidden-import uvicorn.protocols.websockets.auto --hidden-import uvicorn.loops.auto --console launcher.py
   ```
4. The finished, portable exe is at `calends/dist/CalendsOnline.exe`. It's the only file you need to hand off.

# Contact and Copyright

Created by Denny Bucklin aka [jonalfarlinga](https://github.com/jonalfarlinga)

This work is provided for educational and informational purposes. No consideration or attribution necessary as long as this work is not used to generate revenue.
