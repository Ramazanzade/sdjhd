






let marka=['bmw','mersedes', 'camaro','audi'];
let model=[
    ['i8','M3','f10'],
['c220', 'c200', '190'],
['zl1', 'ss1969', 'ss'],
['q7', 'r8']
];

let img=[
    ['https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe9%2F2016_BMW_i8.jpg%2F800px-2016_BMW_i8.jpg&imgrefurl=https%3A%2F%2Faz.wikipedia.org%2Fwiki%2FBMW_i8&tbnid=c0vXQCvD4GNuqM&vet=12ahUKEwjPh_uG1_X4AhUKyKQKHRU-CNQQMygAegUIARC4AQ..i&docid=aVlmw7AMepPEBM&w=800&h=352&q=bmw%20i8&ved=2ahUKEwjPh_uG1_X4AhUKyKQKHRU-CNQQMygAegUIARC4AQ','https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.ed.edmunds-media.com%2Fbmw%2Fm3%2F2022%2Foem%2F2022_bmw_m3_sedan_competition_fq_oem_1_600.jpg&imgrefurl=https%3A%2F%2Fwww.edmunds.com%2Fbmw%2Fm3%2F&tbnid=aSpq4ulR8kIZ2M&vet=12ahUKEwiWsK2g1_X4AhWH16QKHc2KCOYQMygBegUIARC-AQ..i&docid=V0oIzZo1ziIKkM&w=600&h=400&q=bmw%20m3&ved=2ahUKEwiWsK2g1_X4AhWH16QKHc2KCOYQMygBegUIARC-AQ','https://www.google.com/imgres?imgurl=https%3A%2F%2Ftap.azstatic.com%2Fuploads%2Ffull%2F2021%252F01%252F15%252F03%252F21%252F10%252F4b369687-e84c-4a04-a08e-82293bdf44d4%252F47924_hqK8pTFiH5eJssuUCvvOWw.jpg&imgrefurl=https%3A%2F%2Ftap.az%2Felanlar%2Fneqliyyat%2Fehtiyyat-hisseleri-ve-aksesuarlar%2F23124683&tbnid=LTDjp_Hzv0eBIM&vet=12ahUKEwiO9IOq1_X4AhXOzaQKHZISAGwQMygIegUIARDLAQ..i&docid=r7a-k4xONYKp6M&w=1024&h=928&q=bmw%20f10&ved=2ahUKEwiO9IOq1_X4AhXOzaQKHZISAGwQMygIegUIARDLAQ'],
['https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2F2CJNWM4%2Fmercedes-benz-c220-d-4matic-swiss-star-car-at-the-89th-geneva-international-motor-show-geneva-switzerland-march-5-2019-2CJNWM4.jpg&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Fmercedes-c220.html&tbnid=FIeVdrxo7AHQmM&vet=12ahUKEwiMvOu51_X4AhXhN-wKHTVbAa8QMygGegUIARDIAQ..i&docid=9dojwYfud-0nGM&w=1300&h=956&q=mersedes%20c220&ved=2ahUKEwiMvOu51_X4AhXhN-wKHTVbAa8QMygGegUIARDIAQ','https://www.google.com/imgres?imgurl=https%3A%2F%2Fi0.shbdn.com%2Fphotos%2F02%2F97%2F56%2Fx5_8880297560kv.jpg&imgrefurl=https%3A%2F%2Fwww.sahibinden.com%2Filan%2Fvasita-otomobil-mercedes-benz-mercedes-benz-c200-amg-premium-edition-hatasiz-888029756%2Fdetay&tbnid=ncVhfHVmwFxIgM&vet=12ahUKEwjsrZvD1_X4AhV0wgIHHQpZCZIQMygHegUIARDEAQ..i&docid=XRk-PmrXQkFKsM&w=528&h=396&q=mersedes%20c200&ved=2ahUKEwjsrZvD1_X4AhV0wgIHHQpZCZIQMygHegUIARDEAQ','https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D3310457362345421&imgrefurl=https%3A%2F%2Fm.facebook.com%2Fmasterclassaz%2Fphotos%2Forxan-h%25C3%25BCseynov-yaz%25C4%25B1r4300-manata-mercedes-190-almaq-ist%25C9%2599yir%25C9%2599m-g%25C3%25BCnd%25C9%2599-50-km-s%25C3%25BCr%25C3%25BCl%25C9%2599c%2F3310457362345421%2F&tbnid=3HYnXP3qJTQi9M&vet=12ahUKEwjZ5ePO1_X4AhUIuKQKHRegCU8QMygBegUIARC2AQ..i&docid=RIDgXJCrZsFTtM&w=1024&h=683&q=mersedes%20190&ved=2ahUKEwjZ5ePO1_X4AhUIuKQKHRegCU8QMygBegUIARC2AQ'],
['https://www.google.com/imgres?imgurl=https%3A%2F%2Fthemoney.co%2Fwp-content%2Fuploads%2F2022%2F03%2F1646417026_Coup-doeil-sur-la-Chevy-Camaro-zl1-2022.jpg&imgrefurl=https%3A%2F%2Fthemoney.co%2Faz%2Fcoup-doeil-sur-la-chevy-camaro-zl1-2022%2F&tbnid=-OMOe9u5namxiM&vet=12ahUKEwjhq_Hc1_X4AhWVwQIHHWcDAUIQMygBegUIARC_AQ..i&docid=RfqLHIwShK3HWM&w=854&h=500&q=camaro%20zl1&ved=2ahUKEwjhq_Hc1_X4AhWVwQIHHWcDAUIQMygBegUIARC_AQ','https://www.google.com/imgres?imgurl=https%3A%2F%2Fsquir.com%2Fpub%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F723c7287f46aa256b15aa9694f0b55d4%2F3%2F7%2F37028.jpg&imgrefurl=https%3A%2F%2Fsquir.com%2Fchevrolet-camaro-ss-1969-street-rod.html&tbnid=HZrfTSJnzm4v3M&vet=12ahUKEwi93oXq1_X4AhVjwwIHHV4sAIoQMygCegUIARDRAQ..i&docid=TNxYzoEsd3rjRM&w=600&h=450&q=camaro%20ss%201969&ved=2ahUKEwi93oXq1_X4AhVjwwIHHV4sAIoQMygCegUIARDRAQ','https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.carsandbids.com%2Fcdn-cgi%2Fimage%2Fwidth%3D2080%2Cquality%3D70%2F438ad923cef6d8239e95d61e7d6849486bae11d9%2Fphotos%2FrjLZN85p.4cz9_Yzs7-(edit).jpg%3Ft%3D164685007210&imgrefurl=https%3A%2F%2Fcarsandbids.com%2Fauctions%2FrjnNqzz0%2F2016-chevrolet-camaro-ss-coupe&tbnid=I9sZBDGKmd-TiM&vet=12ahUKEwiF88701_X4AhW2wQIHHVd9AugQMygBegUIARDCAQ..i&docid=LDJYlyJQ7Im7fM&w=2080&h=1386&q=camaro%20ss%20&ved=2ahUKEwiF88701_X4AhW2wQIHHVd9AugQMygBegUIARDCAQ'],
['https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.avtotachki.com%2Fwp-content%2Fuploads%2F2020%2F11%2Faudi-q7-2019.jpg&imgrefurl=https%3A%2F%2Favtotachki.com%2Faz%2Faudi-q7-2019%2F&tbnid=L9uf8v-EKjNknM&vet=12ahUKEwjWjuiC2PX4AhWTtqQKHTDYAVUQMygCegUIARC-AQ..i&docid=ILBtthcGy9SQ1M&w=920&h=520&q=audi%20q7&ved=2ahUKEwjWjuiC2PX4AhWTtqQKHTDYAVUQMygCegUIARC-AQ','https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.motor1.com%2Fimages%2Fmgl%2FJmVR6%2Fs1%2F2019-audi-r8-onlocation.jpg&imgrefurl=https%3A%2F%2Fru.motor1.com%2Freviews%2F290363%2F2019-audi-r8-silovoj-napadayushchij%2F&tbnid=B-ydoOBirTDWHM&vet=12ahUKEwjD-Z2O2PX4AhXFwQIHHagkAYgQMygBegUIARC8AQ..i&docid=ZoE-MQuFF5BFpM&w=1920&h=1080&q=audi%20r8&ved=2ahUKEwjD-Z2O2PX4AhXFwQIHHagkAYgQMygBegUIARC8AQ']
];


let one=[
   [model][marka]
];







let markaA=document.getElementById('marka');
let modelA=document.getElementById('model');
let imgA=document.getElementById('imgwe');
let oneA=document.getElementById('one');

onload= function(){
    let data="<option value=''  selected disabled > Markani secin</option>"

for( let i=0; i< marka.length;i++){
    data+=`<option value='${i}'> ${marka[i]} </option>`;
}


markaA.innerHTML=data

}


markaA.onchange=function(){
    let data="<option value=''  selected disabled > Modeli secin</option>"
let value=markaA.value;
    for( let i=0; i< model[value].length;i++){
        data+=`<option value='${i}'> ${model[value][i]} </option>`;
    }

    modelA.innerHTML=data
}


modelA.onchange=function(){
    //let data="<option value=''  selected disabled > Modeli secin</option>"
    let data=""
let value=modelA.value;
    for( let i=0; i< imgwe[value].length;i++){
        data+=`<img scr="${imgwe[value][i]}" / >`;
    }

    imgA.innerHTML=data
}



modelA.onchange=function(){
    

for(let i=0;i<one[value].length;i++){
    data+=`<li value='${one[marka][model]}'></li>`
}









    oneA.innerHTML=data
}
