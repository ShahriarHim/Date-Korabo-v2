from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import requests

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:8080",  # Replace with the URL of your React application
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

X = ""
pre_talk = ""
counte = 1


@app.get("/chat")
async def chat(input_text: str):
    global X
    global pre_talk
    X = input_text

    new_talk = f"My {counte}st request is: {X}"
    pre_talk += new_talk

    # Append pre_talk to the file
    with open("human.txt", "a") as file:
        file.write(pre_talk + "\n")
    pre_talk = ""
    print(X)
    return {"message": "Input saved successfully."}


def met(prompt):
    # Create a session object
    session = requests.Session()

    # Set the default headers
    headers = {
        "User-Agent": "Your User Agent String",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
        "Origin": "https://chatbot.theb.ai",
        "Referer": "https://chatbot.theb.ai/"
    }
    session.headers.update(headers)

    # Validate input
    if not prompt:
        print("Input cannot be empty. Please try again.")
        return "Error: Input cannot be empty."

    # Prepare the data payload
    data = {
        "prompt": prompt
    }

    try:
        # Send the POST request
        url = "https://chatbot.theb.ai/api/chat-process"
        response = session.post(url, json=data)

        # Process the response
        if response.status_code == 200:
            response_text = response.text

            # Find the last JSON string in the response text
            json_strings = response_text.strip().split('\n')
            last_json_string = json_strings[-1]

            try:
                response_json = json.loads(last_json_string)
                return response_json['text']

            except json.JSONDecodeError:
                return "Error: Invalid JSON response"
        else:
            return "Error:", response.status_code, response.text
    except requests.RequestException as e:
        return f"An error occurred: {str(e)}"


@app.get("/post")
async def post_y():
    global pre_talk
    global X
    global counte

    with open("human.txt", "r") as file:
        pr = file.read() + "\n"

    # Call met(pre_talk) to get the response
    response = met(pr)

    # Update the response in the file
    with open("human.txt", "a") as file:
        file.write(f"For {counte}st request you replied: " + response + "\n")

    print(response)
    counte += 1
    return {"message": "Message posted successfully.", "response": response}

# with open("human.txt", "r") as file:
#     pr = file.read() + "\n"
# print(pr)
