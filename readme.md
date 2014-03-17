# Taylor's OrgSync Dev Exercise

You'll need NodeJS and NPM

```bash
git clone https://github.com/digitaldesigndj/orgsync-exercise
cd orgsync-exercise
npm install
npm start
```

**1. Write a function that takes a string and outputs the most and least common characters along with their total counts. In the event of a tie, return the character with the lowest code point.** For example:

```ruby
f('supercalifragilisticexpialidocious')
# 7 'i', 1 'd'
f('technicolor dreamcoat')
# 3 'c', 1 ' '
```
My solution is in JavaScript. I used underscore, so I am assuming underscore is a core lib of JavaScript ; )

takes an optional string

    node app.js 1 'string string string string thing'

    file: minmax.js

**2. Using the following snippet of HTML as a starting point, create a simple page with JavaScript that allows a user to add another record to the table. The table should be sorted by name and the new record should be posted to `/members`.**

```html
<input name="name" id="name" placeholder="name"/>
<input name="status" id="status" placeholder="status" />
<button>Add Row</button>
<table>
    <thead> <tr>
        <th>Name</th> <th>Status</th>
    </tr> </thead>
    <tbody> <tr>
        <td>Appleseed, Johnny</td> <td>Approved</td>
    </tr> </tbody>
</table>
```

### Libs Used

- NodeJS, NPM 
- Server Side UnderscoreJS
- Client Side jQuery
- Saves records to data.json

This example is as simple as possible to demonstrate core JavaScript and HTTP/IP proficency. Normally I would use a framework like Express or DocPad, API libs, utility libs like Request, and various Templating Engines and CSS Preprocessors.

    node app.js 2

    files: person-status.js, data.json, index.html

**3. We have an application that we want to improve by allowing users to create events. Users should be able to create an event, invite people to it, and receive RSVPs from them. Provide an [entity-relationship model][1] showing the database tables and fields necessary to implement this feature. Then describe how your model handles recurring events, including the benefits and trade-offs of your approach.**

---

I have gone outside the boundaries on this one and provided some documentation about my current side project at starbound.today instead of for a theoretial events page. Starbound.today is a web application that uses a variety of APIs. I have documented how those API's interact with the local MongoDB Objects of the application. I also explore some other data flows planned for application. 

It's a Keynote, exported to web and lauchable with npm's http-server.

Starbound.today is one of my fisrt major experiences with NoSQl. I am familiar with relational databases and have gained a new appreciation for SQL. Relational databases allow some actions to be taken at a table level and some important application logic is moved into the quieries. In turn I think templates and route logic can can be simpler, or higher levels of complexity can be achieved. I appreciate the flexibilty offered by NoSQL and I think that its has made me consider new approaches to organizing data and applications. NoSQL makes me appreciate the benefits and flexibity of SQL. Paging and joins are very powerful tools, and I think it's good to move logic further away from templates and the frontend.

    node app.js 3

    directory: starbound_today_erm/

