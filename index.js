
const svgColor= [
'#9aa0a6',
'#4285f4',
'#34a853',
'#f4b400',
'#ea4335',
]

let count = 0;
document.querySelectorAll('path').forEach(item =>{
    item.style.fill = svgColor[count]; 
    count++;    
})


