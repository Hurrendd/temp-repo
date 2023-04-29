import './styles.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndphotos = await loadPosts();

    this.setState({
      posts: postsAndphotos.slice(page, postsPerPage),
      allPosts: postsAndphotos
    });
  }

  loadMorePosts = () => {

    const {
      posts,
      allPosts,
      page,
      postsPerPage
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });

  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({searchValue: value})
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    }) 
    : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!! searchValue &&(
            <>
              <h1>Search Value: {searchValue}</h1>
            </>
          )}

          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não exitem posts para esta busca.</p>
        )}

        {! searchValue && (
          <div className='button-container'>
            <Button text = "Load More Posts" onClick={this.loadMorePosts}
              disabled={noMorePosts} />
          </div>
        )}
      </section>
    );
  }
}

export default Home;
