csrf is cross-site request forgery
also known as xsrf or one click attack or session riding
csrf pretends to be an authenticated user
like a link with csrf attack in an email
the danger depends on the privilage of victim

an example of csrf attack
1. alice login to a website
2. bob knows a csrf breach of this site
3. bob adds this tag on his profile `<img src="http://example.com/transferMoney.jsp?to=Bob" />`
4. when alice opens bob's profile, her money will be transferred to bob without her knowing

browser sends cookie without user knowing, so when alice makes that request, it will have her cookie with her token, and server will treat is as a normal request

preventing csrf attack
- add a confirmation on actions
- ask user to revalidate when performing sensitive actions
- csrf token
    - when user logs in, create a csrf token and store that under his session
    - in any protected form, add that token in a hidden input
    - confirm if csrf token is valid when receiving request