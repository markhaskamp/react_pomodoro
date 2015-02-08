
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
            <div id="pomodoroLabel"  className="col-md-1 typeLabel selected" onClick={this.pomodoroLabelClicked}>pomodoro</div>
            <div id="breakLabel"     className="col-md-1 typeLabel" onClick={this.breakLabelClicked}>break</div>
            <div id="longBreakLabel" className="col-md-2 typeLabel" onClick={this.longBreakLabelClicked}>long break</div>
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

      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

