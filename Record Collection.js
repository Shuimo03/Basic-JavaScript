var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};


// 深拷贝 collection，用于测试
var collectionCopy = JSON.parse(JSON.stringify(collection));

// 请只修改这条注释以下的代码
function update(id, prop, value) {
 
  if(value!==''&&prop!=='tracks')
    {
      collectionCopy[id][prop]=value;
    }
  else if(value!==''&&prop=='tracks')
    {
     collectionCopy[id][prop].push(value); 
    }
  else if(value==='')
    {
      delete collectionCopy[id][prop];
    }
  
  return collection;
}

// 你可以修改这一行来测试你的代码
update(5439, "artist", "ABBA");

/*
右边有一个JSON对象，代表着你的专辑集。每一张专辑由一个唯一的id标识，并具有多种属性。但并非所有的专辑都有完整的信息。

写一个函数，它有个三个参数，id、prop、 value。

如果 value !='' 而且prop != 'tracks' ，collectionCopy[id][prop]=value;。

如果 value !='' 而且prop == 'tracks' ，collectionCopy[id][prop].push(value);。

如果 value == '' ，delete collectionCopy[id][prop];。

记住：函数返回的永远是整个对象。
*/
