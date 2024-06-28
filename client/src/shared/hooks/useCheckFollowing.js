export const useCheckFollowing = (followedChannels, channelId) => {
  const isFollowing = followedChannels.some(
    (channel) => channel.id === channelId
  );

  return isFollowing;
};
