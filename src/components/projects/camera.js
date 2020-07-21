import React, { Component } from 'react'
import Video from "./video.jpg"
import firebase from "../../config/fb";

class App extends Component {

  constructor() {
    super();
    this.state = {
      controls: false,
      sensor: true,
      data: false,
      Sensor1: "",
      Sensor2: "",
      Sensor3: "",
      Sensor4: "",
      Longitude: "",
      Latitude: "",
      SIV: "",
      X: "",
      Y: "",
      Z: "",
      s1list: [],
      s2list: [],
      s3list: [],
      s4list: [],
      xlist: [],
      ylist: [],
      zlist: [],
      longlist: [],
      latlist: [],
      sivlist: [],
      doclist: "Sensors",
      timestamp: "timestamp"
    }; 
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getUpdate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  imgStyle = {
    height:"550px",
    width:"660px",
    position:"absolute",
    top: "160px",
    left: "50px"
  }

  buttonStyle = {
    position: "absolute",
    height: "60px",
    width: "200px",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "850px",
    top: "360px"
  }

  buttonStyle2 = {
    position: "absolute",
    height: "60px",
    width: "200px",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "850px",
    top: "450px"
  }

  buttonStyle3 = {
    position: "absolute",
    height: "60px",
    width: "200px",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "1200px",
    top: "360px"
  }

  buttonStyle4 = {
    position: "absolute",
    height: "60px",
    width: "200px",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "1200px",
    top: "450px"
  }

  tableStyle = {
    position: "absolute",
    color: "white",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "915px",
    top: "280px"
  }

  
  tableStyle0 = {
    position: "absolute",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "860px",
    top: "290px"
  }

  tableStyle1 = {
    position: "absolute",
    color: "white",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "1275px",
    top: "280px"
  }

  tableStyle10 = {
    position: "absolute",
    borderSpacing: "0px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "1210px",
    top: "290px"
  }

  tableStyle2 = {
    position: "absolute",
    color: "white",
    borderSpacing: "1px",
    width: "700px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "775px",
    border: "5px solid white" ,
    top: "280px",
    
  }

  tableStyle22 = {
    position: "absolute",
    color: "white",
    borderSpacing: "1px",
    width: "700px",
    boxShadow: "0 1px 0 0 rgba(22, 29, 37, 0.05)",
    left: "775px",
    border: "5px solid white" ,
    top: "400px"
  }


  topStyle = {
    height: "50px",
    width: "250px",
    position: "absolute",
    top: "160px",
    left: "750px"
  }

  leftStyle = {
    height: "50px",
    width: "250px",
    position: "absolute",
    top: "160px",
    left: "1000px"
  }

  rightStyle = {
    height: "50px",
    width: "250px",
    position: "absolute",
    top: "160px",
    left: "1250px"
  
  }

  inputStyle = {
    textAlign: "center",
    color: "white"
  }

  getUpdate = () =>  {
    var db = firebase.firestore();
    //db.collection("users").doc("Sensor").set({
      //value: "1"
  //})
  var docRef = db.collection(this.state.doclist).doc("Sensor1");
  docRef.get().then((doc) => {
     
      this.setState({
        Sensor1: doc.data().value,
        s1list: doc.data().values
      })
      
  })
  
  docRef = db.collection(this.state.doclist).doc("Sensor2");
  docRef.get().then((doc) => {
    
    this.setState({
      Sensor2: doc.data().value,
      s2list: doc.data().values
    })
})
  
docRef = db.collection(this.state.doclist).doc("Sensor3");
  docRef.get().then((doc) => {
    
    this.setState({
      Sensor3: doc.data().value,
      s3list: doc.data().values
    })
})
docRef = db.collection(this.state.doclist).doc("Sensor4");
  docRef.get().then((doc) => {
    
    this.setState({
      Sensor4: doc.data().value,
      s4list: doc.data().values
    })
})
docRef = db.collection(this.state.doclist).doc("X");
  docRef.get().then((doc) => {
    
    this.setState({
      X: doc.data().value,
      xlist: doc.data().values
    })
})
docRef = db.collection(this.state.doclist).doc("Y");
  docRef.get().then((doc) => {
    
    this.setState({
      Y: doc.data().value,
      ylist: doc.data().values
    })
})
docRef = db.collection(this.state.doclist).doc("Z");
  docRef.get().then((doc) => {
    
    this.setState({
      Z: doc.data().value,
      zlist: doc.data().values
    })
})
docRef = db.collection(this.state.doclist).doc("Long");
  docRef.get().then((doc) => {
    
    this.setState({
      Longitude: doc.data().value,
      longlist: doc.data().values
    })
})
docRef = db.collection(this.state.doclist).doc("Lat");
  docRef.get().then((doc) => {
    
    this.setState({
      Latitude: doc.data().value,
      latlist: doc.data().values
    })
})
docRef = db.collection(this.state.doclist).doc("SIV");
  docRef.get().then((doc) => {
    
    this.setState({
      SIV: doc.data().value,
      sivlist: doc.data().values
    })
})
}

  getSensor = () => {
    this.setState({
      sensor: true,
      controls: false,
      data: false,
    })
  
  }

  getControls = () => {
    this.setState({
      sensor: false,
      controls: true,
      data: false
    })
  
  }

  getData = () => {
    this.setState({
      sensor: false,
      controls: false,
      data: true
    })
  
  }
  getFile = () => {
    let tempList = ""
    tempList += "Sensor 1 Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.s1list.length; k++) {
      tempList += this.state.s1list[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.s1list[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "Sensor 2 Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.s2list.length; k++) {
      tempList += this.state.s2list[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.s2list[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "Sensor 3 Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.s3list.length; k++) {
      tempList += this.state.s3list[k][this.state.timestamp]
      tempList += ', '
      tempList += this.state.s3list[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "Sensor 4 Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.s4list.length; k++) {
      tempList += this.state.s4list[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.s4list[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "X-axis Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.xlist.length; k++) {
      tempList += this.state.xlist[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.xlist[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "Y-axis Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.ylist.length; k++) {
      tempList += this.state.ylist[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.ylist[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "Z-axis Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.zlist.length; k++) {
      tempList += this.state.zlist[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.zlist[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "Longitude Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.longlist.length; k++) {
      tempList += this.state.longlist[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.longlist[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "Latitude Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.latlist.length; k++) {
      tempList += this.state.latlist[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.latlist[k]['value']
      tempList += "\n"
    }
    tempList += "\n"
    tempList += "SIV Data: \n"
    tempList += "TimeStamp, Value \n"
    for (let k = 0; k< this.state.sivlist.length; k++) {
      tempList += this.state.sivlist[k][this.state.timestamp]
      tempList += ", "
      tempList += this.state.sivlist[k]['value']
      tempList += "\n"
    }
    console.log(tempList)

  let csv_file = new Blob( //binary large object
    
    [tempList],
    { type: 'text/csv' }
  );
    return csv_file
  }

  buttonStyleU = {
    background: 'linear-gradient(45deg, #56CCF2 30%, #2F80ED 90%)',
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    border: 0,
    borderRadius: 5,
    color: 'white',  
    padding: '0 30px',
    left: "975px",
    top: "280px",
    position: "absolute",
    height: "70px",
    width: "300px",
    //key 4 components to keep things in the middle, the top two allows the bottom two to work
    display: 'flex',
    flexDirection:'column',
    textAlign: 'center', //horizontal cetner
    justifyContent: 'center' // vetical center
  
  }
  render() {
   
   
    return (
    
     <div>
        <div className="row">

          <img src = {Video} style= {this.imgStyle}/>

         
        </div>

        <div className="row">
          <button style={this.topStyle} onClick = {this.getControls}>Controls</button>
        </div>
        <div className="row">
          <button style={this.leftStyle} onClick = {this.getSensor}>Sensor Data</button>
        </div>
        <div className="row">
          <button style={this.rightStyle} onClick = {this.getData}>Data Log</button>
        </div>
     
        {this.state.controls ? 
        <div className="row">
        <ul style={this.tableStyle}>
          <div>Direction: </div>
          
          </ul>
          <ul style={this.tableStyle0}>
          <input style={this.inputStyle}></input>
          </ul>
          <ul style={this.tableStyle1}>
          <div>Angle: </div>
          </ul>
          <ul style={this.tableStyle10}>
          <input style={this.inputStyle}></input>
          </ul>
        <button style={this.buttonStyle}>
        Move Forward 
        </button>

    
        <button style={this.buttonStyle2}>
        Move Backward
        </button>

        <button style={this.buttonStyle3}>
        Turn Left
        </button>

        <button style={this.buttonStyle4}>
        Turn Right
        </button>
        </div>
        : ''}
     
        {this.state.sensor ? 
       <div className="row">
        <table style={this.tableStyle2}>
       
        <tr>
           <td>  Longitude: {this.state.Longitude}
          </td>
        <td>Latitude: {this.state.Latitude}</td>
        <td>SIV: {this.state.SIV}</td>
        </tr>
        <tr>
          <td>X-Acceleration: {this.state.X} </td>
        <td>Y-Acceleration: {this.state.Y}</td>
        <td>Z-Acceleration: {this.state.Z}</td>
          </tr>
          </table>
          <table style={this.tableStyle22}>
          <tr>
        <td>Sensor 1: {this.state.Sensor1}</td> 
        <td>Sensor 2: {this.state.Sensor2}</td>
        <td>Sensor 3: {this.state.Sensor3}</td>
        <td>Sensor 4: {this.state.Sensor4}</td>
          </tr>
        </table>
        </div>
        : ''}

        {this.state.data ? 
        <div className="row">
        <a style = {this.buttonStyleU} className="download" href={URL.createObjectURL(this.getFile())} 
        download= "data.csv" title = 'Export Records as CSV' >  DOWNLOAD CSV </a>
        </div>
        : ''}
      </div>
        
      
    )
  }
}

export default App;
