# Project - *Movies*

**Movies** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

- Total time: 48 hours (please no more!)

## User Stories

The following **required** functionality is completed:

- [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x] Add a search bar.
- [x] User can view movie details by tapping on a cell.
- [x] User sees loading state while waiting for the API.
- [x] User sees an error message when there is a network error.
- [x] Simple responsive.

The following **optional** features are implemented:

- [x] Implement segmented control to switch between list view and grid view.
- [x] All images fade in.
- [x] Implement lazy load image.
- [ ] Customize the highlight and selection effect of the cell.
- [ ] Improve UX loading by skeleton loading.
- [ ] Enhance responsive.

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app functionality!

## Notes

- Hello there, I used large-scale app in my previous jobs for this (a bit overengineering). But lemme walkthough you the structure a bit:
  + [Services] contain high level logics, it can be api call, or compination or api calls, or any other service that can be shared between modules
  + [Modules] contain code logic, a module can have it own child module, and the directory tree is synced with navigation path in router (like [Movies] module sync with [/movies] route)

## Build Instruction

- Run `yarn install` at root level of project
- Create a `.env.local` file, copy and fullfillment all contents from `.env.example` file
- Run `yarn build` command, all files will be build inside [dist] directory
- Now you can dist files into any web server (like Nginx) to run there
 
## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://www.loom.com/share/11051e2dbb544d6a97a76029e5e1a969


## License

    Copyright [2016] [your-name]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
