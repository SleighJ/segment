import React, { Component } from 'react';

import ApplicationHeader from '../Components/ApplicationHeader';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';

import { Grid, Segment, Dropdown, Button, Divider, Header, Icon, Progress } from 'semantic-ui-react';
import Calendar from 'react-calendar'
import moment from 'react-moment';
import 'moment-timezone';

import './style.css';

const genderArray = [
	{
		key: 0,
		text: 'Unisex',
		value: 'Unisex',
	},
	{
		key: 1,
		text: 'Women',
		value: 'Women',
	},
	{
		key: 2,
		text: 'Men',
		value: 'Men',
	},
	{
		key: 3,
		text: 'Girls',
		value: 'Girls',
	},
	{
		key: 4,
		text: 'Boys',
		value: 'Boys',
	},
	{
		key: 5,
		text: 'Aliens',
		value: 'Aliens',
	},
];

const associationArray = [
	{
		key: 0,
		text: 'into',
		value: 'into',
	},
	{
		key: 1,
		text: 'not into',
		value: 'not into',
	},
];

const clothingArr = [
	{
		key: 0,
		text: 'Pants',
		value: 'Pants',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys', 'Aliens' ]
	},
	{
		key: 1,
		text: 'Jeans',
		value: 'Jeans',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys', 'Aliens' ]
	},{
		key: 2,
		text: 'Shorts',
		value: 'Shorts',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys', 'Aliens' ]
	},{
		key: 4,
		text: 'Polo Shirts',
		value: 'Polo Shirts',
		demographic: [ 'Men', 'Boys' ]
	},{
		key: 5,
		text: 'Tee Shirts',
		value: 'Tee Shirts',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys', 'Aliens' ]
	},{
		key: 6,
		text: 'Socks',
		value: 'Socks',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys', 'Aliens' ]
	},{
		key: 7,
		text: 'Shoes',
		value: 'Shoes',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys', 'Aliens' ]
	},{
		key: 8,
		text: 'Bathing Suits',
		value: 'Bathing Suits',
		demographic: [ 'Unisex', 'Men', 'Women', 'Girls', 'Boys', 'Aliens' ]
	},{
		key: 9,
		text: 'Skirts',
		value: 'Skirts',
		demographic: [ 'Women', 'Girls' ]
	},{
		key: 10,
		text: 'Dresses',
		value: 'Dresses',
		demographic: [ 'Women', 'Girls' ]
	},{
		key: 11,
		text: 'Bras',
		value: 'Bras',
		demographic: [ 'Women' ]
	},{
		key: 12,
		text: 'Pantyhose',
		value: 'Pantyhose',
		demographic: [ 'Women', 'Girls' ]
	},{
		key: 13,
		text: 'Lingerie',
		value: 'Lingerie',
		demographic: [ 'Women' ]
	},{
		key: 14,
		text: 'Lazer Guns',
		value: 'Lazer Guns',
		demographic: [ 'Aliens' ]
	},{
		key: 15,
		text: 'Spandex Suits',
		value: 'Spandex Suits',
		demographic: [ 'Aliens' ]
	},{
		key: 16,
		text: 'Oversized Helmets',
		value: 'Oversized Helmets',
		demographic: [ 'Aliens' ]
	},{
		key: 17,
		text: 'Antenna Warmers',
		value: 'Antenna Warmers',
		demographic: [ 'Aliens' ]
	},{
		key: 18,
		text: 'Two Finger Gloves',
		value: 'Two Finger Gloves',
		demographic: [ 'Aliens' ]
	}
];

const searchedAndPurchased = [
	{
		key: 1,
		text: 'Searched',
		value: 'Searched',
	},{
		key: 2,
		text: 'Purchased',
		value: 'Purchased',
	}
];

const onAroundAndBefore = [
	{
		key: 1,
		text: 'On',
		value: 'On',
	},{
		key: 2,
		text: 'Around',
		value: 'Around',
	},{
		key: 3,
		text: 'Before',
		value: 'Before',
	}
];

const devices = [
	{
		key: 1,
		text: 'Web',
		value: 'Web',
		os: ['Mac', 'Windows', 'Other']
	},
	{
		key: 2,
		text: 'Mobile',
		value: 'Mobile',
		os: ['iOS', 'Android', 'Other']
	}
];

const operatingSystems = [
	{
		key: 1,
		text: 'MacOS',
		value: 'MacOS',
		devices: [ 'Web' ]
	},{
		key: 2,
		text: 'iOS',
		value: 'iOS',
		devices: [ 'Mobile' ]
	},{
		key: 3,
		text: 'Windows',
		value: 'Windows',
		devices: [ 'Web' ]
	},{
		key: 4,
		text: 'Android',
		value: 'Android',
		devices: ['Mobile'],
	},{
		key: 5,
		text: 'Other',
		value: 'Other',
		devices: [ 'Web', 'Mobile' ],
	}
];

const deviceModifiers = [
	{
		key: 1,
		text: 'Uses',
		value: 'Uses',
	}
];

const userConditions = [
	{
		key: 1,
		value: 'All Users',
		text: 'All Users'

	},{
		key: 2,
		value: 'High frequency users',
		text: 'High frequency users'

	}, {
		key: 3,
		value: 'Low frequency users',
		text: 'Low frequency users',

	},{
		key: 4,
		value: 'Non-users',
		text: 'Non-users',
	}
];

class ApplicationContainer extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			estimatedSegmentSize: 100,
			genderGarments: null,
			deviceOsOptions: null,

			selectedGender: null,
			selectedAssociation: null,
			selectedGarments: [],
			conditionHistory: [],

			openCalendar: false,
			startDate: new Date(),
			productInteraction: null,
			timeModifier: null,
			selectedDate: null,
			formattedDate: null,
			timeHistory: [],

			selectedDevice: null,
			selectedOperatingSystem: null,

			selectedUserFrequency: null,
			frequencyAdded: null,
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { selectedGender, selectedAssociation, selectedGarments, estimatedSegmentSize, conditionHistory, selectedDevice, productInteraction, timeModifier, selectedDate, selectedOperatingSystem,  } = this.state;

		//conditional rendering & functionality for additional product conditions
		if (conditionHistory.length != prevState.conditionHistory.length) {
			this.setState({
				selectedGarments: [],
				selectedAssociation: [],
				selectedGender: null,
			})
		}

		//<--------Products------->

		//loads garments dependent on gender
		if (!this.state.genderGarments) {
			//but a gender has been selected
			if (selectedGender) {
				//lets define that genders garments
				let genderGarments = clothingArr.filter(garment => garment.demographic.indexOf(selectedGender.value) != -1);

				this.setState({
					genderGarments,
				})
			}
		}

		//if selectedGender has changed, reset the gendersGarments and estimated segment size
		if (selectedGender != prevState.selectedGender) {
			let calculate;
			const conditions = conditionHistory.length;

			//if there is only 1 line of product conditions
			if (conditions == 0) {

				let gender = selectedGender.value;

				switch (gender) {
					case 'Unisex':
						calculate = 100 * .75;
						break;
					case 'Men':
						calculate = 100 * .285;
						break;
					case 'Women':
						calculate = 100 * .465;
						break;
					case 'Boys' :
						calculate = 100 * .095;
						break;
					case 'Girls' :
						calculate = 100 * .155;
						break;
					case 'Aliens' :
						calculate = 100 * .02;
				}

				this.setState({
					estimatedSegmentSize: calculate,
				});
			} else {


				if (selectedGender) {
					//if product conditions is greater than 1, calculate total from previous state
					let gender = selectedGender.value;
					let oldEstimatedSegmentSize = prevState.estimatedSegmentSize;

					switch (gender) {
						case 'Unisex':
							calculate = oldEstimatedSegmentSize * .75;
							break;
						case 'Men':
							calculate = oldEstimatedSegmentSize * .285;
							break;
						case 'Women':
							calculate = oldEstimatedSegmentSize * .465;
							break;
						case 'Boys' :
							calculate = oldEstimatedSegmentSize * .095;
							break;
						case 'Girls' :
							calculate = oldEstimatedSegmentSize * .155;
							break;
						case 'Aliens' :
							calculate = oldEstimatedSegmentSize * .465;
					}

					this.setState({
						estimatedSegmentSize: calculate,
					});
				}
			}
		}

		if (selectedGarments != prevState.selectedGarments) {
			let addingGarments;
			let newEstimatedSegmentSize;
			let calculate;

			if (selectedGarments.length > prevState.selectedGarments.length) {
				addingGarments = true;
			} else {
				addingGarments = false;
			}

			switch (addingGarments) {
				case true:
					newEstimatedSegmentSize = estimatedSegmentSize * .9;
					break;

				case false:
					newEstimatedSegmentSize = estimatedSegmentSize * 1.1;
					break;
			}

			this.setState({
				estimatedSegmentSize: newEstimatedSegmentSize,
			});
		}

		//<--------Time------->

		if (productInteraction != prevState.productInteraction) {

			let calculate;
			let coefficient = 0;
			let productInteractionCopy;
			const oldEstimatedSegmentSize = prevState.estimatedSegmentSize ? prevState.estimatedSegmentSize : null;

			//if no productInteraction, its been removed, switch the coefficient, and make the copy
			if (!productInteraction) {
				coefficient = 1;
				productInteractionCopy = prevState.productInteraction;
			} else {
				productInteractionCopy = productInteraction;
			}

			if (productInteractionCopy) {
				switch (productInteractionCopy) {
					case 'Purchased':
						calculate = oldEstimatedSegmentSize * (.65 + coefficient);
						break;
					case 'Searched':
						calculate = oldEstimatedSegmentSize * (.95 + coefficient);
				}
			}

			if (calculate > 100) {
				calculate = 100;
			}

			if (calculate < 0) {
				calculate = 0;
			}

			this.setState({
				estimatedSegmentSize: calculate,
			});
		}

		if (timeModifier != prevState.timeModifier) {

			let calculate;
			let coefficient = 0;
			let timeModifierCopy;
			const oldEstimatedSegmentSize = prevState.estimatedSegmentSize ? prevState.estimatedSegmentSize : null;

			if (!timeModifier) {
				coefficient = 1;
				timeModifierCopy = prevState.timeModifierCopy;
			} else {
				timeModifierCopy = timeModifier
			}

			switch (timeModifierCopy) {
				case 'On':
					calculate = oldEstimatedSegmentSize * (.5 + coefficient);
					break;
				case 'Around':
					calculate = oldEstimatedSegmentSize * (.95 + coefficient);
					break;
				case 'Before':
					calculate = oldEstimatedSegmentSize * (.99 + coefficient);
					break;
			}

			if (calculate > 100) {
				calculate = 100;
			}

			if (calculate < 0) {
				calculate = 0;
			}

			this.setState({
				estimatedSegmentSize: calculate,
			});
		}

		if (selectedDate != prevState.selectedDate) {

			let calculate;
			let coefficient = 0;
			let selectedDateCopy;
			const oldEstimatedSegmentSize = prevState.estimatedSegmentSize ? prevState.estimatedSegmentSize : null;

			if (!selectedDate) {
				coefficient = 1;
				selectedDateCopy = prevState.selectedDate;
			} else {
				selectedDateCopy = selectedDate;
			}

			let month = selectedDateCopy.getMonth();

			switch (month) {
				case 10 || 11 || 12:
					calculate = oldEstimatedSegmentSize * (.9 + coefficient);
					break;
				case 1||2||3||4||5:
					calculate = oldEstimatedSegmentSize * (.899 + coefficient);
					break;
				case 6||7||8||9:
					calculate = oldEstimatedSegmentSize * (.99 + coefficient);
					break;
			}

			if (calculate > 100) {
				calculate = 100;
			}

			if (calculate < 0) {
				calculate = 0;
			}

			this.setState({
				estimatedSegmentSize: calculate,
			});
		}

		//<--------Technology------->

		//match operating systems with selected devices
		if (selectedDevice && selectedDevice != prevState.selectedDevice) {
			const deviceOsOptions = operatingSystems.filter(os => os.devices.indexOf(selectedDevice) != -1);
			this.setState({
				deviceOsOptions,
			})
		}

		if (selectedDevice != prevState.selectedDevice) {

			let calculate;
			let coefficient = 0;
			let selectedDeviceCopy;
			const oldEstimatedSegmentSize = prevState.estimatedSegmentSize ? prevState.estimatedSegmentSize : null;

			if (!selectedDevice) {
				coefficient = 1;
				selectedDeviceCopy = prevState.selectedDevice;
			} else {
				selectedDeviceCopy = selectedDevice;
			}

			switch (selectedDeviceCopy) {
				case 'Web':
					calculate = oldEstimatedSegmentSize * (.76 + coefficient);
					break;
				case 'Mobile':
					calculate = oldEstimatedSegmentSize * (.9 + coefficient);
					break;
			}

			if (calculate > 100) {
				calculate = 100;
			}

			if (calculate < 0) {
				calculate = 0;
			}

			this.setState({
				estimatedSegmentSize: calculate,
			})
		}

		if (selectedOperatingSystem != prevState.selectedOperatingSystem) {

			let calculate;
			let coefficient = 0;
			let selectedOperatingSystemCopy;
			const oldEstimatedSegmentSize = prevState.estimatedSegmentSize ? prevState.estimatedSegmentSize : null;

			if (!selectedOperatingSystem) {
				coefficient = 1;
				selectedOperatingSystemCopy = prevState.selectedOperatingSystem;
			} else {
				selectedOperatingSystemCopy = selectedOperatingSystem;
			}

			switch (selectedOperatingSystemCopy) {
				case 'MacOS':
					calculate = oldEstimatedSegmentSize * (.8 + coefficient);
					break;
				case 'iOS':
					calculate = oldEstimatedSegmentSize * (.9 + coefficient);
					break;
				case 'Windows':
					calculate = oldEstimatedSegmentSize * (.8 + coefficient);
					break;
				case 'Android':
					calculate = oldEstimatedSegmentSize * (.8 + coefficient);
					break;
				case 'Other':
					calculate = oldEstimatedSegmentSize * (.8 + coefficient);
					break;
			}

			if (calculate > 100) {
				calculate = 100;
			}

			if (calculate < 0) {
				calculate = 0;
			}

			this.setState({
				estimatedSegmentSize: calculate,
			})
		}

		//<--------for new conditions------->
		// if (selectedDevice != prevState.selectedDevice) {
		//
		// 	let calculate;
		// 	let coefficient = 0;
		// 	let selectedDeviceCopy;
		// 	const oldEstimatedSegmentSize = prevState.estimatedSegmentSize;
		//
		// 	if (!selectedDevice) {
		// 		coefficient = 1;
		// 		selectedDeviceCopy = prevState.selectedDevice;
		// 	} else {
		// 		selectedDeviceCopy = selectedDevice;
		// 	}
		//
		// 	switch (selectedDeviceCopy) {
		// 		case 'Web':
		// 			calculate = oldEstimatedSegmentSize * (.76 + coefficient);
		// 			break;
		// 		case 'Mobile':
		// 			calculate = oldEstimatedSegmentSize * (.9 + coefficient);
		// 			break;
		// 	}
		//
		// 	this.setState({
		// 		estimatedSegmentSize: calculate,
		// 	})
		// }
	}; //compWillMount














	// <---------Products------------>
	selectGender = (event, data) => {
		const { value } = data;
		const { key, text } = data.options.find(o => o.value == value);

		this.setState({
			selectedGender: {
				key,
				value,
				text,
			}
		})
	};

	selectAssociation = (event, data) => {
		const {value} = data;
		const {key} = data.options.find(o => o.value == value);

		this.setState({
			selectedAssociation: {
				key,
				value,
			}
		})
	};

	selectGarments = (event, data) => {
		const { value } = data;
		const { genderGarments, selectedGarments, conditionHistory } = this.state;

		//for addition
		let key;
		let incomingEntry = [...value].pop();
		genderGarments.find(garment => garment.value == incomingEntry ? key = garment.key : null);

		//for removal
		const contentArray = data.content;
		const selectedText = event.currentTarget.parentNode.innerText;
		const id = selectedGarments.indexOf(selectedText);

		//if garments are selected
		if (selectedGarments) {
			//if user is removing clothing, remove it from 'selectedGarments' array
			if (selectedGarments.length >= value.length) {

				let modifiedSelectedGarments = [];

				let selectedGarmentsCopy = [...selectedGarments];
				selectedGarmentsCopy.splice(id, 1);
				modifiedSelectedGarments = selectedGarmentsCopy;

				this.setState({
					selectedGarments: modifiedSelectedGarments,
				});
			}

			//if user is adding clothing, add it to the 'selectedGarments' array
			if (selectedGarments.length <= value.length) {
				this.setState(prevState => ({
					selectedGarments: [...prevState.selectedGarments, incomingEntry]
				}));
			}
		}
	};

	addProductCondition = () => {
		const { selectedGender, selectedAssociation, selectedGarments } = this.state;
		let renderGarmentHistory = [];

		//for rendering past choices for garments
		selectedGarments.map((garment, i) => {
			renderGarmentHistory.push(garment)
		});

		//saves history of product conditions
		let stateSnapShot = {
			selectedGender,
			selectedAssociation: selectedAssociation,
			selectedGarments: [selectedGarments],
			renderGarmentHistory,
		};

		this.setState(prevState => ({
			conditionHistory: [...prevState.conditionHistory, stateSnapShot],
			selectedGarments: [],
		}))
	};

	deleteCurrentProduction = () => {

		// selectedGender: null,
		// 	selectedAssociation: null,
		// 	selectedGarments: [],

		this.setState({
			selectedGender: null,
			selectedAssociation: null,
			selectedGarments: [],
		})

	}

	deleteProductCondition = (event, data) => {
		const { conditionHistory } = this.state;
		const { id } = data;

		const conditionHistoryCopy = [...conditionHistory];
		conditionHistoryCopy.splice(id, 1);

		this.setState(prevState => ({
			conditionHistory: conditionHistoryCopy,
		}))
	};


	// <-----------Time------------>
	selectProductInteraction = (event, data) => {
		const {value} = data;
		const {key} = data.options.find(o => o.value == value);

		this.setState({
			productInteraction: value,
		});
	};

	selectOnAroundBefore = (event, data) => {
		const {value} = data;
		const timeModifier = value;

		this.setState({
			timeModifier,
		});
	};

	openCalendar = () => {
		this.setState({
			openCalendar: !this.state.openCalendar,
		})
	};

	handleDateChange = (date) => {
		const { startDate, timeModifier, productInteraction, timeHistory } = this.state;

		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();

		const formattedDate = `${year}-${month}-${day}`;

		const timeHistoryObj = {
			timeModifier,
			productInteraction,
		};

		if (date < startDate) {
			this.setState({
				selectedDate: date,
				formattedDate: formattedDate,
				openCalendar: !this.state.openCalendar,
				timeHistory: [...timeHistory, timeHistoryObj],
			});
		}
	};

	removeTimePeriod = () => {
		this.setState({
			productInteraction: null,
			selectedDate: null,
			formattedDate: null,
		})
	};

	// <---------Technology------------>
	selectDevice = (event, data) => {
		const {value} = data;
		const {key} = data.options.find(o => o.value == value);

		// const technologyHistoryObj = {
		// 	key,
		// 	value,
		// };

		this.setState({
			selectedDevice: value,
			selectedDeviceObj: {
				key,
				value,
			}
		})
	};

	selectOperatingSystem = (event, data) => {
		const { value } = data;
		const { key } = data.options.find(o => o.value == value);

		this.setState({
			selectedOperatingSystem: value,
		})
	};

	removeTechnology = () => {
		this.setState({
			selectedDevice: null,
			selectedOperatingSystem: null,
		})
	};

	selectFrequency = (event, data) => {
		const { value } = data;
		const { key } = data.options.find(o => o.value == value);

		this.setState({
			selectedUserFrequency: {
				key,
				value
			}
		})
	};


	// <---------Frequency------------>
	addFrequencyCondition = (event, data) => {
		const { value } = data;

		this.setState({
			frequencyAdded: value,
		})
	};

	render() {
		const { estimatedSegmentSize, genderGarments, selectedGarments, selectedAssociation, selectedGender, conditionHistory, formattedDate, deviceOsOptions, startDate, productInteraction, timeModifier, selectedDevice, selectedOperatingSystem } = this.state;

		// console.log(this.state)
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
												<Progress color={'green'} size={'medium'} percent={ Number.parseFloat(estimatedSegmentSize).toFixed(2) } progress/>
											</Segment>
										</Grid.Column>

									</Grid.Row>
								</Grid>

								{/*Products Purchased*/}
								<Grid container={true} columns={'equal'} centered>
									<Segment style={{width: '97%', borderRadius: '1', boxShadow: 'none', border: '1.5px solid lightGrey' }}>

										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column width={12} style={{width: '100%'}}>
												<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%'}}>Product interactions <span style={{color: 'lightGrey'}}> - What products have they interacted with? </span> </Header>
											</Grid.Column>
										</Grid.Row>

										{ conditionHistory.map((row, i) => {

											const selectedGenderHistory = row.selectedGender;
											const selectedAssociationHistory = row.selectedAssociation;
											const renderGarmentHistory = row.renderGarmentHistory;

											return (
												<Grid.Row key={i} style={{ display: 'flex', height: '13%' }}>

													<Grid.Column style={{ padding: '1%', width: '20%' }} width={3}>
														<Dropdown
															key={i}
															className={'dropdown'}
															placeholder={ selectedGenderHistory.text }
															disabled={ true }
															fluid
															selection
															style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px', height: '100%', overflow: 'hidden' }}
															onChange={ this.selectGender }
														/>

													</Grid.Column>
													<Grid.Column style={{padding: '1%', width: '15%',}} width={3}>
														<Dropdown
															className={'dropdown'}
															placeholder={ selectedAssociationHistory.value ? selectedAssociationHistory.value : 'Interested In' }
															fluid
															selection
															disabled={ true }
															style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px', height: '100%', lineHeight: '20%' }}
															disabled={ this.state.selectedGender ? false : true }
															onChange={ this.selectAssociation }
														/>
													</Grid.Column>
													<Grid.Column style={{padding: '1%', width: '55%'}} width={3}>
														<Dropdown
															placeholder={ renderGarmentHistory.join(', ') }
															style={{ textAlign: 'center', border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px', height: '100%', overflow: 'hidden' }}
															disabled={ true }
															multiple
															search
															selection
															onChange={ this.selectGarments }
														/>
													</Grid.Column>
													<Grid.Column align={'center'} style={{padding: '1%', width: '10%'}} width={3}>
														<Button
															id={i}
															align={'center'}
															onClick={ this.deleteProductCondition }
															floated={'right'} size={'tiny'}
															style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', fontSize: '12px', width: '100%', height: '100%'}}
															disabled={ conditionHistory.length > 0 ? false : true }
														>
															<Icon name={'trash'}></Icon>
														</Button>
													</Grid.Column>
												</Grid.Row>
											)

										})
									}

									<Grid.Row style={{display: 'flex', maxHeight: '100%'}}>
										<Grid.Column style={{padding: '1%', width: '20%'}} width={3}>
											<Dropdown
												id={'asdf'}
												className={'dropdown'}
												placeholder='Market'
												fluid
												selection
												style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
												options={ genderArray }
												value={ selectedGender ? selectedGender.text : null }
												onChange={ this.selectGender }
											/>

											<Button
												floated={'left'}
												size={'tiny'}
												style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', marginTop: '10%', fontSize: '12px', width: '60%'}}
												disabled={ selectedGender && selectedAssociation && selectedGarments.length > 0 ? false : true }
												onClick={ ()=>this.addProductCondition() }
											> +More </Button>

										</Grid.Column>
										<Grid.Column style={{padding: '1%', width: '15%'}} width={3}>
											<Dropdown
												id={'asdf-1'}
												className={'dropdown'}
												placeholder='Association'
												fluid
												selection
												style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px', maxHeight: '40%', display: 'flex' }}
												disabled={ genderGarments ? false : true }
												options={ associationArray }
												onChange={ this.selectAssociation }
											/>
										</Grid.Column>

										<Grid.Column style={{padding: '1%', width: '55%', textAlign:'left'}} width={3}>
											<Dropdown
												id={'asdf-2'}
												placeholder={'Select Item'}
												style={{ fontSize: '12px', width: '100%' }}
												multiple
												selection
												options={ genderGarments }
												onChange={ this.selectGarments }
												content={ selectedGarments.map((garment, i) => ({
													key: i,
													text: garment,
													value: garment,
												})) }
												value={ selectedGarments }
											/>
										</Grid.Column>
										<Grid.Column align={'center'} style={{padding: '1%', width: '10%'}} width={3}>
											<Button
												align={'center'}
												onClick={ this.deleteProductCondition }
												floated={'right'} size={'tiny'}
												style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', fontSize: '12px', width: '100%'}}
											>
												<Icon align={'center'} style={{paddingLeft: '40%', paddingRight: '50%'}} name={'trash'}></Icon>
											</Button>
										</Grid.Column>
									</Grid.Row>

									<Divider style={{width: '100%', marginLeft: '0'}} section={true}/>

									<Grid.Row>
										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column style={{width: '120%'}}>
												<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%',}}>Time of interaction <span style={{color: 'lightGrey'}}> - When did this purchase take place? </span> </Header>
											</Grid.Column>

											<Grid.Column style={{width: '80%'}}>
												<Button onClick={ this.removeTimePeriod } floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'time'}> </Icon>Remove this time period</Button>
											</Grid.Column>
										</Grid.Row>

										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column style={{padding: '1%', width: '20%'}} width={3}>
												<Dropdown
													placeholder='Interaction'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													options={ searchedAndPurchased }
													onChange={ this.selectProductInteraction }
													text={ productInteraction ? productInteraction : 'Interaction' }
												/>
											</Grid.Column>
											<Grid.Column style={{padding: '1%', width: '15%'}} width={3}>
												<Dropdown
													placeholder='On'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													options={ onAroundAndBefore }
													onChange={ this.selectOnAroundBefore }
													text={ timeModifier ? timeModifier : 'On' }
												/>
											</Grid.Column>

											<Grid.Column style={{padding: '1%', width: '65%'}} width={3} align={'left'}>
												{
													this.state.openCalendar ?
													<Calendar
														value={ startDate }
														onChange={ this.handleDateChange }
														maxDate={ startDate }
													/>
												:
													<Button
														content={ formattedDate ? formattedDate : 'Select Date'}
														onClick={ this.openCalendar }/>
												}
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
												<Button onClick={ this.removeTechnology } floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey'}}> <Icon name={'trash'}> </Icon> Delete </Button>
											</Grid.Column>
										</Grid.Row>

										<Grid.Row style={{display: 'flex'}}>
											<Grid.Column width={5} style={{padding: '1%', width: '20%'}}>
												<Dropdown
													className={'dropdown'}
													placeholder='Device'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													options={devices}
													onChange={ this.selectDevice }
													text={ selectedDevice ? selectedDevice : 'Device' }

												/>
											</Grid.Column>
											<Grid.Column style={{padding: '1%', width: '15%'}} width={5}>
												<Dropdown
													placeholder='Uses'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													options={deviceModifiers}
													value={ 'Uses' }
												/>
											</Grid.Column>
											<Grid.Column style={{padding: '1%', width: '65%', color: 'lightGrey'}} width={6} align={'left'}>
												<Dropdown
													className={'dropdown'}
													placeholder='Operating System'
													fluid
													selection
													text={ selectedOperatingSystem ? selectedOperatingSystem.value : 'Operating System' }
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													options={ deviceOsOptions ? deviceOsOptions : null }
													onChange={ this.selectOperatingSystem }
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
												<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)'}}>Frequency</Header>
											</Grid.Column>

											<Grid.Column width={3} style={{paddingLeft: '8.5%', width: '40%'}}>
												<Dropdown
													className={'dropdown'}
													placeholder='User Frequency'
													fluid
													selection
													style={{border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', fontSize: '12px', width: '100%'}}
													options={ userConditions }
													onChange={ this.selectFrequency }
												/>
											</Grid.Column>

											<Grid.Column width={9} floated={'right'}>
												<Button
													size={'tiny'}
													style={{fontFamily: 'IBM Plex Sans', border: '1px solid lightGrey', backgroundColor: 'rgb(38, 165, 132)', color: 'white'}}
													onClick={ this.addFrequencyCondition }
												>+Add</Button>
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