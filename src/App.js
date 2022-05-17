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
          name: "Laziza",
          number: 992345678,
          category: "friends"
        },
        {
          name: "Xushnora",
          number: 992345678,
          category: "family"
        }

      ]
    }
  }

  // typeHandler = (e) => {
  //   let obj = {}

  //   if(e.target.type === 'text') {
  //     obj.name = e.target.value
  //   }
  //   if(e.target.type === 'number') {
  //     obj.number = e.target.value
  //   }

  //   this.setState({listContactArr: {...this.state.listContactArr, ...obj}})
  // }

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
      
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({listContactArr: [...this.state.listContactArr, {...this.state.listObj}]})
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


