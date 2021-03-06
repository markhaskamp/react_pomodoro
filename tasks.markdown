## Notes

### hack to serve page from heroku

- _trick_ heroku in to thinking it's a php app
  - renamed index.html to home.html
  - created home.php which contains

    <?php include_once("home.html"); ?>

- copy release/ ~/dev/pomodororeact/
- from ~/dev/pomodororeact/
  - add and commit to git repo
  - git push heroku master


## Tasks

### Doing

- setup modal for defining the goal-minutes for each type
  - first, make modal part of timer view.
  - eventually, pull it out into its own view

### To Do

- clear the Completed Pomodoros list
- delete a single Completed Pomodoro
- add some juice to the completed list
  - types in their own column, with graphical rep of their comparative lengths
- read current value of description when writing to completed pomo list
- anticapate next type
  - long break if 4rd break
- setup
  - save goal minutes for each type to local storage (localForage?)
  - read goal minutes for each type to local storage (localForage?)


### Done

- pause button
  - have Start/Pause/Stop button cycle through its 3 options
- anticapate next type
  - pomodoro after break
  - break after pomodoro
  - long break if 4rd break
- 3 labels, Pomo, Break, Long Break
  - accept clicks to set type
  - style accordingly
  - pomodoro is default
- on 'stop', add elapsed time, description to list of completed pomos
- run timer for breaks
- keep list of attempted pomos
  - time of pomo
  - description
- stop button
- what to do when pomo hits 00:00?
  - don't count down for Pomodoro
- show countdown from 25:00
- use Flux to show seconds elapsed not using forceUpdate
- use Flux to show seconds elapsed using forceUpdate
- show seconds elapsed


