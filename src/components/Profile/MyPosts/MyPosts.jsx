import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = props => {
  let postsElements = props.posts.map((el, index) => {
    return <Post id={el.id} message={el.message} likesCount={el.likesCount} />;
  });

  const onAddPost = post => {
    props.addPost(post.addPost);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <PostReduxForm onSubmit={onAddPost} />
      {postsElements}
    </div>
  );
};

const PostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'addPost'}
          component={'textarea'}
          type={'text'}
          placeholder={'Введите текст'}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: 'addPost' })(PostForm);

export default MyPosts;
