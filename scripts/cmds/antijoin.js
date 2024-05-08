module.exports = {
  config: {
    name: "antijoin",
    aliases: [],
    version: "1.0",
    author: "Strawhat Luffy",
    countdown: 5,
    role: 0,
    shortDescription: "Anti-join command for bots",
    longDescription: "Checks if the user adding the bot is an admin or not",
    category: "admin",
    guide: "{p}antijoin",
  },
  onStart: async function ({ threadsData, usersData, api }) {

  },
  onChat: async function ({ event, message, threadsData, usersData, api }) {
    if (event.type === "message_reaction" && event.reaction === "❌") {
      const { messageID, author, threadID } = event;

      if (
        author === await api.getCurrentUserID() &&
        !(await isAdmin(threadID, author))
      ) {
        await api.removeUserFromGroup(await api.getCurrentUserID(), threadID);
        message.reply("You're not an admin. I'm leaving this group!");
      }
    }
  }
};

async function isAdmin(threadID, userID) {
  const threadInfo = await api.getThreadInfo(threadID);
  const admins = threadInfo.adminIDs;
  return admins.includes(userID);
}