function getRandomTimestamp() {
    const now = new Date();
    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);

    const randomTimestamp = new Date(
        fiveDaysAgo.getTime() + Math.random() * (now.getTime() - fiveDaysAgo.getTime())
    );

    const formattedTimestamp = randomTimestamp.toISOString().replace("T", " ").substr(0, 19);
    return formattedTimestamp;
}



export default ([
    {
        name: "Mary",
        pic: "https://randomuser.me/api/portraits/men/2.jpg",
        messages: {
            from: [
                {
                    message: "Hey Elon 💕",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "How's it going?",
                    timeStamp: getRandomTimestamp()
                }
            ],
            to: [
                {
                    message: "Hey Mary! Doing great, thanks.",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Just working on some projects.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    },
    {
        name: "Elon",
        pic: "https://randomuser.me/api/portraits/men/80.jpg",
        messages: {
            from: [
                {
                    message: "Hey Mary, how's everything?",
                    timeStamp:getRandomTimestamp()
                },
                {
                    message: "Working on some exciting tech!",
                    timeStamp: getRandomTimestamp()
                }
            ],
            to: [
                {
                    message: "Hi Elon! Things are good on my end.",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Tell me more about your projects.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    },
    {
        name: "John",
         pic: "https://randomuser.me/api/portraits/men/19.jpg",
        messages: {
            from: [
                {
                    message: "Hey there!",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Any plans for the weekend?",
                    timeStamp: getRandomTimestamp()
                }
            ],
            to: [
                {
                    message: "Hey John! Not sure yet, maybe some hiking.",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Sounds fun! Let's do it.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    },
    {
        name: "Alice",
         pic: "https://randomuser.me/api/portraits/women/84.jpg",
        messages: {
            from: [
                {
                    message: "Hey there!",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "What's new with you?",
                    timeStamp: "2023-08-16 13:10:40"
                }
            ],
            to: [
                {
                    message: "Hey Alice! Just catching up on work.",
                    timeStamp: "2023-08-16 14:50:22"
                },
                {
                    message: "Let's plan a meetup soon.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    },
    {
        name: "Bob",
        pic: "https://randomuser.me/api/portraits/men/39.jpg",
        messages: {
            from: [
                {
                    message: "Hello!",
                    timeStamp: "2023-08-15 22:20:37"
                },
                {
                    message: "How was your day?",
                    timeStamp: "2023-08-16 12:05:18"
                }
            ],
            to: [
                {
                    message: "Hey Bob! Day's been good, thanks.",
                    timeStamp: "2023-08-16 13:45:30"
                },
                {
                    message: "Just finished a coding session.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    },
    {
        name: "Emma",
        pic: "https://randomuser.me/api/portraits/women/21.jpg",
        messages: {
            from: [
                {
                    message: "Hey!",
                    timeStamp: "2023-08-16 10:50:24"
                },
                {
                    message: "How's the weather there?",
                    timeStamp: "2023-08-16 15:25:50"
                }
            ],
            to: [
                {
                    message: "Hi Emma! It's sunny and warm.",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Perfect weather for a walk!",
                    timeStamp: "2023-08-16 17:10:07"
                }
            ]
        }
    },
    {
        name: "Alex",
         pic: "https://randomuser.me/api/portraits/men/0.jpg",
        messages: {
            from: [
                {
                    message: "Hey there!",
                    timeStamp: "2023-08-16 09:10:15"
                },
                {
                    message: "What's your plan for the evening?",
                    timeStamp: "2023-08-16 16:15:30"
                }
            ],
            to: [
                {
                    message: "Hey Alex! Just relaxing at home.",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Thinking of watching a movie.",
                    timeStamp: "2023-08-16 19:10:50"
                }
            ]
        }
    },
    {
        name: "Olivia",
        pic: "https://randomuser.me/api/portraits/women/10.jpg",
        messages: {
            from: [
                {
                    message: "Hello!",
                    timeStamp: "2023-08-16 11:05:12"
                },
                {
                    message: "How's your week going?",
                    timeStamp: getRandomTimestamp()
                }
            ],
            to: [
                {
                    message: "Hi Olivia! Busy but productive week.",
                    timeStamp: "2023-08-16 17:15:30"
                },
                {
                    message: "Looking forward to the weekend.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    },
    {
        name: "William",
        pic: "https://randomuser.me/api/portraits/men/37.jpg",
        messages: {
            from: [
                {
                    message: "Hey!",
                    timeStamp: "2023-08-16 08:20:10"
                },
                {
                    message: "Any new coding challenges lately?",
                    timeStamp: "2023-08-16 14:40:55"
                }
            ],
            to: [
                {
                    message: "Hey William! Not recently, but looking for some.",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Let's catch up and discuss!",
                    timeStamp: "2023-08-16 17:05:18"
                }
            ]
        }
    },
    {
        name: "Sophia",
         pic: "https://randomuser.me/api/portraits/women/91.jpg",
        messages: {
            from: [
                {
                    message: "Hey there!",
                    timeStamp: "2023-08-16 10:15:22"
                },
                {
                    message: "How's your project coming along?",
                    timeStamp: getRandomTimestamp()
                }
            ],
            to: [
                {
                    message: "Hi Sophia! Making good progress, thanks.",
                    timeStamp: "2023-08-16 17:25:15"
                },
                {
                    message: "Excited to see the end result.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    },
    {
        name: "Michael",
         pic: "https://randomuser.me/api/portraits/men/16.jpg",
        messages: {
            from: [
                {
                    message: "Hey!",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "How's your vacation going?",
                    timeStamp: "2023-08-16 15:20:35"
                }
            ],
            to: [
                {
                    message: "Hey Michael! Vacation's been amazing.",
                    timeStamp: getRandomTimestamp()
                },
                {
                    message: "Exploring new places and relaxing.",
                    timeStamp: "2023-08-16 18:40:25"
                }
            ]
        }
    },
    {
        name: "Ava",
         pic: "https://randomuser.me/api/portraits/women/76.jpg",
        messages: {
            from: [
                {
                    message: "Hello!",
                    timeStamp: "2023-08-16 11:20:15"
                },
                {
                    message: "How's your new project coming along?",
                    timeStamp: getRandomTimestamp()
                }
            ],
            to: [
                {
                    message: "Hi Ava! Making good progress, thanks.",
                    timeStamp: "2023-08-16 18:05:25"
                },
                {
                    message: "Can't wait to see it in action.",
                    timeStamp: getRandomTimestamp()
                }
            ]
        }
    }
]);
