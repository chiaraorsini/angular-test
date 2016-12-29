## Model-View-ViewModel or MVVM architecture

### Model
It represents and holds raw data, something you would get directly from a database or from a REST API call from the server.
This component:
 * can also contain logic to retrieve the data from some source (e.g., a HTTP call, an AJAX call, to the server to retrieve the raw data);
 * contains no logic associated with displaying the actual model. It doesn't know how it's going to get displayed. It doesn't know who's responsible to get it displayed. It just contains the data.


### View

It is the user interface. In a web app it is just the HTML and CSS
It:
 * only displays the data that it is given
 * never changes the data
 * declaratively broadcast events, but never handles them


### ViewModel
It is the representation of the state of the view.
It:
 * holds the data that's displayed in the view
 * responds to view events - aka presentation logic
 * calls other functionality for business logic processing
 * never directly asks the view to display anything (e.g. never manipulates the DOM)


### Declarative Binder
Declaratively binds the Model over the ViewModel to the View

It's that glue between the view model we just discussed and the view that contains HTML and CSS. Declarative here means you don't have to write any code for this to happen. That's where the framework comes in. The framework does this magic for you.
This component, the declarative binder, is the key enabler of the whole MVVM pattern. Without it, you would have to write all these bindings by hand and the whole pattern goes out the window.


## Summary

View =  presentation - HTML/CSS
    - UI that never changes data, declares events
ViewModel = presentation logic - JS
    - data representation of the state of the UI
Model = data / business logic - JS
    - represents and holds raw data
DeclarativeBinder
    - binds ViewModel to the View
