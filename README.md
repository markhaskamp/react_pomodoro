# Pomodoro with react js

## Design Notes

### goal

- use pomodoro technique to do work
- timer to define when I'm in and out of pomodoros
- timer to define when I"m in and out of breaks
- track pomos completed, interrupted
- 

### flux architecture
- control publishes an event
- Store subscribes to EA events
  - Store updates appropriate values
  - a store is the only thing in your application that knows how to update data
  - a store represents a single _domain_ of your app
  - only your stores are allowed to register dispatcher callbacks
- new event broadcast that state has changed
- control(s) update their view

### actors (controls, views)

- Timer
- Countdown display
- Completed pomos


### events

- tick

### state

- mode
  - pomo running
  - break running
- completed pomos

