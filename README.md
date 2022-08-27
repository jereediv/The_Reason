# The_Reason

## Segment 2 Deliverables
- The team will be meeting during regular class hours over Zoom (Tuesday, Thursday, Saturday) and primarily communicating in non office hours through Slack. Additional meetings times can be scheduled as neccessary based on individual schedules.
- Project Outline
We looked at data for over 40,950 trending YouTube video from different countries to identity factors that contribute to a successful trending YouTube video.

Note: The descriptions and explanations required in all other project deliverables should also be in your README.md as part of your outline, unless otherwise noted.

# Presentation
- Topic: Analyzing daily trending YouTube videos
- Reason for Topic
    - We want to build a model that will predict the best time to post a trending video by factoring time, category, etc.
    - This information can be used by Youtubers that want build a successful page and companies that would want to Sponsor YouTube channels based on their views and audience reach
- Description of source data
    - The data source contains over 40,000 videos with columns for category, publish date, trending date, tags, titles, and views. We have reformatted the data set to show the difference in time between when the video was posted and when it went trending. We were also forced to remove the channel text as it ruined the machine learning model, requiring too many inputs from the user.
    - The dataset we used for our project is obtained from Kaggle:
        The datasets contain information on videos that were trending beween X DATE and X DATE. The rows contain the category of the video, days to trending, dates posted, whether comments were disabled, like and dislike count, ...

- description of the analysis phase of the project
- LINK TO SLIDES OR TABLEAU

# Github
- all code in main branch is production ready
- all code present to perform the exploratory analysis
- some code for machine learning
- one branch for each team member
- each team has four commits for the second segment (eight commits total)
- description of preliminary data preprocessing
- description of preliminary feature engineering and preliminary feature selection, including their decision-making process
- Description of how data was split into training and testing sets
- Explanation of model choice, including limitations and benefits

# Database
FULLY INTEGRATED DATABASE
- Database stores static data for use during the project
- Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model)
- Includes at least two tables (or collections, if using MongoDB)
- Includes at least one join using the database language (not including any joins in Pandas)
- Includes at least one connection string (using SQLAlchemy or PyMongo)
Note: If you use a SQL database, you must provide your ERD with relationships.

# Dashboard
A blueprint for the dashboard is created and includes all of the following:
- Storyboard on Google Slide(s)
- Description of the tool(s) that will be used to create final dashboard - Tableau
- Description of interactive element(s): We are attempting to build an interactive web app which will give the days to trending on YouTube videos based on the month uploaded to YouTube, it's category, and whether the Comments and Ratings were enabled. Obviously this will not predeict whether or not a video will trend, but will give  guess on how many days until the video will trend if that is going to happen.
