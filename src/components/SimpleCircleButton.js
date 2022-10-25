import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export default class SimpleCircleButton extends Component {
  constructor(props) {
    super(props);

    //CHANGE VALUE
    this.numberOfRectangles = 15; //Define how many rectangles we want

    //START NEW CODE
    // The radius of a circle is the diameter divided by two
    this.radius = this.props.circleDiameter / 2;

    // base the height of each bars on the circle radius.
    // Since we are doing 1 quadrant at a time, we can just use the radius as the total height
    // Add 1 to the value b/c we will subtract one down below to get rid of the zero index
    this.fillRectangleHeight = this.radius / (this.numberOfRectangles + 1);
    //END NEW CODE

    // The style used for the rectangles
    // the zIndex and elevation of 10 puts the rectangles in front of the clickable button
    this.baseRectangleStyle = {
      position: 'absolute',
      zIndex: 10,
      elevation: 10,
    };
  }

  // ADD a new `starting` parameter here to represent the quadrant we are working on
  fillRectangle = (iteration, starting) => {
    //CODE REMOVED HERE

    const barHeight = this.fillRectangleHeight;

    // round the radius up, so get rid of fractional units
    const roundedRadius = Math.ceil(this.radius);

    // The y value is the height of our bars, * the number of bars we have already included
    const y = barHeight * iteration;

    // here is where we apply our modified Pythagorean equation to get our x coordinate.
    const x = Math.ceil(Math.sqrt(Math.pow(this.radius, 2) - Math.pow(y, 2)));

    // Now get the width of the bar based on the radius.
    let width = roundedRadius - x;

    // The bar dimensions
    const size = {
      width: width,
      height: barHeight,
    };

    // The bar location. Since we are starting from the middle, working out way out, we need to add the radius to y
    // START NEW CODE - depending on the quadrant, change the location
    const verticalLocation = y + roundedRadius;

    let location = {};
    if (starting === 'topLeft') {
      location = {
        left: 0,
        bottom: verticalLocation,
      };
    } else if (starting === 'bottomLeft') {
      location = {
        left: 0,
        top: verticalLocation,
      };
    } else if (starting === 'topRight') {
      location = {
        right: 0,
        top: verticalLocation,
      };
    } else if (starting === 'bottomRight') {
      location = {
        right: 0,
        bottom: verticalLocation,
      };
    }
    //END NEW CODE

    // Add some colors to the bars. In our final version we won't do this.
    let color = '#FF5F1C';

    // Create a unique key to identify the element
    let key = '' + iteration + starting + color;

    return (
      <View
        key={key}
        style={{
          ...this.baseRectangleStyle,
          backgroundColor: color,
          ...size,
          ...location,
        }}
      />
    );
  };

  //START NEW CODE
  renderLines = starting => {
    //start with index+1 b/c 0 will be a width of zero, so no point in doing that math
    return [...Array(this.numberOfRectangles)].map((_, index) =>
      this.fillRectangle(index + 1, starting),
    );
  };
  //END NEW CODE

  fillRectangles = () => {
    return (
      <React.Fragment>
        {/*START NEW CODE*/}
        {this.renderLines('topLeft')}
        {this.renderLines('bottomLeft')}
        {this.renderLines('topRight')}
        {this.renderLines('bottomRight')}
        {/*END NEW CODE*/}
      </React.Fragment>
    );
  };

  render() {
    let localStyles = styles(this.props);

    return (
      <View style={localStyles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={localStyles.button}
          onPress={this.props.onPress}>
          {this.props.children}
        </TouchableOpacity>

        {this.fillRectangles()}
      </View>
    );
  }
}

const styles = props =>
  StyleSheet.create({
    container: {
      position: 'relative',
      zIndex: 0,
    },
    button: {
      backgroundColor: 'rgba(20,174,255,0.31)',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: props.circleDiameter / 2,
      borderWidth: 3,
      width: props.circleDiameter,
      height: props.circleDiameter,
    },
  });
