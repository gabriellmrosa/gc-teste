!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(){"use strict";fetch("https://api.myjson.com/bins/sqwaq",{method:"GET"}).then(e=>{e.json().then(e=>{!function(e){(function(e){console.log(e);const t=document.querySelector(".gc-name"),n=document.querySelector(".gc-id"),r=document.querySelector(".progress-bar");let o=document.querySelector(".pin-level-casual"),c=document.querySelector(".pin-level-competitive"),a=document.querySelector(".pin-level-amateur"),l=document.querySelector(".pin-level-pro"),s=document.querySelector(".-featured-medal"),u=document.querySelector(".-position"),i=document.querySelector(".-patent"),d=document.querySelector(".-level");t.textContent=`GC.${e.user.name}`,n.textContent=`GC ID: ${e.user.id}`,s.src=e.user.featured_medal.image,u.src=e.user.game_position.image,i.src=e.user.patent,d.textContent=e.user.level,"casual"==e.user.expertise?(r.style.cssText="width:25%;",o.src="img/pin-level-blue.png"):"competitive"==e.user.expertise?(r.style.cssText="width:50%;",o.src="img/pin-level-blue.png",c.src="img/pin-level-blue.png"):"amateur"==e.user.expertise?(r.style.cssText="width:75%;",o.src="img/pin-level-blue.png",c.src="img/pin-level-blue.png",a.src="img/pin-level-blue.png"):"pro"==e.user.expertise&&(r.style.cssText="width:100%;",o.src="img/pin-level-blue.png",c.src="img/pin-level-blue.png",a.src="img/pin-level-blue.png",l.src="img/pin-level-blue.png")})(e),function(e){const t=document.querySelector(".image-forfun-title"),n=document.querySelector(".title-forfun-area");t.src="https://gamersclub.com.br/assets/images/jogueagora/casual-icon@2x.svg",n.textContent=e["4fun"].title,function(e){let t=e["4fun"].servers,n=document.querySelector(".forfun-area"),r=document.querySelector(".navigation-area"),o=1,c=1;t.forEach(e=>{const t=e.max,a=e.current,l=101*a/t;if(1==o){const e=`\n                    <label class="navigation-forfun">\n                        <input type="radio" class="reference-${c}" name="forfun" id="navigation-${c}" ${1==c?"checked=checked":""}">\n                        <span></span>\n                    </label>\n                `;r.insertAdjacentHTML("beforeend",e);const t=`\n                    <div class="group-quad-area reference-${c} ${1==c?"show":"hide"}" id="group-quad-${c}">\n                        \n                    </div>\n                `;n.insertAdjacentHTML("beforeend",t)}const s=`\n                <article class="forfun-quad">\n                    <div class="flex-area w-100">\n                        <button class="bt-forfun-area -btn-clipboard" data-clipboard-id="1" data-clipboard-text="${e.copy}">\n                            <img src="img/copy-paste-icon.png" alt="Gamers Club">\n                        </button>\n                        <a href="${e.join}" class="bt-forfun-area -green"> <img src="img/goto-icon.png" alt="Gamers Club">\n                        </a>\n                    </div>\n\n                    <div class="w-100">\n                        <div>\n                            <p class="descri-forfun-area">#${e.id} - Deathmatch <strong>${e.mode}</strong></p>\n                        </div>\n                        <div>\n                            <p class="title-progressbar-forfun-area"><span class="map-name">${e.map}</span> <span>${e.current}/${e.max}</span></p>\n                            <div class="progress-bar-forfun-area">\n                                <span class="progress-bar-forfun" style="width:${l}%;"></span>\n                            </div>\n                        </div>\n                    </div>\n                </article> \n            `;new ClipboardJS('[data-clipboard-id="1"]');let u=document.querySelector(`#group-quad-${c}`);u.insertAdjacentHTML("beforeend",s),4==++o&&(o=1,c++)}),document.querySelectorAll('input[type="radio"]').forEach(e=>{e.addEventListener("click",e=>{let t=e.target;if(t.checked){let e=t.classList[0],n=document.querySelectorAll(".group-quad-area");n.forEach(t=>{t.classList.contains(`${e}`)?(t.classList.add("show"),t.classList.remove("hide")):(t.classList.add("hide"),t.classList.remove("show"))})}})})}(e)}(e),function(e){let t=document.querySelector(".title-lobby-area"),n=document.querySelector(".title-ranked-area"),r=document.querySelector(".image-lobby-title"),o=document.querySelector(".image-ranked-title"),c=document.querySelector(".lobby-played-number"),a=document.querySelector(".lobby-victory-number"),l=document.querySelector(".lobby-lose-number"),s=document.querySelector(".ranked-played-number"),u=document.querySelector(".ranked-victory-number"),i=document.querySelector(".ranked-lose-number"),d=document.querySelector(".bt-lobby"),m=document.querySelector(".bt-ranked"),p=document.querySelector(".users-number-area .number");t.textContent=e.games[0].title,r.src=e.games[0].image,n.textContent=e.games[1].title,o.src=e.games[1].image,c.textContent=e.games[0].matches,a.textContent=e.games[0].win,l.textContent=e.games[0].lose,s.textContent=e.games[1].matches,u.textContent=e.games[1].win,i.textContent=e.games[1].lose,d.href=e.games[0].cta.link,m.href=e.games[1].cta.link,p.textContent=e.games[1].cta.line}(e),function(e){let t=document.querySelector(".online-players"),n=document.querySelector(".banned-players");t.textContent=e.online,n.textContent=e.latest_banned}(e)}(e)})}).catch(function(e){console.error(e)})}()}]);