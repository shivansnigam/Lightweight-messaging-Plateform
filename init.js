const mongoose = require("mongoose");
const Chat = require("./models/chat.js")
main()
    .then(() => {
        console.log("connection is successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
}

//insert data

let chats = [
    {
        from: "vikash",
        to: "shivansh",
        msg: "hello brother",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "tony",
        msg: "hye bro whatsuppp",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for exam",
        created_at: new Date(),
      },
      {
        from: "preeti",
        to: "neha",
        msg: "Sure! I'll send them to you shortly.",
        created_at: new Date(),
      },
      {
        from: "alex",
        to: "emma",
        msg: "Did you understand the last lecture?",
        created_at: new Date(),
      },
      {
        from: "emma",
        to: "alex",
        msg: "No, I'm a bit confused. Can we discuss it?",
        created_at: new Date(),
      },
      {
        from: "john",
        to: "sarah",
        msg: "How's your preparation going?",
        created_at: new Date(),
      },
      {
        from: "sarah",
        to: "john",
        msg: "It's going well. Thanks for asking!",
        created_at: new Date(),
      },
      {
        from: "michael",
        to: "jessica",
        msg: "Are you attending the party this weekend?",
        created_at: new Date(),
      },
      {
        from: "jessica",
        to: "michael",
        msg: "Yes, I'll be there! Looking forward to it.",
        created_at: new Date(),
      },
      {
        from: "ryan",
        to: "olivia",
        msg: "What's the deadline for the project?",
        created_at: new Date(),
      },
      {
        from: "olivia",
        to: "ryan",
        msg: "It's next Friday. We need to hurry up!",
        created_at: new Date(),
      },
      {
        from: "david",
        to: "lily",
        msg: "Can you help me with the coding assignment?",
        created_at: new Date(),
      },
      {
        from: "lily",
        to: "david",
        msg: "Of course! Let's meet after class.",
        created_at: new Date(),
      },
      {
        from: "chris",
        to: "hannah",
        msg: "Do you have any book recommendations?",
        created_at: new Date(),
      },
      {
        from: "hannah",
        to: "chris",
        msg: "Yes, I just finished a great novel. I'll share the title with you.",
        created_at: new Date(),
      },
      {
        from: "kevin",
        to: "maria",
        msg: "Did you hear about the upcoming conference?",
        created_at: new Date(),
      },
      {
        from: "maria",
        to: "kevin",
        msg: "Yes, I'm planning to attend. Are you going too?",
        created_at: new Date(),
      },
      {
        from: "steven",
        to: "natalie",
        msg: "Let's grab lunch together tomorrow!",
        created_at: new Date(),
      },
      {
        from: "natalie",
        to: "steven",
        msg: "Sure, I'd love to! Where do you want to go?",
        created_at: new Date(),
      },
      {
        from: "victor",
        to: "alice",
        msg: "How's the weather at your place?",
        created_at: new Date(),
      },
      {
        from: "alice",
        to: "victor",
        msg: "It's sunny and warm. Perfect weather!",
        created_at: new Date(),
      },
    
]

Chat.insertMany(chats)    


