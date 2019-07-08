import React, { Component } from 'react';

import ApplicationHeader from '../Components/ApplicationHeader';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';

import { Grid, Segment, Dropdown, Button, Divider, Header, Icon, Container, Progress, Input } from 'semantic-ui-react';

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
		text: 'interested in',
		value: 'interested in',
	},
	{
		key: 1,
		text: 'not interested in',
		value: 'not interested in',
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

class ApplicationContainer extends Component {
	constructor(props){
		super(props);

		this.selectItemBar = React.createRef();

		this.state = {
			estimatedSegmentSize: 100,
			productConditions: ['*'],
			selectedGender: null,
			selectedAssociation: null,
			genderGarments: null,
			selectedGarments: [],
			conditionHistory: [],
		}
	}

	componentDidUpdate = (prevProps, prevState) => {
		const { selectedGender, selectedAssociation, selectedGarments, estimatedSegmentSize, conditionHistory } = this.state;

		//if no garments of that gender have been selected
		if (!this.state.genderGarments) {
			//but a gender has been selected
			if (selectedGender) {
				//lets define that genders garments
				let genderGarments = clothingArr.filter(garment => garment.demographic.indexOf(selectedGender.value) != -1);
				// genderGarments.
				this.setState({
					genderGarments,
				})
			}
		}


		//if selectedGender has changed, reset the gendersGarments and estimated segment size
		if (selectedGender != prevState.selectedGender) {
			console.log('here')
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
			} else {
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
					genderGarments: null,
				});
			}

			//if selected garments to not match the previous selected garments, save the new data as selected garments
			if (selectedGarments != prevState.selectedGarments) {
				let addingGarments;
				let newEstimatedSegmentSize;

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
		}
	};

	selectGender = (e, { value }) => {
		const id = e.target.id;

		this.setState({
			selectedGender: {
				value,
				id
			}
		})
	};

	selectAssociation = (event, data) => {
		const { value } = data;
		const { key } = data.options.find(o => o.value == value);

		this.setState({
			selectedAssociation: {
				value,
				key,
			}
		})
	};

	selectGarments = (event, data) => {
		const { value } = data;
		const { genderGarments, selectedGarments } = this.state;

		let incomingEntry = [...value].pop();
		let key;

		genderGarments.find(garment => garment.value == incomingEntry ? key = garment.key : null);

		let garmentObject = {
			value: incomingEntry,
			key: key,
		};

		//if user is removing clothing, remove it from array and correspond estimated segment size to reflect that change
		if (selectedGarments.length > value.length) {
			let modifiedSelectedGarments;

			selectedGarments.map((garment, i) => {
				let name = garment.value;

				if ( value.indexOf(name) == -1 ) {
					let selectedGarmentsCopy = [...selectedGarments];
					selectedGarmentsCopy.splice(i, 1);
					modifiedSelectedGarments = selectedGarmentsCopy;
				}
			});

			this.setState({
				selectedGarments: modifiedSelectedGarments,
			});
		} else {
			//if user is adding clothing, add it to the 'selectedGarments' array
			//so it cannot be selected again
			this.setState(prevState => ({
				selectedGarments: [...prevState.selectedGarments, garmentObject]
			}));
		}
	};

	addProductCondition = () => {
		const { selectedGender, selectedAssociation, selectedGarments } = this.state;

		let stateSnapShot = {
			selectedGender,
			selectedAssociation,
			selectedGarments,
		};

		let genderHistory = [];
		genderHistory.push(selectedGender.value);

		this.setState(prevState => ({
			productConditions: [...prevState.productConditions, '*'],
			conditionHistory: [...prevState.conditionHistory, stateSnapShot],
			genderHistory,
		}))
	};

	deleteProductCondition = () => {
		const { selectedGender, selectedAssociation, selectedGarments, conditionHistory, productConditions } = this.state;

		// const conditionHistoryCopy = [...conditionHistory];
		const productConditionCopy = [...productConditions];
		// conditionHistoryCopy.pop();
		productConditions.pop();

		this.setState(prevState => ({
			// conditionHistory: conditionHistoryCopy,
			productCondition: productConditionCopy,
		}))
	};

	render() {
		const { estimatedSegmentSize, genderGarments, productConditions, selectedGarments, selectedAssociation, selectedGender, genderHistory } = this.state;

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
												<Header as={'h4'} align={'left'} style={{fontFamily: 'IBM Plex Sans', fontSize: '1.25rem', color: 'rgb(88, 88, 88)', margin: '2%', marginBottom: '5%'}}>Products purchased <span style={{color: 'lightGrey'}}> - What products have they interacted with? </span> </Header>
											</Grid.Column>

											<Grid.Column width={4} style={{width: '100%'}}>
												<Button onClick={ ()=>this.deleteProductCondition() } floated={'right'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', fontSize: '12px', width: '20%'}}> <Icon name={'trash'}></Icon>Delete</Button>
											</Grid.Column>
										</Grid.Row>

										{ productConditions.map((row, i) => {

											return (
												<Grid.Row style={{display: 'flex'}}>
													<Grid.Column style={{padding: '1%', width: '20%'}} width={5}>
														<Dropdown
															id={i}
															className={'dropdown'}
															placeholder='Select Category'
															fluid
															selection
															style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
															options={ genderArray.map(category => ({
																	id: category.key,
																	value: category.value,
																	text: category.text
																})) }
															onChange={ this.selectGender }
														/>
														<Button
															floated={'left'}
															size={'tiny'}
															style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', marginTop: '10%', fontSize: '12px', width: '60%'}}
															disabled={ selectedGarments && selectedAssociation && selectedGender ? false : true }
															onClick={ ()=>this.addProductCondition() }
														> +More </Button>

													</Grid.Column>
													<Grid.Column style={{padding: '1%', width: '15%',}} width={5}>
														<Dropdown
															className={'dropdown'}
															placeholder='Association'
															fluid
															selection
															style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
															disabled={ this.state.selectedGender ? false : true }
															options={ associationArray.map(association => ({
																key: association.key,
																value: association.value,
																text: association.text
															})) }
															onChange={ this.selectAssociation }
														/>
													</Grid.Column>
													<Grid.Column style={{padding: '1%', width: '65%', textAlign:'left'}} width={5}>
														<Dropdown
															placeholder={'Select Item'}
															style={{ fontSize: '12px', width: '65%'}}
															disabled={ this.state.genderGarments ? false : true }
															multiple
															search
															selection
															ref={ this.selectItemBar }
															options={ genderGarments ? genderGarments.map(garment => ({
																key: garment.key,
																value: garment.value,
																text: garment.text,
															})) : null }
															onChange={ this.selectGarments }
														/>
													</Grid.Column>
												</Grid.Row>
											)

										}) }



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