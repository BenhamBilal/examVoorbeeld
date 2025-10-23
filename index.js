import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { log } from "node:console";
const userInput = readline.createInterface({ input, output });

const main = async () => {
  let lengteBoek;
  const bepaalInventaaris = async () => {
    do {
      lengteBoek = parseFloat(
        await userInput.question("Hoe groot is je ineventaaris?")
      );
      if (lengteBoek < 5 || lengteBoek > 20) {
        console.log("Foutieve invoer probeer opniuew (min 5 max 20)");
      }
    } while (lengteBoek < 5 || lengteBoek > 20);

    return lengteBoek;
  };

  lengteBoek = await bepaalInventaaris();

  const vulBoekInventaaris = async (lengteBoek) => {
    let boekInventaaris = [];
    let teller = 0;

    while (teller != lengteBoek) {
      let boek = await userInput.question(
        "Welke boek wil je in plaatsen ? (R voor Roman, T voor thriller, W voor Wetenschap )"
      );

      switch (boek) {
        case "R":
          boek = "Roman";
          boekInventaaris.push(boek);
          teller++;
          break;
        case "T":
          boek = "Thriller";
          boekInventaaris.push(boek);
          teller++;
          break;
        case "W":
          boek = "Wetenschappen";
          boekInventaaris.push(boek);
          teller++;
          break;
        default:
          console.log("Foutieve invoer probeer opnieuw");
      }
    }
    return boekInventaaris;
  };
  // console.log(await vulBoekInventaaris(lengteBoek));

  let ineventaaris = await vulBoekInventaaris(lengteBoek);
  console.log(ineventaaris);

  const berekenTotaalPrijs = (ineventaaris) => {
    let kostPrijs = 0;
    for (let i = 0; i < ineventaaris.length; i++) {
      switch (ineventaaris[i]) {
        case "Roman":
          kostPrijs += 12;
          break;
        case "Thriller":
          kostPrijs += 15;
          break;
        case "Wetenschap":
          kostPrijs += 20;
          break;
        default:
      }
    }
    console.log(`De total waarde is €${kostPrijs}`);
  };
  berekenTotaalPrijs(ineventaaris);
};
main();
    