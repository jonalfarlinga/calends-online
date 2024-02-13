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

# Contact and Copyright

Created by Denny Bucklin aka [jonalfarlinga](https://github.com/jonalfarlinga)

This work is provided for educational and informational purposes. No consideration or attribution necessary as long as this work is not used to generate revenue.
