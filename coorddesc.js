
//////////////////////
/*
makes it so coords display in the tile description box that appears when hovering over tiles on thetravelers.online
also has streamer mode functionality for anyone that cares
this is purely just a small QoL mod
-slippy/hentai
*/
//////////////////////

var coord_desc = function (el, stream) {
  if (stream) {return "";}//if true, do not show coords, for streamers
  let coords = el.id.split("|");
  return "<br>x: "+coords[0]+"<br>y: "+coords[1];
}

var init = function () {
  var desc_rem = 'html = WORLD.returnTileDesc(el);';
  var desc_add = `html = WORLD.returnTileDesc(el)+coord_desc(el, streamer);`;
  var desc_str = HOVER.on.toString();
  desc_str = desc_str.replace(desc_rem, desc_add);
  HOVER.on = eval('('+desc_str+')');//thank you LightningWB
}

var streamer = false;

init();