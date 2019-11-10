const SlackBot = require('slackbots');
const alreadyVisitedUser = {};
const bot = new SlackBot({
    token: "xoxb-830641149286-830651431558-NYAgQXOJBuK15x5km0M9kwMl",
    name: "DESQuery"
});

bot.on('start', () => {
   console.log("Hello world");
   // bot.postMessage('DQE94Q5E3', 'Hi there', {});
});

bot.on('message', (event) => {
    if(event.type !== 'message' || event.bot_id) {
        return;
    }
    console.log(event);

    if(!alreadyVisitedUser[event.channel]) {
        alreadyVisitedUser[event.channel] = true;
        /**
         * Send Home page mockup
         */
        bot.postMessage(event.user, '', {
            as_user: true,
            "type": "home",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `* Hi, :wave:  Welcome to DESQuery * `
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "* :worried:  Why are you at DESQuery :question:*\nDESQuery is a Slackbot, which helps you to collaborate with the people of same interest in DE Shaw. It helps you to:"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "• Get answers from experts. \n • Be a expert by sharing knowledge. \n • Get rewards for sharing doubts. \n • Get rewards for answering doubts."
                    }
                },
                {
                    "type": "image",
                    "image_url": "https://blogdotmoqupsdotcom.files.wordpress.com/2019/08/team_reveal_nocurtain.gif",
                    "alt_text": "image1"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*:mortar_board: Be a Whiz!* Select an area of your interest"
                    },
                    "accessory": {
                        "type": "multi_static_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select items",
                            "emoji": true
                        },
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "DJS",
                                    "emoji": true
                                },
                                "value": "djs"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Python",
                                    "emoji": true
                                },
                                "value": "python"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "UX",
                                    "emoji": true
                                },
                                "value": "UX"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "JavaScript",
                                    "emoji": true
                                },
                                "value": "javascript"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Java",
                                    "emoji": true
                                },
                                "value": "java"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Perl",
                                    "emoji": true
                                },
                                "value": "perl"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "React",
                                    "emoji": true
                                },
                                "value": "perl"
                            },

                        ]
                    }
                },
                {
                    "type": "divider"
                }
            ]
        });
    }
});