import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O Corpo 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O Corpo 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O Corpo 3'
      }
    ]
  };

  timeoutupdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutupdate);
  }

  handleTimeout = () => {
    const { posts, counter } = this.state
    if(counter > 0){
      posts[0].title = `Este Titulo, será alterado de 5 em 5 segundos. - ${counter + 1} `;
    } else {
      posts[0].title = 'Este Titulo 1 foi alterado, depois do carregamento da página';
    }

    

    this.timeoutupdate = setTimeout(() => {
      this.setState({posts, counter: counter + 1});
    }, 5000);
  }

  render() {
    const { posts, counter } = this.state

    return (
      <div className='App'>
        <h1>Contador: {counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
