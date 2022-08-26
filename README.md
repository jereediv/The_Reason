# The_Reason

## Segment 2 Deliverables
- The team will be meeting during regular class hours over Zoom (Tuesday, Thursday, Saturday) and primarily communicating in non office hours through Slack. Additional meetings times can be schduled as neccessary based on individual schedules.
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

- description of the analysis phase of the project
- LINK TO SLIDES

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

# Machine Learning
- The data started as a .csv with over 40,000 rows of Youtube videos with the following columns: video_id, trending_date, channel_id, category_id, publish_time, tags, views, likes, dislikes, comment_count, thumbnail, comments_disabled, ratings_disabled, video_error, description.
- I then began pre-processing the data by removing the video_id, thumbnail_link, video_error_or_removed, comment_count, likes, and dislikes.  These columns were removed due to not having any bearing on the prediction model.  As we are predicting a future videos time to trending, we cannot input the comment counts, likes, or dislikes into the model.  The video_id and thumbnail link also should have no bearing in the final prediction. The next step was to concatanate the text columns into one column, combining the tags, title, channel title, and description.  The next step was to format the date columns into datetime then substract the trending date from the published date to come up with a difference in hours and days the videos took to reach trending.  
- In the machine model build, I changed the comments disabled and ratings disabled columns to 0's and 1's to better work with the machine model.  The decision was also made to drop the channel text column at this point as it caused the model to require over 1200 user inputs to generate the model.  The X variable was built using the category, comments_disabled, ratings_disabled, and published_month columns.  The y variable was built as the target of hours to trending.  
- After testing BRFC, I tried the BalancedRandomForestRegressor and received pretty good results as this is a regression problem that takes in many inputs but does not have a specific output we are looking for.  
- The model was built using Pipeline so that the model could take in data, then scale it, then output the results.
- The model was then saved as a pickle file to be used in our web app.


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
- Description of the tool(s) that will be used to create final dashboard
- Description of interactive element(s) 
