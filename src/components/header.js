import React from 'react';

const aTags = ['Home', 'Bio', 'Gallery', 'Projects'];
const liStyle = {
  float: 'left',
  color: 'white',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  textStyleDecoration: 'none',
  fontSize: '22px',
  listStyleType: 'none'
};

const listItems = aTags.map((item, index) => 
    <li key={index}
        style={liStyle}>
        <a href={item}
        style={{color: 'white',
        backgroundColor: 'red',
        borderRadius: '30px',
        textDecoration: 'none',
        }}>{item}</a>
    </li>
);

const ulStyle = {
  backgroundColor: '#333',
  overflow: 'hidden',
  width: '100%'
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
        return <div style={{width: '100%'}}>
            <ul style={ulStyle}> 
              {listItems} 
            </ul>
            <h1>Cody Hill's Website</h1>
        </div>
    }
}