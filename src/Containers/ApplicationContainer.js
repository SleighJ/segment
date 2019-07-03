import React, { Component } from 'react';
import { Grid, Segment, Dropdown, Button, Divider, Header, Icon, Container, Progress } from 'semantic-ui-react';

class ApplicationContainer extends Component {
	constructor(props){
		super(props);

		this.state = {
			estimatedSegmentSize: 15,
		}
	}

	render() {
		const { estimatedSegmentSize } = this.state;

		return(
			<div style={{backgroundColor: 'rgb(242, 243, 243)', paddingTop: '3%'}}>
				<Container>
					{/*Header*/}
					<Grid columns={'equal'} container={true}>
						<Grid.Row>
							<Grid.Column width={6}>
								<Segment style={{ borderRadius: '1', height: '100%', boxShadow: 'none', fontFamily: 'Source Sans Pro'}}>
									<Header as={'h4'} style={{fontFamily: 'Source Sans Pro'}}> Define a new Segment </Header>
									<p>Add a condition to define a segment. The more conditions you add, the more specific your segment will be</p>
								</Segment>
							</Grid.Column>

							<Grid.Column width={10}>
								<Segment style={{borderRadius: '1', height: '100%', boxShadow: 'none', fontFamily: 'Source Sans Pro'}}>
									<Header as={'h4'} style={{fontFamily: 'Source Sans Pro'}}> Estimated segment size </Header>
									<p>% of your total traffic expected to join based on a sample of historical data</p>
									<Progress color={'green'} percent={ estimatedSegmentSize } progress/>
								</Segment>
							</Grid.Column>

						</Grid.Row>
					</Grid>

					{/*Products Purchased*/}
					<Grid container={true} centered columns={'equal'}>
						<Segment style={{width: '97%', borderRadius: '1', boxShadow: 'none', fontFamily: 'Source Sans Pro' }}>

							<Grid.Row style={{display: 'flex'}}>
								<Grid.Column width={12} style={{width: '100%'}}>
									<Header as={'h4'} align={'left'} style={{fontFamily: 'Source Sans Pro'}}>Products purchased <span style={{color: 'lightGrey'}}> - What products have they interacted with? </span> </Header>
								</Grid.Column>

								<Grid.Column width={4} style={{width: '100%'}}>
									<Button floated={'right'} style={{fontFamily: 'Source Sans Pro', border: '1px solid lightGrey', backgroundColor: 'white'}}> <Icon name={'trash'}> </Icon>Delete</Button>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row style={{display: 'flex'}}>
								<Grid.Column style={{padding: '1%'}} width={5}>
									<Dropdown
										placeholder='Category'
										fluid
										selection
										// options={'ca'}
									/>
								</Grid.Column>
								<Grid.Column style={{padding: '1%'}} width={5}>
									<Dropdown
										placeholder='Is One Of'
										fluid
										selection
										// options={friendOptions}
									/>
								</Grid.Column>
								<Grid.Column style={{padding: '1%'}} width={5}>
									<Dropdown
										placeholder='Select Category'
										fluid
										selection
										// options={friendOptions}
									/>
								</Grid.Column>
							</Grid.Row>

							<Divider style={{width: '100%', marginLeft: '0'}} section={true}/>

							<Grid.Row>

								<Grid.Row style={{display: 'flex'}}>
									<Grid.Column style={{width: '120%'}}>
										<Header as={'h4'} align={'left'} style={{fontFamily: 'Source Sans Pro'}}>Time of purchase <span style={{color: 'lightGrey'}}> - When did this purchase take place? </span> </Header>
									</Grid.Column>

									<Grid.Column style={{width: '80%'}}>
										<Button floated={'right'} style={{fontFamily: 'Source Sans Pro', border: '1px solid lightGrey', backgroundColor: 'white'}}> <Icon name={'time'}> </Icon>Remove this time period</Button>
									</Grid.Column>
								</Grid.Row>

								<Grid.Row style={{display: 'flex'}}>
									<Grid.Column style={{padding: '1%'}} width={5}>
										<Dropdown
											placeholder='Product Purchased'
											fluid
											selection
											// options={'ca'}
										/>
									</Grid.Column>
									<Grid.Column style={{padding: '1%'}} width={5}>
										<Dropdown
											placeholder='On'
											fluid
											selection
											// options={friendOptions}
										/>
									</Grid.Column>
									<Grid.Column style={{padding: '1%'}} width={5}>
										<Dropdown
											placeholder='6/6/06'
											fluid
											selection
											// options={friendOptions}
										/>
									</Grid.Column>
								</Grid.Row>

							</Grid.Row>
						</Segment>
					</Grid>

					{/*Technology*/}
					<Grid container={true} centered>
						<Segment style={{width: '97%', marginTop: '1%', borderRadius: '1', boxShadow: 'none', fontFamily: 'Source Sans Pro'}}>

							<Grid.Row style={{display: 'flex'}}>
								<Grid.Column style={{width: '120%'}}>
									<Header as={'h4'} align={'left'} style={{fontFamily: 'Source Sans Pro'}}> Technology <span style={{color: 'lightGrey'}}> - Which device, browser or operating system are they using? </span> </Header>
								</Grid.Column>

								<Grid.Column style={{width: '80%'}}>
									<Button floated={'right'} style={{fontFamily: 'Source Sans Pro', border: '1px solid lightGrey', backgroundColor: 'white'}}> <Icon name={'trash'}> </Icon> Delete </Button>
								</Grid.Column>
							</Grid.Row>

							<Grid.Row style={{display: 'flex'}}>
								<Grid.Column width={5} style={{padding: '1%'}}>
									<Dropdown
										placeholder='Product Purchased'
										fluid
										selection
										// options={'ca'}
									/>
								</Grid.Column>
								<Grid.Column style={{padding: '1%'}} width={5}>
									<Dropdown
										placeholder='On'
										fluid
										selection
										// options={friendOptions}
									/>
								</Grid.Column>
								<Grid.Column style={{padding: '1%'}} width={6}>
									<Dropdown
										placeholder='6/6/06'
										fluid
										selection
										// options={friendOptions}
									/>
								</Grid.Column>
							</Grid.Row>

						</Segment>
					</Grid>

					{/*New Condition*/}
					<Grid columns={'equal'} container={true} centered>
						<Segment style={{width: '97%', marginTop: '1%', borderRadius: '1', marginBottom: '3%', boxShadow: 'none', fontFamily: 'Source Sans Pro'}}>

							<Grid.Row style={{display: 'flex', alignItems: 'center'}}>

								<Grid.Column width={4}>
									<Header as={'h4'} align={'left'} style={{fontFamily: 'Source Sans Pro'}}>New Condition</Header>
								</Grid.Column>

								<Grid.Column width={3} style={{paddingLeft: '15%'}}>
									<Dropdown
										placeholder='Purchase history'
										fluid
										selection
										// options={friendOptions}
									/>
								</Grid.Column>

								<Grid.Column width={9} floated={'right'}>
									<Button style={{fontFamily: 'Source Sans Pro', border: '1px solid lightGrey', backgroundColor: 'green', color: 'white'}}>Add</Button>
								</Grid.Column>

							</Grid.Row>

						</Segment>
					</Grid>
				</Container>
			</div>
		)
	};
};

export default ApplicationContainer;