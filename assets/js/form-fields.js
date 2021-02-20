var respData = {
  "common_question": [
    {
      "title": "Hey Trader, let’s get to know each other better…",
      "personal_data": [
        {
          "id": "1",
          "question": "How do we call you?",
          "options": null,
          "key": "name",
          "question_type": "string",
          "user_answer": null,
          "user_attempted": false
        },
        {
          "id": "2",
          "question": "How young are you?",
          "options": null,
          "key":"age",
          "question_type": "number",
          "user_answer": null,
          "user_attempted": false
        },
        {
          "id": "3",
          "question": "Where do we connect to you?",
          "options": null,
          "key":"phone",
          "question_type": "number",
          "user_answer": null,
          "user_attempted": false
        },
        {
          "id": "4",
          "question": "Where do we write to you?",
          "options": null,
          "key":"email",
          "question_type": "string",
          "user_answer": null,
          "user_attempted": false
        }
      ]
    }
  ],
  "all_user1": [
    {
      "id": "5",
      "question": "How Long have You been investing / Trading for?",
      "options": [
        {"value":"5a","label":"Less than 3 month"},
        {"value":"5b","label":"3  to 12 Months"},
        {"value":"5c","label":"1 to 2 years"},
        {"value":"5d","label":"2 years +"}
      ],
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "6",
      "question": "How will you describe Your Self ?",
      "options": [
        // "6a": "Less than 3 month",
        // "6b": "3  to 12 Months",
        // "6c": {
        //   "questions": "I am a intra day trader ",
        //   "options":{
        //     "6c0": "15min to 30 min ",
        //     "6c1": "1 hour to 2 Hour",
        //     "6c2": " till 3pm ",
        //     "6c3": "Auto Squre off"
        //   },
        //   "question_type": "single_selection",
        //   "select_answer": null,
        //   "user_attempted": false
        // },
        // "6d": "I am short term trader ",
        // "6e": "I do Complex Option Startegy"
        {"value":"6a","label":"only invest for long term and build long term portfolio ,I don't trade"},
        {"value":"6b","label":"I do day trading / Short-term Trading / Long term investing"},
        {"value":"6c","label":"I am a intra day trader"},
        {"value":"6d","label":"I am short term trader"},
        {"value":"6e","label":"I do Complex Option Startegy"}
      ],
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "7",
      "question": "My Prefer Segment / Instrument",
      "options": {
        "7a": "Cash Market",
        "7b": "Stock Future",
        "7c": "Index Future",
        "7d": "Stock Option",
        "7e": "Index Option",
        "7f": "Commodity",
        "7g": "Currency"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    }
  ],
  "pure_investor_user": [
    {
      "id": "8",
      "question": "How profitable do you consider your investing?",
      "options": {
        "8a": "Not profitable at all",
        "8b": " up and down/hard to tell",
        "8c": " slightly profitable",
        "8d": " consistently and reasonably profitable"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "9",
      "question": "How Much Capital You are Planing to invest Now  & what is Amount you are expecting in Next 5 years",
      "options": null,
      "question_type": "textarea",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "10",
      "question": "How do you feel when you review investment opportunity?",
      "options": {
        "10a": "easy going",
        "10b": "I don't give it too much thought",
        "10c": "patient",
        "10d": "analytical"
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "11",
      "question": "I plan to begin withdrawing money from my investments in:",
      "options": {
        "11a": "Less than 3 years",
        "11b": "3–5 years",
        "11c": "6–10 years",
        "11d": "11 years or more"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "12",
      "question": "Consider this scenario: Imagine that in the past Four months, the overall stock market lost 25% of its value. An individual stock investment you own also lost 25% of its value. What would you do?",
      "options": {
        "12a": "Sell all of my shares ",
        "12b": "Sell some of my shares ",
        "12c": "Do nothing",
        "12d": "Buy more shares",
        "12e": "Look For Advise"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "13",
      "question": "What is the approximate loss in any one-year period that you would be willing to accept before deciding to change your investments?",
      "options": {
        "13a": "Less than (5%) ",
        "13b": "(5%) to (10%) ",
        "13c": "(10%) to (15%)",
        "13d": "(15%) to (25%)",
        "13e": "(25%) or more"
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    }
  ],
  "pure_cash_investor_user": [
    {
      "id": "8",
      "question": "How long do you like to stay in a trade ?",
      "options": {
        "8a": "Intraday",
        "8b": "Buy Today for Sell Tommrrow ",
        "8c": "Few weeks for Short term Position",
        "8d": "More then 2 Years for Long term Investment "
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "9",
      "question": "How do you select stocks?",
      "options": {
        "9a": "News ",
        "9b": "Chart",
        "9c": "Fundamental Scanner",
        "9d": "Technical Scanner",
        "9e": "I have my own Method / Startegy / System"
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "10",
      "question": "How long have you been using the  Stocck selection method / strategy / system ",
      "options": {
        "10a": "1-3 months",
        "10b": "4-12 months",
        "10c": "1-3 years",
        "10d": "3+ years"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "11",
      "question": "What level of risk do you have on any individual trade ?",
      "options": {
        "11a": "Not Define",
        "11b": "Depend on each trade",
        "11c": "2% or less",
        "11d": "2% to 5%",
        "11e": " more than 5%"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "12",
      "question": "What is your ultimate trading goal?",
      "options": {
        "12a": "I want to trade full-time, relying on nothing, but trading for my sole income",
        "12b": "Make enough money to go on end of year holiday",
        "12c": "To Make Big Money ",
        "12d": "To Make Extra Income above my Salary / Business Income "
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    }
  ],
  "f&0_investor_user": [
    {
      "id": "8",
      "question": "What is your biggest trading fear?",
      "options": {
        "8a": "Not having orders executed by broker ",
        "8b": "Being wrong in long or short",
        "8c": "Missing out on a big winning trade",
        "8d": "Stop loss not triggered by system "
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "9",
      "question": "How do you select stocks?",
      "options": {
        "9a": "No defined amount ",
        "9b": "it varies on each trade",
        "9c": "2% or less",
        "9d": " 2% to 4%"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "10",
      "question": "How disciplined do you think you are ?",
      "options": {
        "10a": "Not disciplined",
        "10b": "Not bad but it varies from day to day",
        "10c": "1-3 years",
        "10d": "Disciplined as I stick  to  plan"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "11",
      "question": "How confident are you that you will make a reasonable profit over the next 12 months ",
      "options": {
        "11a": "Not at all confident",
        "11b": "Moderately confident",
        "11c": "very confident",
        "11d": "No Idea"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "12",
      "question": "What is your method for stock selection ?",
      "options": {
        "12a": "News",
        "12b": "Chart",
        "12c": "Future & Option Scanner",
        "12d": "Technical Scanner",
        "12e": "I have my own Method / Startegy / System"
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    }
  ],
  "option_investor_user": [
    {
      "id": "8",
      "question": "How many trading strategies do you use ?",
      "options": {
        "8a": "0",
        "8b": "1 or 2",
        "8c": "3 to 4",
        "8d": "5 or more"
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "9",
      "question": "Do you keep a record of every trade that you make?",
      "options": {
        "9a": "Yes, always",
        "9b": "Some Time Yes",
        "9c": "occasionally",
        "9d": "no, never"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "10",
      "question": "Do you think it is easy to make money trading in Options?",
      "options": {
        "10a": "very difficult",
        "10b": "easy if you know what you are doing",
        "10c": "easy if you have some luck",
        "10d": "very easy"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "11",
      "question": "What is Your preferred Option Strategy for Bull market ?",
      "options": {
        "11a": "Long Call Strategy",
        "11b": "Short Put Strategy",
        "11c": "Bull Put Spread",
        "11d": "Covered Call Strategy"
      },
      "question_type": "single_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "12",
      "question": "What is your method for stock selection ?",
      "options": {
        "12a": "News ",
        "12b": "Chart",
        "12c": "Future & Option Scanner",
        "12d": "Technical Scanner ",
        "12e": "I have my own Method / Startegy / System"
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    }
  ],
  "all_user2": [
    {
      "id": "1",
      "question": "Preferred broker Select one",
      "options": {
        "1a": "Zerodha",
        "1b": "SK",
        "1c": "ICICI",
        "1d": "Motilal",
        "1e": "Upstox",
        "1f": "5 Paisa",
        "1g": "Angel",
        "1h": "HDFhC",
        "1i": "Anand",
        "1j": "Rathi",
        "1k": "Kotak",
        "1l": "other"
      },
      "question_type": "multiple_selection",
      "select_answer": null,
      "user_attempted": false
    },
    {
      "id": "2",
      "question": "DoWhat do you like about your current broker?",
      "options": null,
      "question_type": "textarea",
      "select_answer": null,
      "user_attempted": false
    }
  ],
  "is_completed":false
};