"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[23156],{691601:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-6f4f5f92","path":"/devices/SLT2.html","title":"Hive SLT2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Hive SLT2 control via MQTT","description":"Integrate your Hive SLT2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-05-19T20:48:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710965783000},"filePathRelative":"devices/SLT2.md"}')},737244:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var a=i(166252);const r=(0,a._)("h1",{id:"hive-slt2",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hive-slt2","aria-hidden":"true"},"#"),(0,a.Uk)(" Hive SLT2")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SLT2")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Heating thermostat remote control")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SLT2.png",alt:"Hive SLT2"})])],-1),h=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the thermostat controller to both Zigbee2MQTT and the thermostat receiver, a factory reset will need to be performed. To begin a factory reset:</p><ol><li>remove a battery</li><li>press and hold both the &quot;+&quot; and &quot;-&quot; buttons together</li><li>reinsert the battery (with the buttons remained pressed)</li><li>wait until the word &quot;FIND&quot; appears on screen (around 10 seconds)</li><li>once paired, the word &quot;FIND&quot; disappears and the temperature will be displayed</li></ol><p>Zigbee2MQTT should have found the thermostat. If the word &quot;REJOIN&quot; appears on screen, the buttons were released too early and the process must be repeated. The controller should be able to control the boiler whilst still reporting to Zigbee2MQTT.</p>',5),c=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),p={},b=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[n,(0,a._)("tbody",null,[o,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Hive"},{default:(0,a.w5)((()=>[(0,a.Uk)("Hive")])),_:1})])]),d,s,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,a.kq)(" Notes END: Do not edit below this line "),c])}]])}}]);