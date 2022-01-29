import * as contentful from 'contentful';
import * as actions from './Blog/actions';

const client = contentful.createClient({
  space: 'fmpayhcaewru',
  accessToken: 'HkGOHIet_hbtrzTRhNsLxp0UemjEdXg1h5cigrQ80zM',
});

const error = (err) => console.log(err);

function loadBlog() {
  return (dispatch) => client.getEntries()
    .then(({ items }) => {
      dispatch(actions.loadBlogSuccess(items));
    })
    .catch(error);
}

export default loadBlog;
