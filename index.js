import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";


const FILE_PATH = './data.json'
const Date = moment().subtract(1,"d").format();

const data = {
  date: Date,
}
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(Date, { '--date': Date }).push();
  })



const makeCommits = (n) => {
  if(n===0) return simpleGit().push();
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const date = moment()
  .subtract(1, "y")  // Move back 1 year
  .add(x, "w")       // Add x weeks
  .add(1, "d")       // Add 1 day
  .add(y, "d");      // Add y days

const finalDate = moment.min(date, latestPossibleDate).format(); 

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(finalDate, { "--date": finalDate },makeCommits.bind(this,--n));
  });
};

makeCommits(100);
