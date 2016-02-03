var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Thumbnail = ReactBootstrap.Thumbnail;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Label = ReactBootstrap.Label;
var Panel = ReactBootstrap.Panel;

var SheetComponent = React.createClass({

	propTypes: {
		fileName: React.PropTypes.string.isRequired,
		tags: React.PropTypes.array.isRequired,
		description: React.PropTypes.string.isRequired,
		header: React.PropTypes.string.isRequired
	},

	render: function(){

		return (
			<Thumbnail src={"./muzic/"+this.props.fileName+".jpg"} alt="242x200">
		        <h3>{this.props.header}</h3>
		        <p>{this.props.description}</p>
		        <h3>
		        {
		    		this.props.tags.map(function(tag, i){
	    				return(
		    				<Label style={{marginLeft: "2px"}} key={i} bsStyle='info'>{tag}</Label>
						);
		    		})
	    		}
		        </h3>
	        	<ButtonGroup justified>
	        		<Button target='_blank' href={'./muzic/'+this.props.fileName+'.mp3'}>.mp3</Button>
		        	<Button target='_blank' href={'./muzic/'+this.props.fileName+'.pdf'}>.pdf</Button>
		        	<Button href={'./muzic/'+this.props.fileName+'.mscz'}>.mscz</Button>
	        	</ButtonGroup>
		    </Thumbnail>
		);
	}

});

module.exports.component = SheetComponent;

// <Label bsStyle='info'>2 Violins</Label>&nbsp;
// 			        <Label bsStyle='info'>Viola</Label>&nbsp;
// 			        <Label bsStyle='info'>Cello</Label>