function Sc() {

function highlightLabel(labelId) {
    const label = document.getElementById(labelId);
    label.style.fontSize = '0.8rem'; // Change the font size to superscript
  }
  
  function resetLabel(labelId) {
    const label = document.getElementById(labelId);
    label.style.fontSize = '1rem'; // Reset the font size
  }
  
}

export default Sc();