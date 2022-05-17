import { Component } from 'react';
import './App.css';
import Rows from './components/Layout/Layout';
import Buttons from './components/Main/Buttons/Buttons';
import NewContact from './components/Main/NewContact/NewContact';
import OldContact from './components/Main/OldContact/OldContact';
import Container from './UI/Container/Container';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listObj: {
        name: undefined,
        number: undefined,
        category: undefined
      },

      listContactArr: [
        {
          id: 1,
          name: "Laziza",
          number: 992345678,
          category: "friend"
        },
        {
          id: 2,
          name: "Xushnora",
          number: 992345678,
          category: "family"
        }
      ],
      newArrObj: [
        {
          id: 1,
          name: "Laziza",
          number: 992345678,
          category: "friend"
        },
        {
          id: 2,
          name: "Xushnora",
          number: 992345678,
          category: "family"
        }
      ]
    }
  }

  changeName = (e) => {
    // console.log(e.target.value);
    let obj = {
      name: e.target.value
    }

    this.setState({listObj: {...this.state.listObj, ...obj}})
  }

  changeNum = (e) => {
    let obj = {
      number: e.target.value
    }

    this.setState({listObj: {...this.state.listObj, ...obj}})
  }

  changeSelect = (e) => {
    let obj = {
      category: e.target.value
    }

    this.setState({listObj: {...this.state.listObj, ...obj}})
  }

  newObj = []

  changeButtonHandler = (e) => {
    // console.log(e.target.id);
    if(e.target.id === "all") {
      this.setState({listContactArr: [...this.state.newArrObj]})
    }

    if(e.target.id === "family") {
      let newArr = []
      this.state.newArrObj.map((obj) => {
        if(obj.category === "family") {
          newArr.push(obj)
        }
      }) 
      this.setState({listContactArr: [...newArr]})
    }

    if(e.target.id === "friend") {
      let newArr = []
      this.state.newArrObj.map((obj) => {
        if(obj.category === "friend") {
          newArr.push(obj)
        }
      }) 
      this.setState({listContactArr: [...newArr]})
    }

    if(e.target.id === "collective") {
      let newArr = []
      this.state.newArrObj.map((obj) => {
        if(obj.category === "collective") {
          newArr.push(obj)
        }
      }) 
      this.setState({listContactArr: [...newArr]})
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({listContactArr: [...this.state.newArrObj, {...this.state.listObj}]})
    this.setState({newArrObj: [...this.state.newArrObj, {...this.state.listObj}]})
    e.target.reset()
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Rows>
            <div className='col-6 news-box'>
              <h2 className='title'>New Contact</h2>
              <div>
                <NewContact 
                  changeName = {this.changeName}
                  changeNum = {this.changeNum}
                  changeSelect = {this.changeSelect}
                  formSubmit = {this.formSubmit}
                />
              </div>
            </div>
            <div className='col-6 tabs-box'>
              <h1>Contact</h1>
              <div>
                <Buttons buttonsChanged = {this.changeButtonHandler} />
                {this.state.listContactArr.map((item, i) => {
                  return <OldContact name = {item.name} number = {item.number} category = {item.category} key = {i}/>
                })}
              </div>
            </div>
          </Rows>
        </Container>
      </div>
    );
  }
 
}

export default App;


