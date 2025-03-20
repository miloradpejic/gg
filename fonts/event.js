var eventList;

function on(event,callback){
    if(eventList == null)
        eventList={};
    if(eventList[event]==null)
        eventList[event]=[];
    eventList[event].push(callback);
}
function trigger(name,data){
    if(typeof eventList === 'undefined' || typeof eventList[eventList]==='undefined')return;
    eventList[name].forEach( function(callback){
        callback(name,data);
    },this);
} a dal ovo radi u svelte