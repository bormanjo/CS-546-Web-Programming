const path = require("path");
const fileData = require("./fileData")
const textMetrics = require("./textMetrics")

async function check_file(filepath){
  // check if the result file exists for filepath

  let result_file = path.parse(filepath).name + ".result.json";

  let results_exist;

  try {
    // read file results
    let file_contents = await fileData.getFileAsJSON(result_file);
    results_exist = true;

    // print metrics
    console.log(file_contents);
  } catch (error) {
    // file results don't exist
    results_exist = false;
  }

  if(!results_exist){
    // getFileAsString(filepath)
    let file_contents = await fileData.getFileAsString(filepath);

    // run text metrics
    file_contents = await textMetrics.createMetrics(file_contents);

    // store text metrics in filepath.result.json
    fileData.saveJSONToFile("./" + result_file, file_contents);

    // print metrics
    console.log(file_contents);
  }
  
  
}

async function main(){
  let files = ['./chapter1.txt', './chapter2.txt', './chapter3.txt'];

  await check_file(files[0]);
  await check_file(files[1]);
  await check_file(files[2]);

  console.log("Finished!");
}

main().catch(e => {
    console.log(e);
})

