// Write your code in this file!
function scuberGreetingForFeet(n) {
  if (n <= 400) {
    return 'This one is on me!'
  }
  else if (n >= 2000 && n <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  let phrase;
  city === "NYC" ? phrase = "Ok, sounds good." : phrase = "No go.";
  return phrase;
}

// function switchOnCharmFromTip(tip) {
//   if (tip === "generous") {
//     return 'Thank you so much.'
//   }
//   else if (tip === "not as generous") {
//     return  "Thank you."
//   }
//   else {
//     return "Bye."
//   }
// }

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
    break;
    case 'not as generous':
      response = "Thank you.";
    break;
    default:
      response = "Bye.";
    }
  return response;
}
