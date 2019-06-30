![Preview](./.github/preview.gif)

# Modifications

forked client-side micro-frontend to experiement with server-side react rendered application with client side hydration.

Branches :

master

Description: Makes use of loading asynchronous modules through requirejs


ssr_without_requirejs

Description: Requests static resources through global <script> tags. Loads React and ReactDOM as global object.


# How to Run

- To install the dependencies `npm run bootstrap`
- To Run the Layout Service `npm start`
- To Build the Fragments `npm run build:fragments`
- To Run the Fragments `npm run start:fragments`

## Fragments

- Common PORT : 8086
- Header PORT : 8087
- Promotion PORT : 8088
- Listing PORT : 8089
