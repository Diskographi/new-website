import React from 'react';

const aTags = ['Home', 'Bio', 'Gallery', 'Projects'];
const liStyle = {
  float: 'left',
  color: 'white',
  textAlign: 'left',
  padding: '14px 18px',
  textDecoration: 'none',
  textStyleDecoration: 'none',
  fontSize: '2.5vmax',
  listStyleType: 'none',
  //height: "auto"
};

const listItems = aTags.map((item, index) => 
    <li key={index}
        style={liStyle}>
        <a href={"#/" + item}
        style={{color: 'white',
        backgroundColor: '#6E0DD0',
        borderRadius: '60px',
        textDecoration: 'none',
        }}>{item}</a>
    </li>
);

const ulStyle = {
  //backgroundColor: 'white',
  //overflow: 'visible',
  width: '100%',
  //height: "auto",
  padding: "10px",
  margin: "10px",
  float: "left"

};

export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aTags: ['Home', 'Bio', 'Gallery'],
            date: new Date()
        }
    }

    render() {
        return <div style={{width: 'auto'}}>
            <ul style={ulStyle}> 
              {listItems} 
            </ul>
            <h1 style={{width: "100%", paddingTop: "20px"}}>Cody Hill's Website</h1>
        </div>
    }
}