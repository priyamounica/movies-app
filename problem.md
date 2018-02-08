__This exercise is to examine your technical knowledge, reasoning and engineering principals. There are no tricks or hidden agendas. We are looking for a demonstration of your experience and skill using current software development technologies and methodologies.__

In this assignment you have to build a Movie App titled __10 Movies to Watch Before I Die__ using the MEAN Stack.

The Movie App Case Study


- Use Angular and Material UI in order to generate the GUI of the application. 
- The GUI of the application should contain Nav Bar at top.
- Nav Bar top left corner of the page should contain application icon and Name of Application like "Movie App".
- Nav Bar right corner of the page should contain menu icon.
- When user click that menu icon it should open menu items that are "Dashboard" and "Favourites" with proper icons.
- On click of this menu items it should route to respective pages like Dashboard & Favourite Page. Dashboard Page should be your default page for this step.
- Dashboard Page contains search box & search button in middle of the page.
- Search button should have search icon as a label.
- After enter the movie name in search box, if user clicks on the search button(make an api call to search movie by title which we created in express route) the cards of all related movies should fill the center area of the page.
- The movie card should contain Title, Movie Poster & 2 icons on either side of the bottom of the card (Favourites & Detail).
- When we click on Favourite icon particular movie should add as favourite in our Database.(Make an API Call to add movie in Favourite list which we created in express route)
- When we click on details icon, the detail of the movie should be toggled in the same card which contain the Movie Name, Overview, Release Date, Average Vote and others.
- Favourites Page contains the title like "Movies to watch before I die". 
- And Favourite Page contains the cards of movies list which we added as Favourite.(Make an API Call to get list of Favourite movies which we created in express route)
- Movie card should contain Title, Movie Poster, Basic Detail and delete icon to delete movie from your favourite list.(Make an API Call to delete movie which we created in express route)
- In this step API Test cases for Movie routes should work with command 'npm test'.

