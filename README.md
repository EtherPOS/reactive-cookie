reactive-cookie
===============================

Renamed original package https://github.com/subhog/meteor-cookies for basic reactive cookie management in Meteor projects to avoid conflict with regular cookie pacakge https://github.com/chuangbo/meteor-cookie

Installation
=============

    meteor add reactive-cookie

API
===


    ReactiveCookie.get(name)

Gets value of a named ReactiveCookie. Reactive data source.




    ReactiveCookie.set(name, value, duration)

Sets value of a named ReactiveCookie.

**name** *string* - name of the cookie

**value** *string* - value

**duration** *{} (optional)* - possible fields:

- seconds
- minutes
- hours
- days
- months
- years
- clear


If `clear` parameter is set, cookie is immediately removed.



    ReactiveCookie.clear(name)

Remove named ReactiveCookie.



    ReactiveCookie.clearAll()

Remove all cookies. Useful during development.



    ReactiveCookie.list()

List all registered cookie names. Reactive data source.




