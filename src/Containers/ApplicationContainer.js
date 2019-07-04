import React, { Component } from 'react';
import { Grid, Segment, Dropdown, Button, Divider, Header, Icon, Container, Progress, Input } from 'semantic-ui-react';

import './style.css';

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
			<div style={{backgroundColor: 'rgb(233, 233, 239)', paddingTop: '3%' }}>
				<Container>
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
										id={'select_placeholder'}
										className={'dropdown'}
										placeholder='Category'
										fluid
										selection
										style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
										// options={'ca'}
									/>
									<Button floated={'left'} size={'tiny'} style={{fontFamily: 'IBM Plex Sans', border: '1.5px solid lightGrey', backgroundColor: 'white', color: 'lightGrey', marginTop: '10%', fontSize: '12px', width: '60%'}}> +More </Button>

								</Grid.Column>
								<Grid.Column style={{padding: '1%', width: '15%',}} width={5}>
									<Dropdown
										className={'dropdown'}
										placeholder='Is One Of'
										fluid
										selection
										style={{ border: '1.2px solid', borderColor: 'rgb(180, 180, 180)', width: '100%', fontSize: '12px' }}
										// options={friendOptions}
									/>
								</Grid.Column>
								<Grid.Column style={{padding: '1%', width: '65%', textAlign:'left'}} width={5}>
									<Input
										id={'input'}
										placeholder={'Select Item'}
										style={{ fontSize: '12px', width: '65%'}}
									/>
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
				</Container>
			</div>
		)
	};
};

export default ApplicationContainer;