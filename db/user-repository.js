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
  await user.save();
  return user;
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

async function findChannels(userId) {
  const user = await ChannelMember.findAll({where: { userId }, include: { model: Channel }, attributes: [] })
  const channels = user.map(channel => {
    return channel.Channel;
  })
  return channels;
}

module.exports = {
  create,
  findByEmail,
  findByTokenId,
  findOne,
  findGroups,
  findChannels,
};
