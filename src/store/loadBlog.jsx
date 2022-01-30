import * as contentful from 'contentful';
import * as actions from './Blog/actions';

const client = contentful.createClient({
  space: 'fmpayhcaewru',
  accessToken: 'HkGOHIet_hbtrzTRhNsLxp0UemjEdXg1h5cigrQ80zM',
});

function loadBlog() {
  return (dispatch) => {
    dispatch(actions.blogLoading());
    return client.getEntries()
      .then(({ items }) => {
        dispatch(actions.loadBlogSuccess(items));
      })
      .catch((error) => {
        console.log(error);
        dispatch(actions.blogLoading(false));
      });
  };
}

export default loadBlog;
