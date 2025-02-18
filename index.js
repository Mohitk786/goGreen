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
      .subtract(1, "m")
      .add(x, "w")
      .add(1, "d")
      .add(y, "d")
      .format();

  const data = {
    date: date,
  };
  console.log(date);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(date, { "--date": date },makeCommits.bind(this,--n));
  });
};

makeCommits(100);
