import React, {Component} from 'react'
import { Row, Col } from 'antd';


const clickableStyles = { cursor: 'pointer', userSelect: 'none' }

class Showcase extends Component {
    state = { hover1: false, hover2: false, hover3: false, hover4: false, hover5: false }
    componentDidMount() {
        Object.keys(this.state).forEach((key, index) => {
            const i = index + 1;

            // Dynamic mouseOver function
            this[`mouseOver${i}`] = () => {
                let newState = {};
                newState[key] = true;
                this.setState(newState);
            };
            this[`mouseOver${i}`]();

    
            // Dynamic mouseOut function
            this[`mouseOut${i}`] = () => {
                let newState = {};
                newState[key] = false;
                this.setState(newState);
            };
            this[`mouseOut${i}`]();
        });
    }

    render() {
        return(
            <div>
<h1 className="projectsTitle">Professional Experience</h1>
                <Row align="middle" style={{width:'100%'}}>
                    <Col span={12}>
                    <a href='http://www.spspoolcare.com/'
                        onMouseOver={this.mouseOver1}
                        onMouseOut={this.mouseOut1} 
                    >
                                <h3
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover1 ? 1.5 : 1,
                                        color: this.state.hover1 ? '#40A9FF' : 'black',
                                        transition:'.5s'
                                }}>
                                    SPS PoolCare
                                </h3>
                                <img 
                                    src={require('../images/spspoolcare.png')}
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover1 ? 1.5 : 1,
                                        boxShadow: this.state.hover1 ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue` 
                                                                       : `0 0 0 0`,
                                        transform: this.state.hover1 ? `scale(1.015)` : `scale(1.0)`,
                                        borderRadius: '10px',
                                        width:'40vw',
                                        height:'25vw',
                                        marginBottom:'1em',
                                        transition:'.5s',
                                        border:'1px dashed silver'
                                    }}/>
                                <Row>
                                    <Col span={4}></Col>
                                    <Col span={16}>
                                    <p>
                                    Built using Wordpress, flaunting layers upon layers for a Hero element that POP in a block based system. SPS PoolCare is the fastest growing swimming pool services company in the United States.
                                    </p>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </a>
                    </Col>
                    <Col span={12}>
                            <a href='https://www.personalministorage.com/'
                                onMouseOver={this.mouseOver2}
                                onMouseOut={this.mouseOut2} 
                            >
                                <h3 style={{
                                    ...clickableStyles,
                                    opacity: this.state.hover2 ? 1.5 : 1,
                                    color: this.state.hover2 ? '#40A9FF' : 'black',
                                    transition:'.5s'
                                }}>Personal Mini Storage</h3>
                                <img 
                                    src={require('../images/pms.png')}
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover2 ? 1.5 : 1,
                                        boxShadow: this.state.hover2 ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue` 
                                                                       : `0 0 0 0`,
                                        transform: this.state.hover2 ? `scale(1.015)` : `scale(1.0)`,
                                        borderRadius: '10px',
                                        width:'40vw',
                                        height:'25vw',
                                        marginBottom:'1em',
                                        transition:'.5s',
                                        border:'1px dashed silver'
                                    }}/>
                                <Row>
                                    <Col span={4}></Col>
                                    <Col span={16}>
                                    <p>
                                    Built using Wordpress and a proprietary theme. Personal Mini Storage, based in Orlando, FL, operates 45 self-storage locations in the Central Florida area.
                                    </p>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </a>
                    </Col>
                    <Col span={12}>
                            <a href='https://www.selfstoragesolutions.com/'
                                onMouseOver={this.mouseOver3}
                                onMouseOut={this.mouseOut3} 
                            >
                                <h3 style={{
                                    ...clickableStyles,
                                    opacity: this.state.hover3 ? 1.5 : 1,
                                    color: this.state.hover3 ? '#40A9FF' : 'black',
                                    transition:'.5s'
                                }}>Aberdeen Storage Management</h3>
                                <img 
                                    src={require('../images/aberdeen.png')}
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover3 ? 1.5 : 1,
                                        boxShadow: this.state.hover3 ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue` 
                                                                       : `0 0 0 0`,
                                        transform: this.state.hover3 ? `scale(1.015)` : `scale(1.0)`,
                                        borderRadius: '10px',
                                        width:'40vw',
                                        height:'25vw',
                                        marginBottom:'1em',
                                        transition:'.5s',
                                        border:'1px dashed silver'
                                    }}/>
                                <Row>
                                    <Col span={4}></Col>
                                    <Col span={16}>
                                    <p>
                                    Built using Wordpress and a proprietary theme. Small business locally owned and operated in Arizona, committed to being the premier source for self storage, RV storage and Penske Truck rental services.
                                    </p>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </a>
                    </Col>
                    
                </Row> 
                <h1 style={{marginTop: '3em'}} className="projectsTitle">Freelance Projects</h1>
                <Row gutter={16} style={{width:'100%'}}>
                    <Col span={12} style={{paddingLeft:'35px'}}>
                    <a href='https://azn-buzz.now.sh/'
                        onMouseOver={this.mouseOver4}
                        onMouseOut={this.mouseOut4} 
                    >
                                <h3
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover4 ? 1.5 : 1,
                                        color: this.state.hover4 ? '#40A9FF' : 'black',
                                        transition:'.5s'
                                }}>
                                    AznBuzz
                                </h3>
                                <img 
                                    src={require('../images/aznbuzz.png')}
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover4 ? 1.5 : 1,
                                        boxShadow: this.state.hover4 ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue` 
                                                                       : `0 0 0 0`,
                                        transform: this.state.hover4 ? `scale(1.015)` : `scale(1.0)`,
                                        borderRadius: '10px',
                                        width:'40vw',
                                        height:'25vw',
                                        marginBottom:'1em',
                                        transition:'.5s',
                                        border:'1px dashed silver'
                                    }}/>
                                <Row>
                                    <Col span={4}></Col>
                                    <Col span={16}>
                                    <p>
                                    Built using React & NextJS, the AznBuzz website is a simple no shenanigans landing page.
                                    </p>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </a>
                    </Col>
                    <Col span={12}>
                            <a href='http://yangalytics.com/'
                                onMouseOver={this.mouseOver5}
                                onMouseOut={this.mouseOut5} 
                            >
                                <h3 style={{
                                    ...clickableStyles,
                                    opacity: this.state.hover5 ? 1.5 : 1,
                                    color: this.state.hover5 ? '#40A9FF' : 'black',
                                    transition:'.5s'
                                }}>Yangalytics</h3>
                                <img 
                                    src={require('../images/yangalyticslogo.png')}
                                    style={{
                                        ...clickableStyles,
                                        opacity: this.state.hover5 ? 1.5 : 1,
                                        boxShadow: this.state.hover5 ? `1px 1px 2px white, 0 0 25px #40A9FF, 0 0 5px lightblue` 
                                                                       : `0 0 0 0`,
                                        transform: this.state.hover5 ? `scale(1.015)` : `scale(1.0)`,
                                        borderRadius: '10px',
                                        width:'40vw',
                                        height:'25vw',
                                        marginBottom:'1em',
                                        transition:'.5s',
                                        border:'1px dashed silver'
                                    }}/>
                                <Row>
                                    <Col span={4}></Col>
                                    <Col span={16}>
                                    <p>
                                    Built using React & NextJS, Yangalytics pulls in request from multiple apis to populate the page with a myriad of data
                                    </p>
                                    </Col>
                                    <Col span={4}></Col>
                                </Row>
                            </a>
                    </Col>
                </Row> 
            </div>
        )
    }
}

export default Showcase