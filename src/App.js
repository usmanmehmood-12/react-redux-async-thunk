import './App.css';
import { fetchPost } from './redux/slices/postsSlices';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost())
  }, [])

  //select store state
  const posts = useSelector(state => state.post)
  console.log('posts: ', posts)
  const { postsList, loading } = posts
  console.log({ postsList, loading })
  return (
    <div className="App">
      <h1>Post List</h1>
      <hr />
      {loading ? (
        <h2>loading...</h2>
      ) : (
        postsList && postsList.map(post => (
          <>
            <h2 key={post.id}>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </>
        )))
      }
    </div>
  );
}

export default App;
