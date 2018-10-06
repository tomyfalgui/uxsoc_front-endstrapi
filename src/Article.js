import React, { Component } from "react"
import axios from "axios"

export default class Article extends Component {
  state = {
    article: {}
  }
  componentDidMount = async () => {
    const { data } = await axios.get(
      `articles/${this.props.match.params.article}`
    )

    this.setState({
      article: data
    })
  }

  render() {
    const { article } = this.state

    return (
      <div>
        <h1>{article.Title}</h1>
        {article.user && <h2>{article.user.username}</h2>}
        {article.image && <img src={`${article.image.url}`} alt="" />}

        <p>{article.whole_thing}</p>
      </div>
    )
  }
}
