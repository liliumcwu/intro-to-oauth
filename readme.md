# OAuth

### Learning Objectives

#### Auth

- Define authentication.
- Define authorization.
- Explain the difference between authentication and authorization.
- Explain the purpose of encryption in computer security, and its relation to
  authentication and authorization.
- Explain what a session is, as well as its purpose in a web application.
- Explain how sessions are implemented

#### OAuth

- Define OAuth and identify when it is being used.
- Explain the purpose of the OAuth process.
- Diagram three-legged authentication associated with OAuth.
- (Applied) Register web applications for API access with OAuth providers.

---

OAuth is an open standard for authorization.
The OAuth 2.0 authorization framework enables a third-party application to
obtain limited access to an HTTP service.

Three legged does not imply a certain type of app as in "browser based". Three
legged means that an application acts on the direct behalf of a user. In the
three legged scenarios there is

- an application (consumer),
- a user (resource owner) and
- an API (service provider).

#### [Explanation of OAuth 2.0 protocol](http://stackoverflow.com/questions/7561631/oauth-2-0-benefits-and-use-cases-why)

A main point of the OAuth specs is for a content provider (e.g. Facebook,
Twitter, etc.) to assure a server (e.g. a Web app that wishes to talk to the
content provider on behalf of the client) that the client has some identity.

What three-legged authentication offers is the ability to do that without
the client or server ever needing to know the details of that identity (e.g.
username and password).

#### Preflight

Diagramming server request cycle:

![:image](https://developers.google.com/accounts/images/webflow.png)

### Code Along

[Walk-through of Github OAuth.](github.md)
[docs](https://developer.github.com/v3/oauth/)

### Group Exercise

Work in groups to implement OAuth for one of the following:

- [Google](https://developers.google.com/accounts/docs/OAuth2WebServer)
- [Facebook](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.1)
- [Dropbox](https://www.dropbox.com/developers/blog/45/using-oauth-20-with-the-core-api)
- [LinkedIn](https://developer.linkedin.com/documents/authentication)
- [Spotify](https://developer.spotify.com/web-api/authorization-guide/)
- [Instagram](https://www.instagram.com/developer/authentication/)
- [Slack](https://api.slack.com/docs/oauth)

Create a Node Application with a basic OAuth login and then
display information about that user.

