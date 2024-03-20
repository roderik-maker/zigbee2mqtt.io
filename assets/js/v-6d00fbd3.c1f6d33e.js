"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[32731],{102368:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-6d00fbd3","path":"/guide/configuration/adapter-settings.html","title":"Adapter settings","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"excerpt":"","headers":[{"level":2,"title":"Configuration of the Zigbee adapter","slug":"configuration-of-the-zigbee-adapter","link":"#configuration-of-the-zigbee-adapter","children":[]},{"level":2,"title":"mDNS Zeroconf discovery.","slug":"mdns-zeroconf-discovery","link":"#mdns-zeroconf-discovery","children":[]},{"level":2,"title":"Advanced configuration.","slug":"advanced-configuration","link":"#advanced-configuration","children":[]}],"git":{"updatedTime":1710965783000},"filePathRelative":"guide/configuration/adapter-settings.md"}')},784224:(e,a,n)=>{n.r(a),n.d(a,{default:()=>l});var s=n(166252);const t=(0,s.uE)('<h1 id="adapter-settings" tabindex="-1"><a class="header-anchor" href="#adapter-settings" aria-hidden="true">#</a> Adapter settings</h1><h2 id="configuration-of-the-zigbee-adapter" tabindex="-1"><a class="header-anchor" href="#configuration-of-the-zigbee-adapter" aria-hidden="true">#</a> Configuration of the Zigbee adapter</h2><p>For USB apdaters you can use <code>dmesg</code> command on Linux hosts to find the mounted device. Where possible you should use the <code>/dev/serial/by-id/</code> path of the stick, instead of <code>/dev/tty*</code>. This is because the <code>/dev/tty*</code> path can change - for example <code>/dev/ttyACM0</code> may become <code>/dev/ttyACM1</code> and then later back to <code>/dev/ttyACM0</code>. The <code>/dev/serial/by-id/</code> path won&#39;t change.</p><p>For Zigbee network adapters you need to find IP address of your adapter through router/switch web-interface.\\</p><div class="custom-container warning"><p class="custom-container-title">ATTENTION</p><p>IP address of the Zigbee network adapter can change if it has not been assigned a static IP address</p></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Required: serial settings</span>\n<span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token comment"># Required: location of the adapter (e.g. CC2531).</span>\n  <span class="token comment"># USB adapters - use format &quot;port: /dev/ttyACM0&quot;</span>\n  <span class="token comment"># To autodetect the USB port, set &#39;port: null&#39;.</span>\n  <span class="token comment"># Ethernet adapters - use format &quot;port: tcp://192.168.1.12:6638&quot;</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> /dev/ttyACM0 \n  <span class="token comment"># Optional: disable LED of the adapter if supported (default: false)</span>\n  <span class="token key atrule">disable_led</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n  <span class="token comment"># Optional: adapter type, not needed unless you are experiencing problems (default: shown below, options: zstack, deconz, ezsp)</span>\n  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n  <span class="token comment"># Optional: Baud rate speed for serial port, this can be anything firmware support but default is 115200 for Z-Stack and EZSP, 38400 for Deconz, however note that some EZSP firmware need 57600.</span>\n  <span class="token key atrule">baudrate</span><span class="token punctuation">:</span> <span class="token number">115200</span>\n  <span class="token comment"># Optional: RTS / CTS Hardware Flow Control for serial port (default: false)</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mdns-zeroconf-discovery" tabindex="-1"><a class="header-anchor" href="#mdns-zeroconf-discovery" aria-hidden="true">#</a> mDNS Zeroconf discovery.</h2><p>Zigbee2MQTT supports automatic discovery of Zigbee network Adapters. In order to use this feature, your adapter must support discovery via mDNS Zeroconf.</p><p>If you have a more than 1 device with the same mDNS service type (name), Zigbee2MQTT with autodiscover option will connect to the random one. So for proper use we recommend to have only one physically connected network adapter with the same mDNS service type (name). Otherwise, please set-up a settings over IP address and port, as described on the passage above.</p><div class="custom-container warning"><p class="custom-container-title">ATTENTION</p><p>When using this autodetection, the following parameters in <code>configuration.yaml</code> will be ignored: <code>adapter</code>, <code>baudrate</code></p></div><p>List of tested devices supporting mDNS Zeroconf autodiscovery:</p><table><thead><tr><th style="text-align:left;">Device</th><th style="text-align:center;">MDNS service type</th></tr></thead><tbody><tr><td style="text-align:left;">SLZB-06</td><td style="text-align:center;">slzb-06</td></tr><tr><td style="text-align:left;">UZG-01</td><td style="text-align:center;">uzg-01</td></tr></tbody></table><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> mdns<span class="token punctuation">:</span>//slzb<span class="token punctuation">-</span><span class="token number">06</span>\n  <span class="token comment"># port: mdns://uzg-01</span>\n  <span class="token comment"># Optional: disable LED of the adapter if supported (default: false)</span>\n  <span class="token key atrule">disable_led</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',13),o=(0,s.uE)('<h2 id="advanced-configuration" tabindex="-1"><a class="header-anchor" href="#advanced-configuration" aria-hidden="true">#</a> Advanced configuration.</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token comment"># Optional: configure adapter concurrency (e.g. 2 for CC2531 or 16 for CC26X2R1) (default: null, uses recommended value)</span>\n  <span class="token key atrule">adapter_concurrent</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n  <span class="token comment"># Optional: Transmit power setting in dBm (default: 5).</span>\n  <span class="token comment"># This will set the transmit power for devices that bring an inbuilt amplifier.</span>\n  <span class="token comment"># It can&#39;t go over the maximum of the respective hardware and might be limited</span>\n  <span class="token comment"># by firmware (for example to migrate heat, or by using an unsupported firmware).</span>\n  <span class="token comment"># For the CC2652R(B) this is 5 dBm, CC2652P/CC1352P-2 20 dBm.</span>\n  <span class="token key atrule">transmit_power</span><span class="token punctuation">:</span> <span class="token number">5</span>\n  <span class="token comment"># Optional: Set the adapter delay, only used for Conbee/Raspbee adapters (default 0).</span>\n  <span class="token comment"># In case you are having issues try `200`.</span>\n  <span class="token comment"># For more information see https://github.com/Koenkk/zigbee2mqtt/issues/4884</span>\n  <span class="token key atrule">adapter_delay</span><span class="token punctuation">:</span> <span class="token number">0</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),i={class:"custom-container tip"},d=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),r={},l=(0,n(983744).Z)(r,[["render",function(e,a){const n=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("div",null,[t,(0,s.kq)(" TODO: some notes about rtscts? Is it useful, which adapter supports it? "),o,(0,s._)("div",i,[d,(0,s._)("p",null,[(0,s.Uk)("It's also possible to connect USB Adapters over TCP. See how to connect a "),(0,s.Wm)(n,{to:"/advanced/remote-adapter/connect_to_a_remote_adapter.html"},{default:(0,s.w5)((()=>[(0,s.Uk)("remote adapter")])),_:1}),(0,s.Uk)(".")])])])}]])}}]);