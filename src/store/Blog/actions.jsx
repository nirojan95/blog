/**
* Blog Actions
*/

import * as types from './types';

export function loadBlogSuccess(posts) {
  return { type: types.LOAD_BLOG_SUCCESS, posts };
}

export function blogLoading(isLoading = true) {
  return { type: types.BLOG_LOADING, isLoading };
}
