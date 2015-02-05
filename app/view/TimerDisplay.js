
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

  descriptionChanged: function(evt) {
    ea.publish('DESCRIPTION_CHANGED', {});
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {
    buttonStyle = {'float':'left', 'width': 75};
    timerStyle = {'float':'left', 'width':60, 'marginTop':15};
    descrStyle = {'marginLeft':60, 'marginTop':15, 'padding':3, 'paddingLeft':10, 'width':300};

    return (
      <div>
        <div style={{'float':'left'}}>Doing what? <input type="text" id="txtDescription" /></div>
        <div>
          <input type="button" 
                 id="btnStart" 
                 value={this.state.startButtonLabel}
                 onClick={this.startButtonClicked} />
        </div>
        <div style={{'clear':'both'}}></div>
        <div className="timer">{this.state.minutes}:{this.state.displaySeconds}</div>
        <div className="description">{this.state.description}</div>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));


