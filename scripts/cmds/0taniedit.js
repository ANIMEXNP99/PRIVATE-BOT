module.exports = {
  config: {
    name: "taniedit",
    aliases: ["TTanime", "animeeditTT"],
    version: "1.0",
    author: "Strawhat",
    countDown: 10,
    role: 0,
    shortDescription: "RANDOM ANIME VIDEO From Tik Tok",
    longDescription: "Random Tik Tok anime Video",
    category: "anime",
    guide: "{pn} anivideo",
  },

  onStart: async function ({ api, event }) {
    const sentMessage = await api.sendMessage("✅ Loading random anime video\nPlease wait...!", event.threadID);
    const link = [ "https://scontent.xx.fbcdn.net/v/t42.3356-2/393407373_24677537078500370_1362322761139871789_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=wHjupCcrijoAX8A6ALZ&_nc_ht=scontent.xx&oh=03_AdS0Tglm-XjaL5tn_4o7grpaggvvqMUjUwfXYwSoJga91w&oe=652F5126&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388929992_7270719259605552_1156148003017790543_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=ai0kG7BJGLAAX8fhKY3&_nc_ht=scontent.xx&oh=03_AdSUU3wE1-UN1YhZNOL7fDo7nG1QONdKU28jqNTa82RBow&oe=652F15EF&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388901429_6802869303132438_3033703923951374921_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=O_tfMFmqeRIAX-UbSB5&_nc_ht=scontent.xx&oh=03_AdQNwDrl5T7eCpNjewRE5N8Oj3DNLGYeZoyJRjQFD6ug0w&oe=652F5711&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388901429_6802869303132438_3033703923951374921_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=O_tfMFmqeRIAX-UbSB5&_nc_ht=scontent.xx&oh=03_AdQNwDrl5T7eCpNjewRE5N8Oj3DNLGYeZoyJRjQFD6ug0w&oe=652F5711&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/393404825_6976741752356168_2050402624837022044_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=Ju1Q1BYxKnQAX__wPrb&_nc_ht=scontent.xx&oh=03_AdR1gsJE1YcGJs62sP4Z42d6umSVHySLntNW_uQutjAQlw&oe=652ED435&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388910115_6743465012373319_7578242675152529140_n.mp4?_nc_cat=107&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=wWCQA8D_CaEAX-BZVcv&_nc_ht=scontent.xx&oh=03_AdSkN5yMUflAKP2jYz5P82i4lr2knH2C38wdUGJN_friJw&oe=652ED347&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/392807553_7133979133288205_1518750728406336957_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=_qUvRIPvxWoAX97fDpw&_nc_ht=scontent.xx&oh=03_AdRdQK6p21i2PuagnBtrx9cokVesT6iGOQgp8QMoVzVXMA&oe=652F2799&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388903328_5953563114746759_6801696595426478388_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=48_4bR0YnAEAX-E_zOd&_nc_ht=scontent.xx&oh=03_AdRoXriB1LigWDaOQx3lRG2pB8gJ1ZoJjAUO8j1BphjleQ&oe=652F316F&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388904698_6879125885481731_2383350916741264111_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=THqTl6pF9LUAX80K4r_&_nc_ht=scontent.xx&oh=03_AdSKyV8nCewxE5jhfVrf_qbQXKaui96xEGYT6EyfSe-OOg&oe=652F3776&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388901351_23893087143668080_145360661359362750_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=BwuJRRyONCgAX_pZt-U&_nc_ht=scontent.xx&oh=03_AdQQIhGOXXVzIGxTxGzsj7Dkq0Po6J69ySiudb8vddSk_Q&oe=652EEAF1&dl=1",
"https://scontent.xx.fbcdn.net/v/t42.3356-2/388903694_5628045690653825_6760200250050684408_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=4f86bc&_nc_ohc=cUjX-jZDrH0AX-jjfJM&_nc_ht=scontent.xx&oh=03_AdQlk4oIVUCt4R1j3Yxi5woBUVTx4y7oiep4ch0YOJuXGQ&oe=652F6332&dl=1",
      
    ];

    const randomIndex = Math.floor(Math.random() * link.length);
    const randomVideo = link[randomIndex];

    await api.sendMessage({
      body: 'Source:TT Credit: strawhat Samir Prisha',
      attachment: await global.utils.getStreamFromURL(randomVideo),
    }, event.threadID);

    
    setTimeout(() => {
      api.unsendMessage(sentMessage.messageID);
    }, 1000000000000000); 
  },
};