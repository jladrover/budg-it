# Budg-It
This is a simple MERN stack web application that allows you to track transactions with name, description, and date fields. A total balance calculation based on the transactions entered is provided as well. Entries are stored in a serverless instance on MongoDB atlas.

## Tech stack
1. MongoDB: Database for storing transactions
2. Express.js: Backend framework for building the API
3. React: Frontend framework for creating UI
4. Node.js: Runtime environment for backend code

## Usage
Visit the hosted version of the application at https://budgeting-application.vercel.app/.

Enter a new transaction by providing a name, description, and date in the input form. **NOTE: The name field must be filled out in a specific order.** For example:
- Transaction yielding income: "+200 housekeeping gig" or "200 housekeeping gig"
- Transaction yielding expenses: "-250 credit card annual fee"
<br> <br>

Total balance is displayed at the top of the page, reflecting the cumulative effect of all transactions from all users trying the demo page.
**Note:** Refresh the page to see added transaction.
## Contributing
Contributing to this github repo in basic steps:
* Fork this repo
* Create your feature branch (git checkout -b feature/yourFeature)
* Commit your changes (git commit -m 'Add some feature')
* Push changes (git push origin feature/yourFeature)
* Create a new pull request









