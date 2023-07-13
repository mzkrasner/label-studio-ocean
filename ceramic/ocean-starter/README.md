## Initial Setup

1. You will need to add both your admin seed into the admin_seed.txt file, and your admin did into the composedb.config.json file within the ceramic/ocean-starter directory
2. You will also need to place your admin seed into an admin_seed.txt file you will need to create within the label_studio/frontend directory. If you need to set one up, you can always do so using the [Create Ceramic App repo](https://github.com/ceramicstudio/create-ceramic-app)

## Getting Started

**Please note you will need to have Docker locally installed

After following the steps above, use the following steps:

1. Run "npm install" within the ceramic/ocean-starter directory. 
2. Run "docker-compose up" in the same terminal once installation has completed
3. In a new terminal run "npm run dev" to start your Ceramic node (make sure you're using node v16 - run "node -v" in your terminal to verify)
4. In another new terminal, cd into the label_studio/frontend directory and run the following:
```bash
# Install all the necessary modules
yarn install 

# Run webpack
npx webpack
```
5. In a new terminal in the root (label-studio-ocean) directory, install Label Studio locally, and then start the server: 
```bash
# Install all package dependencies
pip install -e .
# Run database migrations
python label_studio/manage.py migrate
python label_studio/manage.py collectstatic
# Start the server in development mode at http://localhost:8080
python label_studio/manage.py runserver
```

6. Navigate to localhost:8080 in your browser to begin using the application
7. You may have to wait some time for your node to sync data before running queries using the steps below

### TextClassification

The application and corresponding data types you launched using the steps above are tailored to the process of textclassification LLM fine-tuning. In order to set up a new project, use the following steps:

1. Navigate to this page: http://localhost:8080/user/signup --> sign up with any email or password (email does not have to be valid)
1a. After logging in, feel free to navigate to your user settings by clicking the circle in the upper right-hand corner, "Account & Settings" and saving your First Name and Last Name (these will be automatically pulled into Ceramic upon save)
2. Once logged in, select the "Create" button in the upper right-hand side
3. Once the "Create Project" modal pops up, select the "Data Import" tab and "Upload Files" --> the file you will be uploading is included in this repository under ceramic/dummy-dataset (named "dataset.csv")
4. Select "Treat CSV/TSV as List of tasks" and hit "Save" in the upper right hand corner
5. You should have now arrived on your project page. Hit "settings" in the right-hand corner, "Labeling Interface" on the left side, "Browse Templates", "Natural Language Processing" and "Text Classification"
6. Remove the "Neutral" option on the next page by clicking the red "X" next to Neutral, and hit save below
7. Begin labeling each entry 
8. When you are finished labeling your dataset, back on the project page for this project hit the "Export" button between "Import" and "List"
9. To authenticate yourself and start a session with Ceramic using sign in with Ethereum, hit "Authenticate"
10. Once authenticated, you may hit the "Save to Ceramic" button and the dataset will be automatically saved corresponding to your account within ComposeDB/Ceramic --> feel free to explore the console logs as this is happening

## Example Queries

You can reference the [Example Queries](https://github.com/mzkrasner/label-studio-ocean/blob/main/ceramic/ocean-starter/example-queries/EXAMPLES.md) page in this repository to see how to access datasets by account or StreamID

## Learn More

To learn more about Ceramic please visit the following links

- [Ceramic Documentation](https://developers.ceramic.network/learn/welcome/) - Learn more about the Ceramic Ecosystem.
- [ComposeDB](https://composedb.js.org/) - Details on how to use and develop with ComposeDB!

You can check out [Create Ceramic App repo](https://github.com/ceramicstudio/create-ceramic-app) and provide us with your feedback or contributions! 
