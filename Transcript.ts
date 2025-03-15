export interface Speaker {
    name: string;
    transcript: string[];
  }
  
  export interface Chat {
    date: string;
    duration: string;
    speakers: Speaker[];
  }
  
  // Example of generating fake customer service chat data
  export const customerServiceChats: Chat[] = [
    {
      date: "20 Oct 2024",
      duration: "3 min 45 sec",
      speakers: [
        {
          name: "Snehil",
          transcript: [
            "Hi, I need help with my recent order.",
            "It hasn't arrived yet, and it's past the delivery date.",
            "Can you please check the status for me?",
          ],
        },
        {
          name: "Shahswat",
          transcript: [
            "Hello Shashwat! I can certainly check that for you.",
            "Could you please provide your order number?",
            "Thanks, let me take a look at that for you.",
          ],
        },
      ],
    },
    {
      date: "20 Oct 2024",
      duration: "2 min 20 sec",
      speakers: [
        {
          name: "Kirtan",
          transcript: [
            "I'm trying to reset my password but I'm not receiving the reset link.",
            "Can you resend the link or help me reset it manually?",
          ],
        },
        {
          name: "Shahswat",
          transcript: [
            "Hello Shashwat! Let me help you with that.",
            "I've just sent the link again. Could you check your inbox?",
            "If you still don't receive it, I can assist with manual reset.",
          ],
        },
      ],
    },
    {
      date: "19 Oct 2024",
      duration: "4 min 10 sec",
      speakers: [
        {
          name: "Sarvesh",
          transcript: [
            "Hi, I'm having trouble with my account login.",
            "It keeps saying 'account not found' even though I have an account.",
          ],
        },
        {
          name: "Shahswat",
          transcript: [
            "Hello Shashwat, sorry to hear about the issue!",
            "Could you confirm the email address you are using to log in?",
            "I’ll check if the account exists in our system.",
          ],
        },
      ],
    },
    {
      date: "18 Oct 2024",
      duration: "5 min 12 sec",
      speakers: [
        {
          name: "gaurav",
          transcript: [
            "I'm trying to cancel my subscription but can't find the option online.",
            "Could you cancel it for me or guide me where to do it?",
          ],
        },
        {
          name: "Shahswat",
          transcript: [
            "Hi Shashwat! I can help with that.",
            "To cancel, you can go to your account settings and select 'Subscription'.",
            "If you’d prefer, I can cancel it for you from my end as well.",
          ],
        },
      ],
    },
    {
      date: "18 Oct 2024",
      duration: "6 min 00 sec",
      speakers: [
        {
          name: "Divyansh",
          transcript: [
            "I'm being charged twice for the same order.",
            "Can you look into this? I need a refund for the duplicate charge.",
          ],
        },
        {
          name: "Shahswat",
          transcript: [
            "Hello Shashwat, I’m really sorry about that.",
            "Let me verify the details of the charges.",
            "If a duplicate charge is confirmed, I will process the refund immediately.",
          ],
        },
      ],
    },
  ];
  
  export default customerServiceChats;
  