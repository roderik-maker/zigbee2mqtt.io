"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26878],{352488:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-2f0d906b","path":"/devices/SZR07U.html","title":"TuYa SZR07U control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa SZR07U control via MQTT","description":"Integrate your TuYa SZR07U via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:38:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Detection range (numeric)","slug":"detection-range-numeric","link":"#detection-range-numeric","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Indicator (binary)","slug":"indicator-binary","link":"#indicator-binary","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1710965783000},"filePathRelative":"devices/SZR07U.md"}')},247366:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(166252);const d=(0,a._)("h1",{id:"tuya-szr07u",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-szr07u","aria-hidden":"true"},"#"),(0,a.Uk)(" TuYa SZR07U")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"SZR07U")],-1),r=(0,a._)("td",null,"Vendor",-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"24GHz millimeter wave radar")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"presence, detection_range, radar_sensitivity, target_distance, indicator, fading_time, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SZR07U.png",alt:"TuYa SZR07U"})])],-1),u=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary" aria-hidden="true">#</a> Presence (binary)</h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="detection-range-numeric" tabindex="-1"><a class="header-anchor" href="#detection-range-numeric" aria-hidden="true">#</a> Detection range (numeric)</h3><p>Maximum range. Value can be found in the published state on the <code>detection_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_range&quot;: NEW_VALUE}</code>. The minimal value is <code>1.5</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric" aria-hidden="true">#</a> Radar sensitivity (numeric)</h3><p>Sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>68</code> and the maximum value is <code>90</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric" aria-hidden="true">#</a> Target distance (numeric)</h3><p>Distance of detected target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>cm</code>.</p><h3 id="indicator-binary" tabindex="-1"><a class="header-anchor" href="#indicator-binary" aria-hidden="true">#</a> Indicator (binary)</h3><p>LED indicator. Value can be found in the published state on the <code>indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> indicator is ON, if <code>OFF</code> OFF.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric" aria-hidden="true">#</a> Fading time (numeric)</h3><p>Fading time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>1799</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),h={},m=(0,i(983744).Z)(h,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),d,(0,a._)("table",null,[n,(0,a._)("tbody",null,[o,(0,a._)("tr",null,[r,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,a.w5)((()=>[(0,a.Uk)("TuYa")])),_:1})])]),c,s,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,a.kq)(" Notes END: Do not edit below this line "),u])}]])}}]);