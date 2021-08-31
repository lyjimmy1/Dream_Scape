# Dream Scape

<em>By Jimmy Ly - [Don't Let Your Dreams Stay Dreams](https://dream-scape.herokuapp.com/)</em>

## What is Dream Scape?

Dream Scape is a revolutionary full-stack web application that allows users to record and keep track of their dreams via entries. 

![](https://github.com/lyjimmy1/Dream_Scape/blob/main/assets/dreamscapeHome.JPG)


## Additional Features & Code Snippets 

Equipped with a rich-text editor, each entry is personally customizable depending on the individual user. Users can create an entry for each dream encounter they have. Users can also update and delete an entry. 

![](https://github.com/lyjimmy1/Dream_Scape/blob/main/assets/dreamscapeUpdate.JPG)

Users can also dynamically search for an entry by typing in the appropriate characters. The search bar will filter results immediately by managing the Redux state.

![](https://github.com/lyjimmy1/Dream_Scape/blob/main/assets/dreamscapesearch.JPG)

I wanted a way to dynamically filter through all the entries depending on whatever the user typed. I didn't want to search through my backend and into the database as that would result in tedious processes. I decided that I wanted to filter through the Redux state. In this situation and the nature of my app, it works out perfectly since Dream Scape is meant to be a personal web app. Meaning that the state is always accessible for that user only. I created a function that takes in all the entries that exist for that user and filter via a search query. Search query in this case is searchQuery and it utilizes a useState that depends on what the user types in. While filtering through the entries object obtained from the store, I only want the resulting array to include entries that contain characters/letters the user have typed in. 

![](https://github.com/lyjimmy1/Dream_Scape/blob/main/assets/searchFunctionDreamScape.JPG)



## Technologies Used

Dream Scape is a full-stack web application. Backend technologies include Python, SQLAlchemy, and Flask. Frontend technologies include Javascript, React, and Redux. Chakra UI, an external React Component library, was used to style most of the components in this project. React Quill, a rich-text editor API, was integrated to help make entries more customizable.

## Conclusion and Future Plans

Dream was a fun project that I enjoyed immensely. Driven by a real life event that took place, I was estatic that I was able to bring this idea to fruition. This project challenged my knowledge and limitations as a software developer. Through much stress and frustration, I learned a lot about myself, my abilities as a software developer, and my mental capacity as a life long learner. This project was indeed a journey in itself and I couldn't be more pleased with the results. 



