let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];

function generateDomainNames() {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        let domainName = pronouns[i] + adjectives[j] + nouns[k] + ".com";
        console.log(domainName);
      }
    }
  }
}

generateDomainNames();
