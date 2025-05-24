/**
 * Defines the structure for a language option, including its identifier,
 * display name, and a function to generate the code snippet.
 */
export interface LanguageOption {
	/** Unique identifier for the language (e.g., 'bash', 'python'). Also used by Shiki for syntax highlighting. */
	id: string
	/** User-friendly name for display in UI tabs (e.g., 'cURL', 'Python'). */
	name: string
	/**
	 * Generates the code snippet for this language.
	 * @param slug The API endpoint slug (e.g., '/people/1').
	 * @returns The code snippet as a string.
	 */
	generateCode: (slug: string) => string
}

// --- Snippet Generator Functions ---

/**
 * Generates a cURL command for the given API slug.
 * @param slug - The API endpoint slug.
 * @returns The cURL command string.
 */
const generateCurlCode = (slug: string): string =>
	`curl "https://swapi.info/api${slug}"`

/**
 * Generates a JavaScript Fetch API call for the given API slug.
 * @param slug - The API endpoint slug.
 * @returns The JavaScript Fetch API code string.
 */
const generateJavaScriptFetchCode = (
	slug: string,
): string => `fetch("https://swapi.info/api${slug}")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error))`

/**
 * Generates a Python request for the given API slug using the requests library.
 * @param slug - The API endpoint slug.
 * @returns The Python code string.
 */
const generatePythonCode = (slug: string): string => `import requests

def fetch_swapi_data():
    url = f"https://swapi.info/api${slug}"
    try:
        response = requests.get(url)
        response.raise_for_status() // Check for HTTP errors
        data = response.json()
        print(data)
        return data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None

fetch_swapi_data()
`

const generateJavaCode = (
	slug: string,
): string => `import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class SwapiAPI {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://swapi.info/api${slug}");
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();
            System.out.println(content.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
`

const generateCSharpCode = (slug: string): string => `using System;
using System.Net.Http;
using System.Threading.Tasks;

public class SwapiAPI
{
    private static readonly HttpClient client = new HttpClient();

    public static async Task Main(string[] args)
    {
        try
        {
            string responseBody = await client.GetStringAsync("https://swapi.info/api${slug}");
            Console.WriteLine(responseBody);
        }
        catch (HttpRequestException e)
        {
            Console.WriteLine("\nException Caught!");
            Console.WriteLine("Message :{0} ", e.Message);
        }
    }
}
`

const generatePhpCode = (slug: string): string => `<?php
$url = "https://swapi.info/api${slug}";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    echo $response;
}
curl_close($ch);
?>
`

const generateRubyCode = (slug: string): string => `require 'net/http'
require 'json'

uri = URI("https://swapi.info/api${slug}")
response = Net::HTTP.get(uri)
puts JSON.parse(response)
`

const generateGoCode = (slug: string): string => `package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"log"
)

func main() {
	resp, err := http.Get("https://swapi.info/api${slug}")

	if err != nil {
		log.Fatalln(err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(string(body))
}
`

const generateSwiftCode = (slug: string): string => `import Foundation

let urlString = "https://swapi.info/api${slug}"

guard let url = URL(string: urlString) else {
    print("Invalid URL")
    exit(1)
}

let task = URLSession.shared.dataTask(with: url) { data, response, error in
    if let error = error {
        print("Error: \(error.localizedDescription)")
        return
    }
    guard let httpResponse = response as? HTTPURLResponse, (200...299).contains(httpResponse.statusCode) else {
        print("Error: Invalid HTTP response")
        return
    }
    if let data = data, let string = String(data: data, encoding: .utf8) {
        print(string)
    }
    exit(0) // Exit for command-line tool behavior
}

task.resume()
dispatchMain() // Keep running for the async task in a command-line tool
`

const generateKotlinCode = (slug: string): string => `import java.net.URL
import java.net.HttpURLConnection

fun main() {
    val url = URL("https://swapi.info/api${slug}")
    val connection = url.openConnection() as HttpURLConnection
    connection.requestMethod = "GET"

    try {
        val inputStream = connection.inputStream
        val response = inputStream.bufferedReader().use { it.readText() }
        println(response)
    } catch (e: Exception) {
        e.printStackTrace()
    } finally {
        connection.disconnect()
    }
}
`

const generateDartCode = (slug: string): string => `import 'dart:convert';
import 'package:http/http.dart' as http;

void main() async {
  var url = Uri.parse('https://swapi.info/api${slug}');
  try {
    var response = await http.get(url);
    if (response.statusCode == 200) {
      print(jsonDecode(response.body));
    } else {
      print('Request failed with status: ' + response.statusCode.toString() + '.');
    }
  } catch (e) {
    print('Error caught: $e');
  }
}
`

const generateRustCode = (slug: string): string => `use std::error::Error;
use reqwest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let url = format!("https://swapi.info/api${slug}");
    let resp = reqwest::get(&url).await?.text().await?;
    println!("{}", resp);
    Ok(())\n`

// --- Language Options Array ---

/**
 * Array of available language options for displaying API request examples.
 */
export const languageOptions: LanguageOption[] = [
	{ id: "bash", name: "cURL", generateCode: generateCurlCode },
	{
		id: "javascript",
		name: "JavaScript",
		generateCode: generateJavaScriptFetchCode,
	},
	{ id: "python", name: "Python", generateCode: generatePythonCode },
	{ id: "java", name: "Java", generateCode: generateJavaCode },
	{ id: "csharp", name: "C#", generateCode: generateCSharpCode },
	{ id: "php", name: "PHP", generateCode: generatePhpCode },
	{ id: "ruby", name: "Ruby", generateCode: generateRubyCode },
	{ id: "go", name: "Go", generateCode: generateGoCode },
	{ id: "swift", name: "Swift", generateCode: generateSwiftCode },
	{ id: "kotlin", name: "Kotlin", generateCode: generateKotlinCode },
	{ id: "dart", name: "Dart", generateCode: generateDartCode },
	{ id: "rust", name: "Rust", generateCode: generateRustCode },
]

/** The ID of the language to be selected by default in the UI. */
export const defaultLanguageId: string = "bash"
