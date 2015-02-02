
var TimerDisplay = React.createClass({
  getInitialState: function() {
    return timer_model;
  },

  componentDidMount: function() {
    ea.subscribe('CHANGE', 'onChange', this.onChange);
  },

  startButtonClicked: function() {
    ea.publish('START_TOGGLE', {}); 
  },

  descriptionChanged: function(evt) {
    ea.publish('DESCRIPTION_CHANGED', {});
  },

  onChange: function() {
    this.setState(timer_model);
  },

  render: function() {
    timerStyle = {'float':'left', 'width':60, 'marginTop':15, 'border':'1px solid black'};
    descrStyle = {'marginLeft': 80, 'marginTop':15}
    return (
      <div>
        <div>
          Doing what? <input type="text" onChange={this.descriptionChanged} id="txtDescription" />
          <input type="button" 
                 id="btnStart" 
                 value="Start"
                 onClick={this.startButtonClicked} />
        </div>
        
        <div style={timerStyle}>{this.state.minutes}:{this.state.displaySeconds}</div>
        <div style={descrStyle}>{this.state.description}</div>
      </div>
    );
  }

});

React.render(<TimerDisplay />, document.getElementById('content'));

