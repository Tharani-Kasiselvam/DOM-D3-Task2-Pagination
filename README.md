
# PAGINATION IN DOM MANIPULATION

***Design:***
- Designed a Pagination from 1-10 links including First & Last link
- Loaded the data objects from below API URL   
    (https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json)
- Designed a Table with below columns to load the data objects fetched from API   
    a. Id
    b. Name
    c. Email

***Purpose of the Project:***   
- It is designed to load 10 rows of data per page.   
- On click of the Pagination link, table has to load the corresponding API data for the specific page num.
- The navigation is enable for First and Last links which will load the First or Last page of contents.

***Accomplished with:***   
- CSS, DOM   
- Table with table-striped theme to display even contents in Grey for display purpose   
- XMLHttpRequest is used to fetch the json data from API URL   
- Since receiving the response from API is asynchronous and taking sometime to load the response, enabled setInterval to process the API resposne and passing over to table data   
- Used for loop to iterate the response and store it in the Table data   
- written Funtions to create Form - Labels, Textboxes, Radio buttons, Check boxes, Table - headers, rows, data   
- Table Body was refreshed on each selection of the Page   
- Based on the Page number selection, calculated the range [From and To] to load the paricular contents on the screen   

***Author: Tharani***