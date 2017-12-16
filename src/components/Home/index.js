import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/modules/news/actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      news: {
        response: {
          data: {
            articles = []
          } = {}
        } = {}
      } = {}
    } = this.props;

    return (
      <section>
        {articles.map(({ title, description }, key) => (
          <div key={`Article${key}`}>
            {title} - {description}
          </div>
        ))}
        <button onClick={this.props.getNews}>
          Get news
        </button>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(mapStateToProps, { getNews })(Home)
