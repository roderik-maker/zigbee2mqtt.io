"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[63019],{748296:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-6002fc04","path":"/devices/MS-108ZR.html","title":"Moes MS-108ZR control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes MS-108ZR control via MQTT","description":"Integrate your Moes MS-108ZR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-01T17:18:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Calibration time (numeric)","slug":"calibration-time-numeric","link":"#calibration-time-numeric","children":[]},{"level":3,"title":"Moving (enum)","slug":"moving-enum","link":"#moving-enum","children":[]},{"level":3,"title":"Motor reversal (binary)","slug":"motor-reversal-binary","link":"#motor-reversal-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710965783000},"filePathRelative":"devices/MS-108ZR.md"}')},914553:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(166252);const a=(0,i._)("h1",{id:"moes-ms-108zr",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#moes-ms-108zr","aria-hidden":"true"},"#"),(0,i.Uk)(" Moes MS-108ZR")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"MS-108ZR")],-1),n=(0,i._)("td",null,"Vendor",-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee + RF curtain switch module")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position), calibration_time, moving, motor_reversal, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MS-108ZR.png",alt:"Moes MS-108ZR"})])],-1),u=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-time-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric" aria-hidden="true">#</a> Calibration time (numeric)</h3><p>Value can be found in the published state on the <code>calibration_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="moving-enum" tabindex="-1"><a class="header-anchor" href="#moving-enum" aria-hidden="true">#</a> Moving (enum)</h3><p>Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="motor-reversal-binary" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary" aria-hidden="true">#</a> Motor reversal (binary)</h3><p>Value can be found in the published state on the <code>motor_reversal</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),m={},v=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Moes"},{default:(0,i.w5)((()=>[(0,i.Uk)("Moes")])),_:1})])]),r,s,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);