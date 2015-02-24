/*

 This example application is based on the React Canvas project README:
 https://github.com/Flipboard/react-canvas#building-components

 */

var imageSrc = 'http://upload.wikimedia.org/wikipedia/commons/3/3e/Miamimetroarea.jpg';
var textMessage = 'Here is some text below an image.';

var React = require('react');
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

var ReactCanvasExampleComponent = React.createClass({

    render: function () {
        var surfaceWidth = window.innerWidth;
        var surfaceHeight = window.innerHeight;
        var imageStyle = this.getImageStyle();
        var textStyle = this.getTextStyle();

        return (
            <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
                <Image style={imageStyle} src={imageSrc} />
                <Text style={textStyle}>
                {textMessage}
                </Text>
            </Surface>
        );
    },

    getImageHeight: function () {
        return Math.round(window.innerHeight / 2);
    },

    getImageStyle: function () {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: this.getImageHeight()
        };
    },

    getTextStyle: function () {
        return {
            top: this.getImageHeight() + 10,
            left: 0,
            width: window.innerWidth,
            height: 20,
            lineHeight: 20,
            fontSize: 12
        };
    }

});

React.render(<ReactCanvasExampleComponent />, document.getElementById('main'));
