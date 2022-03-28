const update = async (SignUpSchema, id, updateData) => {
  const updatedUser = await SignUpSchema.findByIdAndUpdate(
    { _id: id },
    { $set: updateData }
  );
  return updatedUser;
};

module.exports = update;
