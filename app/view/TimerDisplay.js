
var TimerDisplay = React.createClass({
  getInitialState: function() {
    return timer_model;
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  pauseButtonClicked: function() {
    ea.publish('PAUSE_TOGGLE', {}); 
  },

  startButtonClicked: function() {
    ea.publish('START_TOGGLE', {}); 
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {
    buttonStyle = {'float': 'left', 'width': 75};
    return (
      <div>
        <div style={buttonStyle}><input type="button" 
              id="btnStart" 
              value="Start"
              onClick={this.startButtonClicked} />
        </div>
        <div style={buttonStyle}><input type="button" 
              id="btnPause" 
              value={this.state.toggleLabel} 
              onClick={this.pauseButtonClicked} />
        </div>
        <div>{this.state.minutes}:{this.state.displaySeconds}</div>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

