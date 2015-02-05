
pomodoroListModel = {
  completedPomos: [],


  setSubscriptions: function() {
    ea.subscribe('POMO_COMPLETED', 'handlePomoCompleted', Store.pomodoroList.handlePomoCompleted);
    
  },

  handlePomoCompleted: function(evt) {
    Store.pomodoroList.completedPomos.unshift(evt[0].description);
  }

};


