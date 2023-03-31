function loop(oooo){
  var angka = ["１","２","３","４","５","６","７","８","９","１０","１１","１２","１３","１４","１５","１６","１７","１８","１９","２０","２１","２２","３０","４０","５０","６０","７０","８０","９０","１００","１５０","３００","６００","８００","１.０００","８.０００","１.５００","１０.０００","１.０００.０００","１０.０００.０００","１００.０００.０００"];
  var hiragana = ["いち","に","さん","よん","ご","ろく","なな","はち","きゅう","じゅう","じゅういち","じゅうに","じゅうさん","じゅうよん","じゅうご","じゅうろく","じゅなな","じゅうはち","じゅうきゅう","にじゅう","にじゅういち","にじゅうに","さんじゅう","よんじゅう","ごじゅう","ろくじゅう","ななじゅう","はちじゅう","きゅうじゅう","ひゃく","ひゃくごじゅう","さんびゃく","ろっぴゃく","はっぴゃく","せん","はっせん","せんごひゃく","いちまん","ひゃくまん","せんまん","いちおく"];
  var latin = ["ichi","ni","san","yon","go","roku","nana","hachi","kyuu","juu","juuichi","juuni","juusan","juuyon","juugo","juuroku","juunana","juuhachi","juukyuu","nijuu","nijuuichi","nijuuni","sanjuu","yonjuu","gojuu","rokujuu","nanajuu","hachijuu","kyuujuu","hyaku","hyaku-goju","sanbyaku","roppyaku","happyaku","sen","hassen","sen-gohyaku","ichiman","hyaku-man","sen-man","ichioku"];

 var pti ="";



  for ( var i = 0; i < angka.length; i++){

    if (i%2==0) {
      pti+= `
      <ons-list-item style="background-color:#ffff8a;" onclick="play('span.list-item__title',`+[i]+`);">
      <div class="left">
      <h2>`+ angka[i]+`</h2>
      </div>
      <div class="center">
      <span class="list-item__title"><p>  </p>`+hiragana[i]+`</span>
      <span class="list-item__subtitle" style="color:crimson"><p>  </p>`+latin[i]+`</span>
      </div>
      </ons-list-item >

      `;
    }
    else{
      pti += `
      <ons-list-item style="background-color:#adffb4;" onclick="play('span.list-item__title',`+[i]+`);">
      <div class="left">
      <h2>`+ angka[i]+`</h2>
      </div>
      <div class="center">
      <span class="list-item__title"><p>  </p>`+hiragana[i]+`</span>
      <span class="list-item__subtitle" style="color:crimson"><p>  </p>`+latin[i]+`</span>
      </div>
      </ons-list-item >
      `;
    }
    like(oooo,pti);
  }
};

