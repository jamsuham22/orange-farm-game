!function(e){function t(t){for(var i,a,h=t[0],o=t[1],d=t[2],g=0,l=[];g<h.length;g++)a=h[g],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(c&&c(t);l.length;)l.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,h=1;h<s.length;h++){var o=s[h];0!==r[o]&&(i=!1)}i&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},r={0:0},n=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var h=window.webpackJsonp=window.webpackJsonp||[],o=h.push.bind(h);h.push=t,h=h.slice();for(var d=0;d<h.length;d++)t(h[d]);var c=o;n.push([1,1]),s()}([,function(e,t,s){"use strict";s.r(t);var i=s(0),r=s.n(i);const n={LOAD:"LOAD",MENU:"MENU",GAME:"GAME",CORRECT:"CORRECT"};class a extends Phaser.Scene{constructor(){super({key:n.CORRECT})}init(e){this.goal=e}preload(){}create(){this.add.image(0,0,"sky").setOrigin(0);let e=this.add.image(this.game.renderer.width-80,this.game.renderer.height-60,"again").setScale(2).setInteractive();this.add.text(20,this.game.renderer.height-100,`You packed ${this.goal} oranges! \nGreat job! Play again!`,{fontSize:"32px"}),this.sound.play("correct"),e.on("pointerdown",(()=>{this.sound.stopAll(),this.scene.remove(n.MENU),this.scene.remove(n.GAME),this.scene.add(n.MENU,o,!0)}))}}class h extends Phaser.Scene{constructor(){super({key:n.GAME})}init(e){this.data=e}create(){}preload(){}create(){this.add.image(0,0,"sky").setOrigin(0),this.goal=Phaser.Math.Between(this.data.number-2,this.data.number),this.add.text(20,this.game.renderer.height-80,`Let's pack ${this.goal} oranges!\n `,{fontSize:"32px"}),this.count=0;for(let e=0;e<this.data.number;e++){let e=Phaser.Math.Between(.1*this.game.renderer.width,.8*this.game.renderer.width),t=Phaser.Math.Between(.1*this.game.renderer.height,.8*this.game.renderer.height);this.add.image(e,t,"orange").setScale(.4).setInteractive()}let e=this.add.image(this.game.renderer.width-50,this.game.renderer.height-50,"bag").setScale(.3);e.setInteractive(),this.input.on("pointerdown",this.startDrag,this),e.on("pointerover",(()=>{e.setTint(11776947)})),e.on("pointerout",(()=>{e.clearTint()}))}checkBag(){if(this.goal===this.count)this.scene.add(n.CORRECT,a,!1),this.scene.start(n.CORRECT,this.goal);else{this.sound.play("try"),this.add.text(.1*this.game.renderer.width,.4*this.game.renderer.height,`You packed ${this.count} oranges! \nLet's try again!`,{fontSize:"32px"}),this.add.image(.85*this.game.renderer.width,.45*this.game.renderer.height,"again").setScale(2).setInteractive().on("pointerdown",(()=>{this.scene.restart()}))}}startDrag(e,t){if(e.x>this.game.renderer.width-99&&e.y>this.game.renderer.height-99)return this.checkBag();this.selected=t[0],this.input.off("pointerdown",this.startDrag,this),this.input.on("pointermove",this.doDrag,this),this.input.on("pointerup",this.endDrag,this)}doDrag(e){this.selected&&(this.selected.setTint(15565421),this.selected.x=e.x,this.selected.y=e.y)}endDrag(e,t){this.input.off("pointerup",this.endDrag,this),this.input.off("pointermove",this.doDrag,this),this.input.on("pointerdown",this.startDrag,this),this.selected&&this.selected.clearTint(),this.selected.x>this.game.renderer.width-100&&this.selected.y>this.game.renderer.height-100&&(this.selected.destroy(),this.count++,this.sound.play("put"))}}class o extends Phaser.Scene{constructor(){super({key:n.MENU})}create(){}preload(){this.scene.remove(n.CORRECT)}create(){this.add.image(0,0,"sky").setOrigin(0).setDepth(0),this.add.image(.5*this.game.renderer.width,.3*this.game.renderer.height,"title").setScale(.5).setDepth(1);let e=this.add.image(.25*this.game.renderer.width,.6*this.game.renderer.height,"123").setScale(.2).setDepth(1).setInteractive(),t=this.add.image(.5*this.game.renderer.width,.8*this.game.renderer.height,"456").setScale(.2).setDepth(1).setInteractive(),s=this.add.image(.75*this.game.renderer.width,.6*this.game.renderer.height,"789").setScale(.2).setDepth(1).setInteractive();this.sound.pauseOnBlur=!1,this.sound.play("title_music",{loop:!0}),e.on("pointerover",(()=>{t.setTint(11776947),s.setTint(11776947)})),e.on("pointerout",(()=>{t.clearTint(),s.clearTint()})),t.on("pointerover",(()=>{e.setTint(11776947),s.setTint(11776947)})),t.on("pointerout",(()=>{e.clearTint(),s.clearTint()})),s.on("pointerover",(()=>{e.setTint(11776947),t.setTint(11776947)})),s.on("pointerout",(()=>{e.clearTint(),t.clearTint()})),this.scene.add(n.GAME,h,!1),e.on("pointerdown",(()=>{this.scene.start(n.GAME,{number:3})})),t.on("pointerdown",(()=>{this.scene.start(n.GAME,{number:6})})),s.on("pointerdown",(()=>{this.scene.start(n.GAME,{number:9})}))}}class d extends Phaser.Scene{constructor(){super({key:n.LOAD})}preload(){this.load.image("sky","assets/sky.png"),this.load.image("bag","assets/bag.png"),this.load.image("orange","assets/orange.png"),this.load.image("title","assets/title.png"),this.load.image("123","assets/123.png"),this.load.image("456","assets/456.png"),this.load.image("789","assets/789.png"),this.load.image("again","assets/back.png"),this.load.audio("title_music","assets/natural.mp3"),this.load.audio("correct","assets/correct.mp3"),this.load.audio("put","assets/put.mp3"),this.load.audio("try","assets/try.mp3");let e=this.add.graphics({fillStyle:{color:16562691}});this.load.on("progress",(t=>{e.fillRect(0,this.game.renderer.height/2,this.game.renderer.width*t,50)})),this.load.on("complete",(()=>{this.scene.add(n.MENU,o,!1),this.scene.start(n.MENU)}))}create(){}}const c={type:r.a.AUTO,width:600,height:600,physics:{default:"arcade",arcade:{debug:!0}},scene:[d]};new r.a.Game(c)}]);