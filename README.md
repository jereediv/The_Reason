Trending Videos on YouTube
Segment 3 Deliverables
Trending Videos on YouTube
Segment 3 Deliverables

## Project Overview 

YouTube is a world-famous video sharing interactive platform which allows its users to rate, share, save, comment, and upload the content. Originally created in 2005, YouTube is now one of the most popular sites on the Web, with visitors watching around 6 billion hours of video every month. For this project, we looked at data for over 40,950 trending YouTube videos from different countries to identity factors that contribute to a successful trending YouTube video.  Trending videos represent the content which is gaining viewership over a certain time period and has a potential to be popular. Once we identity key features that predict trendability, we'll be building a model to estimate the amount of time until a YouTube may trend.

### What determines if a video is ranked on Trending?

Amongst the many great new videos on YouTube on any given day, Trending can only show a limited number. Trending aims to surface videos that:

-Are appealing to a wide range of viewers

-Are not misleading, clickbaity or sensational

-Capture the breadth of what’s happening on YouTube and in the world

-Showcase a diversity of creators

-Ideally, are surprising or novel

-Trending aims to balance all of these considerations. To achieve this, Trending considers many signals, including (but not limited to):

-View count

-How quickly the video is generating views (i.e. “temperature”)

-Where views are coming from, including outside of YouTube

-The age of the video
 
-How the video performs compared to other recent uploads from the same channel

Source: YouTube Help

## Questions

-Output variations - how long does it take to get to trending?

-Can video subject predict view count?

-What is the correlation and importance of variables for the trendiness of a video? 

-How do interactive video features helps a video trend on YouTube?


Presentation
Topic: Analyzing daily trending YouTube videos


## Reason for Topic

Over a billion users visit YouTube in a month and 72 hours of video is uploaded over YouTube per minute. Therefore, YouTube has become one of the largest platforms for business. Many YouTubers, artists or Content Creators generate revenue from their videos. Since it’s hard to keep track of which content might get trending in near future or might become popular, we wanted to perform predictive analysis using Machine Learning that helps YouTubers to understand how the interactive features affect their videos performance.

=======
## Segment 3 Deliverables

-Presentation 
        - We used google slides in order to display our presentation
        -Link https://docs.google.com/presentation/d/1GapknrPDEKfyTp8ppDorsAvpmXwmo6YzxbQCE0-aFXc/edit

- Project Outline
YouTube is a world-famous video sharing interactive platform which allows its users to rate, share, save, comment, and upload the content. Originally created in 2005, YouTube is now one of the most popular sites on the Web, with visitors watching around 6 billion hours of video every month. For this project, we looked at data for over 40,950 trending YouTube video from different countries to identity factors that contribute to a successful trending YouTube video. YouTube trending videos represents the content which is gaining viewership over a certain time period and has a potential to be popular. Once identifying key features that predict trendability, we'll be building a model to estimate the amount of time until a YouTube may trend.

- Questions

-Output variations - how long does it take to get to trending?

-Can video subject predict view count?

-What is the correlation and importance of variables for the trendiness of a video? 

-How do interactive video features helps a video trend on YouTube?


We want to build a model that will predict the best time to post a trending video by factoring time, category, etc.
This information can be used by Youtubers that want build a successful page and companies that would want to Sponsor YouTube channels based on their views and audience reach.


## Description of source data

The data source contains over 40,000 videos with columns including category, publish date, trending date, tags, titles, and views. We have reformatted the data set to show the difference in time between when the video was posted and when it went trending. We were also forced to remove the channel text as it ruined the machine learning model, requiring too many inputs from the user.
The dataset we used for our project is obtained from Kaggle: The datasets contain information on videos that were trending beween November 2017 and June 2018. The columns contain the category of the video id, trending date, video title, channel title, category ID, publish date, tags, views, likes, dislikes, comment count, thunbnail link, whether comments and ratings were disabled, video error, and video despription. We worked with sets including US and UK data.
The US data set was run through machine learning algorithms to determine features that most influenced trending timelines.

https://public.tableau.com/app/profile/joel6934/viz/The_Reason/YouTubeTrendingTrends?publish=yes


# Machine Learning
- The data started as a .csv with over 40,000 rows of Youtube videos with the following columns: video_id, trending_date, channel_id, category_id, publish_time, tags, views, likes, dislikes, comment_count, thumbnail, comments_disabled, ratings_disabled, video_error, description.
- I then began pre-processing the data by removing the video_id, thumbnail_link, video_error_or_removed, comment_count, likes, and dislikes.  These columns were removed due to not having any bearing on the prediction model.  As we are predicting a future videos time to trending, we cannot input the comment counts, likes, or dislikes into the model.  The video_id and thumbnail link also should have no bearing in the final prediction. The next step was to concatanate the text columns into one column, combining the tags, title, channel title, and description.  The next step was to format the date columns into datetime then substract the trending date from the published date to come up with a difference in hours and days the videos took to reach trending.  Finally the file was sampled as 1200 rows and saved as a new csv.    
- In the machine model build, I changed the comments disabled and ratings disabled columns to 0's and 1's to better work with the machine model.  The decision was also made to drop the channel text column at this point as it caused the model to require over 1200 user inputs to generate the model.  The X variable was built using the category, comments_disabled, ratings_disabled, and published_month columns.  The y variable was built as the target of hours to trending.  
- After testing BRFC, I tried the BalancedRandomForestRegressor and received pretty good results as this is a regression problem that takes in many inputs but does not have a specific output we are looking for.
- The data was split using train_test_split with the test size being half of the columns in the file.  
- The model was built using Pipeline so that the model could take in data, then scale it, then output the results.
## Model Accuracy
### Hours To Trending Model
![time_to_trending](https://github.com/jereediv/The_Reason/blob/fb434c5b57352955d380bd89288e81f06601b8c8/Images/US_model_accuracy.png)

### View Predictor Model Accuracy
![views](https://github.com/jereediv/The_Reason/blob/fb434c5b57352955d380bd89288e81f06601b8c8/Images/Views_accuracy.png)

- The model was then saved as a joblib file to be used in our web app.


Database
FULLY INTEGRATED DATABASE

 Database stores static data for use during the project

 Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model)

 Includes at least two tables (or collections, if using MongoDB)

 Includes at least one join using the database language (not including any joins in Pandas)

Includes at least one connection string (using SQLAlchemy or PyMongo) -For our database, we used Google Colab as our connection string. We were able to pull the cvs file from the amazon bucket and then creata a dataframe with it. From here were were able to connect to our server and upload the dataframe into it. Note: If you use a SQL database, you must provide your ERD with relationships.

Dashboard
A blueprint for the dashboard is created and includes all of the following:

=======
- Using Tableau, we will import and visualize the data in worksheets with a variety of dimensions and measures mentioned below.
- Description of interactive element(s): We have built an interactive web app which will give the days to trending on YouTube videos based on the month uploaded to YouTube as well as the number a views a video will reach before it hits trending - with Category, Comments Enabled, Ratings Enabled and Month Published as inputs. Obviously, this will not predict whether or not a video will trend, but will give guess on how many days until the video will trend if that is going to happen. The app was built in python with flask, D3, and bootstrap compenents, and is currently live in [Heroku](https://trendingpickles.herokuapp.com/)


Using Tableau, we are creating a dashboard using at least one interactive element to display stories and sheets making it more convenient to visualize the data.
Description of interactive element(s): We have built an interactive web app which will give the days to trending on YouTube videos based on the month uploaded to YouTube as well as the number a views a video will reach before it hits trending - with Category, Comments Enabled, Ratings Enabled and Month Published as inputs. Obviously, this will not predict whether or not a video will trend, but will give guess on how many days until the video will trend if that is going to happen. The app was built in python with flask, D3, and bootstrap compenents, and is currently live in Heroku
