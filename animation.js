const Layer_1 = document.querySelectorAll("#Layer_1 path");

for(let i=0; i<Layer_1.length; i++)
{
  console.log(`Letter ${i} is ${Layer_1[i].getTotalLength()}`);
}
