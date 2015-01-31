# Pomodoro with react js

## Design Notes

### flux architecture
- control sends an event via EA
- Store subscribes to EA events
  - Store updates appropriate values
  - a store is the only thing in your application that knows how to jupdate data
  - a store represents a single _domain_ of your app
  - only your stores are allowed to register dispatcher callbacks
- new event broadcast that state has changed
- control(s) update their view

### actors (controls, views)

- countdown timer

### events

- tick

### state

- mode
  - pomo running
  - break running
- completed pomos


## Tasks

### Doing

- use Flux to show seconds elapsed using forceUpdate


### To Do

- use Flux to show seconds elapsed not using forceUpdate
- show countdown from 25:00

### Done

- show seconds elapsed


