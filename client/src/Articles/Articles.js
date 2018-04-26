
import React, { Component } from "react";
import API from "../utils/API";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    link:"",
    id:""
    // author: "",
    // synopsis: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticless()
      .then(res =>
        this.setState({ articles: res.data, title: "", link: "", id: "" })
      )
      .catch(err => console.log(err));
  };

  onInputChange = res.data =>{e.target;
    const {title,link,id}=res.data.target;


    this.set({
[articles]:value,
//[link]:value,
//[id]:value
this.loadArticles()
    })
  }



render() {
    return (

      <Articles
        title={this.state.title}
        link={this.state.link}
        id={this.state.id} 
        />

      )}




    };
export default Articles;