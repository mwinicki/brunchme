export function loadRestaurants() {
    return function (dispatch) {
      fetch("/contacts")
      .then( (response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsLoaded(contacts));
      });
    };
  }
  function contactsLoaded(contacts) {
    return {
      type: "CONTACTS_LOADED",
      value: contacts
    };
  }