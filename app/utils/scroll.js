import jump from 'jump.js';


export default {
  scroll: function(targetId, options){
    const id = "#" + targetId;
    if(options === null){
      return jump(id);
    }

    return jump(id, options);
  }
}