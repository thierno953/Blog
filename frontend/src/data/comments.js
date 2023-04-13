export const getCommentsData = async () => {
    return [
      {
        _id: "10",
        user: {
          _id: "a",
          name: "Thierno",
        },
        desc: "it was a nice post, Thank you!",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2023-04-11T22:08:55.725Z"
      },
      {
        _id: "11",
        user: {
          _id: "b",
          name: "Barry",
        },
        desc: "a reply for Axel",
        post: "1",
        parent: "10",
        replyOnUser: "a",
        createdAt: "2023-04-11T22:08:55.725Z"
      },
      {
        _id: "12",
        user: {
          _id: "b",
          name: "Barry",
        },
        desc: "keep it up bro <3",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2023-04-11T22:08:55.725Z"
      },
      {
        _id: "13",
        user: {
          _id: "c",
          name: "Barry",
        },
        desc: "I'm always interested in your content :)",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2023-04-11T22:08:55.725Z"
      },
    ];
  };