import React, { Component } from 'react';

import ApplicationHeader from '../Components/ApplicationHeader';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';

import { Grid, Segment, Dropdown, Button, Divider, Header, Icon, Container, Progress, Input } from 'semantic-ui-react';

import './style.css';


const wheelCategory = [
	{
		key: '0',
		text: 'Street Wheel',
		value: 'Street'
	},
	{
		key: '1',
		text: 'Park Wheel',
		value: 'Park'
	},
	{
		key: '2',
		text: 'Cruiser Wheel',
		value: 'Cruiser'
	},
	{
		key: '3',
		text: 'Longboard Wheel',
		value: 'Longboard'
	},
	{
		key: '4',
		text: 'Sale Wheels',
		value: 'Sale'
	}
];

const productAssociation = [
	{
		key: 0,
		text: 'is one of',
		value: 'is one of'
	},
	{
		key: 1,
		text: 'is not of',
		value: 'is not of'
	},
];

const typesOfWheel = [

	{
		key: 0,
		text: 'Standard',
		value: 'Standard'
	},
	{
		key: 1,
		text: 'Slim',
		value: 'Slim',
	},
	{
		key: 2,
		text: 'Fat',
		value: 'Fat',
	},
	{
		key: 3,
		text: 'Conical',
		value: 'Conical'
	},
	{
		key: 4,
		text: 'Side Cut',
		value: 'Side Cut',
	}
];



class ApplicationContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			estimatedSegmentSize: 15,
			selectedWheelCategory: null,
			selectedAssociation: null
		}
	}

	selectWheelCategory = (e, {value}) => {
		this.setState({
			selectedWheelCategory: value,
		});
	};

	selectAssociation = (e, {value}) => {
		this.setSTatez
	}
	};

	returnTypesOfWheel = () => {
		return typesOfWheel.map((type, i) => {

			const { selectedWheelCategory, selectedAssociation } = this.state;

			if (selectedWheelCategory) {
				switch (selectedWheelCategory) {
					case ('Street'):
						console.log('street');
						break;
					case ('asdf'):
						console.log('asdf')
						break;
					case ('Cruiser'):
						console.log('cruiser')
						break;
					case ('Longboard'):
						console.log('longboard');
						break;
					case ('Sale'):
						console.log('sale');
						break;
				}

			let name = type.text;

			return (
				<option id={`typeOfWheel-${ i }`} value={ name } />
			)
		})
	};


	render() {
		const { estimatedSegmentSize, selectedWheelCategory } = this.state;

		console.log(this.state);

		return(
			<div>

				<Grid style={{margin: '0', padding: '0', width: '100%'}} columns={2}>
					<Grid.Row style={{padding: '0px', width: '100%', backgroundColor: 'rgb(233, 233, 239)'}}>

						<Grid.Column style={{padding: '0px', position: 'fixed', display: 'contents'}} width={13}>
							<ApplicationHeader />
							<Topbar />
						</Grid.Column>

						<Grid.Column style={{padding: '0px', position: 'fixed', display: 'contents'}} width={3}>
							<Sidebar />
						</Grid.Column>

						<Grid.Column style={{padding: '0px'}} width={13}>
							<div style={{width: '100%', margin: '5%', paddingLeft: '15%'}}>
								{/*Header*/}
								<Grid columns={'equal'} container={true}>
									<Grid.Row>
										<Grid.Column width={6}>
											<Segment style={{ borderRadius: '1', height: '100%', boxShadow: 'none', fontFamily: 'IBM Plex Sans', color: 'rgb(88, 88, 88)', padding: '7%', fontWeight: 'bold', fontSize: '.95rem', border: '1.5px solid lightGrey'}}>
												<Header as={'h4'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)'}}>Define a new Segment</Header>
												<p>Add a condition to define a segment. The more conditions you add, the more specific your segment will be</p>
											</Segment>
										</Grid.Column>

										<Grid.Column width={10}>
											<Segment style={{borderRadius: '1', height: '100%', boxShadow: 'none', fontFamily: 'IBM Plex Sans', color: 'rgb(88, 88, 88)', border: '1.5px solid lightGrey'}}>
												<Header as={'h4'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', marginTop: '1.5%', marginBottom: '1.5%', marginRight: '1.5%'}}>Estimated segment size</Header>
												<p>% of your total traffic expected to join based on a sample of historical data</p>
												<Progress color={'green'} size={'medium'} percent={ estimatedSegmentSize } progress/>
											</Segment>
										</Grid.Column>

									</Grid.Row>
								</Grid>







								{/*Products Purchased*/}
								<Grid container={true} columns={'equal'} centered>
									<Segment style={{width: '97%', borderRadius: '1', boxShadow: 'none', border: '1.5px solid lightGrey' }}>

										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column width={12} style={{width: '100%'}}>
												<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%'}}>Products purchased <span style={{color: 'lightGrey'}}> - What products have they interacted with? </span> </Header>
											</Grid.Column>

											<Grid.Column width={4} style={{width: '100%'}}>
												<Button floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', fontSize: '12px', width: '20%'}}> <Icon name={'trash'}></Icon>Delete</Button>
											</Grid.Column>
										</Grid.Row>

										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column style={{padding: '1%', width: '20%'}} width={5}>
												<Dropdown
													id={'category'}
													className={'dropdown'}
													placeholder='Select Category'
													fluid
													selection
													style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
													options={wheelCategory}
													onChange={ this.selectWheelCategory }
													value={selectedWheelCategory}
												/>
												<Button floated={'left'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', marginTop: '10%', fontSize: '12px', width: '60%'}}> +More </Button>

											</Grid.Column>
											<Grid.Column style={{padding: '1%', width: '15%',}} width={5}>
												<Dropdown
													className={'dropdown'}
													placeholder='Association'
													fluid
													selection
													style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
													options={productAssociation}
													onChange={this.selectAssociation}
												/>
											</Grid.Column>
											<Grid.Column style={{padding: '1%', width: '65%', textAlign:'left'}} width={5}>
												<Input
													id={'input'}
													placeholder={'Select Item'}
													style={{ fontSize: '12px', width: '65%'}}
													list={'typesOfWheel'}
												/>
												<datalist id='typesOfWheel'>
													{ this.returnTypesOfWheel() }
													{/*<option value='English' />
													<option value='Chinese' />
													<option value='Dutch' />*/}
												</datalist>
												{/*<datalist id={'typesOfWheel'}> { typesOfWheel.text } </datalist>*/}
											</Grid.Column>
										</Grid.Row>







										<Divider style={{width: '100%', marginLeft: '0'}} section={true}/>

										<Grid.Row>

											<Grid.Row style={{display: 'flex'}}>
												<Grid.Column style={{width: '120%'}}>
													<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%',}}>Time of purchase <span style={{color: 'lightGrey'}}> - When did this purchase take place? </span> </Header>
												</Grid.Column>

												<Grid.Column style={{width: '80%'}}>
													<Button floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'time'}> </Icon>Remove this time period</Button>
												</Grid.Column>
											</Grid.Row>

											<Grid.Row style={{display: 'flex'}}>
												<Grid.Column style={{padding: '1%', width: '20%'}} width={5}>
													<Dropdown
														className={'dropdown'}
														placeholder='Product Purchased'
														fluid
														selection
														style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
														// options={'ca'}
													/>
												</Grid.Column>
												<Grid.Column style={{padding: '1%', width: '15%'}} width={5}>
													<Dropdown
														className={'dropdown'}
														placeholder='On'
														fluid
														selection
														style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
														// options={friendOptions}
													/>
												</Grid.Column>
												<Grid.Column style={{padding: '1%', width: '65%'}} width={5}>
													<Dropdown
														className={'dropdown'}
														placeholder='6/6/06'
														fluid
														selection
														style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '32.5%'}}
														// options={friendOptions}
													/>
												</Grid.Column>
											</Grid.Row>

										</Grid.Row>
									</Segment>
								</Grid>

								{/*Technology*/}
								<Grid container={true} centered>
									<Segment style={{width: '97%', marginTop: '1%', borderRadius: '1', boxShadow: 'none', fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey'}}>

										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column style={{width: '120%'}}>
												<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%',}}> Technology <span style={{color: 'lightGrey'}}> - Which device, browser or operating system are they using? </span> </Header>
											</Grid.Column>

											<Grid.Column style={{width: '80%'}}>
												<Button floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'trash'}> </Icon> Delete </Button>
											</Grid.Column>
										</Grid.Row>

										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column width={5} style={{padding: '1%', width: '20%'}}>
												<Dropdown
													className={'dropdown'}
													placeholder='Product Purchased'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													// options={'ca'}
												/>
											</Grid.Column>
											<Grid.Column style={{padding: '1%', width: '15%'}} width={5}>
												<Dropdown
													className={'dropdown'}
													placeholder='On'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													// options={friendOptions}
												/>
											</Grid.Column>
											<Grid.Column style={{padding: '1%', width: '65%'}} width={6}>
												<Dropdown
													className={'dropdown'}
													placeholder='6/6/06'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '32.5%'}}
													// options={friendOptions}
												/>
											</Grid.Column>
										</Grid.Row>

									</Segment>
								</Grid>

								{/*New Condition*/}
								<Grid columns={'equal'} container={true} centered>
									<Segment style={{width: '97%', marginTop: '1%', borderRadius: '1', marginBottom: '3%', boxShadow: 'none', fontFamily: 'IBM Plex Sans', color: 'rgb(68, 68, 68)', border: '1.5px solid lightGrey'}}>

										<Grid.Row style={{display: 'flex', alignItems: 'center', color: 'rgb(68, 68, 68)', margin: '2%'}}>

											<Grid.Column width={4}>
												<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)'}}>New Condition</Header>
											</Grid.Column>

											<Grid.Column width={3} style={{paddingLeft: '8.5%', width: '40%'}}>
												<Dropdown
													className={'dropdown'}
													placeholder='Purchase history'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													// options={friendOptions}
												/>
											</Grid.Column>

											<Grid.Column width={9} floated={'right'}>
												<Button size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1px solid lightGrey', backgroundColor: 'rgb(38, 165, 132)', color: 'white'}}>+Add</Button>
											</Grid.Column>

										</Grid.Row>

									</Segment>
								</Grid>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	};
};

export default ApplicationContainer;