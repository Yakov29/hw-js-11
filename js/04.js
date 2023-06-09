const formatString = function(string) {
    if (string.length <= 40) {
      return string;
    }
  
    return string.slice(0, 40) + '...';
  };
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // оригінальний рядок
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // форматований рядок
  
  console.log(formatString('Curabitur ligula sapien.')); // оригінальний рядок
  
  console.log(
    formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'),
  ); // форматований рядок
  