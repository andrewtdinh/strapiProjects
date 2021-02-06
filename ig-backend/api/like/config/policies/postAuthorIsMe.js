module.exports = async (ctx, next) => {
  const postAuthor = String(ctx.request.query.post.author);
  const loggedInUser = String(ctx.state.user.id);

  if (postAuthor === loggedInUser) {
    return next();
  } else {
    return ctx.unauthorized("Post author is different from logged in user.")
  }
}
