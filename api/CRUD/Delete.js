const Delete = async (SignUpSchema, body) => {
  const deletedUser = await SignUpSchema.findByIdAndDelete({ _id: id });
  return deletedUser;
};

module.exports = Delete;
