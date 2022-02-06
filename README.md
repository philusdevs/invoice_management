# invoice_management
This application was developed to solve management invoices for small businesses and freelancers( in their respective fields) when working with clients. Small business owners/Freelancer can record customer details and record invoices as well as access those details The web application was developed using MEAN stack (Mongodb, Express.js Angular and Node.js), HTML5, CSS along with a npm package manager. [other tools that were used are bootstrap, angular-route and RestEasy(Chrome Extension to run and test mongodb queries)] The web application can be access through a website if hosted, currently the web application runs on a localhost server, and performs crud operations.

The mongodb database has two schemas, customerSchema and invoiceSchema, the
customerSchema is structured to support strings, and an embedded document.
The invoiceSchema is structured to support strings, integers and a reference object to the customerSchema. The documents are set in a one to one relationship with document reference, this is to repetition of the information of the Customer data, if the invoiceSchema data was embedded within the customer schema as another document the embedded document could lead to large documents that contain fields that the application does not need and would cause extra load on the server which would result in slow read operations.


1. From the Dashboard navigate to add ‘add customers’
2. Fill in customer details
3. After entering the details you can choose to place a link a logo of the
customer you entering if you want to
4. After submitting the details navigate to ‘add invoices’
5. And fill information relating to the customer
6. You can perform edit and remove operations if to the details you have
entered about the customer or removed the customer

![image](https://user-images.githubusercontent.com/98706177/152698002-2aa9646f-bb8e-4b61-8b6a-eabc468d5ed8.png)
![image](https://user-images.githubusercontent.com/98706177/152698051-6b6bdadb-9366-4eb4-910f-0b2e0531193a.png)
![image](https://user-images.githubusercontent.com/98706177/152698075-3be7000d-85fc-46f6-87c1-f012601ee092.png)
![image](https://user-images.githubusercontent.com/98706177/152698091-6790a982-d5ce-44c9-8168-364f8d7a09ae.png)
![image](https://user-images.githubusercontent.com/98706177/152698104-71184859-722e-4746-9b8d-ca2e31396ec4.png)
![image](https://user-images.githubusercontent.com/98706177/152698130-58b09d6d-e808-4518-8537-69cdd05621dd.png)
Edit Invoice
![image](https://user-images.githubusercontent.com/98706177/152698144-b0aa4a2a-bfc2-461e-b3b2-f2cbe64cd343.png)
Edited Invoice 
![image](https://user-images.githubusercontent.com/98706177/152698161-4ef4ceee-b898-48f2-9c59-b98488afec61.png)
Delete Invoice
![image](https://user-images.githubusercontent.com/98706177/152698182-bcb12493-71a0-4f4e-b1c4-833edd2df436.png)
