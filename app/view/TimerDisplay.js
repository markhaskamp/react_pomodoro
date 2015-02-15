
var TimerDisplay = React.createClass({
  getInitialState: function() {
    return timer_model;
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  startButtonClicked: function() {
    ea.publish('START_CLICKED', {}); 
  },

  pomodoroLabelClicked: function() {
    ea.publish('SET_TYPE', {type: 'pomodoro'});
  },

  breakLabelClicked: function() {
    ea.publish('SET_TYPE', {type: 'break'});
  },

  longBreakLabelClicked: function() {
    ea.publish('SET_TYPE', {type: 'longBreak'});
  },

  setupClicked: function() {
    ea.publish('SETUP', {});
  },

  pomoMinutesChanged: function() {
    console.log('ea.publish("POMO_MINUTES_CHANGED")');
  },

  descriptionChanged: function(evt) {
    ea.publish('DESCRIPTION_CHANGED', {});
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {

    return (
      <div>
        <p/>
        <div className="container">

          <div className="row">
            <div id="pomodoroLabel"  className={this.state.pomoTypeLabelClass} onClick={this.pomodoroLabelClicked}>pomodoro [{this.state.pomoMinutes}]</div>
            <div id="breakLabel"     className={this.state.breakTypeLabelClass} onClick={this.breakLabelClicked}>break [{this.state.breakMinutes}]</div>
            <div id="longBreakLabel" className={this.state.longBreakTypeLabelClass} onClick={this.longBreakLabelClicked}>long break [{this.state.longBreakMinutes}]</div>
            <div className="col-md-offset-9" onClick={this.setupClicked}><img src="img/setup.jpg" height="24"/></div>
          </div>


          <div className="row">
            <div className="col-md-10">
              <div className="input-group">
                <span className="input-group-addon">
                  <span className="timer col-md-1">{this.state.minutes}:{seconds_display(this.state.seconds)}</span>
                </span>
                <input type="text" 
                       className={this.state.className} 
                       id="txtDescription" 
                       placeholder="doing what..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.startButtonClicked}>
                    {this.state.startButtonLabel}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <label>Pomodoro minutes: </label>
          </div>
          <div className="col-md-3" id="pomo-slider"></div>
        </div>

        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <label>Break minutes: </label>
          </div>
          <div className="col-md-3" id="break-slider"></div>
        </div>

        <div className="row">
          <div className="col-md-offset-1 col-md-2">
            <label>Long Break minutes: </label>
          </div>
          <div className="col-md-3" id="long-break-slider"></div>
        </div>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));


