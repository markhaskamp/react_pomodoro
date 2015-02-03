
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

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {
    buttonStyle = {'float':'left', 'width': 75};
    timerStyle = {'float':'left', 'width':60, 'marginTop':15};
    descrStyle = {'marginTop':15};

    return (
      <div>
        <div style={{'float':'left'}}>Doing what? <input type="text" id="txtDescription" /></div>
        <div>
          <input type="button" 
                 id="btnStart" 
                 value="Start"
                 onClick={this.startButtonClicked} />
        </div>
        <div style={{'clear':'both'}}></div>
        <div style={timerStyle}>{this.state.minutes}:{this.state.displaySeconds}</div>
        <div style={descrStyle}>{this.state.description}</div>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

