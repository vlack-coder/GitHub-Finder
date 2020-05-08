your context folder contains the the resources that entails your state and the type of actions
in our case the alert and the github state
in the context folder for each of the context folder created this is what's included

- the resourceContext.js
- the resourceReducer.js
- the resourceState.js

{in the resourceContext,
-----the context is created and exported
}

{in the resourceState, the resourceContext, type, usereducer is imported,
it's a functional component
in this component the initialstate is defined and passed to the usereducerfunction
then the methods are defined... in these methods, contains the dispatched function which
is an action generator, it generates the action objexct which comprises of the
----type(type of action) and the payload(data passed from the action)

what is returned in the component is the resourceContext.Provider and the value which
is the data(LIKE PROPS) you want to make available for your components is passed to it
also props.children is passed (composition)}

{in the resourceReducer, this is where the action object defined in the resourcestate
is used
----HERE THE STATE IS CHANGED}

the resource state then wraps the components rendered in the App component 


lastly for each of the component that needs a state, then the use context hook is used to. this provides the state for the component
