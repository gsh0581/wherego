<template>
  <div>
    <div id="login">
      <dl class="list">
        <dd class="nav">
          <ul class="taba taban samfix noslide" data-com="tab">
            <li class="active" tab-target="normal-login-form" gaevent="imt/login/tab/normal">
              <a class="react">美团账号登录</a>
            </li>
            <li tab-target="quick-login-form" gaevent="imt/login/quickBuy/" class>
              <a class="react">手机验证登录</a>
            </li>
            <div class="slide" style="width: 355px; left: 20px;"></div>
          </ul>
        </dd>
      </dl>
      <form
        id="normal-login-form"
        action="//i.meituan.com/account/login2"
        autocomplete="off"
        method="post"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <dl class="list list-in">
          <dd class="visibale">
            <dl>
              <dd class="dd-padding kv-line-r">
                <img
                  class="login-icon"
                  src="https://ms0.meituan.net/touch/img/account/login/icon_login_user@2x.png"
                />
                <input
                  id="username"
                  class="input-weak J-login-name J-input J-account"
                  type="text"
                  placeholder="账户名/手机号/Email"
                  name="email"
                  value
                  required
                />
                <div class="to-del J-to-del" style="display: none"></div>
              </dd>
              <ul class="tel-select J-select-user J-select" style="display: none"></ul>
              <dd class="dd-padding kv-line-r">
                <img
                  class="login-icon"
                  src="https://ms0.meituan.net/touch/img/account/login/icon_login_password@2x.png"
                />
                <input
                  id="password"
                  class="input-weak J-input"
                  type="password"
                  placeholder="请输入您的密码"
                  name="password"
                  required
                />
                <div class="to-del J-to-del" style="display: none"></div>
              </dd>
            </dl>
          </dd>
        </dl>

        <div class="btn-wrapper">
          <button
            type="submit"
            gaevent="imt/login/normal"
            class="btn btn-larger btn-block disabled mj_login login-btn"
          >登录</button>
        </div>
        <input type="hidden" name="touchEvents" />
        <input type="hidden" name="extraFingerPrint" />
        <div class="forget">
          <a class="link" href="https://passport.meituan.com/useraccount/retrievepassword">忘记密码</a>
        </div>
        <input type="hidden" name="requestCode" />
        <input type="hidden" name="responseCode" />
      </form>
      <form
        id="quick-login-form"
        action="https://i.meituan.com/account/mobilelogin2"
        autocomplete="off"
        method="post"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;"
      >
        <dl class="list list-in">
          <dd class="visibale">
            <dl>
              <dd
                class="kv-line-r dd-padding"
                data-com="smsBtn_quick"
                data-requrl="/account/custom/mobilelogincode2"
              >
                <img
                  class="login-icon icon-align"
                  src="https://ms0.meituan.net/touch/img/account/login/icon_signin_phone@2x.png"
                />
                <input
                  type="tel"
                  name="mobile"
                  id="login-mobile"
                  class="input-weak kv-k J-input J-tel J-login-name"
                  placeholder="请输入手机号"
                  maxlength="11"
                />
                <div class="to-del J-to-del-mobile J-to-del" style="display: none"></div>
                <button
                  id="smsCode"
                  type="button"
                  class="btn btn-weak kv-v btn-captacha"
                  gaevent="imt/buy/quickBuy/send"
                  disabled="disabled"
                >获取验证码</button>
              </dd>
              <ul class="tel-select J-select" style="display: none"></ul>
              <dd class="kv-line-r dd-padding">
                <img
                  class="login-icon"
                  src="https://ms0.meituan.net/touch/img/account/login/icon_phone_check_code@2x.png"
                />
                <input
                  class="input-weak kv-k J_input_sms J-input"
                  name="code"
                  type="tel"
                  pattern="[0-9]+"
                  placeholder="请输入短信验证码"
                  disabled="true"
                />
                <div class="to-del J-to-del-code J-to-del" style="display: none"></div>
              </dd>
              <dd class="dd-padding regist-tip">
                <div class="txt">未注册过的手机将自动注册为美团账户</div>
              </dd>
            </dl>
          </dd>
        </dl>
        <div class="btn-wrapper">
          <button
            type="submit"
            gaevent="imt/login/quick"
            class="btn btn-larger btn-block mj_login login-btn"
            disabled="disabled"
          >登录</button>
        </div>
        <input type="hidden" name="touchEvents" />
        <input type="hidden" name="extraFingerPrint" />
        <div class="unreceived-tip J-not-received">
          <p>
            仍未收到验证码？拨打
            <a href="tel:10109777" class="dial">查询热线</a>快速获取吧（9：00-23：00提供服务）
          </p>
        </div>
        <input type="hidden" name="action" />
        <input type="hidden" name="request_code" />
        <input type="hidden" name="response_code" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
dl.list {
    border-top: 1px solid #DDD8CE;
    border-bottom: 1px solid #DDD8CE;
    margin-top: .2rem;
    margin-bottom: 0;
    background-color: #fff
}

dl.list dt,dl.list dd {
    margin: 0;
    border-bottom: 1px solid #DDD8CE;
    overflow: hidden;
    font-size: inherit;
    font-weight: 400;
    position: relative
}

dl.list dt:last-child,dl.list dd:last-of-type {
    border-bottom: 0
}

dl.list .dd-padding,dl.list dt,dl.list dd>.react {
    padding: .28rem .2rem
}

dl.list dd.poi-list-item>.react {
    padding-bottom: .2rem;
    padding-top: .2rem
}

dl.list dt {
    font-size: .34rem;
    padding-bottom: .2rem;
    color: #333
}

dl.list .db {
    height: .8rem;
    line-height: .8rem;
    font-size: .3rem
}

dl.list dd dl {
    margin: 0;
    margin-bottom: -1px;
    padding-left: .2rem;
    border: 0
}

dl.list dd dl>.dd-padding,dl.list dd dl dd>.react,dl.list dd dl>dt {
    padding-left: 0
}

dl.list .db>.react {
    color: #06c1ae;
    padding: 0 .2rem
}

dl.list .posi-right-bottom {
    position: absolute;
    bottom: .26rem;
    right: .2rem
}

dl.list .statusInfo {
    color: #666;
    font-size: .24rem
}

dl.list del {
    text-decoration: none
}

dl.list del:before {
    content: '门市价:'
}

dl.list-in {
    margin: 0;
    border-top: 0
}

dl.list:first-child {
    margin: 0;
    border-top: 0
}

dl.list dd>.input-weak {
    width: 100%;
    display: block
}

dl.list dd>.btn {
    margin-top: -.15rem;
    margin-bottom: -.15rem
}

.kv-line {
    display: -webkit-box;
    display: -ms-flexbox;
    margin: .2rem 0
}

.kv-line>h6,.kv-line>.kv-k {
    display: block;
    width: 5em;
    font-size: inherit;
    font-weight: 400
}

.kv-line>.kv-v,.kv-line>p {
    display: block;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    }

.kv-line-r {
    display: -webkit-box;
    display: -ms-flexbox;
    margin: .2rem 0
}

.kv-line-r>h6,.kv-line-r>.kv-k {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    
    font-size: inherit;
    font-weight: 400;
    margin-right: .2rem;
    display: block
}

.kv-line-r>.kv-v,.kv-line-r>p {
    display: block
}

ul.tab {
    display: inline-block;
    height: .6rem;
    line-height: .6rem;
    border-radius: .04rem;
    border: 1px solid #666
}

.tab li {
    display: inline-block;
    text-align: center;
    width: 2.4rem;
    border-right: 1px solid #666
}

.tab li:last-child {
    border: 0
}

.tab li.active {
    background: #666;
    color: #fff
}

ul.tab-strong {
    border-color: #06c1ae;
    color: #06c1ae
}

.tab-strong li {
    border-right-color: #06c1ae
}

.tab-strong li.active {
    background: #06c1ae
}

.taba {
    display: -webkit-box;
    display: -ms-flexbox;
    padding-left: .2rem;
    padding-right: .2rem;
    position: relative;
    border-bottom: .08rem solid #DDD8CE
}

.taba li {
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
    
    position: relative
}

.taba li.active {
    color: #06c1ae
}

.taba.noslide li.active:after {
    content: null
}

.taba li.active:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -.08rem;
    border-bottom: .08rem solid #06c1ae;
    width: 100%
}

.taba li a.react {
    padding-top: .28rem;
    padding-bottom: .2rem
}

.taba.noslide li.active:after {
    content: none
}

.taba .slide {
    position: absolute;
    bottom: -.08rem;
    border-bottom: .08rem solid #06c1ae;
    -webkit-transition: left .2s ease-in
}

.nav-bread {
    padding: .3rem .2rem 0;
    margin-bottom: .3rem;
    color: #06c1ae;
    font-size: .24rem
}

.nav-bread h1 {
    color: #06c1ae;
    font-size: .24rem;
    font-weight: 400;
    display: inline
}

.navbar {
    height: 1.01rem;
    color: #fff;
    background: #06c1ae;
    border-bottom: 1px solid #21897d;
    display: -webkit-box;
    display: -ms-flexbox;
    position: relative
}

.navbar .nav-wrap-left {
    height: 1.01rem;
    line-height: 1.01rem
}

.navbar .nav-wrap-right {
    height: 100%
}

.navbar .box-search {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    border-radius: .06rem;
    background: rgba(0,0,0,.15);
    height: .64rem;
    line-height: .64rem;
    -webkit-box-sizing: border-box;
    position: relative;
    margin-top: .2rem
}

.navbar h1.nav-header,.navbar .h1.nav-header {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
    line-height: 1rem;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
}

.navbar .icon-search {
    position: absolute;
    left: .2rem;
    font-size: .26rem;
    color: #fff
}

.navbar .box-search span {
    font-size: .26rem;
    color: #68dbce;
    padding-left: .6rem;
    box-sizing: border-box;
    width: 100%;
    display: block
}

.nav-wrap-left a.back {
    height: 1rem;
    width: .45rem;
    line-height: 1rem;
    padding: 0 .3rem
}

.qqbrand {
    font-size: .24rem;
    margin-top: .12rem;
    display: none
}
button:focus {
    outline: 0
}

.btn {
    display: inline-block;
    margin: 0;
    text-align: center;
    height: .6rem;
    padding: 0 .32rem;
    border-radius: .06rem;
    color: #fff;
    border: 0;
    background-color: #06c1ae;
    font-size: .28rem;
    vertical-align: middle;
    line-height: .6rem;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-user-select: none
}

.btn-block {
    display: block;
    width: 100%
}

.btn-large {
    height: .8rem;
    line-height: .8rem;
    font-size: .4rem
}

.btn-large.btn-link {
    font-size: .3rem
}

.btn-larger {
    height: .94rem;
    line-height: .94rem;
    font-size: .4rem
}

.btn:active {
    background-color: #21897d
}

.btn-weak {
    border: .02rem solid #06c1ae;
    padding: 0 .3rem;
    background: 0;
    color: #06c1ae
}

.btn-weak:active {
    color: #fff;
    background: #06c1ae
}

.btn-link {
    padding: 0 .3rem;
    background: 0;
    color: #06c1ae
}

.btn-link:active {
    background-color: rgba(0,0,0,.1)
}

.btn-weak.color-strong {
    border-color: #f90;
    color: #f90!important
}

.btn-weak.color-strong:active {
    background-color: #f90;
    color: #fff
}

.btn-strong {
    background-color: #f90
}

.btn-strong:active {
    background-color: #cc7a00
}

.btn-warning {
    background-color: #fa7251
}

.btn-warning:active {
    background-color: #f94a1f
}

.btn:disabled,.btn.btn-disabled {
    background-color: #dcdcdc;
    color: #999;
    border: 0
}

</style>