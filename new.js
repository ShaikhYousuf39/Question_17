// Part 1
var guestsList = ["Mehwish", "Rohan", "Ali", "Zeeshan"];
//let canNotAttend : string = "Rohan";
// let newGuest = "Zeeshan";
//guestsList [guestsList.indexOf(canNotAttend)] = newGuest;
// guestsList.map((items) => console.log(` Dear ${items}, I found bigger table so I am inviting more peoples.`) );
var guestBeg = "Faizan";
guestsList.unshift(guestBeg);
// console.log(guestsList)
var midGuest = "Mohsin";
var midIndex = guestsList.length / 3;
guestsList.splice(midIndex, 0, midGuest);
// console.log(guestsList)
guestsList.push("Talha");
// console.log(guestsList)
//guestsList.map((items)=> console.log(`Dear ${items}, You Are Invited In The More Guest List In My House For Dinner`));
// Part 2
//Task 1
console.log("Sorry We Can't Arrange Big Table We Can Invite Only Two People. ");
// Task 2
var guests = ["Faizan", "Mohsin", "Talha", "Zeeshan", "Ali", "Mehwish", "Rohan"];
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sir, ".concat(removedGuest, ", You Are No Longer Invited In Dinner Due To Space Limit Because My New Table Is Not Coming."));
}
//Task 3
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", You Are Still Invited In Dinner."));
});
// Task 4
guests.splice(0, 2);
console.log(guests);
