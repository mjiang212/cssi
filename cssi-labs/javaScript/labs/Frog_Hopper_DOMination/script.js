// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let currentlily = 1;

let frogger = document.querySelector('#frog')/*use a querySelector to grab your frog from your HTML*/;

frogger.addEventListener('click'/* Insert type of event are we listening for */, function(){
// Insert what should happen when you click on the frog!
  console.log('hop');
  frog.addEventListener('click', e=>{
  frog.style.left = "33.5%";
  frog.style.top=   "24%";
  // Q2, 3: adding/removing glowing...
  document.getElementById("lilypad2").classList.add("active");
});
  document.getElementById("lilypad1").classList.remove("active");
});
// adding addEventListener....
frogger.addEventListener('mouseover' /* Insert type of event are we listening for */, function(){
// Insert what should happen when you mouseover the frog!
  frog.style.height = "80px";
  frog.style.width = "80px";
});
frogger.addEventListener('mouseout' /* Insert type of event are we listening for */, function(){
// Insert what should happen when you mouseover the frog!
  frog.style.height = "70px";
  frog.style.width = "70px";
});
