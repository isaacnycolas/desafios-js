function addElements(elementos, palavra, addInBeginning = false){
    const elements = [...elementos];
      if (addInBeginning === true) {
        elements.unshift(palavra); 
      } else {
        elements.push(palavra); 
      }
    return elements;
  }
  console.log(addElements(["oi", "tudo", "bem"], 'voce', false));