export const brand = {
  name: "NewColorGame",
  tagline: "Easy to learn, fun to play, but hard to master.",
  origin: "Invented and made in Nigeria",
  creator: "Gideon Zion",
  players: "2 or more",
  ages: "Kids & adults",
  whatsapp: "08079088854",
  whatsappHref: "https://wa.me/2348079088854",
  email: "giddlink@gmail.com",
  social: {
    instagram: "https://www.instagram.com/d_reggae_rocker_?igsh=NHJqdXduOGI5eDkz",
    tiktok: "https://tiktok.com/@newcolorgame",
    facebook: "https://www.facebook.com/share/1KwA7L3yiX/"
  },
};

export const features = [
  {
    label: "Builds Thinking",
    detail: "Sharpens strategy and quick decision-making with every card thrown.",
    color: "card-red",
  },
  {
    label: "Improves Spelling",
    detail: "Turns colors into letters and letters into words — vocabulary practice in disguise.",
    color: "sky-blue",
  },
  {
    label: "Perfect for All Ages",
    detail: "Simple enough for kids, competitive enough for teens and adults.",
    color: "move-green",
  },
  {
    label: "Fun & Competitive",
    detail: "Fast rounds, real strategy, and a race to Home that keeps everyone in it.",
    color: "spell-yellow",
  },
];

export const gameModes = [
  {
    id: "adventure",
    title: "Game 1: Adventure",
    subtitle: "School to Home",
    goal: "Be the first to move from A to Z.",
    rules: [
      "Start: throw a RED card to land on RED.",
      "Move: match the color on your card to the next letter — Yellow = B, Green = C, Blue = D, and so on.",
      "Bonus Move: throw 2 or 3 of the same color to move 2 or 3 steps.",
      "Win: first player to reach Z = Home = Winner!",
    ],
    color: "card-red",
  },
  {
    id: "spelling",
    title: "Game 2: Spelling",
    subtitle: "Learn Words",
    goal: "Spell words using colors + letters.",
    rules: [
      "One player picks a word, e.g. \u201cC.A.R\u201d.",
      "Players throw cards to match each letter's color — C = green, A = red, R = yellow.",
      "First player to spell the word correctly wins the round.",
    ],
    color: "sky-blue",
  },
];

export const cardRules = [
  "Shuffle your color cards before each turn.",
  "Throw 3 cards, one at a time, onto the board.",
];
