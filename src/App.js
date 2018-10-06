import React, { Component } from "react"
import axios from "axios"
import Link from "react-router-dom/Link"

class App extends Component {
  state = {
    articles: []
  }
  componentDidMount = async () => {
    const { data } = await axios.get("/articles")
    this.setState({
      articles: data
    })
  }

  render() {
    return (
      <div>
        <h1>Articles</h1>
        {this.state.articles.map(el => {
          return (
            <React.Fragment key={el.id}>
              <h2>{el.Title}</h2>
              <p>{el.lead}</p>
              <Link to={`${el.id}`}>Read full Article</Link>
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

export default App
