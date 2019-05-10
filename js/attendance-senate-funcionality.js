var dataR = data.results[0].members

function getMembersByParty(PartyMembers){
  var members = dataR.filter(member => member.party == PartyMembers)
return members;
}


var republicans = getMembersByParty("R");
var democrats = getMembersByParty("D");
var independents= getMembersByParty("I");

statistics.numbers_of_republicans = republicans.length;
statistics.numbers_of_democrats = democrats.length;
statistics.numbers_of_independents = independents.length;
  