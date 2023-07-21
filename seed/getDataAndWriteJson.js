import axios from "axios";
import fs from "fs";

const apiCharUrl = "https://rickandmortyapi.com/api/character";
const apiLocationUrl = "https://rickandmortyapi.com/api/location";
const apiEpisodeUrl = "https://rickandmortyapi.com/api/episode";

// Function to fetch char data from the API using Axios
async function fetchCharDataFromApi() {
  try {
    const response = await axios.get(apiCharUrl);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data from API", error.message);
  }
}

// Function to fetch location data from the API using Axios
async function fetchLocationDataFromApi() {
  try {
    const response = await axios.get(apiLocationUrl);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data from API", error.message);
  }
}

// Function to fetch episode data from the API using Axios
async function fetchEpisodeDataFromApi() {
  try {
    const response = await axios.get(apiEpisodeUrl);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data from API", error.message);
  }
}

// Function to write characters data to a JSON file
function writeCharDataToJsonFile(data) {
  const charJsonData = JSON.stringify(data, null, 2);

  fs.writeFile("charData.json", charJsonData, (err) => {
    if (err) {
      throw new Error("Failed to write data to JSON file:", err.message);
    }
    console.log("Data written to charData.json successfully");
  });
}

// Function to write location data to a JSON file
function writeLocationDataToJsonFile(data) {
  const locationJsonData = JSON.stringify(data, null, 2);

  fs.writeFile("locationJsonData.json", locationJsonData, (err) => {
    if (err) {
      throw new Error("Failed to write data to JSON file:", err.message);
    }
    console.log("Data written to locationJsonData.json successfully");
  });
}

// Function to write episode data to a JSON file
function writeEpisodeDataToJsonFile(data) {
  const episodeJsonData = JSON.stringify(data, null, 2);

  fs.writeFile("episodeJsonData.json", episodeJsonData, (err) => {
    if (err) {
      throw new Error("Failed to write data to JSON file:", err.message);
    }
    console.log("Data written to episodeJsonData.json successfully");
  });
}

//Main function to execute the process
async function main() {
  try {
    // const data = await fetchCharDataFromApi();
    const locationData = await fetchLocationDataFromApi();
    const episodeData = await fetchEpisodeDataFromApi();
    // writeCharDataToJsonFile(data)
    writeLocationDataToJsonFile(locationData);
    writeEpisodeDataToJsonFile(episodeData);
  } catch (error) {
    console.log(error);
  }
}

main();
