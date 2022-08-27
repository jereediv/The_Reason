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

# Machine Learning
- The data started as a .csv with over 40,000 rows of Youtube videos with the following columns: video_id, trending_date, channel_id, category_id, publish_time, tags, views, likes, dislikes, comment_count, thumbnail, comments_disabled, ratings_disabled, video_error, description.
- I then began pre-processing the data by removing the video_id, thumbnail_link, video_error_or_removed, comment_count, likes, and dislikes.  These columns were removed due to not having any bearing on the prediction model.  As we are predicting a future videos time to trending, we cannot input the comment counts, likes, or dislikes into the model.  The video_id and thumbnail link also should have no bearing in the final prediction. The next step was to concatanate the text columns into one column, combining the tags, title, channel title, and description.  The next step was to format the date columns into datetime then substract the trending date from the published date to come up with a difference in hours and days the videos took to reach trending.  Finally the file was sampled as 1200 rows and saved as a new csv.    
- In the machine model build, I changed the comments disabled and ratings disabled columns to 0's and 1's to better work with the machine model.  The decision was also made to drop the channel text column at this point as it caused the model to require over 1200 user inputs to generate the model.  The X variable was built using the category, comments_disabled, ratings_disabled, and published_month columns.  The y variable was built as the target of hours to trending.  
- After testing BRFC, I tried the BalancedRandomForestRegressor and received pretty good results as this is a regression problem that takes in many inputs but does not have a specific output we are looking for.
- The data was split using train_test_split with the test size being half of the columns in the file.  
- The model was built using Pipeline so that the model could take in data, then scale it, then output the results.
- The model was then saved as a pickle file to be used in our web app.

# Database
FULLY INTEGRATED DATABASE
- Database stores static data for use during the project
	-To store our data we created an RDS with Amazon. We linked our Amazon data base to PgAdmin and succesfully created a database call The_Reason. Here we also created a bucket where we stored all of our cvs files so that they could be accessed via Google Colab.
- Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model) 
	-The table data from SQL is being pulled and used in our Machine Learning code.
- Includes at least two tables (or collections, if using MongoDB)
	-Currently in our Database, we have two tables. The first table is the Youtube_analysis_US, which holds the top trending videos for the United States. The table shows the following columns; category_id, views, comments_disabled, ratings_disabled, channel_text, difference_d, difference_h, published_year, published_month, trending_year, and trending_month. Our second table is the exact same format as the US data, but it data it uses corresponds to the United Kingdom.
- Includes at least one join using the database language (not including any joins in Pandas)
	-In PgAdmin, we used an insert function to join the two datasets we had. This created a merged table that hodl both of our youtube analysis data for both the UK and the US. 
- Includes at least one connection string (using SQLAlchemy or PyMongo)
	-For our database, we used Google Colab as our connection string. We were able to pull the cvs file from the amazon bucket and then creata a dataframe with it. From here were were able to connect to our server and upload the dataframe into it. 
Note: If you use a SQL database, you must provide your ERD with relationships.

# Dashboard
A blueprint for the dashboard is created and includes all of the following:
- Storyboard on Google Slide(s)
- Description of the tool(s) that will be used to create final dashboard - Tableau
- Description of interactive element(s): We are attempting to build an interactive web app which will give the days to trending on YouTube videos based on the month uploaded to YouTube, it's category, and whether the Comments and Ratings were enabled. Obviously this will not predeict whether or not a video will trend, but will give  guess on how many days until the video will trend if that is going to happen.
