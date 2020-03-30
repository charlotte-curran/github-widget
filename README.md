# github widget

This is a very simple widget that allows you to search github for repos, and add them to a favorites list.
Embedded are links to the repo owner, and to the specific repo. The search page features pagination. The
header is one of the randomized zen quotes from github. The data is being stored with lowdb in the backend,
and will persist until a server restart, upon server start it will reset to some default values.

# tech used

React, styled-components, axios, express, lowdb, node

# to run

In terminal, navigate to `/github-widget-backend` directory, run `yarn` to install, and `yarn start` to start server.
Repeat for frontend in `/github-widget-frontend` directory.
