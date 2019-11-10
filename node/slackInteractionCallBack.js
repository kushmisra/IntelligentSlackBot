var express = require('express');
var bodyParser     =        require("body-parser");
const request = require('superagent');
const SlackBot = require('slackbots');
const bot = new SlackBot({
    token: "xoxb-830641149286-830651431558-NYAgQXOJBuK15x5km0M9kwMl",
    name: "DESQuery"
});
require('superagent-auth-bearer')(request);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("hi");
});
var i = 0;

async function openModal(payload) {
    request
        .post('https://slack.com/api/views.open')
        .send(payload) // sends a JSON post body
        .authBearer('xoxb-830641149286-830651431558-NYAgQXOJBuK15x5km0M9kwMl')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
            // Calling the end function will send the request
            console.log(err);
            console.log("res", res.text);
        });
}

app.post('/commandAction', async (req, res) => {
    console.log(req.body);
    switch (req.body.command) {
        case '/ask': res.send({
            "blocks": [
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `\n * Query: ${req.body.text}* :question:`
                    }
                },
                {
                    "type": "divider"
                },

                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Hi, we have found :four: similar query to your question!*"
                    }
                },

                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*<fakeLink.toHotelPage.com|How I can collapse column in table?>*"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":thumbsup:  Helpful"
                        },
                        "value": "click_me_123"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":speech_balloon: 6 Answers"
                        },
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":mortar_board: 4 Expert Answers"
                        }
                    ]
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*<fakeLink.toHotelPage.com|Query title will be placed here?>*"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":thumbsup:  Helpful"
                        },
                        "value": "click_me_123"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":speech_balloon: 4 Answers"
                        },
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":mortar_board: 1 Expert Answer"
                        }
                    ]
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*<fakeLink.toHotelPage.com|Query title will be placed here?>*"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":thumbsup:  Helpful"
                        },
                        "value": "click_me_123"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":speech_balloon: 2 Answers"
                        },
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":mortar_board: 0 Expert Answer"
                        }
                    ]
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*<fakeLink.toHotelPage.com|Query title will be placed here?>*"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":thumbsup:  Helpful"
                        },
                        "value": "click_me_123"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":speech_balloon: 4 Answers"
                        },
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":mortar_board: 1 Expert Answer"
                        }
                    ]
                },
                {
                    "type": "divider"
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": "Note*: Get your query answered by the experts. Ask DesQuery:\n/Post"
                        }
                    ]
                }
            ]
        }); break;
        case '/leaderboard': res.send({
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Hey there 👋. we are introducing top enthusiasts and experts here: \n*October 2019*"
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*:runner: Top 5 enthusiasts*"
                    }
                },

                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":one: Akhil Gupta                                                      -Asked 22 Good questions"
                    }
                },

                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":two: Kush Misra                                                       -Asked 20 Good questions"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":three: Apoorva Gupta                                                -Asked 19 Good questions"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":four: Apaar Gupta                                                    -Asked 15 Good questions"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":five: Vishakha Gautam                                            -Asked 15 Good questions"
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*:busts_in_silhouette: Top 5 experts*"
                    }
                },

                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":one: Tandav Sanka                                                        -Answered 68 queries"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":two: Abhinav Singhvi                                                    -Answered 56 queries"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":three: Ravi Gurrampati                                                    -Answered 52 queries"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":four: Vignesh Kumar                                                      -Answered 52 queries"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ":five: Arpit Kumar                                                           -Answered 40 queries"
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*:gift: These people have been awared vouchers given below:*"
                    }
                },
                {
                    "type": "image",
                    "title": {
                        "type": "plain_text",
                        "text": "image1",
                        "emoji": true
                    },
                    "image_url": "https://image.freepik.com/free-vector/gift-voucher-banner-design_1201-1355.jpg",
                    "alt_text": "image1"
                },
                {
                    "type": "divider"
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": "Keep asking! Keep answering to win exciting rewards.\n(Ask DesQuery: /Ask or /Post)"
                        }
                    ]
                },
                {
                    "type": "context",
                    "elements": [

                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":sparkles: No question is a stupid question. It might be helpful for other folks as well! "
                        }
                    ]
                },
                {
                    "type": "context",
                    "elements": [

                        {
                            "type": "plain_text",
                            "emoji": true,
                            "text": ":sparkles: Share your knowledge. It’s a way to achieve immortality."
                        }
                    ]
                }

            ]
        }); break;
        case '/post': {
            var trigger_id = req.body.trigger_id;
            console.log(trigger_id);
            openModal({
                "trigger_id": trigger_id,
                view: {
                    "type": "modal",
                    "title": {
                        "type": "plain_text",
                        "text": "ShaWhiz",
                        "emoji": true
                    },
                    "submit": {
                        "type": "plain_text",
                        "text": "Submit",
                        "emoji": true
                    },
                    "close": {
                        "type": "plain_text",
                        "text": "Cancel",
                        "emoji": true
                    },
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": "*Still searching :mag:*"
                            }
                        },
                        {
                            "type": "context",
                            "elements": [

                                {
                                    "type": "plain_text",
                                    "emoji": true,
                                    "text": ":sparkles: No question is a stupid question. It might be helpful for other folks as well!"
                                }
                            ]
                        },
                        {
                            "type": "divider"
                        },

                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": "*Get a reward :gift:*\nPost your query on ShaWhiz channel and get an expert review."
                            }
                        },

                        {
                            "type": "input",
                            "label": {
                                "type": "plain_text",
                                "text": "Title of the query",
                                "emoji": true
                            },
                            "element": {
                                "type": "plain_text_input",
                                "multiline": true
                            }
                        },
                        {
                            "type": "input",
                            "label": {
                                "type": "plain_text",
                                "text": "Add description of your query.",
                                "emoji": true
                            },
                            "element": {
                                "type": "plain_text_input",
                                "multiline": true
                            },
                            "optional": true
                        }
                    ]
                }
            });
            res.send('hi');
        }
    }
});


app.post('/slackInteraction', async (req, res) => {
    // console.log(req.body);
    const payload = JSON.parse(req.body.payload);
    console.log(payload);
    console.log("slack se aaya mera dost");
    console.log(i);
    i = i +1;

    if(payload.type === 'view_submission'){
        console.log(payload.view.state.values);
        const values = payload.view.state.values;
        console.log(values);
        // const title = values[Object.keys(values)[0]];
        // const title1 = title[Object.keys(values)[0]];
        // const title2 = title1.value;
        // const desc = values[Object.keys(values)[1]];
        // const desc1 = desc[Object.keys(values)[0]];
        // const desc2 = desc1.value;
        // console.log(title2, desc2);
        if(req.body.payload.includes('No question is a stupid question')) {
                bot.postMessage(payload.user.id, '', {
                    as_user: true,
                    "blocks": [
                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": "*:smiley: Hi! You might be intrested in this.*"
                            }
                        },
                        {
                            "type": "context",
                            "elements": [

                                {
                                    "type": "plain_text",
                                    "emoji": true,
                                    "text": ":sparkles: Share your knowledge. Itís a way to achieve immortality."
                                }
                            ]
                        },

                        {
                            "type": "divider"
                        },

                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": "*Get a reward :gift:*\nStart a thread to reply to the query below."
                            }
                        },

                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": `*Query title*: How to resize djs grid`
                            }
                        },
                        {
                            "type": "section",
                            "text": {
                                "type": "mrkdwn",
                                "text": `*Query description*: Which props should I pass to change grid dimensions`
                            }
                        },

                        {
                            "type": "divider"
                        },
                        {
                            "type": "context",
                            "elements": [

                                {
                                    "type": "plain_text",
                                    "emoji": true,
                                    "text": "Note*: You'll get reward only if you comment in thread."
                                }
                            ]
                        }

                    ]
                });
        }
        res.send('');
    } else if (payload.type === 'block_actions' && payload.actions[0].type === 'multi_static_select') {
        bot.postMessage(payload.user.id, 'hi I am back after you selection',{
            as_user: true,
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Hi Whiz, You have selected your area of interests as:*"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": ` • ${payload.actions[0].selected_options.map(ele => ele.value).join('\n •')}`
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "You can update your specialization anytime by asking ShaWhiz */UpdateInterests*"
                    }
                },
                {
                    "type": "divider"
                }
            ]
        });
        res.send('');
    }

});
app.listen(4390, () =>
    console.log('Example app listening on port 4390!')
);