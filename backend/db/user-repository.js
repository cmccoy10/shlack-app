const {
  User,
  Channel,
  DirectGroup,
  GroupMember,
  ChannelMember} = require('./models');

class NullUser {
  isValid() {
    return false;
  }
  setPassword() {}
  isValidPassword() {
    return false;
  }
  toSafeObject() {
    return {};
  }
}

async function create(details) {
  const user = await User.build(details);
  user.setPassword(details.password);
  return await user.save();
}

async function findByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user || new NullUser();
}

async function findByTokenId(tokenId) {
  const user = await User.findOne({ where: { tokenId } });
  return user || new NullUser();
}

async function findOne(id) {
  return await User.findByPk(id);
}

async function findGroups(id) {
  const user = await User.findByPk(id, { include: [ DirectGroup ], attributes: [] });
  return user.DirectGroups;
}

async function findChannels(id) {
  const user = await User.findByPk(id, { include: [ Channel ], attributes: [] })
  return user.Channels;
}

module.exports = {
  create,
  findByEmail,
  findByTokenId,
  findOne,
  findGroups,
  findChannels,
};
