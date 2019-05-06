'use strict';
/* global store cuid Item */ //eslint-disable-line no-unused-vars

const store = (function(){ //eslint-disable-line no-unused-vars
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  const findById = function(id){ //eslint-disable-line no-unused-vars
    store.items.find(item => item.id === id);
  };
  
  const addItem = function (name){ //eslint-disable-line no-unused-vars
    try{
      Item.validateName(name);
      store.items.push(Item.Create(name));
    }
    catch(error){
      console.log('Cannot add item {error.message}');
    }
  };

  const findAndToggleChecked = function(id){ //eslint-disable-line no-unused-vars
    let item = this.findById(id);
    item.checked = !item.checked;
  };

  const findAndUpdateName = function(id, newName){ //eslint-disable-line no-unused-vars
    try{
      Item.validateName(newName);
      let item = this.findById(id);
      item.name = item.newName;
    }
    catch(error){
      console.log('Cannot update item {error.message');
    }
  };

  const findAndDelete = function(id){ //eslint-disable-line no-unused-vars
    const itemIndex = store.items.findIndex(item => item.id === id);
    store.items.splice(itemIndex, 1);
  };


  return {items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
}());